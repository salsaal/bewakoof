import React, { Component } from 'react'
import './cart.css'
import cart from '../../../assests/cart.png'
export default class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <div className="bag">
                    <img src={cart} alt=""/>
                    <h2>nothing in bag</h2>
                    <button>continue shopping</button>
                </div>
                <div className="cartbottom">
                    <h4>You could try one of these categories:</h4>
                    
                </div>
            </div>
        )
    }
}
