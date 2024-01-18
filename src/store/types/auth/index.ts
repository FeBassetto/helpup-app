import { USERTYPES } from "@store/actions/authActions";

export interface AuthState {
  token: string;
  refreshToken: string;
}

export interface AuthRequest {
  token: string;
  refreshToken: string;
}

export interface LoginResponse {
  type: typeof USERTYPES.LOGIN;
  payload: AuthRequest;
}

export type AuthActions = LoginResponse;
