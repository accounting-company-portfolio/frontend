import React, { Component } from "react";
import axios from "axios";
import "./login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    token: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("http://localhost:5000/login", userData)
      .then(res => {
        this.setState({ token: res.data.token });
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token) {
      this.setState({ token });
    }
  }

  render() {
    return (
      <div className="page_container">
        <div class="login-box">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div class="user-box">
              <input
                type="text"
                name="email"
                required=""
                onChange={this.handleChange}
              />
              <label>Email</label>
            </div>
            <div class="user-box">
              <input
                type="password"
                name="password"
                required=""
                onChange={this.handleChange}
              />
              <label>Password</label>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;