import React, { useState, useEffect } from "react";
import { firebase } from "./config";

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.t1 = "   Coming Soon   ";
    this.t2 = "Contact Us: ";
    this.state = {
      email: "",
      formText: "",
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputchange(event) {
    event.preventDefault();
    this.setState({
      email: event.target.value
    });
  }
  onSubmitForm(event) {
    event.preventDefault();
    firebase
    .database()
    .ref("notes")
    .push(this.state.email);
    console.log("122"+this.state.email+"123")
    this.setState({email:""})
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
        <form onSubmit={this.onSubmitForm}>
          <div class="form-group">
            <label style={{ height: "50px", fontSize: "24px" }}></label>
            <input style={{borderRadius:50,outline:"none",border:"none",height: "50px",  fontSize: "24px" }} 
            placeholder="Enter email" value={this.state.email} onChange={this.onInputchange}></input>
            <button
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
        <footer style={{}}>
          <p style={{ height: "20px"}}> </p>
          <a href={"https://www.instagram.com/amima661/"} style={{fontSize:"16px",color: "black",textDecoration: 'none' }}>Instagram</a>
          <a href={"mailto: info@amimaa.com"} style={{fontSize:"16px",color: "black",textDecoration: 'none', paddingLeft:"50px" }}>Email</a>
          <br/>
          <br/>
        </footer>
      </div>
    );
  }
}