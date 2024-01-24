import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ContentContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  showsVerticalScrollIndicator: false,
})``;

export const SecureContainer = styled.View`
  width: 100%;

  align-items: center;

  padding: 0 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XXL}px`};
`;

export const StyledTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.BOLD};
  color: ${({ theme }) => theme.COLORS.PURPLE_300};
`;

export const StyledImage = styled.Image`
  margin-top: 20px;
  width: 100%;
`;

export const StyledText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.MEDIUM};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.LG}px`};

  margin: 20px 0;

  text-align: center;
`;
