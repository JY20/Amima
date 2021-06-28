import React, { useState, useEffect } from "react";
import Menu from "./menu";
import fb from "../facebook.png"
import ig from "../instagram.png"
import ml from "../email.png";
import lk from "../linkedln.png";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Menu/>
          
        <footer style={{backgroundColor: "#555a57"}}>
          <p style={{ height: "10px"}}> </p>
          <a href={"https://www.instagram.com/amima661/"}  style={{fontSize:"16px",color: "black",textDecoration: 'none' }}>
            <img style={{height:"30px", borderRadius:"20%"}}src={ig}/>
          </a>
          <a href={"https://www.facebook.com/profile.php?id=100070058887555"} style={{paddingLeft:"50px" }}>
            <img style={{height:"30px", borderRadius:"20%"}}src={fb}/>
          </a>
          <a href={"https://www.linkedin.com/company/amimaa/"} style={{paddingLeft:"50px" }}>
            <img style={{height:"30px", borderRadius:"20%"}}src={lk}/>
          </a>
          <a href={"mailto: info@amimaa.com"} style={{fontSize:"16px",color: "black",textDecoration: 'none', paddingLeft:"50px" }}>
            <img style={{height:"30px", borderRadius:"20%"}}src={ml}/>
          </a>
          <br/>
          <br/>
        </footer>
      </div>
    );
  }
}

export default Home;