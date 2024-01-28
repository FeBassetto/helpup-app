import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled(Animated.View)`
  position: absolute;

  height: 100%;
  width: 100%;
  padding: 0 20px;

  z-index: 10;
  bottom: 0px;

  background-color: rgba(0, 0, 0, 0.65);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopUpContainer = styled(Animated.View)`
  width: 100%;
  max-width: 350px;

  padding: 20px;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.REGULAR};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XXL}px`};

  text-align: center;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 40px;
`;
