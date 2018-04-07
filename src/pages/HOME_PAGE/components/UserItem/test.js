import React from "react";
import ReactDOM from "react-dom";
import UserItem from ".";

import users from '../../../../utils/users-list.js';

describe("HOME_PAGE", () => {
  it("(UserItem) component loaded without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<UserItem info={[{first_name: '1'}]}/>, div);
  });

  it("(UserItem) has non empty default users list", () => {
    expect(users.length).toBeGreaterThanOrEqual(1);
  });
});
