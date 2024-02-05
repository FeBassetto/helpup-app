import { Input } from "@components/Input";
import { Container, Title } from "./styles";
import { useState } from "react";
import { Button } from "@components/Button";
import { useMutation } from "react-query";
import { updateUserPassword } from "@services/user/updatePassword";
import { processApiResponse } from "@utils/processApiResponse";
import { useNavigation } from "@react-navigation/native";
import { showError } from "@utils/showError";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";

export function UpdatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setNewPassword] = useState("");

  const { token } = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation();

  const { mutate, isLoading } = useMutation(updateUserPassword, {
    onSuccess: (data) => {
      const { error } = processApiResponse({
        apiData: data,
        defaultErrorMessage: "Ocorreu um erro, tente novamente mais tarde!",
        successMessage: "Senha alterada com sucesso!",
      });

      if (!error) {
        navigation.goBack();
      }
    },
    onError: () => {
      showError(
        "Não foi possível editar sua senha, tente novamente mais tarde!"
      );

      navigation.goBack();
    },
  });

  return (
    <Container>
      <Title>Porfavor digite sua nova senha e confirme-a</Title>
      <Input onTextChange={setPassword} placeholder="Senha" isPassword />
      <Input
        onTextChange={setNewPassword}
        placeholder="Confirme a senha"
        isPassword
      />
      <Button
        background="dark"
        onPress={() => {
          mutate({ confirm_password: confirmPassword, password, token });
        }}
        value="Trocar senha"
        isLoading={isLoading}
      />
    </Container>
  );
}
