import { Check } from "phosphor-react-native";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

interface ProgressBarContainerProps {
  numberOfSteps: number;
}

interface ProgressBarProps {
  status: "inProgress" | "completed" | "empty";
}

const widthScreen = Dimensions.get("window").width;

export const Step = styled.View`
  width: 40px;
  height: 40px;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.PURPLE_300};

  position: relative;
`;

export const StepText = styled(Animated.Text)`
  width: 100%;
  height: 100%;

  position: absolute;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BALOO};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XXL}px`};
`;

export const CheckContainer = styled(Animated.View)`
  position: absolute;

  top: 8px;
  left: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCheck = styled(Check)`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const StepTitle = styled.Text`
  width: 100px;

  top: 45px;
  right: -30px;

  position: absolute;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.PURPLE_300};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.BOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.MD}px`};
`;

export const ProgressBarContainer = styled.View<ProgressBarContainerProps>`
  width: ${({ numberOfSteps }) =>
    (widthScreen -
      40 * numberOfSteps -
      20 * 2 * 2 -
      10 * 2 * (numberOfSteps - 1)) /
    (numberOfSteps - 1)}px;
  height: 10px;
  margin: 0 10px;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_50};
`;

export const ProgressBar = styled(Animated.View)<ProgressBarProps>`
  height: 100%;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_300};
`;
