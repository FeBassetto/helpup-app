import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1 },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 0 40px 20px 40px;
`;

export const LoginBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 100px 0;
`;

export const LoginTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL};
  color: ${({ theme }) => theme.COLORS.BLACK};

  margin-top: 10px;
  margin-bottom: 40px;
`;

export const SignupSection = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignupText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
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
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  color: ${({ theme }) => theme.COLORS.PURPLE_300};
`;
