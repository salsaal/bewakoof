import React, { Component } from 'react'
import './query.css'
export default class Query extends Component {
    render(props) {
        {
            console.log(this.props.items[this.props.tab].questions[0].answer)
        }
        return (

           <div className="query">
               <p>{this.props.tab}</p>
               <p key={this.props.tab}>{this.props.items[this.props.tab].questions[0].answer}</p>
               hello
           </div>
        )
    }
}
