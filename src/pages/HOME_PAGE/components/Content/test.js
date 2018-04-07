import React from "react";
import ReactDOM from "react-dom";
import HomePage from ".";
import Content from ".";

describe("Content Component", () => {
  it("Content component loaded without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Content />, div);
  });
});
