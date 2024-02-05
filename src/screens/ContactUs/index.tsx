import { Input } from "@components/Input";
import { Container, StyledTitle, Title } from "./styles";
import { useState } from "react";
import { TextArea } from "@components/TextArea";
import { Button } from "@components/Button";
import { useMutation } from "react-query";
import { sendComplaint } from "@services/user/sendComplaint";
import { processApiResponse } from "@utils/processApiResponse";
import { showError } from "@utils/showError";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";
import { useNavigation } from "@react-navigation/native";

export function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [observations, setObservations] = useState("");

  const { token } = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation();

  const { mutate, isLoading } = useMutation(sendComplaint, {
    onSuccess: (data) => {
      const { error } = processApiResponse({
        apiData: data,
        defaultErrorMessage: "Ocorreu um erro, tente novamente mais tarde!",
        successMessage: "As informações foram enviadas com sucesso!",
      });

      if (!error) {
        navigation.goBack();
      }
    },
    onError: () => {
      showError(
        "Não foi possível executar a ação, tente novamente mais tarde!"
      );
    },
  });

  return (
    <Container>
      <Title>
        Entre em contato <StyledTitle>Conosco</StyledTitle>
      </Title>
      <Input onTextChange={setName} placeholder="Nome Completo" />
      <Input
        onTextChange={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <Input
        onTextChange={setPhone}
        placeholder="Celular"
        keyboardType="number-pad"
      />
      <TextArea
        placeholder="Descreva seu problema"
        title="Descreva seu problema"
        onChangeText={setObservations}
      />
      <Button
        background="dark"
        onPress={() =>
          mutate({
            email,
            fullName: name,
            observations,
            phoneNumber: phone,
            token,
          })
        }
        value="Enviar"
        isLoading={isLoading}
      />
    </Container>
  );
}
