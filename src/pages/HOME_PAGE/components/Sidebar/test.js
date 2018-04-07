import React from "react";
import ReactDOM from "react-dom";
import Sidebar from ".";

describe("HOME_PAGE", () => {
  it("(Sidebar) component loaded without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Sidebar />, div);
  });
});
