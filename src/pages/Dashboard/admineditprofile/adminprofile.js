import { Component } from "react";
import "../dashboard.css";
import"./adminprofile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faPenSquare} from '@fortawesome/free-solid-svg-icons'
import Sidebar from "../sidebar";
class Adminprofile extends Component {
  render() {
    
    return (
      <div className="container">
        <div className="maindash">
          <Sidebar/>
        </div>
<section class="dashboard">
<div id="profile-edit-save">
  <button id="editSave">Save</button>
</div>
<div id="profile-edit-area">
  <form>
      <div id="edit-area-left">
      <table>
        <tbody>
          <tr>
            <td class="edit-title">FirstName:</td>
            <td><input type="text" class="profileInputBox"/></td>
          </tr>
          <tr>
            <td class="edit-title">LastName:</td>
            <td><input type="text" class="profileInputBox"/></td>
          </tr>
          <tr>
            <td class="edit-title">Email:</td>
            <td><input type="text" class="profileInputBox"/></td>
          </tr>
          <tr>
            <td class="edit-title">Password:</td>
            <td><input ype="password" name="" required="" class="profileInputBox"/></td>
          </tr>
          <tr>
            <td class="edit-title">confirm Password:</td>
            <td><input ype="password" name="" required="" class="profileInputBox"/></td>
          </tr>
        </tbody>
      </table>
      </div>

      <div id="edit-area-right">
     <table>
       <tbody>
          <tr>
            <td class="edit-title">Телефон:</td>
            <td><input type="text" class="profileInputBox"/></td>
          </tr>
          <tr>
            <td class="edit-title">hhh</td>
            <td><textarea class="profileInputBox"></textarea></td>
          </tr>
          </tbody>
      </table>
      </div>
     </form>
</div>

</section>
</div>
    )}};
    export default Adminprofile