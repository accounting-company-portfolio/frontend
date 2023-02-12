import { Component } from "react";
import "../dashboard.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../sidebar";
class Messages extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/contact/")
      .then((response) => {
        this.setState({ users: response.data.response });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { users } = this.state;

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
              <th>Message</th>
            </tr>

            {users.map((user) => (
              <tr key={user.id}>
                <td className="msg-name"> {user.name}</td>
                <td className="msg-email"> {user.email}</td>
                <td className="msg-text">({user.message})</td>
              </tr>
            ))}
          
            <tr >
              <td colspan="3" className="crud-buttons">
               
             
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

export default Messages;
