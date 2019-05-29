import React from 'react';
import { render } from 'react-testing-library';
import UsersBackground from './index';

HTMLCanvasElement.prototype.getContext = jest.fn()

describe('UsersBackground Component', () => {
  it('Should render component without crashes', () => {
    const wrapper = render(<UsersBackground />);
    expect(wrapper).toBeTruthy();
  });
});