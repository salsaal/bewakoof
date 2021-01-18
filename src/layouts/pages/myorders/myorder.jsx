import React from 'react'
import './myorder.css'
import Backlink from '../../components/back-link/backlink'
import cart from '../../../assests/cart.png'
export default  class Myorder extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="myorders">
                <div className="myordersmain">
                <Backlink />
                 <h1 className="aheading">
                    {
                        this.props.match.params.id
                    }
                </h1>
                <div className="noorder">
                    <p>Sadly, you haven't placed any orders till now.</p>
                    <img src={cart} alt=""/>
                    <a href="/" className="continue-shopping">Continue Shopping</a>
                </div>
                </div>
            </div>
        )
    }
}

