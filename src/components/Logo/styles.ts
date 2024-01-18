import styled from "styled-components/native";

interface LogoTextProps {
  type: "primary" | "secondary";
}

export const LogoText = styled.Text<LogoTextProps>`
  color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.PURPLE_300 : theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BALOO};
  font-size: ${({ theme, type }) =>
    type === "primary"
      ? `${theme.FONT_SIZE.TITLE}px`
      : `${theme.FONT_SIZE.XXL}px`};
`;
