import React from "react";
import { MemoryRouter } from 'react-router-dom';
import { render } from "react-testing-library";
import RepositoryDetail from "./index";

describe("RepositoryDetail Component", () => {
  it("Should render component without crashes", () => {
    const wrapper = render(<MemoryRouter><RepositoryDetail /></MemoryRouter>);
    expect(wrapper).toBeTruthy();
  });
});
