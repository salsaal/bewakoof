import React, { Component } from 'react'
import './myaccount.css'
import account from '../../../assests/account.png'

export default class Myaccount extends Component {
    render() {
        return (
            <div className="myaccount">
                <h1 className="aheading">
                    {
                        this.props.match.params.id
                    }
                </h1>
                <div className="subpageslist">
                    <a href="/orders/My Orders" className="pages">
                        My orders <span className="gosign">></span>
                        <p>View, modify and track orders</p>
                    </a>
                    <a href="/wallet/My Wallet" className="pages">
                        My Wallet <span>Rs.0</span><span className="gosign">></span>
                        <p>View, modify and track orders</p>
                    </a>
                    <a href="/address/My Address" className="pages">
                        My Address <span className="gosign">></span>
                        <p>View, modify and track orders</p>
                    </a>
                    <a href="" className="pages">
                        My Profile <span className="gosign">></span>
                        <p>View, modify and track orders</p>
                    </a>
                    <a href="" className="pages">
                        Refer And earn <span className="gosign">></span>
                        <p>View, modify and track orders</p>
                    </a>
                </div>
                <div className="loweraccount">
                    <div className="left">
                        <h1>Buy something to get personalised recommendations.</h1>
                        <a href="/" className="continue-shopping">Continue Shopping</a>
                    </div>
                    <img src={account} alt=""/>
                </div>
            </div>
        )
    }
}
