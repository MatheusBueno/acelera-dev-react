import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';
import configureMockStore from 'redux-mock-store';
import Router from './routes';

const mockStore = configureMockStore();
const store = mockStore({ users: { users: [], isLoading: false } });

HTMLCanvasElement.prototype.getContext = jest.fn();

describe('Routes', () => {
  it('Should render routes without crashes', () => {
    const wrapper = render(<Provider store={store}><Router /></Provider>);
    expect(wrapper).toBeTruthy();
  });
});