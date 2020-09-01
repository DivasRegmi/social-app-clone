import React, { lazy, Suspense } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Header from "./components/headerAndFooter/Header";
import Footer from "./components/headerAndFooter/Footer";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const LoginPage = lazy(() => import("./pages/login/LoginPage"));
const Google = lazy(() => import("./components/google/Google"));
const Facebook = lazy(() => import("./components/facebook/Facebook"));
const Main = lazy(() => import("./pages/main/Main"));
const Error = lazy(() => import("./pages/Error"));

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

      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/main" component={Main} />

          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/facebook/signup" component={Facebook} />
          <Route exact path="/google/signup" component={Google} />
          <Route exact path="*" component={Error} />
        </Switch>
      </Suspense>
      {headerFooter() ? <Footer /> : ""}
    </div>
  );
}

export default withRouter(App);
