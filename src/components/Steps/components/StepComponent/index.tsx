import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import {
  CheckContainer,
  ProgressBar,
  ProgressBarContainer,
  Step,
  StepText,
  StepTitle,
  StyledCheck,
} from "./styles";
import { useEffect } from "react";

type Status = "inProgress" | "completed" | "empty";

interface StepComponentProps {
  index: number;
  stepName: string;
  isLastStep: boolean;
  status: Status;
  numberOfSteps: number;
}

export function StepComponent({
  index,
  isLastStep,
  status,
  stepName,
  numberOfSteps,
}: StepComponentProps) {
  const progress = useSharedValue(0);
  const checkOpacity = useSharedValue(0);
  const checkScale = useSharedValue(0);
  const numberOpacity = useSharedValue(1);

  useEffect(() => {
    if (status === "completed") {
      checkOpacity.value = withTiming(1, { duration: 300 });
      checkScale.value = withTiming(1, { duration: 300 });
      numberOpacity.value = withTiming(0, { duration: 300 });
    } else {
      checkOpacity.value = withTiming(0, { duration: 300 });
      checkScale.value = withTiming(0, { duration: 300 });
      numberOpacity.value = withTiming(1, { duration: 300 });
    }
  }, [status]);

  useEffect(() => {
    const targetValue =
      status === "completed" ? 1 : status === "inProgress" ? 0.5 : 0;

    if (status === "inProgress") {
      progress.value = withDelay(
        300,
        withTiming(targetValue, { duration: 300 })
      );
    } else {
      progress.value = withTiming(targetValue, { duration: 300 });
    }
  }, [status]);

  const animatedCheckStyle = useAnimatedStyle(() => {
    return {
      opacity: checkOpacity.value,
      transform: [{ scale: checkScale.value }],
    };
  });

  const animatedNumberStyle = useAnimatedStyle(() => {
    return {
      opacity: numberOpacity.value,
    };
  });

  const animatedProgressBarStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(`${progress.value * 100}%`, { duration: 300 }),
    };
  });

  return (
    <>
      <Step>
        <StepText style={[animatedNumberStyle]}>{index + 1}</StepText>
        <CheckContainer style={[animatedCheckStyle]}>
          <StyledCheck />
        </CheckContainer>
        <StepTitle>{stepName}</StepTitle>
      </Step>
      {!isLastStep && (
        <ProgressBarContainer numberOfSteps={numberOfSteps}>
          <ProgressBar status={status} style={[animatedProgressBarStyle]} />
        </ProgressBarContainer>
      )}
    </>
  );
}
