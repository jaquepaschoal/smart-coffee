import api from "../../services/api";
import { call, put } from "redux-saga/effects";

import { Creators as LoginActions } from "../ducks/login";
// import { push } from "react-router-dom";

export function* makeLogin(action) {
  try {
    const { name, email, code } = action.payload;
    const response = yield call(api.post, "/clients", {
      name: name,
      email: email,
      coupon_code: code
    });
    // push("/recipe");
    yield put(LoginActions.addUserSuccess(response.data));
  } catch (err) {
    console.log("Could not insert client.");
  }
}
