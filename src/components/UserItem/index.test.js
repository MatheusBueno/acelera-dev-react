import React from 'react';
import { render } from 'react-testing-library';
import UserItem from './index';

describe('UserItem Component', () => {
  it('Should render component without crashes', () => {
    const wrapper = render(<UserItem />);
    expect(wrapper).toBeTruthy();
  });
});