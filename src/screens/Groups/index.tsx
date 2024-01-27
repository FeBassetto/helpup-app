import { Header } from "@components/Header";
import { Container, ContentContainer } from "./styles";
import { Slider } from "@components/Slider";
import { NewGroups } from "./components/NewGroups";
import { MeGroups } from "./components/MeGroups";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useQueryClient } from "react-query";

export function Groups() {
  const queryClient = useQueryClient();

  useFocusEffect(
    useCallback(() => {
      queryClient.invalidateQueries(["groups"]);
    }, [queryClient])
  );

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
