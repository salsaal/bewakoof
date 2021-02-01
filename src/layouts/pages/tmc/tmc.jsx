import React, { Component } from 'react'
import tmc from '../../../assests/tmc.jpg'
import './tmc.css'
export default class Tmc extends Component {
    render() {
        return (
            <div className="term-and-condition">
                <img src={tmc} alt=""/>
            </div>
        )
    }
}
