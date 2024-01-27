import { TextInputProps } from "react-native";
import { Container, Title, StyledTextArea } from "./styles";

interface TextAreaProps extends TextInputProps {
  title: string;
  placeholder: string;
}

export function TextArea({ title, placeholder, ...props }: TextAreaProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <StyledTextArea multiline placeholder={placeholder} {...props} />
    </Container>
  );
}
