import { Header } from "@components/Header";
import {
  Container,
  ContentContainer,
  SecureContainer,
  StyledBanner,
  StyledImage,
  StyledText,
  StyledTitle,
  Title,
} from "./styles";
import HomeBanner from "@assets/imgs/homeBanner.png";
import HelpImage from "@assets/imgs/help.png";
import { Carousel } from "@components/Carousel";
import { Brain, Ear, Eye, IconProps, Wheelchair } from "phosphor-react-native";
import theme from "@theme/index";
import { Button } from "@components/Button";

export function Home() {
  const iconProps: IconProps = {
    weight: "bold",
    size: 50,
    color: theme.COLORS.PURPLE_300,
  };

  const communities = [
    {
      title: "Deficiência física",
      icon: <Wheelchair {...iconProps} />,
    },
    {
      title: "Deficiência auditiva",
      icon: <Ear {...iconProps} />,
    },
    {
      title: "Deficiência visual",
      icon: <Eye {...iconProps} />,
    },
    {
      title: "Deficiência intelectual",
      icon: <Brain {...iconProps} />,
    },
  ];

  return (
    <Container>
      <Header />
      <ContentContainer>
        <SecureContainer>
          <Title>
            Bem-vindo ao <StyledTitle>Helpup</StyledTitle>
          </Title>
          <StyledBanner source={HomeBanner} />
          <StyledText>
            Vamos unir forças para criar eventos e grupos que fortaleçam nossa
            comunidade. Seja a mudança por uma sociedade mais unida e feliz
          </StyledText>
        </SecureContainer>
        <Carousel
          data={communities}
          title="Comunidades que apoiamos"
          type="community"
          style={{ marginBottom: 20 }}
        />
        <SecureContainer>
          <Title>Como fazer a diferença</Title>
          <StyledImage source={HelpImage} />
          <StyledText>
            Seja um agente de mudança e inspire melhorias globais. Engaje-se,
            inspire bondade e crie um futuro mais justo e esperançoso. Juntos,
            transformamos nossa realidade
          </StyledText>
          <Button
            background="dark"
            onPress={() => {}}
            value="Encontre novas amizades"
          />
        </SecureContainer>
      </ContentContainer>
    </Container>
  );
}
