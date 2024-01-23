import { Logo } from "@components/Logo";
import {
  Container,
  ContentContainer,
  Link,
  SignupSection,
  SignupText,
  StyledTouchable,
  Title,
} from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useState } from "react";
import { showError } from "@utils/showError";
import { resetPassword } from "@services/auth/resetPassword";
import { useMutation } from "react-query";

export function ForgotPassword() {
  const [email, setEmail] = useState("");

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const { mutate, isLoading } = useMutation(
    (email: string) => resetPassword(email),
    {
      onSuccess: ({ data, status }) => {
        if (status === 200) {
          return;
        }

        if (data.message) {
          return showError(data.message);
        }

        showError(
          "Aconteceu um erro ao tentar conectar com o nosso servidor. Tente novamente mais tarde!"
        );
      },
      onError: () => {
        showError(
          "Aconteceu um erro ao tentar conectar com o nosso servidor. Tente novamente mais tarde!"
        );
      },
    }
  );

  const handleButtonPress = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.length) {
      return showError("Por favor, insira seu e-mail para continuar.");
    }

    if (!emailRegex.test(email)) {
      return showError(
        "Endereço de e-mail inválido. Verifique se está correto e tente novamente."
      );
    }

    mutate(email);
  };

  return (
    <Container>
      <ContentContainer>
        <Logo type="primary" />
        <Title>Iremos mandar um link de recuperção para seu email</Title>
        <Input
          onTextChange={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          autoComplete="email"
          editable={true}
        />
        <Button
          background="linear"
          onPress={handleButtonPress}
          value="Enviar"
          isLoading={isLoading}
        />
      </ContentContainer>
      <SignupSection>
        <SignupText>Não tem conta?</SignupText>
        <StyledTouchable onPress={() => navigation.navigate("preSignUp")}>
          <Link>Criar Conta</Link>
        </StyledTouchable>
      </SignupSection>
    </Container>
  );
}
