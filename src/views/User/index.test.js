import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';
import configureMockStore from 'redux-mock-store';
import User from './index';

import usersMock from '../../states/users/users.mock.json';
import reposMock from '../../states/repos/repos.mock.json';

const mockStore = configureMockStore();
const store = mockStore({ users: { user: usersMock.items[0] }, repos: { repositories: reposMock.items, filter: "" } });

HTMLCanvasElement.prototype.getContext = jest.fn();

describe('User Component', () => {
  it('Should render component without crashes', () => {
    const wrapper = render(<Provider store={store}><User /></Provider>);
    expect(wrapper).toBeTruthy();
  });
});