import styled from "styled-components/native";

export const ContentContainer = styled.View`
  flex: 1;

  padding: 20px 20px 0px 20px;
`;

export const CenterContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
    alignItems: "center",
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const FullContainer = styled.View`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;
