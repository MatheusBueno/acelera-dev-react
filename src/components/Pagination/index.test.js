import React from 'react';
import { render } from 'react-testing-library';
import Pagination from './index';

describe('Pagination Component', () => {
  it('Should render component without crashes', () => {
    const wrapper = render(<Pagination />);
    expect(wrapper).toBeTruthy();
  });
});