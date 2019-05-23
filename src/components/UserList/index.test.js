import React from 'react';
import { render } from 'react-testing-library';
import UserList from './index';

describe('UserList Component', () => {
  it('Should render component without crashes', () => {
    const wrapper = render(<UserList />);
    expect(wrapper).toBeTruthy();
  });
});