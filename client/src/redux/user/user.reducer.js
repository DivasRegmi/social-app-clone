import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  activeUser: false,
  errors: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        activeUser: action.payLoad,
      };
    case UserActionTypes.SET_ERRORS:
      return {
        ...state,
        Errors: action.payLoad,
      };

    default:
      return state;
  }
};

export default userReducer;
