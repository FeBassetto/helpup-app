import { Header } from "@components/Header";
import {
  Container,
  ContentContainer,
  Description,
  FullContainer,
  Information,
  InformationContainer,
  NoContentStyledImage,
  NoContentStyledText,
  ProfileImage,
  StyledMapPin,
  Title,
} from "./styles";
import { useMutation, useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { UserResponse } from "@dtos/friends/friendDTO";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootState } from "@store/reducer";
import { useSelector } from "react-redux";
import { fetchUser } from "@services/user/getUser";
import { Logo } from "@components/Logo";
import { Loader } from "@components/Loader";
import { Button } from "@components/Button";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import SmileImage from "@assets/imgs/smile.png";
import { S3_BASE_URL } from "@env";
import theme from "@theme/index";
import { sendFriendship } from "@services/friend/sendFriendship";
import { processApiResponse } from "@utils/processApiResponse";
import { showError } from "@utils/showError";
import { undoFriendShip } from "@services/friend/undoFriendShip";

type RouteParamsProps = {
  id: string;
};

export function Friend() {
  const route = useRoute();
  const { id } = route.params as RouteParamsProps;

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const { token } = useSelector((state: RootState) => state.auth);

  const { mutate: sendFriendshipMutate, isLoading: sendFriendshipLoading } =
    useMutation(sendFriendship, {
      onSuccess: (data) => {
        processApiResponse({
          apiData: data,
          defaultErrorMessage: "Ocorreu um erro, tente novamente mais tarde!",
          successMessage: "Pedido de amizade enviado!",
        });
      },
      onError: () => {
        showError("Ocorreu um erro, tente novamente mais tarde!");
      },
    });

  const { mutate: undoFriendshipMutate, isLoading: undoFriendshipLoading } =
    useMutation(undoFriendShip, {
      onSuccess: (data) => {
        processApiResponse({
          apiData: data,
          defaultErrorMessage: "Ocorreu um erro, tente novamente mais tarde!",
          successMessage: "Amizade foi desfeita!",
        });
      },
      onError: () => {
        showError("Ocorreu um erro, tente novamente mais tarde!");
      },
    });

  const eventsLoading = sendFriendshipLoading || undoFriendshipLoading;

  const { data, isLoading } = useQuery<AxiosResponse<UserResponse>>(
    ["user", id, sendFriendshipLoading],
    () =>
      fetchUser({
        token: token,
        id: id,
        offset: 0,
        query: "",
      }),
    { enabled: !eventsLoading }
  );

  if (isLoading || eventsLoading) {
    return (
      <FullContainer>
        <Logo type="primary" />
        <Loader type="dark" />
      </FullContainer>
    );
  }

  if (!data?.data.user.data) {
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

  const { name, profile_url, description, city } = data?.data.user.data;
  const { isFriends, friendShipId } = data?.data.user;

  const handlePress = () => {
    if (isFriends === false) {
      sendFriendshipMutate({ friendId: id, token });
    }

    if (isFriends === true) {
      undoFriendshipMutate({ id: friendShipId, token });
    }

    if (isFriends === "pending-accept") {
      navigation.navigate("friendInvitations");
    }
  };

  return (
    <Container>
      <ContentContainer>
        <Title>{name}</Title>
        <ProfileImage
          source={{
            uri: `${S3_BASE_URL}${profile_url}`,
          }}
        />
        <InformationContainer>
          <StyledMapPin />
          <Information>{city}</Information>
        </InformationContainer>
        <Description>{description || "Sem descrição"}</Description>
        <Button
          background="dark"
          onPress={handlePress}
          value={
            isFriends === false
              ? "Enviar pedido de amizade"
              : isFriends === "pending" || isFriends === "reject"
              ? "Convite pendente"
              : isFriends === "pending-accept"
              ? "Ver solicitação de amizade"
              : "Desfazer amizade"
          }
          style={{
            maxWidth: 350,
            marginTop: 40,
            backgroundColor:
              isFriends === false || isFriends === "pending-accept"
                ? theme.COLORS.PURPLE_300
                : isFriends === "pending" || isFriends === "reject"
                ? theme.COLORS.GREY_100
                : theme.COLORS.RED,
          }}
          disabled={isFriends === "pending" || isFriends === "reject"}
        />
      </ContentContainer>
    </Container>
  );
}
