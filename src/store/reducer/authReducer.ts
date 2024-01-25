import { AUTHTYPES } from "@store/actions/authActions";
import { AuthActions, AuthState } from "@store/types/auth";

const initialState: AuthState = {
  token: "",
  refreshToken: "",
};

export function authReducer(
  state = initialState,
  { payload, type }: AuthActions
): AuthState {
  switch (type) {
    case AUTHTYPES.LOGIN:
      return {
        ...state,
        refreshToken: payload.refreshToken,
        token: payload.token,
      };
    case AUTHTYPES.FETCH_STORAGE:
      return {
        ...state,
        refreshToken: payload.refreshToken,
        token: payload.token,
      };
    case AUTHTYPES.CLEAR_AUTH:
      return {
        ...state,
        refreshToken: "",
        token: "",
      };
    default:
      return state;
  }
}
