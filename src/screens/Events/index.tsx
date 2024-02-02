import { Header } from "@components/Header";
import { Container, ContentContainer } from "./styles";
import { Slider } from "@components/Slider";
import { MeEvents } from "./MeEvents";
import { NewEvents } from "./NewEvents";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import { EventType } from "@dtos/event/eventDTO";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

interface RouteParamsProps {
  params: {
    eventType?: EventType;
  };
}

interface EventsScreenProps {
  route: RouteParamsProps;
}

export function Events({ route }: EventsScreenProps) {
  const focus = useIsFocused();
  const queryClient = useQueryClient();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const { eventType } = route.params ?? {};

  const [isFocus, setIsFocus] = useState(focus);

  useEffect(() => {
    queryClient.refetchQueries(["meEvents"]);
    queryClient.refetchQueries(["newEvents"]);
    if (focus) {
      setIsFocus(true);
    } else {
      navigation.setParams({ eventType: undefined });
    }
  }, [focus]);

  return (
    <Container>
      <ContentContainer>
        <Slider
          firstContent={<NewEvents focus={isFocus} eventType={eventType} />}
          firstTitle="Novos eventos"
          secondContent={<MeEvents focus={isFocus} />}
          secondTitle="Meus eventos"
        />
      </ContentContainer>
    </Container>
  );
}
