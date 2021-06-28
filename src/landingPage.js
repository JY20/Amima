import React, { useState, useEffect } from "react";
import { firebase } from "./config";
import fb from "./facebook.png"
import ig from "./instagram.png"
import ml from "./email.png";
import lk from "./linkedln.png";
import logo from "./logoR.png";

import shop from "./shop.png";
import mes from "./mes.png";
import group from "./group.png";

import Home from "./mock_pages/home";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.t1 = "   Coming Soon   ";
    this.t2 = " Amima";
    this.t3 = " ";
    this.database = firebase.database().ref().child('users');
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
    console.log(this.state.email)
    this.database.push().set({
      email: this.state.email,
    });
    this.setState({
      email:""
    });
    this.t3="Sign Up Successful"
  }
  render() {
    return (
      <div style={{ backgroundSize: 'cover',backgroundColor:"#edf3fb"}}>
        <header style={{ fontSize: "30px", paddingTop: "50px",fontWeight: 'bold'}}>
          <img style={{height:"30px",paddingBottom:"5px"}} src={logo}/> 
          {this.t2}
        </header>
        <br/>
        <p style={{ fontSize: "50px"}}>
          A low price group buying social platform
          <br/>
          with true product sharing and events around you
          <br/>
        </p>
        <p style={{ height: "10px"}}> </p>
        <button style={{border:"none",width:"200px",height:"35px",borderRadius:50, fontSize: "25px", color:"#a30316", backgroundColor:"#f9cacf"}}>
        {this.t1}
        </button>
        <p style={{ height: "10px"}}> </p>
        <p style={{fontSize: "30px"}}>Sign up to recieve the newest updates for Amima</p>
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
        <p style={{fontSize: "20px"}}>{this.t3}</p>
        {/* <p style={{ height: "20px"}}> </p>
          <Home/> */}
        <p style={{ height: "20px"}}> </p>
        <div style={{backgroundSize: 'cover'}}>
          <p style={{ height: "50px"}}> </p>
          <h1 style={{fontSize:"24px"}}>What is Amima</h1>
          <p style={{fontSize:"24px",paddingRight:"150px", paddingLeft:"150px"}}>
            Amima is a social platform dedicated for group shopping and sharing online shopping experiences.
            It is a platform that allows you to purchase what you like for a lower price, 
            and see what your friends are buying and discover current popular trending products and events.
            We offer huge discounts on products when purchasing as a group or with friends who have the interest in purchasing the same category of products.
          </p>
          <p style={{ height: "50px"}}> </p>
        </div>
        <div style={{backgroundSize: 'cover'}}>
          <br/>
          <h1 style={{fontSize:"24px"}}>Key Features</h1>
          <br/>
          <Container>
            <Row>
              <Col style={{fontSize:"24px"}}>
                <img style={{height:"100px"}} src={shop}/>
                <br/>
                <br/>
                <p style={{fontSize:"24px", fontWeight:"bold"}}>Group shopping:</p>
                <p>Shop the product you like as a group for a lower price</p>
              </Col>
              <Col style={{fontSize:"24px"}}>
                <img style={{height:"100px"}} src={group}/>
                <br/>
                <br/>
                <p style={{fontSize:"24px", fontWeight:"bold"}}>Making friends:</p>
                <p>Have conversations with friends who have an interest in similar products</p>
              </Col>
              <Col style={{fontSize:"24px"}}>
                <img style={{height:"100px"}} src={mes}/>
                <br/>
                <br/>
                <p style={{fontSize:"24px", fontWeight:"bold"}}>Product recommendations:</p>
                <p>Browsing through product reviews and recommendations from others</p>
              </Col>
            </Row>
          </Container>
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