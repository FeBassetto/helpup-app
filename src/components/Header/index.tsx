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

interface HeaderProps {
  type?: "primary" | "back";
}

// TODO: Conectar com websocket e mostrar quantas notificacoes nao lidas tem

// TODO colocar o navigation vindo de props

export function Header({ type }: HeaderProps) {
  const navigation = useNavigation();

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
      <NotificationContainer>
        <Bell weight="fill" color="#ffffff" size={30} />
        <NotificationNumber>
          <NotificationText>1</NotificationText>
        </NotificationNumber>
      </NotificationContainer>
    </Container>
  );
}
