import React from "react";
import ReactDOM from "react-dom";
import ListOfUsers from ".";

describe("HOME_PAGE", () => {
  it("(ListOfUsers) component loaded without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ListOfUsers />, div);
  });
});
