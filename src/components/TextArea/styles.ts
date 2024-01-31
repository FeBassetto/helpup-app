import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.BOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.MD}px`};
`;

export const StyledTextArea = styled.TextInput.attrs(({ theme }) => ({
  selectionColor: theme.COLORS.PURPLE_100,
  underlineColorAndroid: "transparent",
  importantForAutofill: "no",
  cursorColor: theme.COLORS.PURPLE_300,
}))`
  border-color: ${({ theme }) => theme.COLORS.PURPLE_300};
  border-width: 2px;
  border-radius: 20px;

  height: 200px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  margin: 20px 0;
  padding: 20px;

  text-align-vertical: top;

  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.REGULAR};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XL}px`};
`;
