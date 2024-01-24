import { Header } from "@components/Header";
import {
  Container,
  ContentContainer,
  SecureContainer,
  StyledImage,
  StyledText,
  StyledTitle,
  Title,
} from "./styles";
import HelpupImage from "@assets/imgs/help.png";
import { Carousel } from "@components/Carousel";

export function Home() {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <SecureContainer>
          <Title>
            Bem-vindo ao <StyledTitle>Helpup</StyledTitle>
          </Title>
          <StyledImage source={HelpupImage} />
          <StyledText>
            Vamos unir forças para criar eventos e grupos que fortaleçam nossa
            comunidade. Seja a mudança por uma sociedade mais unida e feliz
          </StyledText>
        </SecureContainer>
        <Carousel title="Comunidades que apoiamos" />
      </ContentContainer>
    </Container>
  );
}
