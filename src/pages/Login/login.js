import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    token: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.state]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:5000/login", userData)
      .then((res) => {
        this.setState({ token: res.data.token });
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.log(err));
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
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="user-box">
              <input
                type="text"
                name="email"
                required=""
                onChange={this.handleChange}
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                required=""
                onChange={this.handleChange}
              />
              <label>Password</label>
            </div>
            <Link to="/dashboard" className="hoverable">
              Login
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
