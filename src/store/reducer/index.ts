import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { signUpReducer } from "./signUpReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  signUp: signUpReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
