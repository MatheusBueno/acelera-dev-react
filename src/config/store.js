import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import Reactotron from "./reactotron";

import usersReducer from "../states/users";
import reposReducers from "../states/repos";

import rootSagas from "../states/rootSagas";

const rootReducer = combineReducers({
  users: usersReducer,
  repos: reposReducers
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  compose(
    composeEnhancers(applyMiddleware(sagaMiddleware)),
    Reactotron.createEnhancer()
  )
);
sagaMiddleware.run(rootSagas);

export default store;
