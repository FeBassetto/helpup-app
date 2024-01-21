import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Container, ContentContainer, Title } from "./styles";
import { BannerSvg } from "@assets/svgs/banner";
import { useDispatch } from "react-redux";
import { clearSignUpData } from "@store/actions/signUpActions";

export function ThirdPage() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(clearSignUpData());
    navigation.navigate("signIn");
  };

  return (
    <Container>
      <ContentContainer>
        <Title>
          Quase lá! Cheque seu email para confirmarmos sua identidade e
          completar o cadastro
        </Title>
        <BannerSvg />
      </ContentContainer>
      <Button
        background="dark"
        onPress={handlePress}
        value="Voltar para tela inicial"
      />
    </Container>
  );
}
