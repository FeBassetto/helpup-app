import { Clock, MapPin } from "phosphor-react-native";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

interface TypeProps {
  type: "primary" | "secondary";
}

const widthScreen = Dimensions.get("window").width;

const containerDimension =
  widthScreen - 40 - 20 < 360 ? (widthScreen - 60) / 2 : 180;

const isSmallScreen = widthScreen - 40 < 340;

export const Container = styled(Animated.View)<TypeProps>`
  width: ${containerDimension}px;
  height: ${isSmallScreen ? containerDimension + 20 : containerDimension}px;

  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.WHITE : theme.COLORS.PURPLE_50};

  border-radius: 20px;

  padding: 10px 10px 10px 10px;
  margin-right: 10px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  ${({ type }) =>
    type === "secondary" &&
    `
    shadow-color: #000;
    shadow-offset: 0px 4px;
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 2; 
  `};
`;

export const PrimaryTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.SM}px`};
  color: ${({ theme }) => theme.COLORS.PURPLE_300};

  text-align: center;
`;

export const UserImage = styled.Image`
  width: 50px;
  height: 50px;

  border-radius: 25px;
`;

export const SecondaryTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.MEDIUM};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.MD}px`};

  text-align: center;
`;

export const SecondarySub = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XS}px`};
`;

export const InfoContainer = styled.View`
  display: flex;

  flex-direction: row;
  align-items: center;
`;

export const LocationIcon = styled(MapPin).attrs(({ theme }) => ({
  weight: "fill",
  color: theme.COLORS.PURPLE_300,
  size: 20,
}))`
  margin-right: 5px;
`;

export const ClockIcon = styled(Clock).attrs(({ theme }) => ({
  weight: "fill",
  color: theme.COLORS.PURPLE_300,
  size: 20,
}))`
  margin-right: 5px;
`;
