import { repositoryTypes } from "./";

const INITIAL_STATE = {
  repositories: [],
  pages: 0,
  page: 1,
  limit: 6,
  error: null,
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case repositoryTypes.FETCH_REPOSITORIES_REQUEST:
      return { ...state, isLoading: true };
    case repositoryTypes.FETCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pages: Math.ceil(action.payload.length / state.limit),
        page: 1,
        repositories: [...action.payload]
      };
    case repositoryTypes.FETCH_REPOSITORIES_FAILURE:
      return {
        ...state,
        users: [],
        isLoading: false,
        error: action.payload.message
      };
    default:
      return state;
  }
};
