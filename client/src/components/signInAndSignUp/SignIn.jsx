import React, { useState } from "react";
import { connect } from "react-redux";

import { setErrors, setLogin } from "../../redux/user/user.action";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = ({ errors, setErrors, logIn }) => {
  const classes = useStyles();
  const [userCrediential, setUserCrediential] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCrediential({ ...userCrediential, [name]: [value] });

    if (errors.err) {
      setErrors({
        ...errors,
        err: false,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: userCrediential.email.toString(),
      password: userCrediential.password.toString(),
    };

    logIn(user);

    if (errors.email) {
      setUserCrediential({ ...userCrediential, email: "" });
    }

    if (errors.password) {
      setUserCrediential({ ...userCrediential, password: "" });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={userCrediential.email}
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <FormHelperText error={errors.err}>{errors.email}</FormHelperText>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={userCrediential.password}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <FormHelperText error={errors.err}>{errors.password}</FormHelperText>

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  errors: state.user.errors,
});

const mapDispatchToProps = (dispatch) => ({
  setErrors: (errors) => dispatch(setErrors(errors)),
  logIn: (user) => dispatch(setLogin(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
