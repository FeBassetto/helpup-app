import { SIGNUPTYPES } from "@store/actions/signUpActions";

export interface SignUpState {
  steps: string[];
  actualStep: number;
  name: string;
  nick: string;
  email: string;
  password: string;
}

export interface FirstSignUpRequest {
  name: string;
  nick: string;
  email: string;
  password: string;
}

export interface FirstSignUpResponse {
  type: typeof SIGNUPTYPES;
  payload: FirstSignUpRequest;
}

export type SignUpActions = FirstSignUpResponse;
