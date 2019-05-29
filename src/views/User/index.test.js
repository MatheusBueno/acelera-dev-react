import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';
import configureMockStore from 'redux-mock-store';
import User from './index';

const mockStore = configureMockStore();
const store = mockStore({ users: { user: {} }, repos: { repositories: [] } });

HTMLCanvasElement.prototype.getContext = jest.fn();

describe('User Component', () => {
  it('Should render component without crashes', () => {
    const wrapper = render(<Provider store={store}><User /></Provider>);
    expect(wrapper).toBeTruthy();
  });
});