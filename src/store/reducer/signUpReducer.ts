import { FirstSignUpResponse } from "@store/types/signUp";

const initialState = {
  steps: ["Dados Pessoais", "Dados de Endereço", "Confirmar Email"],
  actualStep: 1,
};

export function signUpReducer(
  state = initialState,
  { payload, type }: FirstSignUpResponse
) {
  switch (type) {
    default:
      return state;
  }
}
