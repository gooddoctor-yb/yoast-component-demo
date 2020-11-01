import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import * as actionCreators from "../actions";

// let finalCreateStore = compose(applyMiddleware(thunk, createLogger()))(createStore);

export default function configureStore(initialState = { todos: [], user: {} }) {
  console.log("configureStore -> process.env.NODE_ENV", process.env.NODE_ENV);

  const enhancer =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ actionCreators, serialize: true, trace: true });
  if (!enhancer) {
    console.warn(
      "Install Redux DevTools Extension to inspect the app state: " +
        "https://github.com/zalmoxisus/redux-devtools-extension#installation"
    );
  }

  let store = applyMiddleware(thunk, createLogger())(createStore)(rootReducer, initialState, enhancer);
  if (process.env.NODE_ENV === "production") {
    store = applyMiddleware(thunk)(createStore)(rootReducer, initialState);
  }

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      store.replaceReducer(require("../reducers").default);
    });
  }

  return store;
}
