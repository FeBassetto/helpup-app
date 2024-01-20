import { storageSignUpSave } from "@storage/storageSignUp";
import { SIGNUPTYPES } from "@store/actions/signUpActions";
import { SecondSignUpResponse } from "@store/types/signUp";
import { call, takeLatest } from "redux-saga/effects";

function* secondPartSaga({ payload }: SecondSignUpResponse) {
  const data = payload;

  yield call(storageSignUpSave, data);
}

export function* watchSecondPartSaga() {
  yield takeLatest(SIGNUPTYPES.SECOND_PART, secondPartSaga);
}
