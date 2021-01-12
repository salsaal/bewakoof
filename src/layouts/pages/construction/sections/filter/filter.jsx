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
          <input
            type="button"
            value="clear all"
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
          />
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
            <input
              type="button"
              value="t-shirt"
              name="category"
              onClick={(e) => {
                this.props.handleFilterName(e);
                this.setState({
                  check: true,
                  checkc: true,
                });
                this.props.filter();
              }}
            ></input>
            <input
              type="button"
              value="jackets"
              name="category"
              onClick={(e) => {
                this.props.handleFilterName(e);
                this.setState({
                  check: true,
                  checkc: true,
                });
                this.props.filter();
              }}
            ></input>
            <input
              type="button"
              value="hoodies"
              name="category"
              onClick={(e) => {
                this.props.handleFilterName(e);
                this.setState({
                  check: true,
                  checkc: true,
                });
                this.props.filter();
              }}
            ></input>
            <input
              type="button"
              value="shirt"
              name="category"
              onClick={(e) => {
                this.props.handleFilterName(e);
                this.setState({
                  check: true,
                  checkc: true,
                });
                this.props.filter();
              }}
            ></input>
            <input
              type="button"
              value="kurta"
              name="category"
              onClick={(e) => {
                this.props.handleFilterName(e);
                this.setState({
                  check: true,
                  checkc: true,
                });
                this.props.filter();
              }}
            ></input>
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
            <input
              type="button"
              value="s"
              onClick={(e) => {
                console.log(e.target.value);
                this.props.sizeFilter(e.target.value);
                this.setState({
                  checks: true,
                  check: true,
                });
              }}
            ></input>
            <input
              type="button"
              value="m"
              onClick={(e) => {
                console.log(e.target.value);
                this.props.sizeFilter(e.target.value);
                this.setState({
                  checks: true,
                  check: true,
                });
              }}
            ></input>
            <input
              type="button"
              value="l"
              onClick={(e) => {
                console.log(e.target.value);
                this.props.sizeFilter(e.target.value);
                this.setState({
                  checks: true,
                  check: true,
                });
              }}
            ></input>
            <input
              type="button"
              value="xL"
              onClick={(e) => {
                console.log(e.target.value);
                this.props.sizeFilter(e.target.value);
                this.setState({
                  checks: true,
                  check: true,
                });
              }}
            ></input>
            <input
              type="button"
              value="xXL"
              onClick={(e) => {
                console.log(e.target.value);
                this.props.sizeFilter(e.target.value);
                this.setState({
                  checks: true,
                  check: true,
                });
              }}
            ></input>
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
            <input
              type="button"
              className="color-picker red"
              name="red"
              onClick={(e) => {
                console.log(e.target.name);
                this.props.colorFilter(e.target.name);
                this.setState({
                  check: true,
                  checkco: true,
                });
              }}
            ></input>
            <input
              type="button"
              className="color-picker black"
              name="black"
              onClick={(e) => {
                console.log(e.target.name);
                this.props.colorFilter(e.target.name);
                this.setState({
                  check: true,
                  checkco: true,
                });
              }}
            ></input>
            <input
              type="button"
              className="color-picker gray"
              name="white"
              onClick={(e) => {
                console.log(e.target.name);
                this.props.colorFilter(e.target.name);
                this.setState({
                  check: true,
                  checkco: true,
                });
              }}
            ></input>
            <input
              type="button"
              className="color-picker green"
              name="green"
              onClick={(e) => {
                console.log(e.target.name);
                this.props.colorFilter(e.target.name);
                this.setState({
                  check: true,
                  checkco: true,
                });
              }}
            ></input>
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
            <input
              type="button"
              onClick={(e) => {
                console.log(e.target.value);
                this.props.sort();
                this.setState({
                  check: true,
                  checkso: true,
                });
              }}
              value="price:low to high"
            ></input>
            {/* <input type='button' onClick={(e)=>{
              console.log(e.target.value)
              this.props.sortl()
              this.setState({
                check:true
                ,
              checkso:true
              })
            }} value="price:low to high"></input> */}
          </div>
        </div>
      </div>
    );
  }
}
