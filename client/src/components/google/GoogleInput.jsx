import React from "react";

import ErrorIcon from "@material-ui/icons/Error";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { TextField } from "@material-ui/core";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { ListItem, List, ListItemIcon, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: "2px",
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
}));

const GoogleInput = ({ values, setValues, errors }) => {
  const classes = useStyles();
  const { next } = values;

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div>
        {next === "1" ? (
          <List>
            <ListItem classes={{ root: classes.margin }}>
              <TextField
                error={errors.email ? true : false}
                id="outlined-password-input"
                label="Email or phone"
                type="text"
                value={values.email}
                onChange={handleChange("email")}
                autoComplete="current-password"
                variant="outlined"
                fullWidth
              />
            </ListItem>
            {errors.email ? (
              <ListItem classes={{ root: classes.margin }}>
                <ListItemIcon classes={{ root: classes.listItemIcon }}>
                  <ErrorIcon
                    classes={{ root: classes.icon }}
                    color="error"
                  />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.error }}
                  primary="Enter a valid email or phone number"
                />
              </ListItem>
            ) : null}
          </List>
        ) : null}

        {next === "2" ? (
          <List>
            <ListItem classes={{ root: classes.margin }}>
              <FormControl
                style={{ border: "black" }}
                variant="outlined"
                fullWidth
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Enter your password
                </InputLabel>
                <OutlinedInput
                  error={errors.password ? true : false}
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        disableRipple
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={150}
                />
              </FormControl>
            </ListItem>
            {errors.password ? (
              <ListItem classes={{ root: classes.margin }}>
                <ListItemIcon classes={{ root: classes.listItemIcon }}>
                  <ErrorIcon classes={{ root: classes.icon }} color="error" />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.error }}
                  primary="Wrong password. Try again or click Forgot password to reset it."
                />
              </ListItem>
            ) : null}
          </List>
        ) : null}
      </div>
    </div>
  );
};

export default GoogleInput;
