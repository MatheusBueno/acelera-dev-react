import React from "react";
import { render, cleanup, fireEvent } from 'react-testing-library';
import Header from "./";

afterEach(cleanup);

const handleSearchMock = jest.fn();

describe('Header tests', () => {
  it("renders without crashing", () => {
    const wrapper = render(<Header />);
    expect(wrapper).toBeTruthy();
  });

  it("renders without crashing with props", () => {
    const wrapper = render(<Header isSearching={true} />);
    expect(wrapper).toBeTruthy();
  });
  
  it('Should click search', () => {
    const { getByText, container } = render(<Header handleSearch={handleSearchMock} />);
    const btn = getByText('Search');
    fireEvent.click(btn);
    expect(btn.textContent).toBe('Search');
  });
});

