import { Component } from "react";
import "../dashboard.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenSquare,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../sidebar";
class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://localhost:5000/messages")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { data } = this.state;

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
                <span class="text">Messages</span>
              </div>

              <div class="boxes"></div>
            </div>

            <div class="activity">
              <div class="activity-data">
                <div>
                  {data.map((msg) => (
                    <div key={msg.id}>
                      <div class="data names">
                        <span class="data-title">{msg.name}</span>
                      </div>

                      <div class="data email">
                        <span class="data-title">{msg.email}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div class="data joined">
                  <span class="data-title">Date</span>
                  <span class="data-list">2022-02-12</span>
                  <span class="data-list">2022-02-12</span>
                  <span class="data-list">2022-02-13</span>
                  <span class="data-list">2022-02-13</span>
                  <span class="data-list">2022-02-14</span>
                  <span class="data-list">2022-02-14</span>
                  <span class="data-list">2022-02-15</span>
                </div>
                <div class="data type">
                  <span class="data-title">Delete</span>

                  <button class="delete">
                    <FontAwesomeIcon icon={faTrash} />
                    &nbsp;&nbsp;Delete
                  </button>
                  <button class="delete">
                    <FontAwesomeIcon icon={faTrash} />
                    &nbsp;&nbsp;Delete
                  </button>
                  <button class="delete">
                    <FontAwesomeIcon icon={faTrash} />
                    &nbsp;&nbsp;Delete
                  </button>
                  <button class="delete">
                    <FontAwesomeIcon icon={faTrash} />
                    &nbsp;&nbsp;Delete
                  </button>
                  <button class="delete">
                    <FontAwesomeIcon icon={faTrash} />
                    &nbsp;&nbsp;Delete
                  </button>
                  <button class="delete">
                    <FontAwesomeIcon icon={faTrash} />
                    &nbsp;&nbsp;Delete
                  </button>
                  <button class="delete">
                    <FontAwesomeIcon icon={faTrash} />
                    &nbsp;&nbsp;Delete
                  </button>
                </div>
                <div class="data status">
                  <span class="data-title">Edit</span>
                  <button class="edit">
                    <FontAwesomeIcon icon={faPenSquare} />
                    Edit
                  </button>
                  <button class="edit">
                    <FontAwesomeIcon icon={faPenSquare} />
                    Edit
                  </button>
                  <button class="edit">
                    <FontAwesomeIcon icon={faPenSquare} />
                    Edit
                  </button>
                  <button class="edit">
                    <FontAwesomeIcon icon={faPenSquare} />
                    Edit
                  </button>
                  <button class="edit">
                    <FontAwesomeIcon icon={faPenSquare} />
                    Edit
                  </button>
                  <button class="edit">
                    <FontAwesomeIcon icon={faPenSquare} />
                    Edit
                  </button>
                  <button class="edit">
                    <FontAwesomeIcon icon={faPenSquare} />
                    Edit
                  </button>
                </div>
              </div>
              <div className="msgfunction">
                <div className="msgbuttons">
                  <button class="edit">
                    <FontAwesomeIcon icon={faPlusSquare} />
                    Add
                  </button>
                  <button class="edit">
                    <FontAwesomeIcon icon={faPenSquare} />
                    Edit
                  </button>
                  <button class="edit">
                    <FontAwesomeIcon icon={faPenSquare} />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Messages;
