import React from "react";
import ReactDOM from "react-dom";
import Login from ".";

it("LOGIN page loaded without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Login />, div);
});
