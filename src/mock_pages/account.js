import React, { useState, useEffect } from "react";
import Profile from "./profile.png";
import logo from "../logoR.png";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

class Account extends React.Component {
  render() {
    return (
      <div style={{backgroundColor:"#c8cfcc", marginTop:"-30px"}}>
          <br/>
          <h1>Account Overview</h1>
          <img style={{height:"300px"}} src={Profile}></img>
          <form>
          <div class="form-group">
            <label style={{ height: "20px", fontSize: "24px" }}></label>
            <label style={{outline:"none",height: "50px",fontSize: "35px", marginRight:"150px",textAlign:"left"}}>Name</label>
            <input style={{outline:"none",height: "50px",fontSize: "24px" }} placeholder="Amima"></input>
            <br/>
            <label style={{outline:"none",height: "50px",fontSize: "35px", marginRight:"65px",textAlign:"left"}}>Description</label>
            <input style={{outline:"none",height: "50px",fontSize: "24px" }} 
                placeholder="A low price group buying social platform"></input>
            <br/>
            <label style={{outline:"none",height: "50px",fontSize: "35px", marginRight:"20px", textAlign:"left"}}>Email Address</label>
            <input style={{outline:"none",height: "50px",fontSize: "24px" }} placeholder="info@amimaa.com"></input>
            <br/>
            <br/>
            <button
            style={{ borderRadius:50, border:"none",height: "36px", fontSize: "24px",backgroundColor:"#80b8fb"}}>
              Update
            </button>
          </div>
        </form>
        <br/>
      </div>
    );
  }
}

export default Account;