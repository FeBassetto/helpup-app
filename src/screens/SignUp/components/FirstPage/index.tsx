import React, { useState } from "react";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setFirstPart } from "@store/actions/signUpActions";
import { RootState } from "@store/reducer";
import Toast from "react-native-toast-message";
import { ChildContainer } from "@screens/SignUp/styles";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

type FormFields =
  | "name"
  | "nickname"
  | "email"
  | "password"
  | "confirmPassword";

type FormState = {
  [key in FormFields]: string;
};

export function FirstPage() {
  const initialFormState = useSelector(({ signUp }: RootState) => signUp);
  const [form, setForm] = useState<FormState>({
    name: initialFormState.name || "",
    nickname: initialFormState.nick || "",
    email: initialFormState.email || "",
    password: initialFormState.password || "",
    confirmPassword: initialFormState.password || "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const dispatch = useDispatch();

  const handleInputChange = (field: FormFields) => (value: string) => {
    setForm({ ...form, [field]: value });
  };

  const showError = (message: string) => {
    setIsLoading(false);
    Toast.show({
      text1: message,
      type: "info",
    });
  };

  const validateForm = () => {
    if (form.name.length < 6 || form.name.length > 100) {
      return "O nome deve ter entre 6 e 100 caracteres.";
    }

    if (form.nickname.length < 3 || form.nickname.length > 30) {
      return "O apelido deve ter entre 3 e 30 caracteres.";
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(form.email)) {
      return "E-mail inválido.";
    }

    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    if (form.password.length < 6) {
      return "A senha deve ter pelo menos 6 caracteres.";
    }
    if (!passwordRegex.test(form.password)) {
      return "A senha deve conter pelo menos uma letra maiúscula e um número.";
    }

    if (form.password !== form.confirmPassword) {
      return "As senhas não coincidem.";
    }

    return null;
  };

  const handleNextStep = () => {
    const errorMessage = validateForm();
    if (errorMessage) {
      showError(errorMessage);
      return;
    }

    setIsLoading(true);
    dispatch(
      setFirstPart({
        name: form.name,
        nick: form.nickname,
        email: form.email,
        password: form.password,
      })
    );
  };

  const renderInput = (
    field: FormFields,
    placeholder: string,
    isPassword: boolean = false
  ) => (
    <Input
      onTextChange={handleInputChange(field)}
      value={form[field]}
      placeholder={placeholder}
      isPassword={isPassword}
      hasText={!!form[field].length}
    />
  );

  return (
    <ChildContainer>
      {renderInput("name", "Nome Completo")}
      {renderInput("nickname", "Apelido")}
      {renderInput("email", "Email")}
      {renderInput("password", "Senha", true)}
      {renderInput("confirmPassword", "Confirme a senha", true)}
      <Button
        background="dark"
        onPress={handleNextStep}
        value="Próximo"
        isLoading={isLoading}
        style={{ marginBottom: 10 }}
      />
      <Button
        background="dark"
        outline
        onPress={() => navigation.navigate("signIn")}
        value="Voltar"
        disabled={isLoading}
      />
    </ChildContainer>
  );
}
