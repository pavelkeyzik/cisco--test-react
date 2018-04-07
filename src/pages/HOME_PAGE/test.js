import React from "react";
import ReactDOM from "react-dom";
import HomePage from ".";

describe("HOME_PAGE", () => {
  it("HOME_PAGE page loaded without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HomePage />, div);
  });
});
