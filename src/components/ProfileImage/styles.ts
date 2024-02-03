import { PencilSimple } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 200px;
  height: 200px;

  margin: 20px 0;

  border-radius: 100px;
  position: relative;

  overflow: hidden;
`;

export const EditContainer = styled.View`
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 8;
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 100px;
`;

export const StyledPencil = styled(PencilSimple).attrs(({ theme }) => ({
  color: "black",
  size: 32,
  weight: "fill",
}))``;
