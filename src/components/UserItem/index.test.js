import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from 'react-testing-library';
import UserItem from './index';

describe('UserItem Component', () => {
  it('Should render component without crashes', () => {
    const wrapper = render(<MemoryRouter><UserItem /></MemoryRouter>);
    expect(wrapper).toBeTruthy();
  });
});