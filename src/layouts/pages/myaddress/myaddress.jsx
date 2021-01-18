import React, { Component } from "react";
import Backlink from "../../components/back-link/backlink";
import "./myaddress.css";
class Myaddress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: false,
    };
  }

  render() {
    return (
      <div className="myaddress">
        <Backlink />
        <h1 className="aheading">{this.props.match.params.id}</h1>
        {this.state.address ? (
          <div className="form">
            <h2 className="form-heading">Delivery Info</h2>
            <input
              type="text"
              className="full-form form-input"
              placeholder="name"
            />
            <input
              type="text"
              className="half-form form-input"
              placeholder="phone number"
            />
            <input
              type="text"
              className="half-form form-input"
              placeholder="alternate (optional)"
            />
            <div className="adjustment">
              <h2 className="form-heading">Address</h2>
              <input
                type="text"
                className="half-form form-input"
                placeholder="pincode"
              />
            </div>
            <input
              type="text"
              className="full-form form-input"
              placeholder="address"
            />
            <input
              type="text"
              className="full-form form-input"
              placeholder="locality"
            />
            <input
              type="text"
              className="full-form form-input"
              placeholder="landmark"
            />
            <input
              type="text"
              className="half-form form-input"
              placeholder="city"
            />
            <input
              type="text"
              className="half-form form-input"
              placeholder="state"
            />
            <div className="adjustment">
              <input
                type="text"
                className="half-form form-input"
                placeholder="country"
              />
              <div className="other-options">
                  <div className="radio-options">
                <p>This Is My</p>
                <div className="radio">
                  <label htmlFor="home">home</label>
                  <input type="radio" value="home" id="home" />
                </div>
                <div className="radio">
                  <label htmlFor="office">office</label>
                <input type="radio" value="office" id="office" />
                </div>
                <div className="radio">
                  <label htmlFor="other">other</label>
                <input type="radio" value="other" id="other" />
                </div>
                </div>
                <div className="save-cancel-address">
                  {" "}
                  <button className="canceladdress">cancel</button>
                  <button className="saveaddress"onClick={()=>{
                      this.setState({
                          address:false
                      })
                  }}>save address</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="add-address"
            onClick={() => {
              this.setState({ address: true });
            }}
          >
            <i className="fas fa-plus"></i>
            <p>add new address</p>
          </div>
        )}
      </div>
    );
  }
}

export default Myaddress;
