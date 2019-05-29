import React from 'react';
import { render } from 'react-testing-library';
import Sidebar from './index';

describe('Sidebar Component', () => {
  it('Should render component without crashes', () => {
    const wrapper = render(<Sidebar />);
    expect(wrapper).toBeTruthy();
  });

  it('Should render component with params', () => {
    const wrapper = render(<Sidebar user={{ avatar_url: 'test', login: 'test' }} />);
    expect(wrapper).toBeTruthy();
  });
});