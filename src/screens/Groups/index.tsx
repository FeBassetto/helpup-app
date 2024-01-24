import { Header } from "@components/Header";
import { Container, ContentContainer } from "./styles";
import { Slider } from "@components/Slider";

export function Groups() {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <Slider />
      </ContentContainer>
    </Container>
  );
}
