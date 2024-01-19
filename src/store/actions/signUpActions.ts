import { FirstSignUpRequest } from "@store/types/signUp";

export const SIGNUPTYPES = {
  FIRST_PART: "FIRST_PART",
};

export const setFirstPart = (payload: FirstSignUpRequest) => ({
  type: SIGNUPTYPES.FIRST_PART,
  payload,
});
