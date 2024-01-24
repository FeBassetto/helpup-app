import styled from "styled-components/native";

interface ContainerProps {
  type?: "primary" | "back";
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 50px;

  padding: 0 20px;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_300};

  display: flex;
  flex-direction: row;

  align-items: center;

  justify-content: space-between;
`;

export const NotificationContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const NotificationNumber = styled.View`
  width: 20px;
  height: 20px;

  border-radius: 10px;

  position: absolute;
  top: -5px;
  right: -5px;

  background-color: ${({ theme }) => theme.COLORS.RED};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotificationText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.BOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XS}px`};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
