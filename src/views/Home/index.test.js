import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';
import configureMockStore from 'redux-mock-store';
import Home from './index';

const mockStore = configureMockStore();
const store = mockStore({ users: { users: [], isLoading: false } });

HTMLCanvasElement.prototype.getContext = jest.fn();

describe('Home Component', () => {
  it('Should render component without crashes', () => {
    const wrapper = render(<Provider store={store}><Home /></Provider>);
    expect(wrapper).toBeTruthy();
  });
});