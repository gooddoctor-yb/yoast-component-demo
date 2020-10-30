import { hot } from "react-hot-loader";

import React, { Component } from "react";

export default class Demo extends Component {
  render() {
    return (
      <div>
        Demo
        <br />
        <div>
          <form>
            <div>
              <label>名称</label>
              <input name="username" />
            </div>
            <div>
              <label>性别</label>
              <input name="gender" />
            </div>
            <div>
              <label>年龄</label>
              <input name="age" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
