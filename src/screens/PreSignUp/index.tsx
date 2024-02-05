import { Logo } from "@components/Logo";
import {
  Container,
  Description,
  HighlightedText,
  LinkDescription,
  StyledContainer,
  StyledImage,
  StyledLink,
  Title,
} from "./styles";
import ImageSrc from "@assets/imgs/smile.png";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { storageSignUpDataGet } from "@storage/storageSignUp";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  clearSignUpData,
  fetchStorageSignUp,
} from "@store/actions/signUpActions";
import { TouchableOpacity, View } from "react-native";
import { openURL } from "@utils/openUrl";

export function PreSignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const dispatch = useDispatch();

  const fetchSignUpStorageData = async () => {
    setIsLoading(true);

    const data = await storageSignUpDataGet();
    if (data.actualStep === 3) {
      dispatch(clearSignUpData());
    } else {
      dispatch(fetchStorageSignUp(data));
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchSignUpStorageData();
  }, []);

  return (
    <Container>
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
      <StyledContainer>
        <LinkDescription>Veja nossos termos: </LinkDescription>
        <TouchableOpacity
          onPress={() => {
            openURL("https://www.helpup.online/terms");
          }}
        >
          <StyledLink>Nossos Termos</StyledLink>
        </TouchableOpacity>
      </StyledContainer>
      <Button
        background="dark"
        onPress={() => {
          navigation.navigate("signUp");
        }}
        value="Concordo com os termos"
        isLoading={isLoading}
      />
    </Container>
  );
}
