import { Logo } from "@components/Logo";
import { Banner, Container, Title } from "./styles";
import { ContentContainer } from "@screens/ForgotPassword/styles";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function MailForgotPassword() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <Container>
      <Logo type="primary" />
      <ContentContainer>
        <Title>
          Acesse o link que enviamos em seu email e redefina sua senha
        </Title>
        <Banner />
      </ContentContainer>
      <Button
        background="dark"
        onPress={() => navigation.navigate("signIn")}
        value="Voltar"
      />
    </Container>
  );
}
