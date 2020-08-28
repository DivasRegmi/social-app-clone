import { UserActionTypes } from "./user.types";
import axios from "axios";



export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payLoad: user
});
export const setErrors = (errors) => ({
  type: UserActionTypes.SET_ERRORS,
  payLoad: errors
});

export const login = (dispatch) => () => {
 
  axios
  .post("/api/users/login", user)
  .then(() => dispatch(setCurrentUser(true)))
  .catch((err) => dispatch(setErrors(err.response.data)) ) 

};