import { Component } from "react";
import "./login.css";
class Login extends Component {
  render() {
    return (
      <div className="page_container">
      <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required=""/>
          <label>Email</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required=""/>
          <label>Password</label>
        </div>
        <a href="/">
          Login
        </a>
      </form>
    </div>
    </div>
    );
  }
}

export default Login;
