import api from "../../services/api";
import { call, put } from "redux-saga/effects";
import { Creators as RecipesActions } from "../ducks/recipes";

export function* getRecipes() {
  try {
    const response = yield call(api.get, "/recipes");
    yield put(RecipesActions.getRecipesSuccess(response.data.recipes));
  } catch (err) {
    console.log("Could not get recipes.");
  }
}
