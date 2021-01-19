import React, { Component } from "react";
import Backlink from "../../components/back-link/backlink";
import "./myprofile.css";
class Myprofile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {active:false};
  }

  render() {
    return (
      <div className="myprofile">
        <Backlink />
        <h1 className="aheading">{this.props.match.params.id}</h1>
        <div className="form">
          <input
            type="text"
            className="form-input half-form"
            placeholder="name"
          />
          <input
            type="text"
            className="form-input half-form"
            placeholder="last name"
          />
          <input
            type="text"
            className="form-input full-form"
            placeholder="email"
            value="salsaalshahid9038@gmail.com"
            disabled
          />
          <div className="adjustment">
            {" "}
            <input
              type="password"
              placeholder="password"
              className="form-input half-form"
              value={localStorage.getItem("password")}
              disabled
            />
            <button className="changepassword">change password</button>
          </div>

          <input
            type="text"
            className="form-input half-form"
            placeholder="phone number"
          />
          <button className="verifynumber">verify</button>

          <input
            type="text"
            className="form-input full-form"
            id="d-o-b"
            placeholder="DD-MM-YY"
          />
          <p>
            {" "}
            Share your DOB to get special gifts or offers on your special day
          </p>
        </div>

        <div className="bottom-profile">
          
          <div className="gender">
            <p>gender</p>
            <div className="radio">
              <label htmlFor="male">male</label>
              <input type="radio" id="male" />
            </div>
            <div className="radio">
              <label htmlFor="female">female</label>
              <input type="radio" id="female" />
            </div>
          </div>
          <div className="whatsapp">
            <p>I want to receive order updates on Whatsapp</p>
            <div className={this.state.active?"whatsapp-active whatsapp-switch":"whatsapp-switch"} onClick={()=>{
                this.setState({active:!this.state.active})
            }}></div>
          </div>
          <button className="save-changes">Save changes</button>
        </div>
      </div>
    );
  }
}

export default Myprofile;
