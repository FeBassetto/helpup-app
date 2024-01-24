import { LogoSvg } from "@assets/svgs/LogoSvg";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Dimensions } from "react-native";
import { Loader } from "@components/Loader";

interface LoadingScreenProps {
  stopLoading: boolean;
  stopTime: number;
  closedScreen: () => void;
}

export function LoadingScreen({
  stopLoading,
  stopTime,
  closedScreen,
}: LoadingScreenProps) {
  const screenheight = Dimensions.get("window").height;

  const containerAnimation = useSharedValue(0);
  const containerOpacity = useSharedValue(1);

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      bottom: containerAnimation.value,
      opacity: containerOpacity.value,
    };
  });

  useEffect(() => {
    if (stopLoading) {
      containerAnimation.value = withTiming(screenheight, {
        duration: stopTime,
        easing: Easing.linear,
      });

      containerOpacity.value = withTiming(0, {
        duration: stopTime,
        easing: Easing.linear,
      });

      setTimeout(() => {
        closedScreen();
      }, stopTime);
    }
  }, [stopLoading, stopTime, screenheight]);

  return (
    <Container style={[containerAnimatedStyle]}>
      <LogoSvg />
      {!stopLoading && <Loader type="light" />}
    </Container>
  );
}
