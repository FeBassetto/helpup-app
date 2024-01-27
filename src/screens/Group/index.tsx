import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Container,
  ContentContainer,
  Description,
  Information,
  InformationContainer,
  InformationsContainer,
  SafeContent,
  StyledCalendar,
  StyledMapPin,
  StyledParticipants,
  Title,
} from "./styles";
import { useMutation, useQuery } from "react-query";
import { fetchGroup } from "@services/group/getGroup";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";
import { AxiosResponse } from "axios";
import { formatDate } from "@utils/formatDate";
import { Button } from "@components/Button";
import theme from "@theme/index";
import { deleteGroup } from "@services/group/deleteGroup";
import { Header } from "@components/Header";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { joinGroup } from "@services/group/joinGroup";

type RouteParamsProps = {
  id: string;
};

interface Group {
  id: string;
  title: string;
  description: string;
  city: string;
  created_at: string;
  admin_id: string;
}

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

interface GroupData {
  group: Group;
  participants_data: ParticipantsData;
  isAdmin: boolean;
  isUser: boolean;
}

export function Group() {
  const route = useRoute();
  const { id } = route.params as RouteParamsProps;

  const { token } = useSelector((state: RootState) => state.auth);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const { mutate: deleteGroupMutate, isLoading: deleteLoading } = useMutation(
    deleteGroup,
    {
      onSuccess: () => {},
      onError: () => {},
    }
  );

  const { mutate: joinGroupMutate, isLoading: joinLoading } = useMutation(
    joinGroup,
    {
      onSuccess: () => {},
      onError: () => {},
    }
  );

  const { data, isFetching } = useQuery<AxiosResponse<GroupData>>(
    ["group", id],
    () =>
      fetchGroup({
        token: token,
        offset: 0,
        query: "",
        id: id,
      })
  );

  if (!data?.data) {
    return <></>;
  }

  const { city, created_at, description, title } = data.data.group;
  const { totalParticipants } = data.data.participants_data;
  const { isAdmin, isUser } = data.data;

  const onPrimaryButtonPressed = () => {
    if (isAdmin) {
      deleteGroupMutate({ id, token });
      // TODO adicionar mensagem de sucesso
      return navigation.navigate("groups");
    }

    if (isUser) {
      // TODO: criar no backend unfollow
      return;
    }

    joinGroupMutate({ id, token });
    // TODO: Mostrar mensagem de sucesso, trocar botao
  };

  const onSecondaryButtonPressed = () => {
    navigation.navigate("editGroup", { id, title, description, city });
  };

  return (
    <Container>
      <Header type="back" />
      <ContentContainer>
        <Title>{title}</Title>
        <InformationsContainer>
          <InformationContainer>
            <StyledCalendar />
            <Information> {formatDate(created_at)}</Information>
          </InformationContainer>
          <InformationContainer>
            <StyledMapPin />
            <Information> {city}</Information>
          </InformationContainer>
        </InformationsContainer>
        <InformationContainer>
          <StyledParticipants />
          <Information>
            {totalParticipants}{" "}
            {totalParticipants > 1 ? "participantes" : "participante"}
          </Information>
        </InformationContainer>
        <Description>{description}</Description>
        {isAdmin && (
          <Button
            background="light"
            onPress={onSecondaryButtonPressed}
            value={"Editar grupo"}
            style={{
              marginTop: 40,
              marginBottom: -20,
              maxWidth: 350,
            }}
          />
        )}
        <Button
          background="dark"
          onPress={onPrimaryButtonPressed}
          value={
            isAdmin
              ? "Excluir grupo"
              : isUser
              ? "Sair do grupo"
              : "Entrar no grupo"
          }
          style={{
            marginTop: 40,
            maxWidth: 350,
            backgroundColor:
              isAdmin || isUser ? theme.COLORS.RED : theme.COLORS.PURPLE_300,
          }}
        />
      </ContentContainer>
    </Container>
  );
}
