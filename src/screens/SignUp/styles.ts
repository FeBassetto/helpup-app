import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  display: flex;
  align-items: center;

  padding: 20px;
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
