import styled from "styled-components/native";

interface IsActiveProps {
  isActive?: boolean;
  isBlocked?: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 40px;

  margin-top: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ArrowContainer = styled.View`
  width: 90px;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<IsActiveProps>`
  width: 40px;
  height: 40px;

  margin-left: 10px;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ isBlocked }) => (isBlocked ? 0.25 : 1)};

  background-color: ${({ theme, isActive = true }) =>
    isActive ? theme.COLORS.PURPLE_300 : theme.COLORS.PURPLE_50};
`;

export const ButtonText = styled.Text<IsActiveProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.MD}px`};
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.WHITE : theme.COLORS.PURPLE_300};
`;

export const PaginationNumberContainer = styled.View`
  width: 200px;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CirclesContainer = styled.View`
  width: 20px;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Circle = styled.View`
  width: 5px;
  height: 5px;

  border-radius: 2.5px;
  background-color: ${({ theme }) => theme.COLORS.PURPLE_50};
`;
