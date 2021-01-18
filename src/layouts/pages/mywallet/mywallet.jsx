import React, { Component } from "react";
import wallet from "../../../assests/wallet.gif";
import "./mywallet.css";

class Mywallet extends React.Component {
  render() {
    return (
      <div className="mywallet">
        <h1 className="aheading">{this.props.match.params.id}</h1>
        <div className="walletmain">
          <p>Oh no! Looks like your wallet is empty :</p>
            <h3>Start earning credits now!</h3>
            <img src={wallet} alt=""/>
            <p className="afterwallet">
            Invite your friends to shop on Bewakoof and
            <span>win credits worth Rs. 75 on every referral</span>
            </p>
            <button>Send Invite</button>
        </div>
      </div>
    );
  }
}

export default Mywallet;
