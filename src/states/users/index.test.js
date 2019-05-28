import { usersActions, usersSelectors, usersTypes, usersSaga } from './';
import reducer from './';
import usersMock from './users.mock.json';

describe('Users actions', () => {
  it('Should create an action to fetch users', () => {
    const expectedAction = {
      type: usersTypes.FETCH_USERS_REQUEST,
      payload: { query: 'anderson' }
    };
    expect(usersActions.fetchUsers({ query: 'anderson' })).toEqual(expectedAction);
  });

  it('Should create an action to fetch users with success', () => {
    const expectedAction = {
      type: usersTypes.FETCH_USERS_SUCCESS,
      payload: { items: [] }
    };
    expect(usersActions.fetchUsersSuccess({ items: [] })).toEqual(expectedAction);
  });

  it('Should create an action to fetch users with failure', () => {
    const expectedAction = {
      type: usersTypes.FETCH_USERS_FAILURE,
      payload: { message: 'Error' }
    };
    expect(usersActions.fetchUsersFailure({ message: 'Error' })).toEqual(expectedAction);
  });
  
  it('Should create an action to select user', () => {
    const expectedAction = {
      type: usersTypes.SELECT_USER,
      payload: { user: {} }
    };
    expect(usersActions.selectUser({ user: {} })).toEqual(expectedAction);
  });

  it('Should create an action to fetch users', () => {
    const expectedAction = {
      type: usersTypes.CHANGE_PAGINATION,
      payload: { page: 1 }
    };
    expect(usersActions.paginate({ page: 1 })).toEqual(expectedAction);
  });
});

describe('Users reducer', () => {
  
  let state;

  beforeEach(() => {
    state = reducer(undefined, {});
  });

  it('Should return store equals initial state', () => {
    const expectedState = {
      users: [],
      user: null,
      pages: 0,
      page: 1,
      limit: 6,
      error: null,
      isLoading: false
    };
    expect(state).toEqual(expectedState);
  });

  it('Should handle FETCH_USERS_REQUEST ', () => {
    const action = { type: usersTypes.FETCH_USERS_REQUEST }
    const expectedState = { ...state, isLoading: true };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('Should handle FETCH_USERS_SUCCESS', () => {
    const action = { type: usersTypes.FETCH_USERS_SUCCESS, payload: { items: [...usersMock.items] } }
    const expectedState = { ...state, isLoading: false, pages: 5, users: [...usersMock.items] };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('Should handle FETCH_USERS_FAILURE', () => {
    const action = { type: usersTypes.FETCH_USERS_FAILURE, payload: { message: 'Error on fetch users.' } }
    const expectedState = { ...state, isLoading: false, error: 'Error on fetch users.' };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('Should handle SELECT_USER', () => {
    const action = { type: usersTypes.SELECT_USER, payload: { user: usersMock.items[0] } }
    const expectedState = { ...state, user: usersMock.items[0] };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('Should handle CHANGE_PAGINATION', () => {
    const action = { type: usersTypes.CHANGE_PAGINATION, payload: { page: 1 } }
    const expectedState = { ...state, page: 1 };
    expect(reducer(state, action)).toEqual(expectedState);
  });
});

describe('Users selectors', () => {

  let state;

  beforeEach(() => {
    state = reducer(undefined, usersActions.fetchUsersSuccess(usersMock));
  });

  it('Should select first six users', () => {
    const expectedUsers = usersMock.items.slice(0, 6);
    expect(usersSelectors.selectUsers(state)).toEqual(expectedUsers);
  });

  it('Should select user', () => {
    const expectedUser = usersMock.items[0];
    state = reducer(state, usersActions.selectUser({ user: expectedUser }));
    expect(usersSelectors.selectUser(state)).toEqual(expectedUser);
  });

  it('Should select pagination', () => {
    const expectedPagination = { pages: 5, page: 1, limit: 6 };
    expect(usersSelectors.selectPagination(state)).toEqual(expectedPagination);
  });
});

describe('Users sagas', () => {});