import React, { Component } from "react";
import "./productDetail.css";
import products from "../../../productsHub/products";
export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myarr: [],
    };
  }
  componentDidMount() {
      let arr = [];
      products.forEach((item) => {
          console.log(item.id)
      console.log(this.props.match.params.id )
          
        
      if (this.props.match.params.id == item.id) {
          arr.push(item);
          console.log("andar ghusa")
      }
      });
      console.log(arr)
    this.setState({
      myarr: arr,
    });
      console.log(this.state.myarr)
  }
  render() {
    return (
      <div className="product-page">
        {this.props.match.params.id}
        <img src={this.state.myarr.image} alt="" />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, autem
        asperiores? Assumenda, deserunt ipsa magni pariatur soluta dolores
        laboriosam, magnam commodi voluptate quaerat cupiditate nesciunt unde
        hic facilis blanditiis velit.
      </div>
    );
  }
}
