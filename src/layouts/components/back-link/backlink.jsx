import React, { Component } from "react";
import './backlink.css'
class Backlink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <a href="/account/My Account" className="back-to-account">
        <div className="sign">></div> Back to My Account
      </a>
    );
  }
}

export default Backlink;
