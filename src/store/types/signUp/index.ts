import { SIGNUPTYPES } from "@store/actions/signUpActions";

export interface SignUpState {
  steps: string[];
  actualStep: number;
  lastStep: number | null;
  name: string;
  nick: string;
  email: string;
  password: string;
  cep: string;
  neighborhood: string;
  city: string;
  number?: number;
  street: string;
}

export interface FirstSignUpRequest {
  name: string;
  nick: string;
  email: string;
  password: string;
}

export interface SecondSignUpRequest {
  cep: string;
  neighborhood: string;
  city: string;
  number: number;
  street: string;
}

export interface FetchStorageRequest {
  actualStep?: number;
  name?: string;
  nick?: string;
  email?: string;
  password?: string;
  cep?: string;
  neighborhood?: string;
  city?: string;
  number?: number;
}

export interface FirstSignUpResponse {
  type: typeof SIGNUPTYPES.FIRST_PART;
  payload: FirstSignUpRequest;
}

export interface SecondSignUpResponse {
  type: typeof SIGNUPTYPES.SECOND_PART;
  payload: SecondSignUpRequest;
}

export interface BackStepResponse {
  type: typeof SIGNUPTYPES.BACK_STEP;
  payload: null;
}

export interface NextStepResponde {
  type: typeof SIGNUPTYPES.NEXT_STEP;
  payload: null;
}

export interface FetchStorageResponse {
  type: typeof SIGNUPTYPES.FETCH_STORAGE;
  payload: FetchStorageRequest;
}

export type SignUpActions =
  | FirstSignUpResponse
  | BackStepResponse
  | FetchStorageResponse
  | NextStepResponde
  | SecondSignUpResponse;
