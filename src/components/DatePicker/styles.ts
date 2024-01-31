import styled from "styled-components/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { CalendarBlank, Clock } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;

  margin: 20px 0;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.BOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.MD}px`};
  color: ${({ theme }) => theme.COLORS.BLACK};

  margin-bottom: 15px;
`;

export const StyledDateTimePicker = styled(DateTimePicker)`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_300};
`;

export const ContentContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  height: 50px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.PURPLE_300};
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 10px;
`;

export const StyledDate = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.BOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.MD}px`};
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const StyledCalendar = styled(CalendarBlank).attrs(({ theme }) => ({
  color: theme.COLORS.PURPLE_300,
  size: 25,
  weight: "fill",
}))``;

export const StyledClock = styled(Clock).attrs(({ theme }) => ({
  color: theme.COLORS.PURPLE_300,
  size: 25,
  weight: "fill",
}))``;
