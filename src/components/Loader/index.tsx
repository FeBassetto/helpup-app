import { useEffect } from "react";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { LoaderContainer, StyledLoader } from "./styles";

interface LoaderProps {
  type: "light" | "dark";
}

export function Loader({ type }: LoaderProps) {
  const loadingAnimation = useSharedValue(-100);

  const loadingAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: loadingAnimation.value }],
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
    loopAnimation();
  }, []);

  return (
    <LoaderContainer>
      <StyledLoader type={type} style={loadingAnimatedStyle} />
    </LoaderContainer>
  );
}
