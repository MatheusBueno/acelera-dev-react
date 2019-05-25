import { repositoryTypes } from "./";

const fetchUserRepositories = ({ query }) => ({
  type: repositoryTypes.FETCH_REPOSITORIES_REQUEST,
  payload: { query }
});

const fetchUserRepositoriesSuccess = payload => ({
  type: repositoryTypes.FETCH_REPOSITORIES_SUCCESS,
  payload
});

const fetchUserRepositoriesFailure = ({ message }) => ({
  type: repositoryTypes.FETCH_REPOSITORIES_FAILURE,
  payload: { message }
});

export default {
  fetchUserRepositories,
  fetchUserRepositoriesSuccess,
  fetchUserRepositoriesFailure
};
