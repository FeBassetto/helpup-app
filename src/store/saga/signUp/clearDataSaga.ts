import { storageSignUpDataDelete } from "@storage/storageSignUp";
import { SIGNUPTYPES } from "@store/actions/signUpActions";
import { call, takeLatest } from "redux-saga/effects";

function* clearDataSaga() {
  yield call(storageSignUpDataDelete);
}

export function* watchClearDataSaga() {
  yield takeLatest(SIGNUPTYPES.CLEAR_DATA, clearDataSaga);
}
