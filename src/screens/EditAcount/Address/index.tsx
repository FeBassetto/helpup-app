import { useState } from "react";
import { CenterContainer } from "../styles";
import { showError } from "@utils/showError";
import useCepQuery, { CepApiResponse } from "@hooks/useCepQuery";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useMutation, useQueryClient } from "react-query";
import { updateUserData } from "@services/user/updateUserData";
import { processApiResponse } from "@utils/processApiResponse";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";

interface AddressProps {
  cep: string;
}

export function Address({ cep }: AddressProps) {
  const [cepResults, setCepResults] = useState<any>(null);
  const [newCep, setNewCep] = useState(cep);
  const [newNeighborhood, setNewNeighborhood] = useState("");
  const [newStreet, setNewStreet] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const queryClient = useQueryClient();
  const { token } = useSelector((state: RootState) => state.auth);

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

    setNewNeighborhood(data.bairro);
    setNewCity(data.localidade);
    setNewStreet(data.logradouro);
    setCepResults(data);
  };

  useCepQuery({ cep: newCep, onError: onErrorCep, onSuccess: onSuccesCep });

  const { mutate, isLoading } = useMutation(updateUserData, {
    onSuccess: (data) => {
      const { error } = processApiResponse({
        apiData: data,
        defaultErrorMessage: "Ocorreu um erro, tente novamente mais tarde!",
        successMessage: "Dados atualizados com sucesso!",
      });

      if (!error) {
        queryClient.refetchQueries(["meProfile"]);
      }
    },
    onError: () => {
      showError(
        "Não foi possível executar a ação, tente novamente mais tarde!"
      );
    },
  });

  return (
    <CenterContainer>
      <Input
        onTextChange={setNewCep}
        placeholder="CEP"
        keyboardType="numeric"
        value={newCep}
        hasText={!!newCep}
      />
      <Input
        onTextChange={setNewNeighborhood}
        placeholder="Bairro"
        editable={cepResults !== null}
        value={newNeighborhood}
        hasText={!!newNeighborhood}
      />
      <Input
        onTextChange={setNewStreet}
        placeholder="Rua"
        editable={cepResults !== null}
        value={newStreet}
        hasText={!!newStreet}
      />
      <Input
        onTextChange={setNewCity}
        placeholder="Cidade"
        editable={cepResults !== null}
        value={newCity}
        hasText={!!newCity}
      />
      <Input
        onTextChange={setNewNumber}
        placeholder="Número"
        editable={cepResults !== null}
        value={newNumber}
        hasText={!!newNumber}
      />
      <Button
        background="dark"
        onPress={() => {
          mutate({
            cep: newCep,
            city: newCity,
            neighborhood: newNeighborhood,
            number: newNumber,
            street: newStreet,
            token,
          });
        }}
        value="Salvar"
        isLoading={isLoading}
      />
    </CenterContainer>
  );
}
