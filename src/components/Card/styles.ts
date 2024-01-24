import { Dimensions } from "react-native";
import styled from "styled-components/native";

interface TypeProps {
  type: "primary" | "secondary";
}

const widthScreen = Dimensions.get("window").width;

const containerDimension =
  widthScreen - 40 - 20 < 360 ? (widthScreen - 60) / 2 : 180;

const isSmallScreen = widthScreen - 40 < 360;

export const Container = styled.View<TypeProps>`
  width: ${containerDimension}px;
  height: ${containerDimension}px;

  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.WHITE : theme.COLORS.PURPLE_50};

  border-radius: 20px;

  padding: ${isSmallScreen ? "10px 10px 5px 10px" : "20px 20px 10px 20px"};
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
  font-size: ${({ theme }) => `${theme.FONT_SIZE.SM}px`};
`;

export const SecondarySub = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XS}px`};
`;
