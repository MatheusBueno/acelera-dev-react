import { usersActions, usersTypes } from './';

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