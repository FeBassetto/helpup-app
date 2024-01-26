import { Header } from "@components/Header";
import { Container, ContentContainer } from "./styles";
import { Slider } from "@components/Slider";
import { NewGroups } from "./components/NewGroups";
import { MeGroups } from "./components/MeGroups";

export function Groups() {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <Slider
          firstContent={<NewGroups />}
          firstTitle="Novos grupos"
          secondContent={<MeGroups />}
          secondTitle="Meus grupos"
        />
      </ContentContainer>
    </Container>
  );
}
