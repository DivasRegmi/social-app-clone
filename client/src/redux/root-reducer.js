import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "CryptoMine",
  storage,
  blacklist: ["user"],

};

const userConfig = {
  key: "user",
  storage,
  blacklist: ["errors"],
};

const rootReducer = combineReducers({
  // user: userReducer,
  user: persistReducer(userConfig, userReducer),
});

export default persistReducer(persistConfig, rootReducer);
