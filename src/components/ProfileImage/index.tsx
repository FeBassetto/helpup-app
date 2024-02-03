import { TouchableOpacityProps } from "react-native";
import { Container, EditContainer, StyledImage, StyledPencil } from "./styles";

interface ProfileImageProps extends TouchableOpacityProps {
  uri: string;
}

export function ProfileImage({ uri, ...props }: ProfileImageProps) {
  return (
    <Container {...props}>
      <EditContainer>
        <StyledPencil />
      </EditContainer>
      <StyledImage source={{ uri }} />
    </Container>
  );
}
