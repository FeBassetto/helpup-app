import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import {
  Container,
  LoginBox,
  LoginTitle,
  StyledTouchable,
  Link,
  SignupSection,
  SignupText,
} from "./styles";

export function SignIn() {
  return (
    <Container>
      <LoginBox>
        <Logo type="primary" />
        <LoginTitle>Entre em sua conta</LoginTitle>
        <Input
          placeholder="Email"
          autoComplete="email"
          keyboardType="email-address"
        />
        <Input placeholder="Senha" isPassword autoComplete="password" />
        <Button background="linear" onPress={() => {}} value="Entrar" />
        <StyledTouchable>
          <Link>Esqueceu a senha?</Link>
        </StyledTouchable>
      </LoginBox>
      <SignupSection>
        <SignupText>Não tem conta?</SignupText>
        <StyledTouchable>
          <Link>Criar Conta</Link>
        </StyledTouchable>
      </SignupSection>
    </Container>
  );
}
