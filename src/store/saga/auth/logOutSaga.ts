import { storageAuthTokenRemove } from "@storage/storageAuthToken";
import { AUTHTYPES } from "@store/actions/authActions";
import { call, takeLatest } from "redux-saga/effects";

function* logOutSaga() {
  yield call(storageAuthTokenRemove);
}

export function* watchLogOutSaga() {
  yield takeLatest(AUTHTYPES.CLEAR_AUTH, logOutSaga);
}
