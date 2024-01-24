import { useNavigation } from "@react-navigation/native";
import { Container, ItemsContainer, Title } from "./styles";
import { Card } from "@components/Card";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ViewProps } from "react-native";

interface CarouselProps extends ViewProps {
  title: string;
  data: Community[] | Event[];
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

export type CommunityOrEvent = Community | Event;

export function Carousel({ title, data, type, ...props }: CarouselProps) {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  // TODO: Redirecionar para pagina passando o type como parametro

  return (
    <Container {...props}>
      <Title>{title}</Title>
      <ItemsContainer
        data={data}
        renderItem={({ item }) => (
          <Card
            buttonTitle="Faça sua parte"
            icon={item.icon}
            title={item.title}
            type={type}
            onPress={() => {}}
          />
        )}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
