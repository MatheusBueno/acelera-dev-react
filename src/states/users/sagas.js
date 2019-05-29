import { call, put, takeLatest } from "redux-saga/effects";
import { usersActions, usersTypes } from "./";
import RepositoryService from "../../services/repository";

export function* fetchUsers(action) {
  try {
    const response = yield call(RepositoryService.searchUsers, {
      username: action.payload.query
    });
    yield put(usersActions.fetchUsersSuccess(response.data));
  } catch (err) {
    yield put(usersActions.fetchUsersFailure(err));
  }
}

function* userSaga() {
  yield takeLatest(usersTypes.FETCH_USERS_REQUEST, fetchUsers);
}

export default userSaga;
