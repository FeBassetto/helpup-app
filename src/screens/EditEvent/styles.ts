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
  padding: 0 40px;
`;

export const SafeContent = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.BOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XXXL}px`};

  text-align: center;

  margin-bottom: 20px;
`;
