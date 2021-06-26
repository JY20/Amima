import React, { useState, useEffect } from "react";
import { firebase } from "./config";

const db = firebase.database();
export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.t1 = "   Coming Soon   ";
    this.email ="";
    this.state = {
      speed: 10
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  onSubmitForm() {
    firebase.database().ref('users/').set({
      username: 'aas',
      email: 's',
      profile_picture : ';'
    });
    console.log(this.state+"s")
    console.log("ssss")
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
        <p style={{ height: "20px"}}> </p>
        <p>Sign up to recieve the newest updates for Amima</p>
        <form>
          <div class="form-group">
            <label style={{ height: "50px", fontSize: "24px" }}></label>
            <input style={{borderRadius:50,outline:"none",border:"none",height: "50px",  fontSize: "24px" }} 
            placeholder="Enter email" value={this.state.lname} onChange={this.onInputchange}></input>
            <button onClick={this.onSubmitForm}
            style={{ borderRadius:50, border:"none",height: "56px", fontSize: "24px",backgroundColor:"#80b8fb"}}>
              Sign Up
            </button>
          </div>
        </form>
        <p style={{ height: "20px"}}> </p>
        <div>
          <label style={{fontSize:"24px",float:"left",fontWeight: 'bold', paddingLeft:"350px"}}>Buy as a group</label>
          <label style={{fontSize:"24px", float:"left", paddingLeft:"100px"}}>Buying as a group can help to you to save money</label>
        </div>
        <p style={{ height: "20px"}}> </p>
        <footer>
          <p style={{ height: "20px"}}> </p>
          <p>Contact Us:</p>
          <p style={{ height: "20px"}}> </p>
        </footer>
      </div>
    );
  }
}