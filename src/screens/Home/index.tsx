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
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const iconProps: IconProps = {
    weight: "bold",
    size: 50,
    color: theme.COLORS.PURPLE_300,
  };

  const communities = [
    {
      title: "Deficiência física",
      icon: <Wheelchair {...iconProps} />,
      onCardPress: () =>
        navigation.navigate("eventsStack", {
          screen: "events",
          params: { eventType: "physical" },
        }),
    },
    {
      title: "Deficiência auditiva",
      icon: <Ear {...iconProps} />,
      onCardPress: () =>
        navigation.navigate("eventsStack", {
          screen: "events",
          params: { eventType: "auditory" },
        }),
    },
    {
      title: "Deficiência visual",
      icon: <Eye {...iconProps} />,
      onCardPress: () =>
        navigation.navigate("eventsStack", {
          screen: "events",
          params: { eventType: "visual" },
        }),
    },
    {
      title: "Deficiência intelectual",
      icon: <Brain {...iconProps} />,
      onCardPress: () =>
        navigation.navigate("eventsStack", {
          screen: "events",
          params: { eventType: "mental" },
        }),
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
            onPress={() => {}} // TODO: Adicionar navigation
            value="Encontre novas amizades"
          />
        </SecureContainer>
      </ContentContainer>
    </Container>
  );
}
