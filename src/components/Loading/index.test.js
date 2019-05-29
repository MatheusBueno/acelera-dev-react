import React from 'react';
import { render } from 'react-testing-library';
import Loading from './index';

describe('Loading Component', () => {
  it('Should render component without crashes', () => {
    const wrapper = render(<Loading />);
    expect(wrapper).toBeTruthy();
  });
});