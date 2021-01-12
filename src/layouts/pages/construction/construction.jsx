import React from "react";
import "./construction.css";
import products from "../../../productsHub/products";
import Cardlist from "./sections/cardlist/cardlist";
import Filter from "./sections/filter/filter.jsx";
export default class Constrution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      filteredItems: [],
      category: "",
      size: "",
      color: "",
      sort: true,
      result: null,
      check: true,
    };
  }

  componentDidMount() {
    var myarray = [];
    products.forEach((item) => {
      if (this.props.match.params.id === item.for) {
        myarray.push(item);
      }
    });
    this.setState({
      filteredItems: myarray,
    });
  }
  handleFilter = () => {
    var prod = [];
    products.forEach((product) => {
      if (this.props.match.params.id === product.for) {
        if (
          this.state.category.length > 0 &&
          this.state.color.length > 0 &&
          this.state.size.length > 0
        ) {
          if (
            this.state.category === product.type &&
            this.state.color === product.color &&
            this.state.size === product.size
          ) {
            prod.push(product);
          }
        } else if (
          this.state.category.length > 0 &&
          this.state.color.length > 0 &&
          this.state.size.length === 0
        ) {
          if (
            this.state.category === product.type &&
            this.state.color === product.color
          ) {
            prod.push(product);
          }
        } else if (
          this.state.category.length > 0 &&
          this.state.color.length === 0 &&
          this.state.size.length === 0
        ) {
          if (this.state.category === product.type) {
            prod.push(product);
          }
        } else {
          prod.push(product);
        }
      }
    });
    console.log(prod);
    this.setState({
      filteredItems: prod,
    });
  };
  render() {
    //sorting
    return (
      <div className="productpage">
        {console.log(this.props.location.pathname)}
        {/* <h4 className="links">{this.props.location.pathname}</h4> */}
        <h1 className="searchresult">
          {this.props.match.params.id}
          <span className="no.results">()</span>{" "}
        </h1>
        <div className="items">
          <Filter
            filter={this.handleFilter}
            handleFilterName={(e) =>
              this.setState({ [e.target.name]: e.target.value })
            }
            // sizeFilter={handleSizeFilter}
            // colorFilter={handleColorFilter}
            // sort={sort}
            // clear={clearFilter}
            // result={result}
          />
          <Cardlist products={this.state.filteredItems} />
          {/* {console.log(finalarray)} */}
        </div>
      </div>
    );
  }
}
