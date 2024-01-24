import { USERTYPES } from "@store/actions/authActions";
import { AuthActions, AuthState } from "@store/types/auth";

const initialState: AuthState = {
  token: "",
  refreshToken: "",
};

export function authReducer(
  state = initialState,
  { payload, type }: AuthActions
) {
  switch (type) {
    case USERTYPES.LOGIN:
      return {
        ...state,
        refreshToken: payload.refreshToken,
        token: payload.token,
      };
    case USERTYPES.FETCH_STORAGE:
      return {
        ...state,
        refreshToken: payload.refreshToken,
        token: payload.token,
      };
    default:
      return state;
  }
}
