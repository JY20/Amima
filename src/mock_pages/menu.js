import React, { useState } from "react";
import {
  Link,
  Router,
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import logo from "../logoR.png";
import Button from "react-bootstrap/Button";

import Account from "./account";
import Shop from "./shop";
import Post from "./post";
import Event from "./event";

class Menu extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <section style={{backgroundColor: "#555a57", height:"70px"}}>
            <img style={{height:"50px", float:"left", margin:"10px"}} src={logo}/>
            <p style={{color:"white", paddingTop:"2px",float:"left", fontSize:"40px"}}>Amima</p>
            <Link to="/account">
                <Button style={{border:"none",margin:"10px",float:"right", backgroundColor: "Transparent",color:"white",height:"50px"}}>
                    <span>Account</span>
                </Button>
            </Link>
            <Link to="/events">
                <Button style={{border:"none",margin:"10px",float:"right", backgroundColor: "Transparent",color:"white",height:"50px"}}>
                    <span>Events</span>
                </Button>
            </Link>
            <Link to="/posts">
                <Button style={{border:"none",margin:"10px",float:"right", backgroundColor: "Transparent",color:"white",height:"50px"}}>
                    <span>Posts</span>
                </Button>
            </Link>
            <Link to="/shop">
                <Button style={{border:"none",margin:"10px",float:"right", backgroundColor: "Transparent",color:"white",height:"50px"}}>
                    <span>Shop</span>
                </Button>
            </Link>
          </section>
          <br />
          <Switch>
            <Route exact path="/">
                <Redirect to="/account" />
            </Route>
            <Route path="/account">
                <Account/>
            </Route>
            <Route path="/events">
                <Event/>
            </Route>
            <Route path="/posts">
                <Post/>
            </Route>
            <Route path="/shop">
                <Shop/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Menu;