import React, { Component } from 'react'
import './tribe.css'
import tribe1 from '../../../assests/tribe1.webp'
import tribe2 from '../../../assests/tribe2.gif'
import tribe3 from '../../../assests/tribe3.png'
import tribe4 from '../../../assests/tribe4.png'
import rupee from '../../../assests/rupee.png'
import plus from '../../../assests/plus-sign.webp'
import Question from './questions/question'

export default class Tribe extends Component {
    render() {
        return (
            <div className="tribewhole">
            <div className="tribe">
                <div className="intropart">
                    <div className="leftintro">
                        <h2>introducing</h2>
                        <img src={tribe3} alt=""/>
                        <p>We promise that you will never pay full price and stay trendy.</p>
                        <button onClick={()=>{
                            window.scrollTo(0,300)
                        }}>join today</button>
                    </div>
                    <div className="rightimage">
                        <img src={tribe1} alt=""/>
                    </div>
                </div>
                <div className="productpricing" id="plan">
                    <h1>pick a plan</h1>
                    <div className="pricingcontainer">
                        <div className="pricing">
                            <p>Membership valid for 3 months</p>
                            <h2>3 months tribe Membership</h2>
                            <div className="price">
                                <span>$ 99</span>
                                <button>buy now</button>
                            </div>
                        </div>
                        <div className="pricing">
                            <p>Membership valid for 3 months</p>
                            <h2>3 months tribe Membership</h2>
                            <div className="price">
                                <span>$ 99</span>
                                <button>buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jointribe">
                    <img src={tribe4} alt="" className="joinheading"/>
                    <h2>
                        <img src={rupee} alt=""/>
                        member only discounts
                    </h2>
                    <img src={tribe2} alt=""/>
                    <div className="otherbenifits">
                        <div className='benifitheading'>
                            <img src={plus} alt=""/>
                            <h2>
                            other benifits
                            </h2>
                        </div>
                        <div className="benifitbox-container">
                            <div className="benifitbox">
                                <h1>Priority Customer Support</h1>
                            </div>
                            <div className="benifitbox">
                                <h1>Priority Customer Support</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <Question />
            </div>
            </div>
        )
    }
}
