import { Logo } from "@components/Logo";
import { Container } from "./styles";
import { Steps } from "@components/Steps";
import { FirstPage } from "./components/FirstPage";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";
import { SecondPage } from "./components/SecondPage";
import { ThirdPage } from "./components/ThirdPage";

export function SignUp() {
  const { actualStep, lastStep, steps } = useSelector(
    ({ signUp }: RootState) => signUp
  );

  return (
    <Container>
      <Steps steps={steps} activeStep={actualStep} lastStep={lastStep} />
      {actualStep === 1 && <FirstPage />}
      {actualStep === 2 && <SecondPage />}
      {actualStep === 3 && <ThirdPage />}
    </Container>
  );
}
