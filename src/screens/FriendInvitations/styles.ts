import { Dimensions } from "react-native";
import styled from "styled-components/native";

const widthScreen = Dimensions.get("window").width;

export const Container = styled.View`
  flex: 1;
`;

export const ContentContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XXL}px`};

  text-align: center;

  margin-top: 20px;
`;

export const SecureContainer = styled.View`
  flex: 1;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled.Image`
  width: ${widthScreen / 1.5}px;
  height: ${widthScreen / 1.5}px;
`;
