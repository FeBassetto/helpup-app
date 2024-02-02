import { Header } from "@components/Header";
import {
  Container,
  ContentContainer,
  SecureContainer,
  StyledImage,
  Title,
} from "./styles";
import { NotificationCard } from "@components/NotificationCard";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AxiosResponse } from "axios";
import { InvitationsResponse } from "@dtos/invitation/invitationDTO";
import { fetchFriendsInvitations } from "@services/friend/getInvitations";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";
import { showError } from "@utils/showError";
import { useNavigation } from "@react-navigation/native";
import { FullContainer } from "@screens/Group/styles";
import { Logo } from "@components/Logo";
import { Loader } from "@components/Loader";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { updateFriendShip } from "@services/friend/updateFriendship";
import { processApiResponse } from "@utils/processApiResponse";
import { Button } from "@components/Button";
import SmileImage from "@assets/imgs/smile.png";

export function FriendInvitations() {
  const { token } = useSelector((state: RootState) => state.auth);

  const queryClient = useQueryClient();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const { mutate, isLoading } = useMutation(updateFriendShip, {
    onSuccess: (data) => {
      queryClient.refetchQueries(["friendInvitations"]);

      processApiResponse({
        apiData: data,
        defaultErrorMessage: "Ocorreu um erro, tente novamente mais tarde!",
        successMessage: "Ação concluída com sucesso!",
      });
    },
    onError: () => {
      showError(
        "Não foi possível executar a ação, tente novamente mais tarde!"
      );

      navigation.goBack();
    },
  });

  const { data, isFetching, error } = useQuery<
    AxiosResponse<InvitationsResponse>
  >(["friendInvitations"], () =>
    fetchFriendsInvitations({ isSentInvites: false, token })
  );

  if (isFetching || isLoading) {
    return (
      <FullContainer>
        <Logo type="primary" />
        <Loader type="dark" />
      </FullContainer>
    );
  }

  if (error || data?.data?.error || !data?.data.invitations) {
    showError(
      data?.data.message || "Ocorreu um erro, tente novamente mais tarde!"
    );
    navigation.goBack();

    return <></>;
  }

  const { invitations } = data?.data;

  const haveInvitations = invitations.length > 0;

  return (
    <Container>
      {haveInvitations ? (
        <>
          <Title>Pedidos de amizades</Title>
          <ContentContainer>
            {invitations.map(({ created_at, friendId, friendName, id }) => (
              <NotificationCard
                date={created_at}
                title={friendName}
                type="invitations"
                id={id}
                key={id}
                friendId={friendId}
                onInvitationPress={(isAccept) =>
                  mutate({ id, isAccept, token })
                }
              />
            ))}
            <Button
              background="dark"
              onPress={() => navigation.goBack()}
              value="Voltar"
              style={{ marginTop: 20 }}
            />
          </ContentContainer>
        </>
      ) : (
        <SecureContainer>
          <Logo type="primary" />
          <StyledImage source={SmileImage} />
          <Title>Nenhum pedido de amizade</Title>
          <Button
            background="dark"
            onPress={() => navigation.goBack()}
            value="Voltar"
            style={{ marginTop: 20 }}
          />
        </SecureContainer>
      )}
    </Container>
  );
}
