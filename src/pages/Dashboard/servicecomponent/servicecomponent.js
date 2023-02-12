import { Component } from "react";
import "../dashboard.css";
import axios from "axios";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faTrash ,faPenSquare} from '@fortawesome/free-solid-svg-icons'
import Sidebar from "../sidebar";
class Servicecomponent extends Component {
  state = {
    services: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/contact/")
      .then((response) => {
        this.setState({ services: response.data.response });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { services } = this.state;

    return (
      <div className="container">
        <div className="maindash ">
          <Sidebar />
        </div>
        <table className="contact-msg"> 
          <tr>
            <th>Name</th>
            <th>service icon</th>
            <th>Message</th>
          </tr>

          {services.map((service) => (
            <tr key={service.id}>
              <td className="msg-name"> {service.name}</td>
              <td className="msg-email"> {service.ImageIcon}</td>
              <td className="msg-text"></td>
            </tr>
          ))}
        </table>
        <table className="crud-buttons">
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
    );
  }
}
    
    export default Servicecomponent;