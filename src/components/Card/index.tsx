import { Button } from "@components/Button";
import {
  Container,
  PrimaryTitle,
  SecondarySub,
  SecondaryTitle,
  UserImage,
} from "./styles";
import { ViewProps } from "react-native";

interface CardProps extends ViewProps {
  title: string;
  buttonTitle: string;
  icon?: JSX.Element;
  local?: string;
  date?: string;
  onPress: () => void;
  type: "community" | "user" | "event" | "group";
  cardType: "carousel" | "list";
  profileUrl?: string;
  participants?: number;
}

export function Card({
  buttonTitle,
  icon,
  title,
  onPress,
  type,
  profileUrl,
  cardType,
  participants,
  ...props
}: CardProps) {
  const containerType = cardType === "carousel" ? "primary" : "secondary";

  return (
    <Container type={containerType} {...props}>
      {type === "community" && (
        <>
          {icon}
          <PrimaryTitle>{title}</PrimaryTitle>
        </>
      )}
      {type === "group" && (
        <>
          <UserImage source={{ uri: profileUrl }} />
          <SecondaryTitle>{title}</SecondaryTitle>
          <SecondarySub>{participants} participantes</SecondarySub>
        </>
      )}
      <Button
        background={containerType === "primary" ? "light" : "lighter"}
        value={buttonTitle}
        onPress={onPress}
        rounded
      />
    </Container>
  );
}
