import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Pagination from './index';

const onPageMock = jest.fn();

afterEach(() => {
  cleanup();
  onPageMock.mockClear();
});

describe('Pagination Component', () => {
  it('Should render component without crashes', () => {
    const wrapper = render(<Pagination />);
    expect(wrapper).toBeTruthy();
  });

  it('Should render component with props', () => {
    const wrapper = render(<Pagination pages={5} page={2} onPaginate={onPageMock} />);
    expect(wrapper).toBeTruthy();
  });

  it('Should have a prev button', () => {
    const { getByTestId } = render(<Pagination pages={5} page={2} onPaginate={onPageMock} />);
    const prevButton = getByTestId('pagination-prev');
    fireEvent.click(prevButton);
    expect(prevButton.children.length).toBe(1);
    expect(onPageMock.mock.calls.length).toBe(1);
  });

  it('Should have a prev button same page', () => {
    const { getByTestId } = render(<Pagination pages={5} page={1} onPaginate={onPageMock} />);
    const prevButton = getByTestId('pagination-prev');
    fireEvent.click(prevButton);
    expect(prevButton.children.length).toBe(1);
    expect(onPageMock.mock.calls.length).toBe(1);
  });

  it('Should have a next button', () => {
    const { getByTestId } = render(<Pagination pages={5} page={2} onPaginate={onPageMock} />);
    const nextButton = getByTestId('pagination-next');
    fireEvent.click(nextButton);
    expect(nextButton.children.length).toBe(1);
    expect(onPageMock.mock.calls.length).toBe(1);
  });

  it('Should have a next button same page', () => {
    const { getByTestId } = render(<Pagination pages={5} page={5} onPaginate={onPageMock} />);
    const nextButton = getByTestId('pagination-next');
    fireEvent.click(nextButton);
    expect(nextButton.children.length).toBe(1);
    expect(onPageMock.mock.calls.length).toBe(1);
  });

  it('Should click a page component', () => {
    const { getByTestId } = render(<Pagination pages={5} page={1} onPaginate={onPageMock} />);
    const button = getByTestId('pagination-2');
    fireEvent.click(button);
    expect(onPageMock.mock.calls.length).toBe(1);
  });
});