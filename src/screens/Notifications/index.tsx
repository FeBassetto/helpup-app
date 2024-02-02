import { Slider } from "@components/Slider";
import { ContentContainer } from "./styles";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useIsFocused } from "@react-navigation/native";
import { NewNotifications } from "./NewNotifications";
import { AllNotifications } from "./AllNotifications";

export function Notifications() {
  const focus = useIsFocused();
  const queryClient = useQueryClient();

  const [isFocus, setIsFocus] = useState(focus);

  useEffect(() => {
    if (focus) {
      queryClient.refetchQueries(["newNotifications"]);
      queryClient.refetchQueries(["allNotifications"]);
      queryClient.refetchQueries(["notifications"]);

      setIsFocus(true);
    }
  }, [focus]);

  return (
    <ContentContainer>
      <Slider
        firstContent={<NewNotifications focus={isFocus} />}
        firstTitle="Novas"
        secondContent={<AllNotifications focus={isFocus} />}
        secondTitle="Todas"
      />
    </ContentContainer>
  );
}
