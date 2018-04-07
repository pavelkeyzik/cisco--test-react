import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./components/App";
import "./index.css";

// Importing Pages
import Login from "./pages/LOGIN";
import SignUp from "./pages/SIGN_UP";
import UserProfile from "./pages/USER_PROFILE";
import HomePage from "./pages/HOME_PAGE";
import EditUserProfile from "./pages/EDIT_USER_PROFILE";

// Importing Providers
import AppProvider from "./providers/AppProvider";

ReactDOM.render(
  <AppProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/sign_up">
          <SignUp />
        </Route>
        <Route path="/user_profile">
          <UserProfile />
        </Route>
        <Route path="/home_page">
          <HomePage />
        </Route>
        <Route path="/edit_user_profile">
          <EditUserProfile />
        </Route>
      </Switch>
    </BrowserRouter>
  </AppProvider>,
  document.getElementById("root")
);
