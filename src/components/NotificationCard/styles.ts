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

  position: relative;
`;

export const InformationContainer = styled.View`
  width: 80%;
`;

export const NewContainer = styled.View`
  width: 10%;
`;

export const NewCircle = styled.View`
  width: 10px;
  height: 10px;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_500};
`;

export const NotificationContainer = styled.View`
  width: 80%;
`;

export const SinceTime = styled.Text`
  position: absolute;

  right: 10px;
  top: 10px;

  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XS}px`};

  color: ${({ theme }) => theme.COLORS.PURPLE_700};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XL}px`};

  color: ${({ theme }) => theme.COLORS.PURPLE_500};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.SM}px`};

  color: ${({ theme }) => theme.COLORS.PURPLE_300};

  margin-top: 5px;
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
