import React from 'react'
import './card.css'
export  default class Cardlist extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            check:false
        }
    }
    render(props){
        return(
            <div className="card">
                <div className="card-img-cony">
                    <div className="flash"></div>
              <img src={this.props.products.image} alt=""/>
              </div>
              <h5>{this.props.products.name}</h5>
              <h5>{this.props.products.price}</h5>
              <div className={this.state.check?"heart added":"heart"} onClick={()=>{this.setState({check:!this.state.check})}}>
              <i className="fas fa-heart"></i>
              </div>
            </div>
        )
    }
} 