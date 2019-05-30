import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, cleanup } from 'react-testing-library';
import UserItem from './index';

afterEach(cleanup);

const selectUserMock = jest.fn();

describe('UserItem Component', () => {
  it('Should render component without crashes', () => {
    const wrapper = render(<MemoryRouter><UserItem /></MemoryRouter>);
    expect(wrapper).toBeTruthy();
  });
  
  it('Should click user', () => {
    const { getByTestId } = render(<MemoryRouter><UserItem selectUser={selectUserMock} /></MemoryRouter>);
    fireEvent.click(getByTestId('user-component'));
    expect(selectUserMock.mock.calls.length).toBe(1);
  });
});