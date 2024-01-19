import { Button } from "@components/Button";
import { Container } from "./styles";
import { Input } from "@components/Input";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import Toast from "react-native-toast-message";

export function FirstPage() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const showError = (title: string) => {
    setIsLoading(false);
    return Toast.show({
      text1: title,
      type: "info",
    });
  };

  const handleNextStep = () => {
    if (name.length < 6 || name.length > 100) {
      return showError("O nome deve ter entre 6 e 100 caracteres.");
    }

    if (nickname.length < 3 || nickname.length > 30) {
      return showError("O apelido deve ter entre 3 e 30 caracteres.");
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      return showError("E-mail inválido.");
    }

    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    if (password.length < 6) {
      return showError("A senha deve ter pelo menos 6 caracteres.");
    }
    if (!passwordRegex.test(password)) {
      return showError(
        "A senha deve conter pelo menos uma letra maiúscula e um número."
      );
    }

    if (password !== confirmPassword) {
      return showError("As senhas não coincidem.");
    }
  };

  return (
    <Container>
      <Input onTextChange={setName} value={name} placeholder="Nome Completo" />
      <Input
        onTextChange={setNickname}
        value={nickname}
        placeholder="Apelido"
      />
      <Input onTextChange={setEmail} value={email} placeholder="Email" />
      <Input
        onTextChange={setPassword}
        value={password}
        placeholder="Senha"
        isPassword
      />
      <Input
        onTextChange={setConfirmPassword}
        value={confirmPassword}
        placeholder="Confirme a senha"
        isPassword
      />
      <Button
        background="dark"
        onPress={handleNextStep}
        value="Próximo"
        style={{ marginBottom: 10 }}
        isLoading={isLoading}
      />
      <Button
        background="dark"
        outline
        onPress={() => navigation.navigate("signIn")}
        value="Voltar"
        disabled={isLoading}
      />
    </Container>
  );
}
