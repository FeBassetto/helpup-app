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
import { storageSignUpDataGet } from "@storage/storageSignUp";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchStorageSignUp } from "@store/actions/signUpActions";

export function PreSignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const dispatch = useDispatch();

  const fetchSignUpStorageData = async () => {
    setIsLoading(true);

    const data = await storageSignUpDataGet();
    dispatch(fetchStorageSignUp(data));

    setIsLoading(false);
  };

  useEffect(() => {
    fetchSignUpStorageData();
  }, []);

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
        isLoading={isLoading}
      />
    </Container>
  );
}
