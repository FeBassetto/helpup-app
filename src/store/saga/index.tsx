import { all, fork } from "redux-saga/effects";
import { watchLoginSaga } from "./auth/loginSaga";
import { watchFirstPartSaga } from "./signUp/firstPartSaga";
import { watchBackStepSaga } from "./signUp/backStepSaga";
import { watchSecondPartSaga } from "./signUp/secondPartSaga";
import { watchNextStepSaga } from "./signUp/nextStepSaga";

export default function* rootSaga() {
  yield all([fork(watchLoginSaga)]);
  yield all([fork(watchFirstPartSaga)]);
  yield all([fork(watchSecondPartSaga)]);
  yield all([fork(watchBackStepSaga)]);
  yield all([fork(watchNextStepSaga)]);
}
