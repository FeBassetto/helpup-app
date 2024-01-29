import { Container, Message } from "./styles";

interface TopMessageProps {
  title: string;
  isError?: boolean;
}

export function TopMessage({ title, isError = false }: TopMessageProps) {
  return (
    <Container isError={isError}>
      <Message>{title}</Message>
    </Container>
  );
}
