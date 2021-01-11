import React, { Component } from 'react'
import './contactus.css'
import arrow from '../../../assests/sendarrow.png'
import Order from './order/order'
export default class Contactus extends Component {
    constructor(props){
        super(props)
        this.state={
            address:[
                'Bewakoof Brands Pvt. Ltd.',
                'WeWorks Chromium,',
                '3rd Floor, B114-116,',
                'Next to L&T Flyover, Jogeshwari Vikhroli Link Road,',
                'Andheri (East) Mumbai, Maharashtra, 400076'
            ],
            email:' care@bewakoof.com ',
            contact2:'at with all queries. We do not have a Bewakoof customer care number.',
            contact1:'You can reach us '
        }
    }
    render(props) {
        return (
            <div className="contactus">
                <div className="query">
                    <div className="searchquery">
                        <h1>What’s your query about?</h1>
                        <input type="text" placeholder="Search query"/>
              <i class="fas fa-search"></i>
                        
                    </div>
                    <img src={arrow} alt=""/>
                </div>
                <Order items={this.props.items}tab={this.props.tab} ctab={this.props.ctab} />
                <div className="address">
                    <h1>Corporate Address:</h1>
                    {
                        this.state.address.map(item=>
                            (          
                                <p>{item}</p>
                            )
                        )
                    }
                    <p>{this.state.contact1}<strong>{this.state.email}</strong>{this.state.contact2}</p>
                </div>
            </div>
        )
    }
}
