import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

import "./index.css";

let initialState = {
  todos: [
    {
      id: 0,
      completed: false,
      text: "Initial todo for demo purposes",
    },
  ],
  user: {
    username: "kurt",
    id: 13,
  },
};

let store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("content")
);
