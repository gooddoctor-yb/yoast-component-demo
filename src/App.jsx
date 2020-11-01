// import { hot } from "react-hot-loader/root";

import React, { Component } from "react";
// import TodoComponent from "./components/TodoComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="max-w-sm mx-auto flex-col p-6 bg-white rounded-lg shadow-xl">
          <div className="ml-6 pt-1">
            <h4 className="text-xl text-gray-900 leading-tight">hello world</h4>
            <p className="text-base text-gray-600 leading-normal">You have a new message!</p>
          </div>
          <div className="flex items-center ml-6 mt-6">
            <label>Text1:</label>
            <input className="ml-3 border border-blue-400 rounded px-3 py-2" />
          </div>
        </div>
        {/* <TodoComponent /> */}
      </div>
    );
  }
}

export default App;
