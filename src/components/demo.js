import { hot } from "react-hot-loader";

import React, { Component } from "react";

export default class Demo extends Component {
  render() {
    return (
      <div className="container mx-auto">
        <form className="space-y-4">
          <div>
            <label>姓名 : </label>
            <input className="ml-3 border border-purple-600 rounded bg-yellow-200" name="username" />
          </div>
          <div>
            <label>性别 : </label>
            <input className="ml-3 border border-purple-600 rounded bg-yellow-200" name="gender" />
          </div>
          <div>
            <label>年龄 : </label>
            <input className="ml-3 border border-purple-600 rounded bg-yellow-200" name="age" />
          </div>
          <div>
            <label>Email : </label>
            <input className="ml-3 border border-purple-600 rounded bg-yellow-200" name="age" />
          </div>
        </form>
      </div>
    );
  }
}
