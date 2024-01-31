import { Header } from "@components/Header";
import { Container, ContentContainer, Title } from "./styles";
import { EventType } from "@dtos/event/eventDTO";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";
import { Input } from "@components/Input";
import { TextArea } from "@components/TextArea";
import { useState } from "react";
import { OptionTypes } from "@components/OptionTypes";
import { DatePicker } from "@components/DatePicker";
import { useMutation, useQueryClient } from "react-query";
import { updateEvent } from "@services/event/editEvent";
import { showSuccess } from "@utils/showSuccess";
import { showError } from "@utils/showError";
import { parseValidationErrors } from "@utils/parseValidationErrors";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Button } from "@components/Button";
import { processApiResponse } from "@utils/processApiResponse";

type RouteParamsProps = {
  id: string;
  title: string;
  description: string;
  city: string;
  date: string;
  street: string;
  type: EventType;
  number: number;
};

export function EditEvent() {
  const route = useRoute();
  const { id, city, description, title, date, number, street, type } =
    route.params as RouteParamsProps;

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newCity, setNewCity] = useState(city);
  const [newDate, setNewDate] = useState(date);
  const [newNumber, setNewNumber] = useState(String(number));
  const [newStreet, setNewStreet] = useState(street);
  const [newType, setNewType] = useState(type);

  const { token } = useSelector((state: RootState) => state.auth);
  const queryClient = useQueryClient();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const { mutate, isLoading } = useMutation(updateEvent, {
    onSuccess: (data) => {
      queryClient.refetchQueries(["event"]);

      const { error } = processApiResponse({
        apiData: data,
        defaultErrorMessage: "Ocorreu um erro, tente novamente mais tarde!",
        successMessage: "Evento atualizado com sucesso!",
      });

      if (!error) {
        navigation.goBack();
      }
    },
    onError: () => {
      showError(
        "Não foi possível atualizar as informações deste grupo, tente novamente mais tarde!"
      );

      navigation.goBack();
    },
  });

  const handleSave = async () => {
    if (!Number(newNumber)) {
      return showError("Digite um número válido");
    }

    mutate({
      token,
      city: newCity,
      date: newDate,
      description: newDescription,
      id,
      neighborhood: "",
      number: Number(newNumber),
      street: newStreet,
      title: newTitle,
      type: newType,
    });
  };

  return (
    <Container>
      <Header type="back" />
      <ContentContainer>
        <Title>Edite seu Evento</Title>
        <Input
          onTextChange={setNewTitle}
          placeholder="Titulo"
          hasText={!!newTitle.length}
          value={newTitle}
        />
        <Input
          onTextChange={setNewCity}
          placeholder="Cidade"
          hasText={!!newCity.length}
          value={newCity}
        />
        <Input
          onTextChange={setNewStreet}
          placeholder="Rua"
          hasText={!!newStreet.length}
          value={newStreet}
        />
        <Input
          onTextChange={setNewNumber}
          placeholder="Número"
          hasText={!!newNumber.length}
          value={newNumber}
          keyboardType="number-pad"
        />
        <OptionTypes
          selectOption={(type) => setNewType(type)}
          activeType={newType}
        />
        <DatePicker date={newDate} type="date" onChangeDate={setNewDate} />
        <DatePicker date={newDate} type="time" onChangeDate={setNewDate} />
        <TextArea
          title="Descrição"
          placeholder="Escreva sua nova descrição..."
          value={newDescription}
          maxLength={100}
          onChangeText={setNewDescription}
        />
        <Button
          background="dark"
          onPress={handleSave}
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
