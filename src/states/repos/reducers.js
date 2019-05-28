import { repositoryTypes } from "./";

const INITIAL_STATE = {
  repositories: [],
  filter: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case repositoryTypes.FETCH_REPOSITORIES_REQUEST:
      return { ...state, isLoading: true };
    case repositoryTypes.FETCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositories: [...action.payload]
      };
    case repositoryTypes.FETCH_REPOSITORIES_FAILURE:
      return {
        ...state,
        users: [],
        error: action.payload.message
      };
    case repositoryTypes.FILTER_REPOSITORIES:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
