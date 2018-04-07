import React from "react";
import ReactDOM from "react-dom";
import Content from ".";

describe("HOME_PAGE", () => {
  it("(Content) component loaded without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Content />, div);
  });
});
