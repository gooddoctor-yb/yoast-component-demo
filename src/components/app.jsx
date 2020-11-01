import { hot } from "react-hot-loader";
import Demo from "./demo";

import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
          <div className="ml-6 pt-1">
            <h4 className="text-xl text-gray-900 leading-tight">hello</h4>
            <p className="text-base text-gray-600 leading-normal">You have a new message!</p>
          </div>
        </div>

        <div>
          <Demo />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
