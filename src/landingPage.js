import React, { useState, useEffect } from "react";
import { firebase } from "./config";
import fb from "./facebook.png"
import ig from "./instagram.png"
import ml from "./email.png";
import lk from "./linkedln.png";
import logo from "./logoR.png";
import { Container, Row, Col } from 'reactstrap';

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.t1 = "   Coming Soon   ";
    this.t2 = " Amima";
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
    // const db  =firebase.firestore();
    // const userRef = db.collection("users").add({
    //   email: this.state.email
    // }); 
    firebase
    .database()
    .ref("notes")
    .child('notes').push({email:this.state.email});
    console.log("122"+this.state.email+"123")
    this.setState({email:""})
  }
  render() {
    return (
      <div style={{backgroundColor: "#dcedff", backgroundSize: 'cover', backgroundImage: `url("https://wallpaperaccess.com/full/3803832.jpg")`}}>
        <header style={{ fontSize: "80px", paddingTop: "50px",fontWeight: 'bold'}}>
          <img style={{height:"80px", margin:"-10px"}} src={logo}/> {this.t2}
        </header>
        <p style={{ fontSize: "35px"}}>
          A low price group buying social platform
          <br/>
          with true product sharing and events around you
          <br/>
        </p>
        <button style={{border:"none",width:"200px",height:"35px",borderRadius:50, fontSize: "25px", color:"#a30316", backgroundColor:"#f9cacf"}}>
        {this.t1}
        </button>
        <p style={{ height: "10px"}}> </p>
        <p style={{fontSize: "20px"}}>Sign up to recieve the newest updates for Amima</p>
        <br/>
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
        <div style={{backgroundColor: "#b8f1e4", backgroundSize: 'cover', 
        backgroundImage: `url("https://www.xmple.com/wallpaper/violet-blue-gradient-linear-1920x1080-c2-e2b6ff-b6c7ff-a-60-f-14.svg")`}}>
          <p style={{ height: "20px"}}> </p>
          <h1 style={{fontSize:"24px"}}>What is Amima</h1>
          <p style={{fontSize:"24px",paddingRight:"150px", paddingLeft:"150px"}}>
            Amima is a social platform dedicated for group shopping and sharing online shopping experiences.
            It is a platform that allows you to purchase what you like for a lower price, 
            and see what your friends are buying and discover current popular trending products and events.
            We offer huge discounts on products when purchasing as a group or with friends who have the interest in purchasing the same category of products.
          </p>
          <p style={{ height: "20px"}}> </p>
        </div>
        <div style={{ margin:"-20px", backgroundSize: 'cover', backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSroaf3kTkIraSmni84Du7Rysp3YF3Y8-RVj4EBIaCaB7KP5PYC3MdPaN_U9i4u6_MJxaU&usqp=CAU")`}}>
          <br/>
          <h1 style={{fontSize:"24px"}}>Key Features</h1>
          <p style={{ fontSize: "20px"}}>Group shopping: Shop the product you like as a group for a lower price</p>
          <p style={{ fontSize: "20px"}}>Making friends: Have conversations with friends who have an interest in similar products</p>
          <p style={{ fontSize: "20px"}}>Product recommendations: Browsing through product reviews and recommendations from others</p>
          <br/>
          <br/>
        </div>
        <footer style={{}}>
          <p style={{ height: "10px"}}> </p>
          <p style={{fontWeight: 'bold'}}>Contact Us</p>
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
          <br/>
        </footer>
      </div>
    );
  }
}