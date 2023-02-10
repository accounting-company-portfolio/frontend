import { Component } from "react";
import "../dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../sidebar";
class Adminprofile extends Component {
  render() {
    return (
      <div className="container">
        <div className="maindash">
        <Sidebar/></div>
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
              <div className="adminform">
                <div id="editadmin">
                  <table>
                    <tbody>
                      <tr>
                        <td class="edit-title">FirstName:</td>
                        <td>
                          <input type="text" class="profileInputBox" />
                        </td>
                      </tr>
                      <tr>
                        <td class="edit-title">LastName:</td>
                        <td>
                          <input type="text" class="profileInputBox" />
                        </td>
                      </tr>
                      <tr>
                        <td class="edit-title">Email:</td>
                        <td>
                          <input type="text" class="profileInputBox" />
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
                          <textarea className="notes" rows="3" cols="30"></textarea>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                

                <button className="adminbutton2"><FontAwesomeIcon icon={faSave} />&nbsp;&nbsp;Submit</button>
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
