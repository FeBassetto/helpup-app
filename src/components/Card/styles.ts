import styled from "styled-components/native";

interface TypeProps {
  type: "primary" | "secondary";
}

export const Container = styled.View<TypeProps>`
  width: 180px;
  height: 180px;

  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.WHITE : theme.COLORS.PURPLE_50};

  border-radius: 20px;

  padding: 20px 20px 10px 20px;
  margin-right: 10px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  ${({ type }) =>
    type === "secondary" &&
    `
    shadow-color: #000;
    shadow-offset: 0px 4px;
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 2; 
  `};
`;

export const PrimaryTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.SM}px`};
  color: ${({ theme }) => theme.COLORS.PURPLE_300};

  text-align: center;
`;
