import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import UserList from './index';
import usersMock from '../../states/users/users.mock.json';

describe('UserList Component', () => {
  it('Should render component without crashes', () => {
    const wrapper = render(<UserList />);
    expect(wrapper).toBeTruthy();
  });

  it('Should render component with users', () => {
    const wrapper = render(<MemoryRouter><UserList users={[usersMock.items[0]]} /></MemoryRouter>);
    expect(wrapper).toBeTruthy();
  });
});