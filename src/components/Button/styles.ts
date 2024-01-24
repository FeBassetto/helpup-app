import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface StyledButtonProps {
  rounded: boolean;
  outline: boolean;
  background: "dark" | "light" | "linear";
}

export const StyledButton = styled(TouchableOpacity)<StyledButtonProps>`
  width: 100%;
  height: ${({ rounded }) => (rounded ? "35px" : "50px")};

  justify-content: center;
  align-items: center;

  border-radius: ${({ rounded }) => (rounded ? "20px" : "10px")};

  background-color: ${({ theme, outline, background }) =>
    outline
      ? "transparent"
      : background === "dark"
      ? theme.COLORS.PURPLE_500
      : background === "light"
      ? theme.COLORS.PURPLE_300
      : "transparent"};
  border: ${({ outline, theme }) =>
    outline ? `2px solid ${theme.COLORS.PURPLE_500}` : "none"};
`;

export const GradientBackground = styled(LinearGradient).attrs((props) => ({
  colors: [props.theme.COLORS.PURPLE_500, props.theme.COLORS.PURPLE_300],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
}))<StyledButtonProps>`
  width: 100%;
  height: ${({ rounded }) => (rounded ? "35px" : "50px")};

  border-radius: ${({ rounded }) => (rounded ? "20px" : "10px")};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<StyledButtonProps>`
  font-family: ${({ theme, rounded }) =>
    rounded
      ? theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD
      : theme.FONT_FAMILY.MONTSERRAT.MEDIUM};
  font-size: ${({ theme, rounded }) =>
    rounded ? `${theme.FONT_SIZE.SM}px` : `${theme.FONT_SIZE.XL}px`};
  color: ${({ theme, outline }) =>
    outline ? theme.COLORS.PURPLE_300 : theme.COLORS.WHITE};
`;

export const Loader = styled.ActivityIndicator.attrs<StyledButtonProps>(
  ({ theme, outline }) => ({
    color: outline ? theme.COLORS.PURPLE_300 : theme.COLORS.WHITE,
    size: 30,
  })
)``;
