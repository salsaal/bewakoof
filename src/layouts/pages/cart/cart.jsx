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
                    <a href="/" className="continue-shopping">Continue Shopping</a>
                </div>
                <h4>You could try one of these categories:</h4>
                <div className="cartbottom">
                    <div className="product-cart">
                        <p>men</p>
                        <div className="inside-cart">
                        <a href="/products/men">topwear</a>
                        <a href="/products/men">bottomwear</a>
                        <a href="/products/men">best sellers</a>
                        <a href="/products/men">footwear</a>
                        </div>
                    </div>
                    <div className="product-cart">
                        <p>women</p>
                        <a href="/products/women">topwear</a>
                        <a href="/products/women">bottomwear</a>
                        <a href="/products/women">best sellers</a>
                    </div>
                    <div className="product-cart">
                        <p>Mobile Covers</p>
                        <a href="/products/mobile covers"></a>
                    </div>
                </div>
            </div>
        )
    }
}
