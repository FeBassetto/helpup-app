import { Container, Message } from "./styles";

interface TopMessageProps {
  title: string;
}

export function TopMessage({ title }: TopMessageProps) {
  return (
    <Container>
      <Message>{title}</Message>
    </Container>
  );
}
