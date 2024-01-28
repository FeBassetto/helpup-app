import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Container,
  ContentContainer,
  Description,
  Information,
  InformationContainer,
  InformationsContainer,
  FullContainer,
  NoContentStyledImage,
  NoContentStyledText,
  StyledCalendar,
  StyledMapPin,
  StyledParticipants,
  Title,
} from "./styles";
import { useMutation, useQuery, useQueryClient } from "react-query";
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
import { Logo } from "@components/Logo";
import SmileImage from "@assets/imgs/smile.png";
import { Loader } from "@components/Loader";
import { PopUpContext } from "@contexts/PopUpContext";
import { useContext } from "react";

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
  const { openModal } = useContext(PopUpContext);

  const queryClient = useQueryClient();
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

  if (isFetching) {
    return (
      <FullContainer>
        <Logo type="primary" />
        <Loader type="dark" />
      </FullContainer>
    );
  }

  if (!data?.data.group) {
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

  const isLoading = joinLoading || deleteLoading;

  const { city, created_at, description, title } = data.data.group;
  const { totalParticipants } = data.data.participants_data;
  const { isAdmin, isUser } = data.data;

  const onDeleteGroup = () => {
    deleteGroupMutate({ id, token });
    return navigation.navigate("groups");
  };

  const onPrimaryButtonPressed = () => {
    if (isAdmin) {
      openModal(onDeleteGroup);
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
            isLoading={isLoading}
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
          isLoading={isLoading}
        />
      </ContentContainer>
    </Container>
  );
}
