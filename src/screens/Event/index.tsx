import { Header } from "@components/Header";
import {
  Container,
  ContentContainer,
  Description,
  FullContainer,
  Information,
  InformationContainer,
  InformationsContainer,
  NoContentStyledImage,
  NoContentStyledText,
  Participants,
  StyledCalendar,
  StyledClock,
  StyledLocal,
  StyledMapPin,
  Title,
} from "./styles";
import { fetchEvent } from "@services/event/getEvent";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AxiosResponse } from "axios";
import { Event as EventDTO } from "@dtos/event/eventDTO";
import { useMutation, useQuery } from "react-query";
import { RootState } from "@store/reducer";
import { useSelector } from "react-redux";
import { Logo } from "@components/Logo";
import { Button } from "@components/Button";
import SmileImage from "@assets/imgs/smile.png";
import { formatDate } from "@utils/formatDate";
import { formatTime } from "@utils/formatTime";
import { getEventTypesIcon } from "@utils/getEventTypesIcon";
import theme from "@theme/index";
import { Loader } from "@components/Loader";
import { deleteEvent } from "@services/event/deleteEvent";
import { processApiResponse } from "@utils/processApiResponse";
import { joinEvent } from "@services/event/joinEvent";
import { showError } from "@utils/showError";
import { unjoinEvent } from "@services/event/unjoinEvent";
import { PopUpContext } from "@contexts/PopUpContext";
import { useContext } from "react";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

type RouteParamsProps = {
  id: string;
};

interface Participant {
  id: string;
  name: string;
  city: string;
  profile_url: string;
}

interface ParticipantsData {
  pages: number;
  participants: Participant[];
  totalParticipants: number;
}

interface EventData {
  event: EventDTO;
  participants_data: ParticipantsData;
  isAdmin: boolean;
  isUser: boolean;
}

export function Event() {
  const route = useRoute();
  const { id } = route.params as RouteParamsProps;
  const { token } = useSelector((state: RootState) => state.auth);
  const { openModal } = useContext(PopUpContext);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const { mutate: deleteEventMutate, isLoading: deleteLoading } = useMutation(
    deleteEvent,
    {
      onSuccess: (data) => {
        const { error } = processApiResponse({
          apiData: data,
          defaultErrorMessage:
            "Não foi possivel deletar o evento, tente novamente mais tarde!",
          successMessage: "Evento deletado com sucesso!",
        });

        if (!error) {
          return navigation.goBack();
        }
      },
      onError: () => {},
    }
  );

  const { mutate: joinEventMutate, isLoading: joinLoading } = useMutation(
    joinEvent,
    {
      onSuccess: (data) => {
        processApiResponse({
          apiData: data,
          defaultErrorMessage: "Ocorreu um erro, tente novamente mais tarde!",
          successMessage: "Parabéns, você se juntou ao evento!",
        });
      },
      onError: () => {
        showError("Ocorreu um erro, tente novamente mais tarde!");
      },
    }
  );

  const { mutate: unjoinEventMutate, isLoading: unjoinLoading } = useMutation(
    unjoinEvent,
    {
      onSuccess: (data) => {
        processApiResponse({
          apiData: data,
          defaultErrorMessage: "Ocorreu um erro, tente novamente mais tarde!",
          successMessage: "Você saiu do evento!",
        });
      },
      onError: () => {
        showError("Ocorreu um erro, tente novamente mais tarde!");
      },
    }
  );

  const isEventLoading = joinLoading || deleteLoading || unjoinLoading;

  const { data, isLoading } = useQuery<AxiosResponse<EventData>>(
    ["event", id, isEventLoading],
    () =>
      fetchEvent({
        token: token,
        offset: 0,
        query: "",
        id: id,
      }),
    { enabled: !isEventLoading }
  );

  if (isLoading || isEventLoading) {
    return (
      <FullContainer>
        <Logo type="primary" />
        <Loader type="dark" />
      </FullContainer>
    );
  }

  if (!data?.data.event) {
    return (
      <FullContainer>
        <Logo type="primary" />
        <NoContentStyledImage source={SmileImage} />
        <NoContentStyledText>
          Ops...! Não encontramos este grupo
        </NoContentStyledText>
        <Button
          background="dark"
          onPress={() => navigation.goBack()}
          value="Voltar"
          style={{ width: 300 }}
        />
      </FullContainer>
    );
  }

  const { city, description, title, number, street, type, date, distance } =
    data.data.event;
  const { totalParticipants } = data.data.participants_data;
  const { isAdmin, isUser } = data.data;

  const TypeIcon = getEventTypesIcon(type).icon;
  const typeTitle = getEventTypesIcon(type).title;

  const onDeleteGroup = () => {
    deleteEventMutate({ id, token });
  };

  const onPrimaryButtonPressed = () => {
    if (isAdmin) {
      return openModal(onDeleteGroup);
    }

    if (isUser) {
      unjoinEventMutate({ id, token });
      return;
    }

    joinEventMutate({ id, token });
  };

  const onSecondaryButtonPressed = () => {
    navigation.navigate("editEvent", {
      id,
      city,
      date,
      description,
      number,
      street,
      title,
      type,
    });
  };

  return (
    <Container>
      <ContentContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Participants>
          {totalParticipants}{" "}
          {totalParticipants > 1 ? "participantes" : "participante"}
        </Participants>
        <Participants>{distance.toFixed(2)} km de você</Participants>
        <InformationsContainer>
          <InformationContainer>
            <StyledCalendar />
            <Information>{formatDate(date)}</Information>
          </InformationContainer>
          <InformationContainer>
            <StyledClock />
            <Information>{formatTime(date)}</Information>
          </InformationContainer>
        </InformationsContainer>
        <InformationsContainer>
          <InformationContainer>
            <StyledMapPin />
            <Information>{city}</Information>
          </InformationContainer>
          <InformationContainer>
            {
              <TypeIcon
                size={32}
                weight="bold"
                color={theme.COLORS.PURPLE_300}
              />
            }
            <Information>{typeTitle}</Information>
          </InformationContainer>
        </InformationsContainer>
        <InformationContainer>
          <StyledLocal />
          <Information>
            {street}, {number}
          </Information>
        </InformationContainer>
        {isAdmin && (
          <Button
            background="light"
            onPress={onSecondaryButtonPressed}
            value={"Editar evento"}
            style={{
              marginTop: 40,
              marginBottom: -20,
              maxWidth: 350,
            }}
            isLoading={isEventLoading}
          />
        )}
        <Button
          background="dark"
          onPress={onPrimaryButtonPressed}
          value={
            isAdmin
              ? "Excluir evento"
              : isUser
              ? "Desmarcar presença"
              : "Marcar presença"
          }
          style={{
            marginTop: 40,
            maxWidth: 350,
            backgroundColor:
              isAdmin || isUser ? theme.COLORS.RED : theme.COLORS.PURPLE_300,
          }}
          isLoading={isEventLoading}
        />
      </ContentContainer>
    </Container>
  );
}
