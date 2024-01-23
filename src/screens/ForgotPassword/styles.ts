import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  showsVerticalScrollIndicator: false,
})``;

export const ContentContainer = styled.View`
  flex: 1;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.MEDIUM};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XXL}px`};
  text-align: center;

  margin-top: 10px;
  margin-bottom: 20px;
`;

export const SignupSection = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;
`;

export const SignupText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.REGULAR};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XL}px`};
  color: ${({ theme }) => theme.COLORS.BLACK};

  margin-bottom: -10px;
`;

export const StyledTouchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  margin-top: 20px;
`;

export const Link = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.BOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XL}px`};
  color: ${({ theme }) => theme.COLORS.PURPLE_300};
`;
