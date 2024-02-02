import { Logo } from "@components/Logo";
import {
  Container,
  NotificationContainer,
  NotificationNumber,
  NotificationText,
} from "./styles";
import { ArrowLeft, Bell } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fetchMeNotifications } from "@services/notification/getNotifications";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { NotificationsResponse } from "@dtos/notification/notificationDTO";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";

interface HeaderProps {
  type?: "primary" | "back";
}

export function Header({ type }: HeaderProps) {
  const navigation = useNavigation();
  const { token } = useSelector((state: RootState) => state.auth);

  function useFetchNotifications(token: string, onlyNew: boolean) {
    return useQuery<AxiosResponse<NotificationsResponse>>(
      ["notifications", { onlyNew }],
      () => fetchMeNotifications({ token, onlyNew }),
      {}
    );
  }

  const { data } = useFetchNotifications(token, true);

  const notifications = data?.data.notifications || [];

  return (
    <Container>
      {type === "back" && (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft weight="bold" color="#ffffff" size={30} />
        </TouchableOpacity>
      )}
      <Logo type="secondary" />
      <NotificationContainer onPress={() => {}}>
        <Bell weight="fill" color="#ffffff" size={30} />
        {notifications.length > 0 && (
          <NotificationNumber>
            <NotificationText>{notifications.length}</NotificationText>
          </NotificationNumber>
        )}
      </NotificationContainer>
    </Container>
  );
}
