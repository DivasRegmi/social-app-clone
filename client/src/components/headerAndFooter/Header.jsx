import React from "react";
import { connect } from "react-redux";

import { setLogOut } from "../../redux/user/user.action";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  black: {
    // background: '#151515'
  },

  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  ml: {
    marginLeft: "auto",
  },
}));

function Header({ history, user, logOut }) {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.black}>
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography variant="h6">Crypto Mine</Typography>
        </Link>

        <Link to="/login" className={classNames(classes.link, classes.ml)}>
          <Button onClick={() => logOut()}>{user ? "Logout" : "Login"}</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProp = (state) => ({
  user: state.user.activeUser,
});

const mapDispatchToProp = (dispatch) => ({
  logOut: () => dispatch(setLogOut()),
});

export default connect(mapStateToProp, mapDispatchToProp)(Header);
