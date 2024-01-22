import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Container, ContentContainer, StyledBanner, Title } from "./styles";
import { useDispatch } from "react-redux";
import { clearSignUpData } from "@store/actions/signUpActions";
import { useEffect } from "react";
import { BackHandler } from "react-native";

export function ThirdPage() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(clearSignUpData());
    navigation.navigate("signIn");
  };

  useEffect(() => {
    const backAction = () => {
      handlePress();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Container>
      <ContentContainer>
        <Title>
          Quase lá! Cheque seu email para confirmarmos sua identidade e
          completar o cadastro
        </Title>
        <StyledBanner />
      </ContentContainer>
      <Button
        background="dark"
        onPress={handlePress}
        value="Voltar para tela inicial"
      />
    </Container>
  );
}
