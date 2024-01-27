import { CalendarBlank, MapPin, Users } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  width: 100%;
`;

export const ContentContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
    alignItems: "center",
  },
  showsVerticalScrollIndicator: false,
})`
  padding: 0 20px;
`;

export const SafeContent = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.BOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XXXL}px`};

  text-align: center;
`;

export const InformationsContainer = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 30px 0px;
  padding: 0 10px;
`;

export const InformationContainer = styled.View`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const StyledCalendar = styled(CalendarBlank).attrs(({ theme }) => ({
  color: theme.COLORS.PURPLE_300,
  weight: "fill",
  size: 32,
}))``;

export const StyledMapPin = styled(MapPin).attrs(({ theme }) => ({
  color: theme.COLORS.PURPLE_300,
  weight: "fill",
  size: 32,
}))``;

export const StyledParticipants = styled(Users).attrs(({ theme }) => ({
  color: theme.COLORS.PURPLE_300,
  weight: "fill",
  size: 32,
}))`
  margin-right: 10px;
`;

export const Information = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.MEDIUM};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.LG}px`};

  text-align: center;
  line-height: 30px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.MEDIUM};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XL}px`};

  text-align: center;
  line-height: 30px;

  margin-top: 20px;
`;
