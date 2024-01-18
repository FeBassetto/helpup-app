import { Eye, EyeSlash } from "phosphor-react-native";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

interface IsPasswordProps {
  isPassword: boolean;
}

const screenWidth = Dimensions.get("window").width - 80;
const desiredWidth = screenWidth - 40;

export const Container = styled.View`
  width: 100%;
  height: 70px;

  margin-bottom: 30px;

  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.COLORS.PURPLE_300};

  position: relative;

  display: flex;
`;

export const PlaceholderContainer = styled(Animated.View)<IsPasswordProps>`
  width: ${({ isPassword }) => (isPassword ? `${desiredWidth}px` : "95%")};
  height: 50px;

  position: absolute;
  left: 0;

  z-index: 2;
`;

export const PlaceholderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 100%;

  height: 100%;

  display: flex;
  justify-content: flex-end;
`;

export const Placeholder = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.BOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.MD}px`};
  color: ${({ theme }) => theme.COLORS.BLACK};

  margin-bottom: 15px;
`;

export const TouchableIcon = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  position: absolute;

  right: 0;
  bottom: 10px;

  display: flex;
  align-items: center;
`;

export const IconShowPassword = styled(Eye)`
  color: ${({ theme }) => theme.COLORS.PURPLE_300};
`;

export const IconHidePassword = styled(EyeSlash)`
  color: ${({ theme }) => theme.COLORS.PURPLE_300};
`;

export const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  selectionColor: theme.COLORS.PURPLE_300,
}))`
  width: ${desiredWidth}px;
  height: 50px;

  position: absolute;
  bottom: 0;
  left: 0;

  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.REGULAR};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XL}px`};
  color: ${({ theme }) => theme.COLORS.GREY_100};
`;
