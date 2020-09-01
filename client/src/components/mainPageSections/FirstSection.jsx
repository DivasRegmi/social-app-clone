import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import ErrorIcon from "@material-ui/icons/Error";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import Button from "@material-ui/core/Button";
import {
  Input,
  Typography,
  ListItemIcon,
  ListItem,
  ListItemText,
  Grid,
} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import { setUserInfo } from "../../redux/user/user.action";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    width: "auto",
    maxWidth: "1280px",
  },
  paper: {
    width: "80%",
    maxHeight: 435,
  },

  typography: {
    display: "inline-block",
    marginRight: "20px",
  },
  input: {
    marginLeft: "5px",
    padding: "0px",
  },

  error: {
    color: theme.palette.error.main,
    fontSize: "12px",
  },

  listItemIcon: {
    minWidth: "25px",
  },

  icon: {
    width: "16px",
    height: "16px",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    marginTop: " 10px",
  },
  userIcon: {
    width: "200px",
    height: "200px",
  },
  userInfo: {
    display: "flex",
    padding: "20px",

    [theme.breakpoints.up("sm")]: {
      margin: "10px",
      flexDirection: "column",
    },
  },
  userText: {
    margin: "20px 50px",
    // minWidth: "200px"
  },
  bitcoinInfo: {
    margin: "20px 10px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "50px",
    },
  },
}));

function ConfirmationDialogRaw({ open, setOpen, setUserInfo }) {
  const classes = useStyles();
  const [values, setValues] = useState({ name: "", invitedPerson: "" });
  const [errors, setErrors] = useState({ name: "", invitedPerson: "" });

  const handleOk = () => {
    const name = values.name.trim();
    const invitedPerson = values.invitedPerson.trim();
    if (name && invitedPerson) {
      setOpen(false);
      setUserInfo({ ...values });
    }
    if (!name) setErrors({ ...errors, name: "Invalid name" });
    if (!invitedPerson) setErrors({ ...errors, invitedPerson: "Invalid name" });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ name: "", invitedPerson: "" });
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      open={open}
    >
      <DialogTitle id="confirmation-dialog-title">
        Welcome to Crypto Mine
      </DialogTitle>
      <DialogContent dividers>
        {errors.name || errors.invitedPerson ? (
          <ListItem classes={{ root: classes.margin }}>
            <ListItemIcon classes={{ root: classes.listItemIcon }}>
              <ErrorIcon classes={{ root: classes.icon }} color="error" />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.error }}
              primary={errors.name ? errors.name : errors.invitedPerson}
            />
          </ListItem>
        ) : null}
        <div className={classes.flex}>
          <span style={{ display: "block", marginRight: "10px" }}>
            Your name?
          </span>

          <Input
            error={errors.name ? true : false}
            name="name"
            value={values.name}
            variant="filled"
            onChange={handleChange}
          />
        </div>

        <div className={classes.flex}>
          <span style={{ display: "block", marginRight: "10px" }}>
            Who invited you?
          </span>
          <Input
            error={errors.invitedPerson ? true : false}
            name="invitedPerson"
            value={values.invitedPerson}
            variant="filled"
            onChange={handleChange}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOk} color="primary">
          submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  open: PropTypes.bool.isRequired,
};

function FirstSection({ userInfo, setUserInfo }) {
  const classes = useStyles();
  const [open, setOpen] = useState(!userInfo ? true : false);

  const capitalize = (str, lower = false) =>
    (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
      match.toUpperCase()
    );
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={5}>
          <div className={classes.userInfo}>
            <AccountCircleIcon classes={{ root: classes.userIcon }} />

            <div className={classes.userText}>
              <Typography className={classes.online} variant="h6">
                Name: {userInfo.name ? capitalize(userInfo.name) : ""}
              </Typography>

              <Typography variant="h6">
                {" "}
                Friend:{" "}
                {userInfo.invitedPerson
                  ? capitalize(userInfo.invitedPerson)
                  : ""}
              </Typography>
              <Typography variant="h6"> Location: Nepal</Typography>
              <Typography variant="h6"> Earned: 0 Bitcoin</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={7}>
          <div className={classes.bitcoinInfo}>
            <Typography variant="body1" color="textSecondary">
              1 Bitcoin equals
            </Typography>
            <Typography variant="h2">1,399,442.34 </Typography>
            <Typography variant="h2">Nepalese Rupee </Typography>
          </div>
        </Grid>
      </Grid>

      <ConfirmationDialogRaw
        classes={{
          paper: classes.paper,
        }}
        id="who-invite-you"
        keepMounted
        open={open}
        setOpen={setOpen}
        setUserInfo={setUserInfo}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});
const mapDispatchToProps = (dispatch) => ({
  setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstSection);
