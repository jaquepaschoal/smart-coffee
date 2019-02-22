import { all, takeLatest } from "redux-saga/effects";

import { Types as LoginTypes } from "../ducks/login";
import { makeLogin } from "./login";

export default function* rootSaga() {
  yield all([takeLatest(LoginTypes.ADD_USER_REQUEST, makeLogin)]);
}
