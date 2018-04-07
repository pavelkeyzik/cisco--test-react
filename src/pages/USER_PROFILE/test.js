import React from "react";
import ReactDOM from "react-dom";
import UserProfile from ".";

it("USER_PROFILE page loaded without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserProfile />, div);
});
