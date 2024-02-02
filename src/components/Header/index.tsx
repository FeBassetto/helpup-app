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
import { fetchNotifications } from "@services/notification/getNotifications";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { NotificationsResponse } from "@dtos/notification/notificationDTO";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

interface HeaderProps {
  type?: "primary" | "back";
  isNotifications?: boolean;
}

export function Header({ type, isNotifications = false }: HeaderProps) {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { token } = useSelector((state: RootState) => state.auth);

  function useFetchNotifications(token: string, onlyNew: boolean) {
    return useQuery<AxiosResponse<NotificationsResponse>>(
      ["notifications", { onlyNew }],
      () => fetchNotifications({ token, onlyNew }),
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
          onPress={() => {
            isNotifications
              ? navigation.navigate("config")
              : navigation.goBack();
          }}
        >
          <ArrowLeft weight="bold" color="#ffffff" size={30} />
        </TouchableOpacity>
      )}
      <Logo type="secondary" />
      <NotificationContainer
        onPress={() => {
          navigation.navigate("configStack", {
            screen: "notifications",
          });
        }}
      >
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
