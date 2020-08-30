import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core";
import SignIn from "../../components/signInAndSignUp/SignIn";
import SignUp from "../../components/signInAndSignUp/SignUp";

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


function LoginPage({ user }) {
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("SignUp is ready to close", () => { console.log("listern");});
  }, []);

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user]);

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

const mapStateToProp = (state) => ({
  user: state.user.activeUser,
});

export default connect(mapStateToProp, null)(LoginPage);
