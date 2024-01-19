import { Logo } from "@components/Logo";
import { Container } from "./styles";
import { Steps } from "@components/Steps";
import { FirstPage } from "./components/FirstPage";

export function SignUp() {
  const steps = ["Dados Pessoais", "Dados de Endereço", "Confirmar Email"];
  return (
    <Container>
      <Logo type="primary" />
      <Steps steps={steps} activeStep={1} />
      <FirstPage />
    </Container>
  );
}
