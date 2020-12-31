import React from "react";
import "./construction.css"
import Cardlist from './sections/cardlist/cardlist'
import Filter from './sections/filter/filter.jsx'
export default class Constrution extends React.Component {
  constructor(props){
    super(props)
  }
  render(props) {
  
    return (
      <div className="productpage">
        <h4 className='links'>home / men</h4>
        <h1 className="searchresult"> men's clothing <span className="no.results">(600)</span> </h1>
        <div className="items">
          <Filter filter={this.props.filter} sizeFilter={this.props.sizeFilter}/>
          <Cardlist products={this.props.products} />
          {
            console.log(this.props.products)
          }
        </div>
      </div>
    );
  }
}
