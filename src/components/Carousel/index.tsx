import { Wheelchair } from "phosphor-react-native";
import { Container, ItemsContainer, Title } from "./styles";
import { Text } from "react-native";
import { Card } from "./components/Card";

interface CarouselProps {
  title: string;
}

export interface Community {
  title: string;
  icon: JSX.Element;
}

export function Carousel({ title }: CarouselProps) {
  const communities: Community[] = [
    {
      title: "Deficiência física",
      icon: <Wheelchair weight="fill" size={50} />,
    },
    {
      title: "Deficiência auditiva",
      icon: <Wheelchair weight="fill" size={50} />,
    },
    {
      title: "Deficiência auditiva",
      icon: <Wheelchair weight="fill" size={50} />,
    },
    {
      title: "Deficiência auditiva",
      icon: <Wheelchair weight="fill" size={50} />,
    },
  ];

  return (
    <Container>
      <Title>{title}</Title>
      <ItemsContainer
        data={communities}
        renderItem={({ item }) => (
          <Card
            buttonTitle="Faça sua parte"
            icon={item.icon}
            title={item.title}
          />
        )}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
