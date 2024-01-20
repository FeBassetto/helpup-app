import { storageSignUpSave } from "@storage/storageSignUp";
import { SIGNUPTYPES } from "@store/actions/signUpActions";
import { FirstSignUpResponse } from "@store/types/signUp";
import { call, takeLatest } from "redux-saga/effects";

function* firstPartSaga({ payload }: FirstSignUpResponse) {
  const { email, name, nick, password } = payload;

  yield call(storageSignUpSave, { email, name, nick, password, actualStep: 2 });
}

export function* watchFirstPartSaga() {
  yield takeLatest(SIGNUPTYPES.FIRST_PART, firstPartSaga);
}
