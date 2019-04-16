import { createStore, compose, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import history from "../routes/history";
import createSagaMiddleware from "redux-saga";
import { combineReducers } from "redux";

import loginReducer from "../store/ducks/login";
import recipesReducer from "../store/ducks/recipes";
import sagas from "./sagas";

const rootReducer = combineReducers({
  router: connectRouter(history),
  login: loginReducer,
  recipes: recipesReducer
});

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const middlewares = [routerMiddleware(history)];
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middlewares.push(sagaMiddleware);

const createAppropriateStore =
  process.env.NODE_ENV === "development"
    ? console.tron.createStore
    : createStore;
const store = createAppropriateStore(
  connectRouter(history)(rootReducer),
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(sagas);

export default store;
