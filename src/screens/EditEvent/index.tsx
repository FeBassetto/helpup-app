import { Header } from "@components/Header";
import { Container, ContentContainer, Title } from "./styles";
import { EventType } from "@dtos/event/eventDTO";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";
import { Input } from "@components/Input";
import { TextArea } from "@components/TextArea";
import { useState } from "react";
import { OptionTypes } from "@components/OptionTypes";

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

  const eventTypes = {
    physical: {
      title: "Físico",
    },
    visual: {
      title: "Visual",
    },
    auditory: {
      title: "Auditivo",
    },
    mental: {
      title: "Mental",
    },
  };

  const getEventTypesOptions = () => {
    return Object.entries(eventTypes)
      .filter(([key]) => key !== newType)
      .map(([key, value]) => ({ label: value.title, value: key }));
  };

  const eventTypesOptions = getEventTypesOptions();

  // TODO: Criar Picker e Date and Hour Picker native

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
        />
        <OptionTypes
          selectOption={(type) => setNewType(type)}
          activeType={newType}
        />
        <TextArea
          title="Descrição"
          placeholder="Escreva sua nova descrição..."
          value={newDescription}
          maxLength={100}
          onChangeText={setNewDescription}
        />
      </ContentContainer>
    </Container>
  );
}
