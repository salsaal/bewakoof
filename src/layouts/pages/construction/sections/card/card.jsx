import React from 'react'
import './card.css'
export  default class Cardlist extends React.Component{
    render(props){
        return(
            <div className="card">
              <img src={this.props.products.image} alt=""/>
              <h5>{this.props.products.name}</h5>
              <h5>{this.props.products.price}</h5>
            </div>
        )
    }
} 