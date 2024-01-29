import { Header } from "@components/Header";
import { Container, ContentContainer, Title } from "./styles";
import { Input } from "@components/Input";
import { TextArea } from "@components/TextArea";
import { Button } from "@components/Button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useMutation } from "react-query";
import { createGroup } from "@services/group/createGroup";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";
import { processApiResponse } from "@utils/processApiResponse";
import { showError } from "@utils/showError";

export function CreateGroup() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { token } = useSelector((state: RootState) => state.auth);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const { mutate, isLoading } = useMutation(createGroup, {
    onSuccess: (data) => {
      const { error } = processApiResponse({
        apiData: data,
        defaultErrorMessage: "Ocorreu um erro, tente novamente mais tarde!",
        successMessage: "Grupo criado com sucesso!",
      });

      if (!error) {
        navigation.goBack();
      }
    },
    onError: () => {
      showError("Ocorreu um erro, tente novamente mais tarde!");
    },
  });

  const handleCreateGroup = () => {
    mutate({ description, title, token });
  };

  return (
    <Container>
      <Header type="back" />
      <ContentContainer>
        <Title>Crie seu Grupo</Title>
        <Input onTextChange={setTitle} placeholder="Titulo" value={title} />
        <TextArea
          title="Descrição"
          placeholder="Escreva sua nova descrição..."
          value={description}
          maxLength={100}
          onChangeText={setDescription}
        />
        <Button
          background="dark"
          onPress={handleCreateGroup}
          value="Salvar"
          isLoading={isLoading}
        />
        <Button
          background="dark"
          onPress={() => {
            navigation.goBack();
          }}
          value="Voltar"
          outline
          style={{ marginTop: 10 }}
        />
      </ContentContainer>
    </Container>
  );
}
