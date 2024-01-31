import { CalendarBlank, Clock, House, MapPin } from "phosphor-react-native";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const widthScreen = Dimensions.get("window").width;

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

  margin-bottom: 30px;
  padding: 0 10px;
`;

export const InformationContainer = styled.View`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const Participants = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.BOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XXL}px`};

  color: ${({ theme }) => theme.COLORS.PURPLE_300};

  margin-bottom: 30px;
`;

export const StyledMapPin = styled(MapPin).attrs(({ theme }) => ({
  color: theme.COLORS.PURPLE_300,
  weight: "fill",
  size: 32,
}))``;

export const StyledCalendar = styled(CalendarBlank).attrs(({ theme }) => ({
  color: theme.COLORS.PURPLE_300,
  weight: "fill",
  size: 32,
}))``;

export const StyledClock = styled(Clock).attrs(({ theme }) => ({
  color: theme.COLORS.PURPLE_300,
  weight: "fill",
  size: 32,
}))``;

export const StyledLocal = styled(House).attrs(({ theme }) => ({
  color: theme.COLORS.PURPLE_300,
  weight: "fill",
  size: 32,
}))``;

export const Information = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.MEDIUM};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.LG}px`};

  text-align: center;
  line-height: 30px;

  margin-left: 5px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.MEDIUM};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XL}px`};

  text-align: center;
  line-height: 30px;

  margin: 30px 0;
`;

export const FullContainer = styled.View`
  flex: 1;

  width: 100%;

  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoContentStyledImage = styled.Image`
  width: ${widthScreen / 1.5}px;
  height: ${widthScreen / 1.5}px;
`;

export const NoContentStyledText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.MEDIUM};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XL}px`};
  text-align: center;

  margin: 20px 0px;
`;
