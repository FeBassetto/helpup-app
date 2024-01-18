import { AuthRequest, LoginResponse } from "@store/types/auth";

export const USERTYPES = {
  LOGIN: "LOGIN",
};

export const login = (payload: AuthRequest) => ({
  type: USERTYPES.LOGIN,
  payload,
});
