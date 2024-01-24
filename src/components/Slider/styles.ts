import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

interface ActiveProps {
  isActive: boolean;
}

const screenWidth = Dimensions.get("window").width;

export const Container = styled.View`
  flex: 1;
`;

export const TopBar = styled.View`
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: row;

  border-bottom-width: 2px;
  border-bottom-color: ${(props) => props.theme.COLORS.GREY_50};

  position: relative;
`;

export const TopBorder = styled(Animated.View)`
  position: absolute;
  bottom: -2px;
  left: 0;

  width: 50%;
  height: 3px;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_300};
`;

export const TopOption = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OptionText = styled.Text<ActiveProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XL}px`};

  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.PURPLE_300 : "#000"};
`;

export const ContentContainer = styled.View`
  flex: 1;
  width: 100%;

  position: relative;
`;

export const ChildContainer = styled(Animated.View)`
  width: 100%;
  height: 100%;

  position: absolute;
`;
