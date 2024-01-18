import { storageAuthTokenSave } from "@storage/storageAuthToken";
import { USERTYPES } from "@store/actions/authActions";
import { LoginResponse } from "@store/types/auth";
import { call, takeLatest } from "redux-saga/effects";

function* loginSaga({ payload }: LoginResponse) {
  const { token, refreshToken } = payload;

  yield call(storageAuthTokenSave, { token, refreshToken });
}

export function* watchLoginSaga() {
  yield takeLatest(USERTYPES.LOGIN, loginSaga);
}
