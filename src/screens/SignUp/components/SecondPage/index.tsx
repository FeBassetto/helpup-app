import React, { useEffect, useState } from "react";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/reducer";
import { ChildContainer } from "@screens/SignUp/styles";
import {
  backStep,
  nextStep,
  setSecondPart,
} from "@store/actions/signUpActions";
import { showError } from "@utils/showError";
import { registerService } from "@services/auth/register";
import useCepQuery, { CepApiResponse } from "@hooks/useCepQuery";
import { parseValidationErrors } from "@utils/parseValidationErrors";
import { ScrollViewProps } from "react-native";

type AddressFields = "cep" | "neighborhood" | "street" | "city" | "number";

type AddressFormState = {
  [key in AddressFields]: string;
};

type Props = ScrollViewProps;

export function SecondPage(props: Props) {
  const formState = useSelector(({ signUp }: RootState) => signUp);

  const [cepResults, setCepResults] = useState<any>(null);
  const [form, setForm] = useState<AddressFormState>({
    cep: formState.cep || "",
    neighborhood: formState.neighborhood || "",
    street: formState.street || "",
    city: formState.city || "",
    number: String(formState.number || ""),
  });

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const onErrorCep = () => {
    showError(
      "Ops! Não encontramos um endereço para este CEP. Por favor, verifique se o CEP está correto e tente novamente. Se preferir, você pode inserir o endereço manualmente."
    );
    setCepResults(false);
  };

  const onSuccesCep = (data: CepApiResponse | null) => {
    if (data === null) {
      showError(
        "Ops! Não encontramos um endereço para este CEP. Por favor, verifique se o CEP está correto e tente novamente. Se preferir, você pode inserir o endereço manualmente."
      );

      return setCepResults(false);
    }

    setCepResults(data);
    setForm((state) => ({
      ...state,
      street: data.logradouro,
      city: data.localidade,
      neighborhood: data.bairro,
      number: "",
    }));
  };

  useCepQuery({ cep: form.cep, onError: onErrorCep, onSuccess: onSuccesCep });

  const validateForm = () => {
    if (
      !form.cep ||
      !form.neighborhood ||
      !form.street ||
      !form.city ||
      form.number === ""
    ) {
      return "Por favor, preencha todos os campos.";
    }

    if (!/^\d{8}$/.test(form.cep)) {
      return "CEP inválido. Deve conter 8 dígitos.";
    }

    const numberValue = parseInt(form.number, 10);
    if (isNaN(numberValue) || numberValue < 0) {
      return "Número inválido. Deve ser um número não negativo.";
    }

    return null;
  };

  const handleNextStep = async () => {
    setIsLoading(true);

    const errorMessage = validateForm();
    if (errorMessage) {
      showError(errorMessage);
      return setIsLoading(false);
    }

    dispatch(
      setSecondPart({
        cep: form.cep,
        city: form.city,
        neighborhood: form.neighborhood,
        number: Number(form.number),
        street: form.street,
      })
    );

    const { actualStep, lastStep, steps, ...payload } = formState;

    const response = await registerService({
      ...payload,
      cep: form.cep,
      city: form.city,
      neighborhood: form.neighborhood,
      number: Number(form.number),
      street: form.street,
    });

    setIsLoading(false);

    if (response.data.error) {
      showError(response.data.message);

      if (
        response.data.type === "ACCOUNT_EMAIL_ALREADY_EXISTS" ||
        response.data.type === "ACCOUNT_NICK_ALREADY_EXISTS"
      ) {
        dispatch(backStep());
      }

      return;
    }

    if (response.data.issues) {
      const validationMessage = parseValidationErrors(response.data);
      return showError(validationMessage);
    }

    if (response.status === 201) {
      dispatch(nextStep());
    } else {
      showError(
        "Tivemos um erro ao criar sua conta. Tente preencher as informações novamente!"
      );
    }
  };

  useEffect(() => {
    if (form.cep.length !== 8) {
      setForm((state) => ({
        cep: state.cep,
        city: "",
        neighborhood: "",
        number: "",
        street: "",
      }));
      setCepResults(null);
    }
  }, [form.cep]);

  const renderInput = (field: AddressFields, placeholder: string) => {
    const handleInputChange = (field: AddressFields) => (value: string) => {
      setForm({ ...form, [field]: value });
    };

    return (
      <Input
        onTextChange={handleInputChange(field)}
        value={form[field]}
        placeholder={placeholder}
        hasText={!!form[field]?.length}
        editable={cepResults !== null ? true : field === "cep" ? true : false}
        maxLength={field === "cep" ? 8 : undefined}
        keyboardType={
          field === "cep" || field == "number" ? "numeric" : "default"
        }
      />
    );
  };

  return (
    <ChildContainer {...props}>
      {renderInput("cep", "CEP")}
      {renderInput("neighborhood", "Bairro")}
      {renderInput("street", "Rua")}
      {renderInput("city", "Cidade")}
      {renderInput("number", "Número")}
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
        onPress={() => dispatch(backStep())}
        value="Voltar"
        disabled={isLoading}
      />
    </ChildContainer>
  );
}
