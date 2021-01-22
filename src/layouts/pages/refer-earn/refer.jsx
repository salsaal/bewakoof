import React, { Component } from "react";
import refer from "../../../assests/refer-earn.png";
import "./refer.css";
class Refer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="refer-separator"></div>
        <div className="refer">
          <div className="refer-banner">
            <div className="banner-text">
              <h1>Refer a friend and earn ₹75</h1>
              <p>
                When they place an order using the referral code,
                <br /> <span> they get credits worth ₹100</span>
              </p>
              <p className="banner-last-text">1 Bewakoof Credit = 1 Rupee</p>
            </div>
            <img src={refer} alt="" />
          </div>
          <div className="refer-code">
            <div className="code1">
              <p>Copy the code below</p>
              <span className="code">SAL6K5WG</span>
            </div>
            <div className="code-separator"></div>
            <div className="share-code">
              <p>Share via</p>
              <div className="code-options">
                <a href="">
                  <i class="fab fa-facebook"></i>
                  facebook
                </a>
                <a href="">
                  <i class="fab fa-twitter"></i>
                  twitter
                </a>
                <a href="">
                  <i className="fas fa-copy"></i>
                  copy link
                </a>
              </div>
            </div>
          </div>
          <div className="referal-work">
            <p>How does referral work?</p>
            <div className="work">
              <p><span>1</span> Invite your friend to Bewakoof</p>
              <p><span>2</span>They place their first order with referral code</p>
              <p><span>3</span>Their order gets delivered</p>
              <p><span>4</span>You get Bewakoof credits worth ₹75</p>
            </div>
            <a href="/contact">need more help?</a>
          </div>
        </div>
      </>
    );
  }
}

export default Refer;
