import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import * as actionCreators from "../actions";

// let finalCreateStore = compose(applyMiddleware(thunk, createLogger()))(createStore);

export default function configureStore(initialState = { todos: [], user: {} }) {
  const enhancer =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ actionCreators, serialize: true, trace: true });
  if (!enhancer) {
    console.warn(
      "Install Redux DevTools Extension to inspect the app state: " +
        "https://github.com/zalmoxisus/redux-devtools-extension#installation"
    );
  }

  const store = applyMiddleware(thunk, createLogger())(createStore)(rootReducer, initialState, enhancer);
  // store(rootReducer, initialState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      store.replaceReducer(require("../reducers").default);
    });
  }

  return store;

  // return finalCreateStore(rootReducer, initialState);
}
