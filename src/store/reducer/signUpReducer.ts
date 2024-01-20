import { SIGNUPTYPES } from "@store/actions/signUpActions";
import {
  FirstSignUpResponse,
  SecondSignUpResponse,
  SignUpActions,
  SignUpState,
} from "@store/types/signUp";

const initialState: SignUpState = {
  steps: ["Dados Pessoais", "Dados de Endereço", "Confirmar Email"],
  actualStep: 1,
  lastStep: null,
  email: "",
  name: "",
  nick: "",
  password: "",
  cep: "",
  city: "",
  neighborhood: "",
  number: undefined,
  street: "",
};

export function signUpReducer(
  state = initialState,
  action: SignUpActions
): SignUpState {
  switch (action.type) {
    case SIGNUPTYPES.FIRST_PART:
      const { payload: firstPayload } = action as FirstSignUpResponse;
      return {
        ...state,
        name: firstPayload.name,
        nick: firstPayload.nick,
        email: firstPayload.email,
        password: firstPayload.password,
        actualStep: 2,
        lastStep: 1,
      };
    case SIGNUPTYPES.SECOND_PART:
      const { payload: secondPayload } = action as SecondSignUpResponse;
      return {
        ...state,
        cep: secondPayload.cep,
        city: secondPayload.city,
        neighborhood: secondPayload.neighborhood,
        number: secondPayload.number,
        street: secondPayload.street,
      };
    case SIGNUPTYPES.BACK_STEP:
      return {
        ...state,
        actualStep: state.actualStep - 1,
        lastStep: state.actualStep,
      };
    case SIGNUPTYPES.NEXT_STEP:
      return {
        ...state,
        actualStep: state.actualStep + 1,
        lastStep: state.actualStep,
      };
    case SIGNUPTYPES.FETCH_STORAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
