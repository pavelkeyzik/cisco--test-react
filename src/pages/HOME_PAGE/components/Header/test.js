import React from "react";
import ReactDOM from "react-dom";
import Header from ".";

describe("HOME_PAGE", () => {
  it("(Header) component loaded without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
  });
});
