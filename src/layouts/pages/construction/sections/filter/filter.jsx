import React from "react";
import "./filter.css";
export default class Filter extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            cat:false,
            size:false,
            sort:false,
            color:false
        }
    }
  render(props) {
    return (
      <div className="filter">
        <h5 className="title">filters</h5>
        <div className="filter-item">
          <h2 className="filter-heading" onClick={()=>{
              this.setState({
                  cat:!this.state.cat
              })
          }}>
        
            category <i className="fas fa-caret-down" id={this.state.cat?'rotate':""}></i>
          </h2>
          <div className={this.state.cat ? "filter-options":"close"}>
            <h5>T-Shirt</h5>
            <h5>Jacket</h5>
            <h5> Hoodies</h5>
            <h5> Shirt</h5>
            <h5>Kurta</h5>
          </div>
        </div>
        <div className="filter-item">
          <h2 className="filter-heading"onClick={()=>{
              this.setState({
                  size:!this.state.size
              })
          }}>
            sizes <i className="fas fa-caret-down"id={this.state.size?'rotate':""}></i>
          </h2>
          <div className={this.state.size ? "filter-options":"close"}>

            <h5>S</h5>
            <h5>M</h5>
            <h5>L</h5>
            <h5>XL</h5>
            <h5>XXL</h5>
          </div>
        </div>
        <div className="filter-item">
          <h2 className="filter-heading"onClick={()=>{
              this.setState({
                  color:!this.state.color
              })
          }}>
            colors <i className="fas fa-caret-down"id={this.state.color?'rotate':""}></i>
          </h2>
          <div className={this.state.color ? "color-options":"close"}>

           <div className="color-picker red"></div>
           <div className="color-picker blue"></div>
           <div className="color-picker black"></div>
           <div className="color-picker gray"></div>
           <div className="color-picker green"></div>
          </div>
        </div>
        <div className="filter-item">
          <h2 className="filter-heading"onClick={()=>{
              this.setState({
                  sort:!this.state.sort
              })
          }}>
            sort <i className="fas fa-caret-down"id={this.state.sort?'rotate':""}></i>
          </h2>
          <div className={this.state.sort ? "filter-options":"close"}>
            <h5>price :high to low</h5>
            <h5>low to high</h5>
          </div>
        </div>
      </div>
    );
  }
}
