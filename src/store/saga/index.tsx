import { all, fork } from "redux-saga/effects";
import { watchLoginSaga } from "./auth/loginSaga";

export default function* rootSaga() {
  yield all([fork(watchLoginSaga)]);
}
