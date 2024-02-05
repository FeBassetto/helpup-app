import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XXL}px`};

  text-align: center;

  margin-bottom: 20px;
`;
