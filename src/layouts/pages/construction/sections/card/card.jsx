import React from 'react'
import './card.css'
export  default class Cardlist extends React.Component{
    render(props){
        return(
            <div className="card">
                <div className="card-img-cony">
                    <div className="flash"></div>
              <img src={this.props.products.image} alt=""/>
              </div>
              <h5>{this.props.products.name}</h5>
              <h5>{this.props.products.price}</h5>
              <div className="heart">
              <i className="far fa-heart"></i>
              </div>
            </div>
        )
    }
} 