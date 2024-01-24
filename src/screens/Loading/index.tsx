import { LogoSvg } from "@assets/svgs/LogoSvg";
import { Container, Loader, LoaderContainer } from "./styles";
import { useEffect, useState } from "react";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Dimensions } from "react-native";

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
  const [animationStarted, setAnimationStarted] = useState(false);
  const screenheight = Dimensions.get("window").height;

  const loadingAnimation = useSharedValue(-100);
  const containerAnimation = useSharedValue(0);
  const containerOpacity = useSharedValue(1);

  const loadingAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: loadingAnimation.value }],
    };
  });

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      bottom: containerAnimation.value,
      opacity: containerOpacity.value,
    };
  });

  const loopAnimation = () => {
    loadingAnimation.value = withTiming(250, {
      duration: 2000,
      easing: Easing.linear,
    });

    setTimeout(() => {
      loadingAnimation.value = -100;
      loopAnimation();
    }, 2000);
  };

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

  useEffect(() => {
    if (!animationStarted) {
      loopAnimation();
      setAnimationStarted(true);
    }
  }, []);

  return (
    <Container style={[containerAnimatedStyle]}>
      <LogoSvg />
      {!stopLoading && (
        <LoaderContainer>
          <Loader style={[loadingAnimatedStyle]} />
        </LoaderContainer>
      )}
    </Container>
  );
}
