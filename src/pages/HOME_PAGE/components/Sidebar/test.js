import React from "react";
import ReactDOM from "react-dom";
import HomePage from ".";
import Sidebar from ".";

describe("Sidebar ComponentHOME_PAGE", () => {
  it("Sidebar component loaded without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Sidebar />, div);
  });
});
