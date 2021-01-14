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
      sort: null,
      result: null,
      check: true,
      myarray:[],
      result:null
    };
  }

  componentDidMount() {
    products.forEach((item) => {
      if (this.props.match.params.id === item.for) {
       this.state.myarray.push(item);
      }
    });
    this.setState({
      filteredItems: this.state.myarray,
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
          this.state.size.length > 0
        ) {
          if (
            this.state.category === product.type &&
            this.state.size === product.size
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
        } else if (
          this.state.category.length === 0 &&
          this.state.color.length > 0 &&
          this.state.size.length > 0
        ) {
          if (
            this.state.size === product.size &&
            this.state.color === product.color
          ) {
            prod.push(product);
          }
        } else if (
          this.state.category.length === 0 &&
          this.state.color.length > 0 &&
          this.state.size.length === 0
        ) {
          if (this.state.color === product.color) {
            prod.push(product);
          }
        } else if (
          this.state.category.length === 0 &&
          this.state.color.length === 0 &&
          this.state.size.length > 0
        ) {
          if (this.state.size === product.size) {
            prod.push(product);
          }
        } else {
          prod.push(product);
        }
      }
    });
    this.setState({
      filteredItems: prod,
    });
  };
  handleClear=()=>{
    this.setState({
      category: "",
      size: "",
      color: "",
      filteredItems:this.state.myarray
    })
  };
  handleSort=(e)=>{
    var myarray=[]
    if(e==="low"){
     myarray=this.state.filteredItems.sort((a,b)=>
       a.price > b.price ? 1 : -1
    )
    }
    else{
      myarray=this.state.filteredItems.sort((a,b)=>
       a.price < b.price ? 1 : -1
      )
    }
    this.setState({
      filteredItems:myarray
    })
  }
  render() {
    var result=this.state.filteredItems.length
    return (
      <div className="productpage">
        {console.log(this.props.location.pathname)}
        {/* <h4 className="links">{this.props.location.pathname}</h4> */}
        <h1 className="searchresult">
          {this.props.match.params.id}
          <span className="no.results">({result})</span>{" "}
        </h1>
        <div className="items">
          <Filter
          sort={this.handleSort}
          clear={this.handleClear}
            filter={this.handleFilter}
            handleFilterName={(stateName, value) => {
              console.log(stateName);
              console.log(value);
              this.setState({ [stateName]: value }, () => this.handleFilter());
            }}
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
