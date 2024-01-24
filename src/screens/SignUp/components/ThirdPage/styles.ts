import { RegisterBannerSvg } from "@assets/svgs/RegisterBanner";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const containerWidth = Dimensions.get("window").width - 40;

export const Container = styled(Animated.View)`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-bottom: 20px;
`;

export const ContentContainer = styled.View`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XXL}px`};

  text-align: center;

  margin-bottom: 40px;
`;

export const StyledImage = styled.Image`
  width: ${containerWidth}px;
  height: ${containerWidth * 0.6}px;
`;

export const StyledBanner = styled(RegisterBannerSvg)`
  width: 100%;
`;
