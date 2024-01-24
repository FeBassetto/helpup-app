import Animated from "react-native-reanimated";
import styled from "styled-components/native";

interface LoaderProps {
  type: "light" | "dark";
}

export const LoaderContainer = styled.View`
  width: 200px;
  height: 5px;

  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;

  position: relative;
  background-color: ${({ theme }) => theme.COLORS.PURPLE_50};
`;

export const StyledLoader = styled(Animated.View)<LoaderProps>`
  position: absolute;
  left: 0;

  height: 100%;
  width: 100px;

  border-radius: 10px;

  background-color: ${({ theme, type }) =>
    type === "dark" ? theme.COLORS.PURPLE_300 : theme.COLORS.PURPLE_100};
`;
