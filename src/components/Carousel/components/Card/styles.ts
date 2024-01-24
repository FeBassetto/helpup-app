import styled from "styled-components/native";

export const Container = styled.View`
  width: 180px;
  height: 180px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 20px;

  padding: 20px 20px 10px 20px;
  margin-right: 10px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
`;

export const PrimaryTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.SM}px`};
  color: ${({ theme }) => theme.COLORS.PURPLE_300};

  text-align: center;
`;
