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
import { api } from "@services/api";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import { login } from "@store/actions/authActions";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const showError = (title: string) => {
    setIsLoading(false);
    return Toast.show({
      text1: title,
      type: "info",
    });
  };

  const handleOnButtonPress = async () => {
    setIsLoading(true);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.length && !password.length) {
      return showError("Por favor, insira seu e-mail e senha para continuar.");
    }

    if (!emailRegex.test(email)) {
      return showError(
        "Endereço de e-mail inválido. Verifique se está correto e tente novamente."
      );
    }

    if (password.length < 6) {
      return showError("Senha incorreta. Por favor, tente novamente.");
    }

    const { data, status } = await api.post("/users/sessions", {
      email: email.toLowerCase(),
      password,
    });

    if (status !== 200) {
      return showError(data.message);
    } else {
      dispatch(login({ refreshToken: data.refreshToken, token: data.token }));
      // TODO: Retirar o loading false pois vai mudar de tela
      setIsLoading(false);
    }
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
