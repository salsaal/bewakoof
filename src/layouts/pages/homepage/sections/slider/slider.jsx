import React from "react";

import "./slder.css";
export default class Slider extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render() {
    return (
      <div className="slider">
        <div className="images">
        
          <img
            src="https://images.bewakoof.com/uploads/grid/app/bewakoof-oof-sale-desktop-strip-1603097557.jpg"
            alt=""
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/bewakoof-shirt-and-kurta-online-fashion-shopping-DESKTOP-STRIP-1603893838.jpg"
            alt=""
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/DesktopStrip-TriBe-1606924612.jpg"
            alt=""
          />
        </div>
      </div>
    );
  }
}
