import { Check, X } from "phosphor-react-native";
import styled from "styled-components/native";

interface ContainerProps {
  type: "primary" | "secondary";
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})<ContainerProps>`
  width: 100%;
  height: 70px;

  padding: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 10px;
  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.WHITE : theme.COLORS.PURPLE_50};

  shadow-color: ${({ theme }) => theme.COLORS.PURPLE_300};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.5;
  shadow-radius: 20px;
  elevation: 5;

  margin-bottom: 20px;
`;

export const InformationContainer = styled.View`
  width: 70%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XL}px`};

  color: ${({ theme }) => theme.COLORS.PURPLE_500};
`;

export const InviteContainer = styled.View`
  width: 30%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const CheckContainer = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_500};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCheck = styled(Check).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 32,
  weight: "bold",
}))``;

export const CancelContainer = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 2px solid ${({ theme }) => theme.COLORS.PURPLE_500};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCancel = styled(X).attrs(({ theme }) => ({
  color: theme.COLORS.PURPLE_300,
  size: 32,
  weight: "bold",
}))``;
