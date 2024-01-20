import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Logo } from "@components/Logo";

import {
  Container,
  LoginBox,
  LoginTitle,
  StyledTouchable,
  Link,
  SignupSection,
  SignupText,
} from "./styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@store/actions/authActions";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { AxiosResponse } from "axios";
import { showError } from "@utils/showError";
import { loginService } from "@services/login";
import { useMutation } from "react-query";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const onLoginSuccess = (response: AxiosResponse) => {
    if (response.data.error) {
      return showError(response.data.message);
    }

    dispatch(
      login({
        refreshToken: response.data.refreshToken,
        token: response.data.token,
      })
    );
    return showError("deu certo"); // TODO: REMOVER
  };

  const onLoginError = () => {
    showError(
      "Aconteceu um erro ao tentar conectar com o nosso servidor. Tente novamente mais tarde!"
    );
  };

  const loginMutation = useMutation(loginService, {
    onSuccess: onLoginSuccess,
    onError: onLoginError,
  });

  const handleOnButtonPress = async () => {
    setIsLoading(true);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const errorMessage: string[] = [];

    if (!email.length && !password.length) {
      errorMessage.push("Por favor, insira seu e-mail e senha para continuar.");
    }

    if (!emailRegex.test(email)) {
      errorMessage.push(
        "Endereço de e-mail inválido. Verifique se está correto e tente novamente."
      );
    }

    if (password.length < 6) {
      errorMessage.push("Senha incorreta. Por favor, tente novamente.");
    }

    if (errorMessage[0].length) {
      setIsLoading(false);
      return showError(errorMessage[0]);
    }

    loginMutation.mutate({ email, password });
    setIsLoading(false);
  };

  return (
    <Container>
      <LoginBox>
        <Logo type="primary" />
        <LoginTitle>Entre em sua conta</LoginTitle>
        <Input
          placeholder="Email"
          autoComplete="email"
          keyboardType="email-address"
          onTextChange={setEmail}
          editable={!isLoading}
        />
        <Input
          placeholder="Senha"
          isPassword
          autoComplete="password"
          onTextChange={setPassword}
          editable={!isLoading}
        />
        <Button
          isLoading={isLoading}
          background="linear"
          onPress={handleOnButtonPress}
          value="Entrar"
        />
        <StyledTouchable>
          <Link>Esqueceu a senha?</Link>
        </StyledTouchable>
      </LoginBox>
      <SignupSection>
        <SignupText>Não tem conta?</SignupText>
        <StyledTouchable onPress={() => navigation.navigate("preSignUp")}>
          <Link>Criar Conta</Link>
        </StyledTouchable>
      </SignupSection>
    </Container>
  );
}
