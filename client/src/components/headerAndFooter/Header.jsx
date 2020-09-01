import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { setLogOut } from "../../redux/user/user.action";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

function Header({ user, logOut }) {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    if (user && window.confirm("Do you want to log Out?")) {
      logOut();
    }
    if (!user) {
      history.push("/login");
    }
  };
  const handleHome = () => {
    if (user) {
      history.push("/main");
    } else {
      setOpen(true);
      history.push("/login");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" className={classes.black}>
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography variant="h6">Crypto Mine</Typography>
        </Link>

        <nav className={classes.ml}>
          <Button style={{ color: "white" }} type="button" onClick={handleHome}>
            Home
          </Button>
          <Button
            style={{ color: "white" }}
            type="button"
            onClick={handleLogOut}
          >
            {user ? "Logout" : "Login"}
          </Button>
        </nav>

        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            elevation={6}
            variant="filled"
            severity="info"
            onClose={handleClose}
          >
            First, Please log in!
          </Alert>
        </Snackbar>
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
