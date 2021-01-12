import React from "react";
import "./construction.css";
import Cardlist from "./sections/cardlist/cardlist";
import Filter from "./sections/filter/filter.jsx";
export default class Constrution extends React.Component {

  render() {
    return (
      <div className="productpage">
        <h4 className="links">home / men</h4>
        <h1 className="searchresult">
          {
            this.props.match.params.id
          }
          <span className="no.results">({this.props.result})</span>{" "}
        </h1>
        <div className="items">
          <Filter
            filter={this.props.filter}
            sizeFilter={this.props.sizeFilter}
            clear={this.props.clearFilter}
            sort={this.props.sort}
            sortl={this.props.sortl}
            colorFilter={this.props.colorFilter}
          />
          <Cardlist products={this.props.products} />
          {console.log(this.props.products)}
        </div>
      </div>
    );
  }
}
