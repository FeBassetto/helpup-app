// useCepQuery.js
import { useQuery } from "react-query";
import { fetchCepData } from "@services/cep";

export interface CepApiResponse {
  logradouro: string;
  localidade: string;
  bairro: string;
}

interface UseCepQueryParams {
  cep: string;
  onSuccess: (data: CepApiResponse | null) => void;
  onError: () => void;
}

const useCepQuery = ({ cep, onError, onSuccess }: UseCepQueryParams) => {
  return useQuery(["cepData", cep], () => fetchCepData(cep), {
    enabled: cep.length === 8,
    onSuccess,
    onError,
  });
};

export default useCepQuery;
