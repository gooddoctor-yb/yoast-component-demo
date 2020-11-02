// import { hot } from "react-hot-loader/root";

import React, { Component } from "react";
// import TodoComponent from "./components/TodoComponent";
import SnippetEditor from "./components/SnippetEditorExample";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SnippetEditor />
      </div>
    );
  }
}

export default App;
