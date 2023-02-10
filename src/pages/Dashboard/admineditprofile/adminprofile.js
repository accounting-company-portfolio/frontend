import { Component } from "react";
import "../dashboard.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../sidebar";
class Adminprofile extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    title: "",
    notes: "",
  };
  componentDidMount() {
    axios.get("http://localhost:5000/dashboard/").then((res) => {
      const data = res.data;
      this.setState({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        title: data.title,
        notes: data.notes,
      });
    });
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      title: this.state.title,
      notes: this.state.notes,
    };

    axios.post("http://localhost:5000/dashboard/add", userData).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <div className="container">
        <div className="maindash">
          <Sidebar />
        </div>
        <section class="dashboard">
          <div class="top">
            <i class="uil uil-bars sidebar-toggle"></i>

            <div class="search-box">
              <i class="uil uil-search"></i>
              <input type="text" placeholder="Search here..." />
            </div>

            <img src="images/profile.jpg" alt="" />
          </div>

          <div class="dash-content">
            <div class="overview">
              <div class="title">
                <i class="uil uil-tachometer-fast-alt"></i>
                <span class="text">Main Information</span>
              </div>

              <div class="boxes"></div>
            </div>
            <div class="activity">
              <div class="activity-data">
                <div id="profilearea">
                  <div className="adminform" onSubmit={this.handleSubmit}>
                    <div id="editadmin">
                      <table>
                        <tbody>
                          <tr>
                            <td class="edit-title">FirstName:</td>
                            <td>
                              <input
                                type="text"
                                class="profileInputBox"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td class="edit-title">LastName:</td>
                            <td>
                              <input
                                type="text"
                                class="profileInputBox"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td class="edit-title">Email:</td>
                            <td>
                              <input
                                type="text"
                                class="profileInputBox"
                                value={this.state.email}
                                onChange={this.handleChange}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td class="edit-title">Password:</td>
                            <td>
                              <input
                                type="password"
                                name=""
                                required=""
                                class="profileInputBox"
                                value={this.state.password}
                                onChange={this.handleChange}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td class="edit-title">confirm Password:</td>
                            <td>
                              <input
                                type="password"
                                name=""
                                required=""
                                class="profileInputBox"
                                value={this.state.title}
                                onChange={this.handleChange}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div id="edit-area-right">
                      <table>
                        <tbody>
                          <tr>
                            <td class="edit-title">Тitle:</td>
                            <td>
                              <input type="text" class="profileInputBox" />
                            </td>
                          </tr>
                          <tr>
                            <td class="edit-title">Notes</td>
                            <td>
                              <textarea
                                className="notes"
                                rows="3"
                                cols="30"
                                value={this.state.notes}
                                onChange={this.handleChange}
                              ></textarea>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <button
                      className="adminbutton2"
                      onClick={this.handleSubmit}
                    >
                      <FontAwesomeIcon icon={faSave} />
                      &nbsp;&nbsp;Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Adminprofile;
