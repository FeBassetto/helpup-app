import { MapPin } from "phosphor-react-native";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const widthScreen = Dimensions.get("window").width;

export const Container = styled.View`
  flex: 1;

  width: 100%;
`;

export const ContentContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
    alignItems: "center",
  },
  showsVerticalScrollIndicator: false,
})`
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.BOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XXXL}px`};

  text-align: center;
`;

export const ProfileImage = styled.Image`
  width: 200px;
  height: 200px;

  margin-top: 20px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.MEDIUM};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XL}px`};

  text-align: center;
  line-height: 30px;

  margin-top: 20px;
`;

export const FullContainer = styled.View`
  flex: 1;

  width: 100%;

  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoContentStyledImage = styled.Image`
  width: ${widthScreen / 1.5}px;
  height: ${widthScreen / 1.5}px;
`;

export const NoContentStyledText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.MEDIUM};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XL}px`};
  text-align: center;

  margin: 20px 0px;
`;

export const InformationContainer = styled.View`
  width: 100%;
  height: 50px;

  margin: 10px 0;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

export const StyledMapPin = styled(MapPin).attrs(({ theme }) => ({
  color: theme.COLORS.PURPLE_300,
  weight: "fill",
  size: 32,
}))``;

export const Information = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.MEDIUM};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XL}px`};

  text-align: center;
  margin-left: 5px;
`;
