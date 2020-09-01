import { UserActionTypes } from "./user.types";
import axios from "axios";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payLoad: user,
});
export const setFirst = (boolFirst) => ({
  type: UserActionTypes.SET_FIRST,
  payLoad: boolFirst,
});
export const setErrors = (errors) => ({
  type: UserActionTypes.SET_ERRORS,
  payLoad: errors,
});
export const setUserInfo = (userInfo) => ({
  type: UserActionTypes.SET_USER_INFO,
  payLoad: userInfo,
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
  const register = (user, resolve, reject) => {
    axios
      .post("/api/users/register", user)
      .then(() => {
        dispatch(setLogin(user));
        resolve("ok");
        window.opener.location.reload();
        window.close();
      })
      .catch((err) => {
        dispatch(setErrors({ ...err.response.data, err: true }));
        reject(err);
      });
  };

  return new Promise((resolve, reject) => {
    axios
      .post("/api/users/login", user)
      .then(() => {
        dispatch(setCurrentUser(true));
        dispatch(setErrors({ err: false }));
        resolve("ok");
        window.opener.location.reload();
        window.close();
      })
      .catch((err) => {
        dispatch(setErrors({ ...err.response.data, err: true }));
        if (err.response.data.email === "User not found") {
          dispatch(setErrors({ err: false }));
          register(user, resolve, reject);
        } else {
          reject(err.response.data);
        }
      });
  });
};
