import { call, put, takeLatest } from "redux-saga/effects";

import { repositoryTypes, repositoryActions } from "./";
import RepositoryService from "../../services/repository";

function* fetchRepositories(action) {
  try {
    const response = yield call(RepositoryService.getUserRepositories, {
      username: action.payload.query
    });

    yield put(repositoryActions.fetchUserRepositoriesSuccess(response.data));
  } catch (err) {
    yield put(repositoryActions.fetchUserRepositoriesFailure(err));
  }
}

function* reposSaga() {
  yield takeLatest(
    repositoryTypes.FETCH_REPOSITORIES_REQUEST,
    fetchRepositories
  );
}

export default reposSaga;
