import { Dimensions, FlatList } from "react-native";
import styled from "styled-components/native";
import { CardProps } from ".";

const widthScreen = Dimensions.get("window").width;

export const Container = styled.View`
  flex: 1;

  padding-top: 20px;
`;

export const StyledList = styled(FlatList<CardProps>).attrs<{
  havePagination: boolean;
}>(({ havePagination }) => ({
  contentContainerStyle: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: havePagination ? "space-between" : "flex-start",
  },
}))``;

export const FullContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const StyledImage = styled.Image`
  width: ${widthScreen / 1.5}px;
  height: ${widthScreen / 1.5}px;
`;

export const StyledText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.MEDIUM};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XL}px`};
  text-align: center;

  margin: 20px 0px;
`;
