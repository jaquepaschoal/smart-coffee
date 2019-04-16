import { all, takeLatest } from "redux-saga/effects";

import { Types as LoginTypes } from "../ducks/login";
import { makeLogin } from "./login";

import { Types as RecipesTypes } from "../ducks/recipes";
import { getRecipes } from "./recipes";

export default function* rootSaga() {
  yield all([
    takeLatest(LoginTypes.ADD_USER_REQUEST, makeLogin),
    takeLatest(RecipesTypes.GET_REQUEST, getRecipes)
  ]);
}
