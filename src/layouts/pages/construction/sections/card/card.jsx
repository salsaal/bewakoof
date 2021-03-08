import React from "react";
import "./card.css";
export default class Cardlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
    };
  }
  render() {
    return (
      <div className="card">
        <div className="card-img-cony">
          <a href={`/productd/${this.props.id}`} className="wholecard">
            <div className="flash"></div>
          </a>
          <a href={`/productd/${this.props.id}`} className="wholecard">
            <img src={this.props.products.images[0]} alt="" />
          </a>
        </div>
        <a href={`/productd/${this.props.id}`} className="wholecard">
          <h5>{this.props.products.name}</h5>
          <h5>₹{this.props.products.price}</h5>
        </a>

        <div
          className={this.state.check ? "heart added" : "heart"}
          onClick={() => {
            this.setState({ check: !this.state.check });
          }}
        >
          <i className="fas fa-heart"></i>
        </div>
      </div>
    );
  }
}
