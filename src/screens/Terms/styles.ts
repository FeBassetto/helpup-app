import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XXL}px`};

  text-align: center;

  margin-bottom: 30px;
`;

export const StyledTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.PURPLE_300};
`;

export const Section = styled.View`
  margin-bottom: 30px;

  max-width: 350px;
`;

export const SectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XL}px`};

  text-align: center;

  margin-bottom: 20px;
`;

export const SectionDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.REGULAR};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.MD}px`};

  text-align: center;
`;
