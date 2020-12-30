import React from "react";
import "./homepage.css";
import Categories from "../homepage/sections/categories/categories";
import Brnds from "../homepage/sections/brands/brands";
import banner1 from "../../../assests/banner1.jpg";
import banner2 from "../../../assests/banner2.gif";
import banner3 from "../../../assests/banner3.webp";
import Brands from "./sections/brands/brands";
import Slider from './sections/slider/slider'

export default class Homepage extends React.Component {
  render() {
    return (
      <div className="whole">
        <div className="bigcontainer">
          <a>
            <img src={banner1} alt="" />
          </a>
          <a href="">
            <img src={banner2} alt="" />
          </a>
        </div>
        <img src={banner3} alt="" className="wideimg" />
        <Slider />
        <Categories />
        <img
          src="https://images.bewakoof.com/uploads/grid/app/branding-section-desktop-underslider-1589380737.png"
          alt=""
          className="wideimg"
        />
        <img
          src="https://images.bewakoof.com/uploads/grid/app/announcement-desktop-strip--1--1594387974.jpg"
          alt=""
          className="wideimg"
        />
        <Brands />
      </div>
    );
  }
}
