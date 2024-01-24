import { Button } from "@components/Button";
import { Container, PrimaryTitle } from "./styles";

interface CardProps {
  icon: JSX.Element;
  title: string;
  buttonTitle: string;
}

export function Card({ buttonTitle, icon, title }: CardProps) {
  return (
    <Container>
      {icon}
      <PrimaryTitle>{title}</PrimaryTitle>
      <Button
        background="dark"
        value={buttonTitle}
        onPress={() => {}}
        rounded
      />
    </Container>
  );
}
