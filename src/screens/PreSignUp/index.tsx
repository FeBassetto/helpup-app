import { Logo } from "@components/Logo";
import {
  Container,
  Description,
  HighlightedText,
  StyledImage,
  Title,
} from "./styles";
import ImageSrc from "@assets/imgs/smile.png";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function PreSignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <Container>
      <Logo type="primary" />
      <Title>
        Parabéns pela decisão de se tornar um{" "}
        <HighlightedText>helpuper!</HighlightedText>
      </Title>
      <StyledImage source={ImageSrc} />
      <Description>
        Para prosseguir com a criação da conta, solicitaremos alguns dados para
        melhorar sua expêriencia no app. Mas fique tranquilo, seus dados não
        serão compartilhados para externos.
      </Description>
      <Button
        background="dark"
        onPress={() => {
          navigation.navigate("signUp");
        }}
        value="Continuar"
      />
    </Container>
  );
}
