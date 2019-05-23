import React from "react";
import { render } from "react-testing-library";
import RepositoryDetail from "./index";

describe("RepositoryDetail Component", () => {
  it("Should render component without crashes", () => {
    const wrapper = render(<RepositoryDetail />);
    expect(wrapper).toBeTruthy();
  });
});
