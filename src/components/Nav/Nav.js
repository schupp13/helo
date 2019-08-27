import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    console.log(console.log(this.props.location.pathname));
    let path = this.props.location.pathname;
    return path !== "/" ? (
      <div className={"navBar"}>
        <div className={"logo"}>
          <h1>Helo</h1>
          <p>{path}</p>
        </div>
        <div className={"navOptions"}>
          <buttton>Home</buttton>
          <buttton>New Post</buttton>
          <buttton>Logout</buttton>
        </div>
      </div>
    ) : null;
  }
}

export default Nav;
