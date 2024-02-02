import { TouchableOpacityProps } from "react-native";
import {
  CancelContainer,
  CheckContainer,
  Container,
  InformationContainer,
  InviteContainer,
  StyledCancel,
  StyledCheck,
  Title,
} from "./styles";
import { useMutation, useQueryClient } from "react-query";
import { updateFriendShip } from "@services/friend/updateFriendship";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { processApiResponse } from "@utils/processApiResponse";
import { showError } from "@utils/showError";

interface NotificationCardProps extends TouchableOpacityProps {
  id: string;
  title: string;
  date: string;
  type: "notification" | "invitations";
  friendId?: string;
  isNew?: boolean;
  onInvitationPress?: (isAccept: boolean) => void;
}

export function NotificationCard({
  id,
  date,
  title,
  type,
  isNew,
  friendId,
  onInvitationPress,
  ...props
}: NotificationCardProps) {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

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
      <Container type="secondary" {...props}>
        <Title>{title}</Title>
      </Container>
    );
  }
}
