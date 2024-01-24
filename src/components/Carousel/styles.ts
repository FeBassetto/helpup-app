import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Community } from ".";

export const Container = styled.View`
  width: 100%;
  padding: 20px 0 40px 0;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_300};

  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XL}px`};
  color: ${({ theme }) => theme.COLORS.WHITE};

  margin-bottom: 10px;
`;

export const ItemsContainer = styled(FlatList<Community>).attrs({
  contentContainerStyle: {
    paddingLeft: 20,
  },
})`
  width: 100%;
`;
