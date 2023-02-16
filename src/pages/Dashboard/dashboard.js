import { Component } from "react";
import "./dashboard.css";
import Adminprofile from "./admineditprofile/adminprofile.js";
import Sidebar from "./sidebar";
class MainDash extends Component {
  render() {
    return (
      <div className="page_container">
        <div className="container2">
          <Sidebar />
          <div className="maind">
            <h1>welcome to dashboard</h1>
            <div className="boxs-dash">
              <div className="bo1">
                facebook
                <div className="min-bo1">
                  <i className="fab fa-facebook"></i>
                </div>
              </div>
              <div className="bo1">
                linkedin
                <div className="min-bo2">
                  <i className="fab fa-linkedin"></i>
                </div>
              </div>

              <div className="bo1">
                twitter
                <div className="min-bo3">
                  <i className="fab fa-twitter"></i>
                </div>
              </div>

              <div className="bo1">
                google{" "}
                <div className="min-bo4">
                  {" "}
                  <i className="fab fa-google"></i>
                </div>
              </div>
            </div>
            <div className="notes2">
              <h1>Follow us</h1>
            </div>
            <div className="note2">
              Mehan consulting is a leading Omani consulting firm with its
              origins in Muscat. Its consulting focus and core competencies lies
              in the areas of business advisory, public finance management ,
              taxation ,technical consultancy and training / development. Mehan
              strength is in the combination of personal advice at a local level
              with the general expertise of an international and
              interdisciplinary network of professionals. Both nationally and
              internationally, its one stop-shop concept ensures an all-round
              support in legal, fiscal, managerial, and administrative issues.
              Mehan consulting firm has been rapidly
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainDash;
