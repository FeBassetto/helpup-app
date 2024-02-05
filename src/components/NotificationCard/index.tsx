import { TouchableOpacityProps } from "react-native";
import {
  CancelContainer,
  CheckContainer,
  Container,
  Description,
  InformationContainer,
  InviteContainer,
  NewCircle,
  NewContainer,
  NotificationContainer,
  SinceTime,
  StyledCancel,
  StyledCheck,
  Title,
} from "./styles";
import { useMutation, useQueryClient } from "react-query";
import { updateFriendShip } from "@services/friend/updateFriendship";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps, AppRoutes } from "@routes/app.routes";
import { processApiResponse } from "@utils/processApiResponse";
import { showError } from "@utils/showError";
import { truncateText } from "@utils/truncateText";
import { timeSince } from "@utils/timeSince";
import { NotificationType } from "@dtos/notification/notificationDTO";
import { markNotificationRead } from "@services/notification/markNotificationRead";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";

interface NotificationCardProps extends TouchableOpacityProps {
  id: string;
  title: string;
  date: string;
  type: "notification" | "invitations";
  friendId?: string;
  isNew?: boolean;
  redirectId?: string;
  notificationType?: NotificationType;
  onInvitationPress?: (isAccept: boolean) => void;
}

type RouteInfo = {
  description: string;
  route: keyof AppRoutes;
};

export function NotificationCard({
  id,
  date,
  title,
  type,
  isNew,
  friendId,
  redirectId,
  notificationType,
  onInvitationPress,
  ...props
}: NotificationCardProps) {
  const { token } = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const getInformationsByType = (type: NotificationType): RouteInfo => {
    if (type === "event_created") {
      return { description: "Evento criado na sua região", route: "event" };
    } else if (type === "group_created") {
      return { description: "Grupo criado na sua região", route: "group" };
    } else if (type === "friendship_accept") {
      return { description: "Pedido de amizade aceito", route: "friend" };
    } else {
      return { description: "Pedido de amizade enviado", route: "friend" };
    }
  };

  const { mutate } = useMutation(markNotificationRead, {
    onSuccess: (data) => {
      if (data.data.error) {
        showError("Ocorreu um erro, tente novamente mais tarde!");
      }
    },
    onError: () => {
      showError("Ocorreu um erro, tente novamente mais tarde!");
    },
  });

  const handleNotificationPress = () => {
    if (isNew) {
      mutate({ id, readAll: false, token });
    }

    const { route } = getInformationsByType(
      notificationType || "event_created"
    );

    const navigationId = redirectId || "";

    if (route === "event") {
      navigation.navigate("eventsStack", {
        screen: "event",
        params: { id: navigationId },
      });
    } else if (route === "group") {
      navigation.navigate("groupsStack", {
        screen: "group",
        params: { id: navigationId },
      });
    } else {
      navigation.navigate("friendsStack", {
        screen: "friend",
        params: { id: navigationId },
      });
    }
  };

  if (type === "invitations" && onInvitationPress) {
    return (
      <Container
        type="primary"
        {...props}
        onPress={() => navigation.navigate("friend", { id: friendId || "" })}
      >
        <InformationContainer>
          <Title>{title}</Title>
        </InformationContainer>
        <InviteContainer>
          <CheckContainer onPress={() => onInvitationPress(true)}>
            <StyledCheck />
          </CheckContainer>
          <CancelContainer onPress={() => onInvitationPress(false)}>
            <StyledCancel />
          </CancelContainer>
        </InviteContainer>
      </Container>
    );
  } else {
    return (
      <Container
        type={isNew ? "secondary" : "primary"}
        onPress={() => handleNotificationPress()}
        {...props}
      >
        <NewContainer>{isNew && <NewCircle />}</NewContainer>
        <NotificationContainer>
          <Title>{truncateText(title, 20)}</Title>
          <Description>
            {truncateText(
              getInformationsByType(notificationType || "event_created")
                .description || "",
              30
            )}
          </Description>
        </NotificationContainer>
        <SinceTime>{timeSince(date)}</SinceTime>
      </Container>
    );
  }
}
