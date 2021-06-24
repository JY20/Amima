import React from "react";
import logo from './logo.svg';
import LogoA from './logoAS.jpg';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.t1 = "   Coming Soon   ";
  }
  render() {
    return (
      <div style={{
        backgroundColor: "#dcedff"
      }}>
        <header style={{ fontSize: "80px", paddingTop: "70px",fontWeight: 'bold'}}>Amima</header>
        <p style={{ fontSize: "35px"}}>
          Life for a uni student
        </p>
        <button style={{border:"none",width:"200px",height:"35px",borderRadius:50, fontSize: "25px", color:"#a30316", backgroundColor:"#f9cacf"}}>
        {this.t1}
        </button>
        <p style={{ height: "50px", fontWeight: 'bold'}}> </p>
        <form>
          <div class="form-group">
            <label style={{ height: "50px", fontSize: "24px" }}></label>
            <input style={{borderRadius:50,outline:"none",border:"none",height: "50px",  fontSize: "24px" }} placeholder="Enter email"></input>
            <button style={{ borderRadius:50, border:"none",height: "56px", fontSize: "24px",backgroundColor:"#80b8fb"}}>
              Sign Up
            </button>
          </div>
        </form>
        <p style={{ height: "50px", padding: "100px", margin: "0"}}> </p>
      </div>
    );
  }
}