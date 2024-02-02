import { all, fork } from "redux-saga/effects";
import { watchLoginSaga } from "./auth/loginSaga";
import { watchFirstPartSaga } from "./signUp/firstPartSaga";
import { watchBackStepSaga } from "./signUp/backStepSaga";
import { watchSecondPartSaga } from "./signUp/secondPartSaga";
import { watchNextStepSaga } from "./signUp/nextStepSaga";
import { watchClearDataSaga } from "./signUp/clearDataSaga";
import { watchLogOutSaga } from "./auth/logOutSaga";

export default function* rootSaga() {
  yield all([fork(watchLoginSaga)]);
  yield all([fork(watchFirstPartSaga)]);
  yield all([fork(watchSecondPartSaga)]);
  yield all([fork(watchBackStepSaga)]);
  yield all([fork(watchNextStepSaga)]);
  yield all([fork(watchClearDataSaga)]);
  yield all([fork(watchLogOutSaga)]);
}
