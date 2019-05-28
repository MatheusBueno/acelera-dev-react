import React from "react";
import { MemoryRouter } from 'react-router-dom';
import { render } from "react-testing-library";
import RepositoryList from "./index";

describe("RepositoryList Component", () => {
  it("Should render component without crashes", () => {
    const wrapper = render(<MemoryRouter><RepositoryList /></MemoryRouter>);
    expect(wrapper).toBeTruthy();
  });
});
