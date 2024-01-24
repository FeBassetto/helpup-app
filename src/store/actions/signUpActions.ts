import {
  FetchStorageRequest,
  FirstSignUpRequest,
  SecondSignUpRequest,
} from "@store/types/signUp";

export const SIGNUPTYPES = {
  FIRST_PART: "FIRST_PART",
  SECOND_PART: "SECOND_PART",
  BACK_STEP: "BACK_STEP",
  NEXT_STEP: "NEXT_STEP",
  FETCH_STORAGE: "FETCH_STORAGE_SIGNUP",
  CLEAR_DATA: "CLEAR_DATA",
};

export const setFirstPart = (payload: FirstSignUpRequest) => ({
  type: SIGNUPTYPES.FIRST_PART,
  payload,
});

export const setSecondPart = (payload: SecondSignUpRequest) => ({
  type: SIGNUPTYPES.SECOND_PART,
  payload,
});

export const backStep = () => ({
  type: SIGNUPTYPES.BACK_STEP,
});

export const nextStep = () => ({
  type: SIGNUPTYPES.NEXT_STEP,
});

export const fetchStorageSignUp = (payload: FetchStorageRequest) => ({
  type: SIGNUPTYPES.FETCH_STORAGE,
  payload,
});

export const clearSignUpData = () => ({
  type: SIGNUPTYPES.CLEAR_DATA,
});
