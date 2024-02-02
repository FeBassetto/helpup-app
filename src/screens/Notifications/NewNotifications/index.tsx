import { useMutation, useQuery, useQueryClient } from "react-query";
import { CenterContainer, FullContainer } from "../styles";
import { AxiosResponse } from "axios";
import { NotificationsResponse } from "@dtos/notification/notificationDTO";
import { fetchNotifications } from "@services/notification/getNotifications";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";
import { Logo } from "@components/Logo";
import { Loader } from "@components/Loader";
import { NotificationCard } from "@components/NotificationCard";
import { StyledImage, Title } from "@screens/FriendInvitations/styles";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import SmileImage from "@assets/imgs/smile.png";
import { showError } from "@utils/showError";
import { View } from "react-native";
import { markNotificationRead } from "@services/notification/markNotificationRead";

interface NewNotificationsProps {
  focus: boolean;
}

export function NewNotifications({ focus }: NewNotificationsProps) {
  const { token } = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(markNotificationRead, {
    onSuccess: (data) => {
      if (data.data.error) {
        showError("Ocorreu um erro, tente novamente mais tarde!");
      }

      queryClient.refetchQueries(["allNotifications"]);
      queryClient.refetchQueries(["notifications"]);
    },
    onError: () => {
      showError("Ocorreu um erro, tente novamente mais tarde!");
    },
  });

  const { data, isFetching } = useQuery<AxiosResponse<NotificationsResponse>>(
    ["newNotifications", focus, isLoading],
    () => fetchNotifications({ onlyNew: true, token })
  );

  if (data?.data.error) {
    showError("Ocorreu um erro, tente novamente mais tarde!");
    navigation.goBack();
    return <></>;
  }

  if (isFetching) {
    return (
      <FullContainer>
        <Logo type="primary" />
        <Loader type="dark" />
      </FullContainer>
    );
  }

  if (!data?.data.notifications.length) {
    return (
      <CenterContainer>
        <Logo type="primary" />
        <StyledImage source={SmileImage} />
        <Title>Nenhuma nova notificação!</Title>
        <Button
          background="dark"
          onPress={() => navigation.goBack()}
          value="Voltar"
          style={{ marginTop: 20 }}
        />
      </CenterContainer>
    );
  }

  const { notifications } = data.data;

  return (
    <CenterContainer>
      {notifications.map(
        ({ created_at, title, read_at, type, redirect_id, id }) => (
          <NotificationCard
            date={created_at}
            id={id}
            title={title}
            type="notification"
            isNew={read_at === null}
            notificationType={type}
            key={id}
            redirectId={redirect_id}
          />
        )
      )}
      <View
        style={{
          flex: 1,
          width: 350,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          background="dark"
          onPress={() => {
            mutate({ id: "", readAll: true, token });
          }}
          value="Marcar todas como lida"
          isLoading={isLoading}
        />
      </View>
    </CenterContainer>
  );
}
