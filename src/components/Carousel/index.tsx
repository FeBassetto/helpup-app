import { useNavigation } from "@react-navigation/native";
import { Container, ItemsContainer, Title } from "./styles";
import { Card } from "@components/Card";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ViewProps } from "react-native";

type CommunityWithPress = Community & { onCardPress: () => void };
type EventWithPress = Event & { onCardPress: () => void };

interface CarouselProps extends ViewProps {
  title: string;
  data: CommunityWithPress[] | EventWithPress[];
  type: "community" | "event";
}

interface Community {
  title: string;
  icon: JSX.Element;
  local?: string;
  date?: string;
}

interface Event {
  title: string;
  local: string;
  date: string;
  icon?: JSX.Element;
}

export type CommunityOrEvent = CommunityWithPress | EventWithPress;

export function Carousel({ title, data, type, ...props }: CarouselProps) {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  // TODO: Redirecionar para pagina passando o type como parametro

  return (
    <Container {...props}>
      <Title>{title}</Title>
      <ItemsContainer
        data={data}
        renderItem={({ item, index }) => (
          <Card
            buttonTitle="Faça sua parte"
            icon={item.icon}
            title={item.title}
            type={type}
            onPress={item.onCardPress}
            cardType="carousel"
            index={index}
          />
        )}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
