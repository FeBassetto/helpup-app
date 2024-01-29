import styled from "styled-components/native";

interface ContainerProps {
  isError: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 95%;
  z-index: 10;

  position: absolute;
  top: 10px;

  padding: 10px;

  border-radius: 10px;
  background-color: ${({ theme, isError }) =>
    isError ? theme.COLORS.RED : theme.COLORS.GREEN};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.BOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.SM}px`};
  line-height: 24px;
`;
