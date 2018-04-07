import React from "react";
import ReactDOM from "react-dom";
import EditUserProfile from ".";

it("EDIT_USER_PROFILE page loaded without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EditUserProfile />, div);
});
