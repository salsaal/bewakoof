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
            <div className="detail"> <p className="product-name">
            Powerful People {this.state.product.name}
            </p>

            </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
