import { Component } from "react";
import "./dashboard.css";
class Dashboard extends Component {
  render() {
    return (
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
    );
  }
}

export default Dashboard;
