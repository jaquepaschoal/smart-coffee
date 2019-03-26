import api from "../../services/api";
import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import { Creators as LoginActions } from "../ducks/login";

export function* makeLogin(action) {
  try {
    const { name, email, code } = action.payload;
    const response = yield call(api.post, "/clients", {
      name: name,
      email: email,
      coupon_code: code
    });
    push("../../pages/recipes");
    yield put(LoginActions.addUserSuccess(response.data));
  } catch (err) {
    console.log("Could not insert client.");
  }
}
