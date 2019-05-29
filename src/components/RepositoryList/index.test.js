import React from "react";
import { MemoryRouter } from 'react-router-dom';
import { render } from "react-testing-library";
import RepositoryList from "./index";

describe("RepositoryList Component", () => {
  it("Should render component without crashes", () => {
    const wrapper = render(<MemoryRouter><RepositoryList /></MemoryRouter>);
    expect(wrapper).toBeTruthy();
  });

  it("Should render component with props", () => {
    const repositoriesList = [{ id: 1, language: 'javascript' }];
    const wrapper = render(<MemoryRouter><RepositoryList repositoriesList={repositoriesList} /></MemoryRouter>);
    expect(wrapper).toBeTruthy();
  });
});
