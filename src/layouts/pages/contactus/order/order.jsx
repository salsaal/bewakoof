import React, { Component } from "react";
import "./order.css";
import querypage from '../../querypage/querypage'
import { Switch, Route } from "react-router-dom";
export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  render(props) {
    return (
      <div className="order">
        <div className="leftitems">
          <button  name="0"onClick={(e)=>{
            this.props.ctab(e.target.name)
          }}>Orders, Delivery & Payment</button>
          <button name="1" onClick={(e)=>{
            this.props.ctab(e.target.name)
          
          }}>Cancellations</button>
          <button name="2" onClick={(e)=>{
            this.props.ctab(e.target.name)
          
          }}>Refunds & Returns</button>
          <button name="3" onClick={(e)=>{
            this.props.ctab(e.target.name)

        
          }}>My Bewakoof Wallet</button>
          <button name="4"  onClick={(e)=>{
            this.props.ctab(e.target.name)
           
          }}>My Account</button>
          <button name="5" onClick={(e)=>{
            this.props.ctab(e.target.name)
          }}>TriBe Membership</button>
        </div>
        <div className="rightitems">
          <h1>{this.props.items[this.props.tab].heading}</h1>
          <h4>Frequently asked questions</h4>
        {
        this.props.items[this.props.tab].questions.map((question)=>
          <a href="/querypage">
            {question.q1}
            <i className="fas fa-caret-down"></i>
            </a>
          )
        }
        </div> 
      </div>
    );
  }
}
