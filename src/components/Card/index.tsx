import { Button } from "@components/Button";
import { Container, PrimaryTitle } from "./styles";
import { ViewProps } from "react-native";

interface CardProps extends ViewProps {
  title: string;
  buttonTitle: string;
  icon?: JSX.Element;
  local?: string;
  date?: string;
  onPress: () => void;
  type: "community" | "user" | "event" | "group";
}

export function Card({
  buttonTitle,
  icon,
  title,
  onPress,
  type,
  ...props
}: CardProps) {
  const containerType =
    type === "community" || type === "event" ? "primary" : "secondary";

  return (
    <Container type={containerType} {...props}>
      {type === "community" && (
        <>
          {icon}
          <PrimaryTitle>{title}</PrimaryTitle>
        </>
      )}
      <Button background="dark" value={buttonTitle} onPress={onPress} rounded />
    </Container>
  );
}
