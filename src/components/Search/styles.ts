import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 50px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.PURPLE_300};
  border-radius: 15px;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_50};

  display: flex;
  flex-direction: row;

  overflow: hidden;
`;

export const SearchButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_300};

  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GREY_100,
  selectionColor: theme.COLORS.PURPLE_100,
  underlineColorAndroid: "transparent",
  importantForAutofill: "no",
  cursorColor: theme.COLORS.PURPLE_300,
}))`
  flex: 1;
  height: 100%;

  padding: 15px 20px;

  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.MD}px`};
`;
