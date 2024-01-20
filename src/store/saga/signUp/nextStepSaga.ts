import { storageSignUpSave } from "@storage/storageSignUp";
import { SIGNUPTYPES } from "@store/actions/signUpActions";
import { RootState } from "@store/reducer";
import { call, select, takeLatest } from "redux-saga/effects";

function* nextStepSaga() {
  const actualStep: number = yield select(
    ({ signUp }: RootState) => signUp.actualStep
  );

  yield call(storageSignUpSave, { actualStep: actualStep });
}

export function* watchNextStepSaga() {
  yield takeLatest(SIGNUPTYPES.NEXT_STEP, nextStepSaga);
}
