import { Logo } from "@components/Logo";
import {
  Container,
  NotificationContainer,
  NotificationNumber,
  NotificationText,
} from "./styles";
import { ArrowLeft, Bell } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

interface HeaderProps {
  type?: "primary" | "back";
}

// TODO: Conectar com websocket e mostrar quantas notificacoes nao lidas tem

export function Header({ type }: HeaderProps) {
  return (
    <Container>
      {type === "back" && (
        <TouchableOpacity activeOpacity={0.6}>
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
