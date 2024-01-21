import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  display: flex;
  align-items: center;

  padding: 20px 20px 0 20px;
`;

export const ContentContainer = styled.View`
  flex: 1;

  width: 100%;
  height: 100%;
  position: relative;
`;

export const ChildContentContainer = styled(Animated.View)`
  flex: 1;

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

export const ChildContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
})`
  width: 100%;

  margin-top: 40px;
`;
