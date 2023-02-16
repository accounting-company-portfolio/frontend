//
import { Component } from "react";
import "../dashboard.css";
import axios from "axios";
import  Addadmin  from "./addadmin.js"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../sidebar";
class Adminprofile extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/dashboard/")
      .then((response) => {
        this.setState({ data:response.data.response });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="container">
        <div className="maindash ">
          <Sidebar />
        </div>
        <div className="form-crud">
          <table className="contact-msg">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>password</th>
            </tr>

            {data.map((admin) => (
              <tr key={admin.id}>
                <td className="msg-name"> {admin.FirstName}&nbsp;{admin.LastName}</td>
                <td className="msg-email"> {admin.email}</td>
                <td className="msg-text">({admin.password})</td>
              </tr>
            ))}
          
            <tr >
              <td colspan="3" className="crud-buttons">
                <Addadmin/>
             
                <button type="button"className="edit-button btn">
                  <FontAwesomeIcon icon={faPlusSquare} />
                 Edit
                </button>
             
                <button type="button"className="delete-button btn">
                  <FontAwesomeIcon icon={faTrash} />
                  Delete
                </button>
              </td>
            </tr>
          </table>
         
        </div>
      </div>
    );
  }
}

export default Adminprofile;
