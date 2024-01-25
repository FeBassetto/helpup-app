import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { signUpReducer } from "./signUpReducer";
import { groupReducer } from "./groupReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  signUp: signUpReducer,
  group: groupReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
