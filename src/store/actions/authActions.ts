import { AuthRequest } from "@store/types/auth";

export const AUTHTYPES = {
  LOGIN: "LOGIN",
  FETCH_STORAGE: "FETCH_STORAGE_AUTH",
  CLEAR_AUTH: "CLEAR_AUTH",
};

export const login = (payload: AuthRequest) => ({
  type: AUTHTYPES.LOGIN,
  payload,
});

export const fetchStorageAuth = (payload: AuthRequest) => ({
  type: AUTHTYPES.FETCH_STORAGE,
  payload,
});

export const logOut = () => ({
  type: AUTHTYPES.CLEAR_AUTH,
});
