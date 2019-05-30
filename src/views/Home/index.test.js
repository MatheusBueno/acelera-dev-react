import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from 'react-testing-library';
import configureMockStore from 'redux-mock-store';
import Home from './index';
import usersMock from '../../states/users/users.mock.json';


afterEach(cleanup);

const mockStore = configureMockStore();
const store = mockStore({ users: { users: usersMock.items, pages: 5, page: 1, isLoading: false } });

HTMLCanvasElement.prototype.getContext = jest.fn();

describe('Home Component', () => {
  it('Should render component without crashes', () => {
    const wrapper = render(<Provider store={store}><Home /></Provider>);
    expect(wrapper).toBeTruthy();
  });

  it('Should click search', () => {
    const { getByText, getByTestId, container } = render(<Provider store={store}><Home /></Provider>);
    const btn = getByText('Search');
    fireEvent.click(btn);
    expect(btn.textContent).toBe('Search');
  });

  it('Should change input', () => {
    const { getByTestId, container } = render(<Provider store={store}><Home /></Provider>);
    const input = getByTestId('input');
    fireEvent.change(input, { target: { value: 'tom' } });
    expect(input.value).toBe('tom');
  });

  it('Should keypress input', () => {
    const { getByTestId, container } = render(<Provider store={store}><Home /></Provider>);
    const input = getByTestId('input');
    fireEvent.keyPress(input, { key: 'Enter', code: 13 });
    expect(input.value).toBe('');
  });

  it('Should click pagination', () => {
    const { getByTestId, container } = render(<Provider store={store}><Home /></Provider>);
    const btn = getByTestId('pagination-next');
    fireEvent.click(btn);
    expect(btn).toBeTruthy();
  });
});
