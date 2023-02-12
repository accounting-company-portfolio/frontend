import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import "../dashboard.css";
class Addadmin extends Component {
  state = {
    admins: [],
  };

  handleShowForm = () => {
    this.setState({ showForm: true });
  };

  handleCloseForm = () => {
    this.setState({ showForm: false });
  };

  handleChange = (e) => {
    this.setState({ [e.target.FirstName]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { FirstName, LastName, email, password } = this.state;
    axios
      .post("http://localhost:5000/dasboard/add", {
        FirstName,
        LastName,
        email,
        password,
      })
      .then((response) => {
        this.setState({
          admins: [...this.state.admins, response.data.response],
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { showForm } = this.state;
    return (
      <div>
        <button onClick={this.handleShowForm} className="add-button btn">
          Add
        </button>
        {showForm && (
          <form onSubmit={this.handleSubmit} className="add-form">
            <table>
              <tr>
                <td>
                  <label>First Name</label>
                </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    FirstName="FirstName"
                    onChange={this.handleChange}
                    placeholder="Name"
                    className="profileInputBox"
                  />
                </td>
              </tr>
              <td>
                <label>Last Name</label>
              </td>
              <td>
                <input
                  type="text"
                  LastName="LastName"
                  onChange={this.handleChange}
                  placeholder="lastname"
                  className="profileInputBox"
                />
              </td>
              <tr>
                <td>
                  <label>Email</label>
                </td>
                <td>
                  {" "}
                  <input
                    type="email"
                    email="email"
                    onChange={this.handleChange}
                    placeholder="Email"
                    className="profileInputBox"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>password</label>
                </td>
                <td>
                  <input
                    type="password"
                    password="password"
                    onChange={this.handleChange}
                    placeholder="put your password"
                    className="profileInputBox"
                  />
                </td>
              </tr>
              <tr>
                {" "}
                <td>
                  {" "}
                  <button type="submit" className="btn">
                    <FontAwesomeIcon icon={faPenSquare} />
                    Submit
                  </button>
                </td>
                <td>
                  <button onClick={this.handleCloseForm} className="btn">
                    Close
                  </button>
                </td>
              </tr>
            </table>
          </form>
        )}
      </div>
    );
  }
}

export default Addadmin;
