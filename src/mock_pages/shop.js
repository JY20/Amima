import React, { useState, useEffect } from "react";
import P1 from "./p1.png";
import P2 from "./p2.png";
import logo from "../logoR.png";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

class Shop extends React.Component {
  render() {
    return (
      <div style={{backgroundColor:"#c8cfcc", marginTop:"-30px"}}>
        <br/>
            <h1>Shop</h1>
            <section style={{backgroundColor:""}}>
                <Container>
                    <Row>
                        <Col style={{backgroundColor:"#c1e3d2", margin:"20px",borderRadius:50, border:"5px solid black"}}>
                        <br/>
                        <img style={{height:"150px"}}src={P2}></img>
                        <br/>
                        <p style={{fontSize:"35px"}}>Logitech M510 Mouse</p>
                        <p style={{fontSize:"24px"}}>Origin Price: $29.99</p>
                        <p style={{fontSize:"24px"}}>NOW</p>
                        <button style={{border:"none",width:"200px",height:"35px",borderRadius:50, fontSize: "25px", color:"#a30316", backgroundColor:"#f9cacf"}}>
                        CAD: $19.99
                        </button>
                        <br/>
                        <br/>
                        <button style={{ borderRadius:50, border:"none",height: "36px", fontSize: "24px",backgroundColor:"#80b8fb"}}>Add to Cart</button>
                        <br/>
                        <br/>
                        </Col>
                        <Col style={{backgroundColor:"#c1e3d2", margin:"20px",borderRadius:50, border:"5px solid black"}}>
                            <br/>
                            <img style={{height:"150px"}}src={P1}></img>
                            <br/>
                            <p style={{fontSize:"35px"}}>$500 Amazon Gift Card</p>
                            <p style={{fontSize:"24px"}}>Origin Price: $500.00</p>
                            <p style={{fontSize:"24px"}}>NOW</p>
                            <button style={{border:"none",width:"200px",height:"35px",borderRadius:50, fontSize: "25px", color:"#a30316", backgroundColor:"#f9cacf"}}>
                            CAD: $479.99
                            </button>
                            <br/>
                            <br/>
                            <button style={{ borderRadius:50, border:"none",height: "36px", fontSize: "24px",backgroundColor:"#80b8fb"}}>Add to Cart</button>
                            <br/>
                            <br/>
                        </Col>
                    </Row>
                </Container>
            <br/>
            </section>
      </div>
    );
  }
}

export default Shop;