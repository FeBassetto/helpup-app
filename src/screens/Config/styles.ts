import { Bell, Password, UserCircle } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ContentContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    paddingTop: 0,
  },
  showsVerticalScrollIndicator: false,
})``;

export const ConfigContainer = styled.View`
  width: 100%;

  border-radius: 10px;

  margin-top: 20px;
`;

export const ConfigTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.XL}px`};

  margin-bottom: 10px;
`;

export const SettingsContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_50};
  border-radius: 10px;

  padding: 5px 20px;
`;

export const SettingInformationContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 100%;
  height: 50px;

  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const SettingText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MONTSERRAT.SEMIBOLD};
  font-size: ${({ theme }) => `${theme.FONT_SIZE.SM}px`};
  color: ${({ theme }) => theme.COLORS.PURPLE_500};

  margin-left: 20px;
`;
