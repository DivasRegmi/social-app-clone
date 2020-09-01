import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";

import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
