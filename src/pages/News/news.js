import { Component } from "react";
import "../Dashboard/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp, faSave } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Dashboard/sidebar";
class News extends Component {
  render() {
    return (
      <div className="container">
        <div className="maindash ">
          <Sidebar />
        </div>
        <section className="dashboard ">
          <div className="top">
            <i className="uil uil-bars sidebar-toggle "></i>

            <div className="search-box">
              <i className="uil uil-search"></i>
              <input type="text" placeholder="Search here..." />
            </div>

            <img src="images/profile.jpg" alt="" />
          </div>

          <div className="dash-content ">
            <div className="overview">
              <div className="title">
                <i className="uil uil-tachometer-fast-alt"></i>
                <span className="text">Add your article</span>
              </div>

              <div className="boxes"></div>
            </div>
            <div className="activity ">
              <div className="activity-data newsdash">
                <div id="profilearea">
                    <div id="edit-area-left">
                      <table>
                        <tbody>
                          <tr>
                            <td className="edit-title">Name:</td>
                            <td>
                              <input type="text" className="profileInputBox" />
                            </td>
                          </tr>
                          <tr>
                            <td className="edit-title">choose your Media Type:</td>
                            <td>
                              <select id="media" name="mediafiles">
                                <option value="image">image</option>
                                <option value="video">video</option>
                                <option value="web image">webImage</option>
                                <option value="audio">audio</option>
                              </select>{" "}
                            </td>
                          </tr>
                          <tr>
                            <td className="edit-title">URL</td>
                            <td>
                              <input type="text" className="profileInputBox" />
                            </td>
                          </tr>

                          <tr>
                            <td className="edit-title">Description</td>
                            <td>
                              <textarea className="desc" rows="14" cols="30" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div id="edit-area-right">
                      <table>
                        <tbody>
                          <tr>
                            <td className="edit-title">Тitle:</td>
                            <td>
                              <input type="text" className="profileInputBox" />
                            </td>
                          </tr>
                          <tr>
                            <td className="edit-title">text</td>
                            <td>
                              <textarea
                                rows="40"
                                cols="50"
                                className="newstext"
                              ></textarea>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div classname="buttons">
                      <button className="newsbutton">
                        <FontAwesomeIcon icon={faArrowAltCircleUp} />
                        &nbsp;&nbsp;upload
                      </button>

                      <button className="newsbutton">
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

export default News;
