import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { ChildContainer } from "@screens/SignUp/styles";
import { ContentContainer, StyledImage, Title } from "./styles";
import BannerSvg from "@assets/svgs/banner.svg";

export function ThirdPage() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const handlePress = () => {
    navigation.navigate("signIn");
  };

  // TODO ver como colocar svg

  return (
    <ChildContainer>
      <ContentContainer>
        <Title>
          Quase lá! Cheque seu email para confirmarmos sua identidade e
          completar o cadastro
        </Title>
        <BannerSvg />
      </ContentContainer>
      <Button
        background="dark"
        onPress={() => {}}
        value="Voltar para tela inicial"
      />
    </ChildContainer>
  );
}
