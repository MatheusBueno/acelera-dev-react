import React from "react";
import ReactDOM from "react-dom";
import Input from "./";

const onChangeMock = jest.fn();

describe('Input component', () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Input />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it("renders Input with value", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Input value={'Test'} onChange={onChangeMock} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

