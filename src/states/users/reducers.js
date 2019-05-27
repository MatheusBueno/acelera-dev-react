import { usersTypes } from './';

const INITIAL_STATE = {
  users: [],
  user: null,
  pages: 0,
  page: 1,
  limit: 6,
  error: null,
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case usersTypes.FETCH_USERS_REQUEST:
      return { ...state, isLoading: true };
    case usersTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pages: Math.ceil(action.payload.items.length / state.limit),
        page: 1,
        users: [...action.payload.items]
      };
    case usersTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        users: [],
        isLoading: false,
        error: action.payload.message
      };
    case usersTypes.SELECT_USER:
      return { ...state, user: action.payload.user };
    case usersTypes.CHANGE_PAGINATION: {
      return { ...state, page: action.payload.page };
    }
    default:
      return state;
  }
};
