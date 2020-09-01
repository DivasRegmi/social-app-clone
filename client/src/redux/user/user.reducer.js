import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  activeUser: false,
  errors: { err: false },
  userInfo: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        activeUser: action.payLoad,
      };
    case UserActionTypes.SET_LOGOUT:
      return {
        ...state,
        activeUser: action.payLoad,
      };
    case UserActionTypes.SET_ERRORS:
      return {
        ...state,
        errors: action.payLoad,
      };
    case UserActionTypes.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payLoad,
      };

    default:
      return state;
  }
};

export default userReducer;
