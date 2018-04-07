import React from "react";
import ReactDOM from "react-dom";
import SignUp from ".";

it("SIGN_UP page loaded without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SignUp />, div);
});
