import { Header } from "@components/Header";
import { Container, ContentContainer } from "./styles";
import { Slider } from "@components/Slider";
import { NewGroups } from "./components/NewGroups";
import { MeGroups } from "./components/MeGroups";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";

export function Groups() {
  const focus = useIsFocused();
  const queryClient = useQueryClient();

  const [isFocus, setIsFocus] = useState(focus);

  useEffect(() => {
    queryClient.refetchQueries(["groups"]);
    if (focus) {
      setIsFocus(true);
    }
  }, [focus]);

  if (!focus) {
    return <></>;
  }

  return (
    <Container>
      <Header />
      <ContentContainer>
        <Slider
          firstContent={<NewGroups focus={isFocus} />}
          firstTitle="Novos grupos"
          secondContent={<MeGroups focus={isFocus} />}
          secondTitle="Meus grupos"
        />
      </ContentContainer>
    </Container>
  );
}
