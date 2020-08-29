import React from "react";
import { makeStyles } from "@material-ui/core";
import SignIn from "../../components/signInAndSignUp/SignIn";
import SignUp from "../../components/signInAndSignUp/SignUp";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight:"86vh",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  signIn: {
    [theme.breakpoints.up("md")]: {
      transform: "translate(0, -95px)",
      width: "50%"
    },
  },
  signUp: {
    [theme.breakpoints.up("md")]: {
      width: "50%"
    },
  }
}));

function LoginPage() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.signIn}>
        <SignIn />
      </div>
      <div className={classes.signUp}>
        <SignUp />
      </div>
    </div>
  );
}

export default LoginPage;
