import { UserActionTypes } from "./user.types";
import axios from "axios";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payLoad: user,
});
export const setErrors = (errors) => ({
  type: UserActionTypes.SET_ERRORS,
  payLoad: errors,
});

export const setLogin = (user) => (dispatch) => {
  axios
    .post("/api/users/login", user)
    .then(() => {
      dispatch(setCurrentUser(true));
      dispatch(setErrors({ err: false }));
    })
    .catch((err) => {
      dispatch(setErrors({ ...err.response.data, err: true }));
    });
};

export const setLogOut = () => ({
  type: UserActionTypes.SET_LOGOUT,
  payLoad: false,
});

export const setSignUp = (user) => (dispatch) => {
  const register = (user) => {
    axios
      .post("/api/users/register", user)
      .then(() => {
        dispatch(setLogin(user));
        window.close();
      })
      .catch((err) => {
        dispatch(setErrors({ ...err.response.data, err: true }));
      });
  };

  axios
    .post("/api/users/login", user)
    .then(() => {
      dispatch(setCurrentUser(true));
      dispatch(setErrors({ err: false }));
      window.close();
    })
    .catch((err) => {
      dispatch(setErrors({ ...err.response.data, err: true }));
      if (err.response.data.email === "User not found") {
        register(user)
      }
    });
};
