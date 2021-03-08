import React, { Component } from "react";
import "./productDetail.css";
import products from "../../../productsHub/products";
export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      loading: true,
      tab: 0,
      name: "Gray",
    };
  }
  async componentDidMount() {
    await products.forEach((item) => {
      if (this.props.match.params.id == item.id) {
        this.setState({
          product: item,
          loading: false,
        });
      }
    });
  }
  render() {
    return (
      <>
        {this.state.loading ? null : (
          <div className="product-page">
            <div className="product">
              <div className="imagesection">
                <div className="images">
                  <img
                    src={this.state.product.images[0]}
                    alt=""
                    onClick={() => {
                      this.setState({ tab: 0 });
                    }}
                  />
                  <img
                    src={this.state.product.images[1]}
                    alt=""
                    onClick={() => {
                      this.setState({ tab: 1 });
                    }}
                  />
                  <img
                    src={this.state.product.images[2]}
                    alt=""
                    onClick={() => {
                      this.setState({ tab: 2 });
                    }}
                  />
                </div>
                <img src={this.state.product.images[this.state.tab]} alt="" />
              </div>
              <div className="detail">
                <p className="product-name">
                  Powerful People {this.state.product.name}
                </p>
                <span className="price">₹{this.state.product.price}</span>
                <span className="less-price">
                  ₹{this.state.product.price + 100}
                </span>
                <span>Incl of all taxes</span>
                <span className="taxes">
                  ₹270 For TriBe Members  <span>know more</span>
                </span>
                <div className="color-section">
                  <p className="color-name">{this.state.name}</p>
                  <button
                    className="color-picker gray"
                    name="Gray"
                    onMouseOver={(e) => {
                      this.setState({ name: e.target.name });
                    }}
                  ></button>
                 <button
                    className="color-picker black"
                    name="Black"
                    onMouseOver={(e) => {
                      this.setState({ name: e.target.name });
                    }}
                  ></button>
                  <button
                    className="color-picker green"
                    name="Green"
                    onMouseOver={(e) => {
                      this.setState({ name: e.target.name });
                    }}
                  ></button>
                   <button
                    className="color-picker red"
                    name="Red"
                    onMouseOver={(e) => {
                      this.setState({ name: e.target.name });
                    }}
                  ></button>
                </div>
                <div className="size-section">
                  <p>Select Size</p>
                  <div className="sizes">
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                    <button>XXl</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
