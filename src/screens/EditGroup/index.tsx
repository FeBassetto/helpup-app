import { Header } from "@components/Header";
import { Container, ContentContainer, Title } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { updateGroup } from "@services/group/updateGroup";
import { showError } from "@utils/showError";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";

type RouteParamsProps = {
  id: string;
  title: string;
  description: string;
  city: string;
};

export function EditGroup() {
  const route = useRoute();
  const { id, city, description, title } = route.params as RouteParamsProps;

  const { token } = useSelector((state: RootState) => state.auth);

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const queryClient = useQueryClient();

  const mutation = useMutation(updateGroup, {
    onSuccess: () => {
      queryClient.invalidateQueries(["group", id]);

      // TODO: Adicionar mensagem de sucesso

      console.log("Grupo atualizado com sucesso!");
      navigation.navigate("group", { id });
    },
    onError: () => {
      showError(
        "Não foi possível atualizar as informações deste grupo, tente novamente mais tarde!"
      );
    },
  });

  const handleSave = async () => {
    mutation.mutate({
      token,
      id,
      title: newTitle,
      description: newDescription,
      city,
    });
  };

  // TODO Mudar descricao para TextArea

  return (
    <Container>
      <Header type="back" />
      <ContentContainer>
        <Title>Edite seu Grupo</Title>
        <Input
          onTextChange={setNewTitle}
          placeholder="Titulo"
          hasText={!!newTitle.length}
          value={newTitle}
        />
        <Input
          onTextChange={setNewDescription}
          placeholder="Descricao"
          hasText={!!newDescription.length}
          value={newDescription}
        />
        <Button background="dark" onPress={handleSave} value="Salvar" />
        <Button
          background="dark"
          onPress={() => {
            navigation.navigate("group", { id });
          }}
          value="Voltar"
          outline
          style={{ marginTop: 10 }}
        />
      </ContentContainer>
    </Container>
  );
}
