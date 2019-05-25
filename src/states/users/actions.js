import { usersTypes } from "./";

const fetchUsers = ({ query }) => ({
  type: usersTypes.FETCH_USERS_REQUEST,
  payload: { query }
});

const fetchUsersSuccess = payload => ({
  type: usersTypes.FETCH_USERS_SUCCESS,
  payload
});

const fetchUsersFailure = ({ message }) => ({
  type: usersTypes.FETCH_USERS_FAILURE,
  payload: { message }
});

const selectUser = ({ user }) => ({
  type: usersTypes.SELECT_USER,
  payload: { user }
});

export default {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
  selectUser
};
