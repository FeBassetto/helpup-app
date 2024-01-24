import { AuthRequest } from "@store/types/auth";

export const USERTYPES = {
  LOGIN: "LOGIN",
  FETCH_STORAGE: "FETCH_STORAGE_AUTH",
};

export const login = (payload: AuthRequest) => ({
  type: USERTYPES.LOGIN,
  payload,
});

export const fetchStorageAuth = (payload: AuthRequest) => ({
  type: USERTYPES.FETCH_STORAGE,
  payload,
});
