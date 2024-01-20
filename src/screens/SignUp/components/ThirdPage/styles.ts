import { Dimensions } from "react-native";
import styled from "styled-components/native";

const containerWidth = Dimensions.get("window").width - 40;

export const ContentContainer = styled.View`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px 0;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XXL}px`};

  text-align: center;
`;

export const StyledImage = styled.Image`
  width: ${containerWidth}px;
  height: ${containerWidth * 0.6}px;
`;
