import { Header } from "@components/Header";
import { Container, ContentContainer } from "./styles";
import { Slider } from "@components/Slider";
import { NewFriends } from "./components/NewFriends";
import { useIsFocused } from "@react-navigation/native";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import { MeFriends } from "./components/MeFriends";

export function Friends() {
  const focus = useIsFocused();
  const queryClient = useQueryClient();

  const [isFocus, setIsFocus] = useState(focus);

  useEffect(() => {
    queryClient.refetchQueries(["newFriends"]);
    queryClient.refetchQueries(["meFriends"]);
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
          firstContent={<NewFriends focus={focus} />}
          firstTitle="Novos amigos"
          secondContent={<MeFriends focus={focus} />}
          secondTitle="Meus amigos"
        />
      </ContentContainer>
    </Container>
  );
}
