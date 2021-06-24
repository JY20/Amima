import React from "react";
import logo from './logo.svg';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export class LandingPage extends React.Component {
  render() {
    return (
      <div style={{
        // backgroundColor: "#ffeceb"
        backgroundImage: 'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fsimple-background-straight-gray-lines-vector-2815528&psig=AOvVaw1FUWqjYAemKXTTMKrqDVbo&ust=1624588182548000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCMCGmuGcr_ECFQAAAAAdAAAAABAK")'
        , height: "500px"
      }}>
        <p style={{ height: "50px" }}> </p>
        <img src={logo} style={{ height: "450px", float: "right", border: "1px solid red" }} alt="" />
        <h1 style={{ fontSize: "50px", float: "left", paddingLeft: "300px", paddingTop: "20px" }}>Amima</h1>
        <h2 style={{ fontSize: "22px", float: "left", paddingLeft: "120px" }}>
          This is hellllslslslslssssssssssssssssssssssssss  sadas
        </h2>
        <form>
          <div class="form-group">
            <label style={{ height: "50px", paddingLeft: "150px", float: "left", fontSize: "24px" }}></label>
            <input style={{ height: "50px", paddingLeft: "50px", float: "left", fontSize: "24px" }} placeholder="Enter email"></input>
            <button style={{ height: "56px", float: "left", fontSize: "24px" }}>
              Submit
            </button>
          </div>
        </form>
        <p style={{ height: "50px", padding: "100px", margin: "0", }}> </p>
      </div>
    );
  }
}