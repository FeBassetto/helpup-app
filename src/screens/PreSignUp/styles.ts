import { Dimensions } from "react-native";
import styled from "styled-components/native";

const widthScreen = Dimensions.get("window").width;

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XXL}px`};

  text-align: center;
`;

export const HighlightedText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PURPLE_300};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XXL}px`};
`;

export const StyledImage = styled.Image`
  width: ${widthScreen - 100}px;
  height: ${widthScreen - 100}px;

  margin-top: 15px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.MEDIUM};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XL}px`};

  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const StyledContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  margin-top: 10px;
  margin-bottom: 20px;
`;

export const LinkDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.MEDIUM};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.MD}px`};

  text-align: center;
`;

export const StyledLink = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.BOLD};

  color: ${({ theme }) => theme.COLORS.PURPLE_300};
  text-decoration: underline;
`;
