import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';
import store from './store.js';

describe('store testing', () => {
  it('Should render provider with store', () => {
    const wrapper = render(<Provider store={store}></Provider>);
    expect(wrapper).toBeTruthy();
  });
});