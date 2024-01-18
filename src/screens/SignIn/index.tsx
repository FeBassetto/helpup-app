import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import {
  Container,
  LoginBox,
  LoginTitle,
  Button,
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
        <Input placeholder="Email" autoComplete="email" />
        <Input placeholder="Senha" isPassword autoComplete="password" />
        <Button>
          <Link>Esqueceu a senha?</Link>
        </Button>
      </LoginBox>
      <SignupSection>
        <SignupText>Não tem conta?</SignupText>
        <Button>
          <Link>Criar Conta</Link>
        </Button>
      </SignupSection>
    </Container>
  );
}
