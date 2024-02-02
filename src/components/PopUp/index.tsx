import { Button } from "@components/Button";
import { ButtonsContainer, Container, PopUpContainer, Title } from "./styles";
import theme from "@theme/index";
import { useContext, useEffect } from "react";
import { PopUpContext } from "@contexts/PopUpContext";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Dimensions } from "react-native";

export function PopUp() {
  const { onPressAction, closeModal, isOpen } = useContext(PopUpContext);

  const heightScreen = Dimensions.get("window").height;
  const translateY = useSharedValue(-heightScreen);

  const onPressedAction = () => {
    onPressAction();
    closeModal();
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isOpen ? 1 : 0, { duration: 500 }),
      transform: [
        { translateY: withTiming(isOpen ? 0 : -heightScreen, { duration: 0 }) },
      ],
    };
  });

  useEffect(() => {
    translateY.value = isOpen ? 0 : -heightScreen;
  }, [isOpen]);

  return (
    <Container style={animatedStyle}>
      <PopUpContainer>
        <Title>Deseja executar esta ação?</Title>
        <ButtonsContainer>
          <Button
            background="light"
            onPress={onPressedAction}
            value="Sim"
            style={{
              width: 100,
              backgroundColor: theme.COLORS.RED,
              marginRight: 20,
            }}
          />
          <Button
            background="light"
            onPress={() => closeModal()}
            value="Não"
            style={{ width: 100 }}
          />
        </ButtonsContainer>
      </PopUpContainer>
    </Container>
  );
}
