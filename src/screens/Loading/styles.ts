import { LogoSvg } from "@assets/svgs/LogoSvg";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled(Animated.View)`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_300};

  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;

  z-index: 10;
`;

export const StyledIcon = styled(LogoSvg)`
  width: 100%;
`;

export const LoaderContainer = styled.View`
  width: 200px;
  height: 5px;

  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;

  position: relative;
  background-color: ${({ theme }) => theme.COLORS.PURPLE_50};
`;

export const Loader = styled(Animated.View)`
  position: absolute;
  left: 0;

  height: 100%;
  width: 100px;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_100};
`;
