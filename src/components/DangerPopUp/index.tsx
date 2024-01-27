import { Button } from "@components/Button";
import { ButtonsContainer, Container, PopUp, Title } from "./styles";
import theme from "@theme/index";

export function DangerPopUp() {
  // TODO: criar reducer e actions para o POPUP

  return (
    <Container>
      <PopUp>
        <Title>Deseja excluir sua conta?</Title>
        <ButtonsContainer>
          <Button
            background="light"
            onPress={() => {}}
            value="Sim"
            style={{
              width: 100,
              backgroundColor: theme.COLORS.RED,
              marginRight: 20,
            }}
          />
          <Button
            background="light"
            onPress={() => {}}
            value="Não"
            style={{ width: 100 }}
          />
        </ButtonsContainer>
      </PopUp>
    </Container>
  );
}
