import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Header from "./components/headerAndFooter/Header";
import Footer from "./components/headerAndFooter/Footer";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";

import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Facebook from "./components/facebook/Facebook";
import Google from "./components/google/Google";

library.add(fab);

function App({ location }) {
  const headerFooter = () => {
    if (location.pathname === "/facebook/signup") return false;
    if (location.pathname === "/google/signup") return false;
    if (location.pathname === "/instagram/signup") return false;

    return true;
  };
  return (
    <div>
      {headerFooter() ? <Header /> : ""}

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/facebook/signup" component={Facebook} />
        <Route exact path="/google/signup" component={Google} />
      </Switch>
      {headerFooter() ? <Footer /> : ""}
    </div>
  );
}

export default withRouter(App);
