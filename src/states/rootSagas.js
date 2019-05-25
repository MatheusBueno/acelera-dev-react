import { all } from "redux-saga/effects";

import { usersSaga } from "./users";
import { repositorySaga } from "./repos";

export default function* rootSagas() {
  yield all([usersSaga(), repositorySaga()]);
}
