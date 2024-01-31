import { ArrowUp } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.BOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.MD}px`};
  color: ${({ theme }) => theme.COLORS.BLACK};

  margin-bottom: 15px;
`;

export const OptionContainer = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Option = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<{ isActive: boolean }>`
  width: 45%;
  height: 100px;

  padding: 20px;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.PURPLE_300 : theme.COLORS.WHITE};

  border-color: ${({ theme }) => theme.COLORS.PURPLE_300};
  border-width: 2px;
  border-radius: 10px;

  margin-bottom: 10px;

  display: flex;
  align-items: center;
`;

export const OptionText = styled.Text<{ isActive: boolean }>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.BOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.MD}px`};
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.WHITE : theme.COLORS.PURPLE_300};

  margin-top: 10px;
`;
