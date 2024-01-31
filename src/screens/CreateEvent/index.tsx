import { Header } from "@components/Header";
import { Container, ContentContainer, Title } from "./styles";
import { Input } from "@components/Input";
import { OptionTypes } from "@components/OptionTypes";
import { DatePicker } from "@components/DatePicker";
import { TextArea } from "@components/TextArea";
import { Button } from "@components/Button";
import { useState } from "react";
import { EventType } from "@dtos/event/eventDTO";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useMutation, useQueryClient } from "react-query";
import { createEvent } from "@services/event/createEvent";
import { processApiResponse } from "@utils/processApiResponse";
import { showError } from "@utils/showError";
import { RootState } from "@store/reducer";
import { useSelector } from "react-redux";

export function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState(new Date().toISOString());
  const [number, setNumber] = useState("");
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [type, setType] = useState<EventType | null>(null);

  const { token } = useSelector((state: RootState) => state.auth);
  const queryClient = useQueryClient();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const { mutate, isLoading } = useMutation(createEvent, {
    onSuccess: (data) => {
      queryClient.refetchQueries(["event"]);

      const { error } = processApiResponse({
        apiData: data,
        defaultErrorMessage: "Ocorreu um erro, tente novamente mais tarde!",
        successMessage: "Evento criado com sucesso!",
      });

      if (!error) {
        navigation.goBack();
      }
    },
    onError: () => {
      showError("Não foi possível criar o grupo, tente novamente mais tarde!");

      navigation.goBack();
    },
  });

  const handleSave = async () => {
    if (!type) {
      return showError("Escolha qual será a comunidade representada no evento");
    }

    mutate({
      token,
      city,
      date,
      description,
      neighborhood,
      number: Number(number) || 0,
      street,
      title,
      type,
    });
  };

  return (
    <Container>
      <Header type="back" />
      <ContentContainer>
        <Title>Crie seu Evento</Title>
        <Input onTextChange={setTitle} placeholder="Titulo" value={title} />
        <Input onTextChange={setCity} placeholder="Cidade" value={city} />
        <Input
          onTextChange={setNeighborhood}
          placeholder="Bairro"
          value={neighborhood}
        />
        <Input onTextChange={setStreet} placeholder="Rua" value={street} />
        <Input
          onTextChange={setNumber}
          placeholder="Número"
          value={number}
          keyboardType="number-pad"
        />
        <OptionTypes selectOption={(type) => setType(type)} activeType={type} />
        <DatePicker date={date} type="date" onChangeDate={setDate} />
        <DatePicker date={date} type="time" onChangeDate={setDate} />
        <TextArea
          title="Descrição"
          placeholder="Escreva a descrição do evento..."
          value={description}
          maxLength={100}
          onChangeText={setDescription}
        />
        <Button
          background="dark"
          onPress={handleSave}
          value="Criar evento"
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
