import React, { lazy, Suspense } from "react";

import { makeStyles } from "@material-ui/core";
const SignIn = lazy(() => import("../../components/signInAndSignUp/SignIn"));
const SignUp = lazy(() => import("../../components/signInAndSignUp/SignUp"));

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "86vh",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  signIn: {
    [theme.breakpoints.up("md")]: {
      transform: "translate(0, -95px)",
      width: "50%",
    },
  },
  signUp: {
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
}));

function LoginPage() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.signIn}>
        <Suspense fallback={<div></div>}>
          <SignIn />
        </Suspense>
      </div>
      <div className={classes.signUp}>
        <Suspense fallback={<div></div>}>
          <SignUp />
        </Suspense>
      </div>
    </div>
  );
}

export default LoginPage;
