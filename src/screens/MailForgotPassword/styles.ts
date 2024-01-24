import { ResetPasswordBanner } from "@assets/svgs/ResetPasswordBanner";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const heightScreen = Dimensions.get("window").height;

export const Container = styled.View`
  flex: 1;

  width: 100%;

  display: flex;
  align-items: center;

  padding: 20px;
`;

export const ContentContainer = styled.View`
  flex: 1;

  width: 100%;
`;

export const Title = styled.Text`
  width: 100%;

  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XL}px`};

  text-align: center;

  margin-bottom: 20px;
`;

export const Banner = styled(ResetPasswordBanner).attrs({
  height: heightScreen / 2.25,
})`
  width: 10px;
`;
