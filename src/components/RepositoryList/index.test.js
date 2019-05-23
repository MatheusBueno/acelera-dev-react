import React from "react";
import { render } from "react-testing-library";
import RepositoryList from "./index";

describe("RepositoryList Component", () => {
  it("Should render component without crashes", () => {
    const wrapper = render(<RepositoryList />);
    expect(wrapper).toBeTruthy();
  });
});
