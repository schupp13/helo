import React, { Component } from "react";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    console.log(this.state.username, this.state.password);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Auth Commponent</h1>
        <label>
          username
          <input name={"username"} onChange={this.handleChange} />
        </label>
        <label>
          password
          <input name={"password"} onChange={this.handleChange} />
        </label>

        <button onClick={this.handleClick}>Register</button>

        <br></br>
        <br></br>
        <label>
          username
          <input name={"username"} onChange={this.handleChange} />
        </label>
        <label>
          password
          <input name={"password"} onChange={this.handleChange} />
        </label>

        <button onClick={this.handleClick}>Login</button>
      </div>
    );
  }
}

export default Auth;
