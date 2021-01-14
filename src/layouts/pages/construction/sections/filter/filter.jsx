import React from "react";
import "./filter.css";
export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: false,
      size: false,
      sort: false,
      color: false,
      checks: false,
      checkco: false,
      checkso: false,
      checkc: false,
      check: false,
    };
  }
  render(props) {
    return (
      <div className="filter">
        <div className="title">
          <h5>filter</h5>
          <button
            type="button"
            className={this.state.check ? "" : "close"}
            onClick={() => {
              this.props.clear();
              this.setState({
                check: false,
                checks: false,
                checkco: false,
                checkso: false,
                checkc: false,
              });
            }}
          >clear all</button>
        </div>
        <div className="filter-item">
          <h2
            className="filter-heading"
            onClick={() => {
              this.setState({
                cat: !this.state.cat,
              });
            }}
          >
            category
            <div className={this.state.checkc ? "dot" : "close"}></div>
            <i
              className="fas fa-caret-down"
              id={this.state.cat ? "rotate" : ""}
            ></i>
          </h2>
          <div className={this.state.cat ? "filter-options" : "close"}>
            <button
              type="button"
              onClick={() => {
                this.props.handleFilterName("category", "t-shirt");
                this.setState({
                  check: true,
                  checkc: true,
                });
              }}
            >T-Shirt</button>
            <button
              type="button"
              onClick={() => {
                this.props.handleFilterName("category", "jackets");
                this.setState({
                  check: true,
                  checkc: true,
                });
              }}
            >jackets</button>
            <button
              type="button"
              onClick={() => {
                this.props.handleFilterName("category", "hoodies");
                this.setState({
                  check: true,
                  checkc: true,
                });
              }}
            >hoodies</button>
            <button
              type="button"
              onClick={() => {
                this.props.handleFilterName("category", "shirt");
                this.setState({
                  check: true,
                  checkc: true,
                });
              }}
            >shirt</button>
            <button
              type="button"
              onClick={() => {
                this.props.handleFilterName('category', 'kurta');
                this.setState({
                  check: true,
                  checkc: true,
                });
              }}
            >kurta</button>
          </div>
        </div>
        <div className="filter-item">
          <h2
            className="filter-heading"
            onClick={() => {
              
              this.setState({
                size: !this.state.size,
              });
            }}
          >
            sizes
            <div className={this.state.checks ? "dot" : "close"}></div>
            <i
              className="fas fa-caret-down"
              id={this.state.size ? "rotate" : ""}
            ></i>
          </h2>
          <div className={this.state.size ? "filter-options" : "close"}>
            <button
              type="button"
              value="s"
              onClick={(e) => {
                this.props.handleFilterName('size', 's');
                this.setState({
                  checks: true,
                  check: true,
                });
              }}
            >S</button>
            <button
              type="button"
              value="m"
              onClick={(e) => {
                this.props.handleFilterName('size', 'm');
                this.setState({
                  checks: true,
                  check: true,
                });
              }}
            >M</button>
            <button
              type="button"
              value="l"
              onClick={(e) => {
                this.props.handleFilterName('size', 'l');

                this.setState({
                  checks: true,
                  check: true,
                });
              }}
            >L</button>
            <button
              type="button"
              value="xL"
              onClick={(e) => {
                this.props.handleFilterName('size', 'xl');

                this.setState({
                  checks: true,
                  check: true,
                });
              }}
            >XL</button>
            <button
              type="button"
              value="xXL"
              onClick={(e) => {
                this.props.handleFilterName('size', 'xxl');

                this.setState({
                  checks: true,
                  check: true,
                });
              }}
            >XXL</button>
          </div>
        </div>
        <div className="filter-item">
          <h2
            className="filter-heading"
            onClick={() => {
              this.setState({
                color: !this.state.color,
              });
            }}
          >
            colors
            <div className={this.state.checkco ? "dot" : "close"}></div>
            <i
              className="fas fa-caret-down"
              id={this.state.color ? "rotate" : ""}
            ></i>
          </h2>
          <div className={this.state.color ? "color-options" : "close"}>
            <button
              type="button"
              className="color-picker red"
              onClick={(e) => {
                this.props.handleFilterName('color', 'red');
                
                this.setState({
                  check: true,
                  checkco: true,
                });
              }}
            ></button>
            <button
              type="button"
              className="color-picker black"
              onClick={(e) => {
                this.props.handleFilterName('color', 'black');

                this.setState({
                  check: true,
                  checkco: true,
                });
              }}
            ></button>
            <button
              type="button"
              className="color-picker gray"
              onClick={(e) => {
                this.props.handleFilterName('color', 'white');

                this.setState({
                  check: true,
                  checkco: true,
                });
              }}
            ></button>
            <button
              type="button"
              className="color-picker green"
              onClick={(e) => {
                this.props.handleFilterName('color', 'green');
                this.setState({
                  check: true,
                  checkco: true,
                });
              }}
            ></button>
          </div>
        </div>
        <div className="filter-item">
          <h2
            className="filter-heading"
            onClick={() => {
              this.setState({
                sort: !this.state.sort,
              });
            }}
          >
            sort
            <div className={this.state.checkso ? "dot" : "close"}></div>
            <i
              className="fas fa-caret-down"
              id={this.state.sort ? "rotate" : ""}
            ></i>
          </h2>
          <div className={this.state.sort ? "filter-options" : "close"}>
            <button
              type="button"
              name="low"

              onClick={(e) => {
                this.props.sort(e.target.name);
                this.setState({
                  check: true,
                  checkso: true,
                });
              }}
              value="price:low to high"
            >price:low to high</button>
            <button type='button' 
              name="high"
              onClick={(e)=>{
              this.props.sort(e.target.name)
              this.setState({
                check:true
                ,
              checkso:true
              })
            }} value="price:high to low">price:high to low</button>
          </div>
        </div>
      </div>
    );
  }
}
