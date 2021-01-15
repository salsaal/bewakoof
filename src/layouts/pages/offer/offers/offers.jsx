import React from 'react'
import './offers.css'

export default class Offers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            offers:[
                {
                    smallheading:'Under 299 Store',
                    heading:'Buy your favourite designs all under Rs. 299',
                    link:'view all products'
                },
                {
                    smallheading:'winter clearance',
                    heading:'Winterwear collection starting from Rs. 499',
                    link:'view all products'
                },
                {
                    smallheading:'Last Sizes Left',
                    heading:'Find your lucky size: Starting at Rs. 259 only',
                    link:'view all products'
                },
                {
                    smallheading:'Plain T-Shirts',
                    heading:'Plain T-Shirt Collection Starting from Rs. 259',
                    link:'view all products'
                },
            ]
        }
    }
    render(){
        return(
            <div className="offerss">
                {
                    this.state.offers.map((item)=>(
                        <div className="offerr">
                            <p>{item.smallheading}</p>
                           <a href="/products/clothing"> <h1>{item.heading}</h1></a>
                            <a href="/products/clothing">{item.link}</a>
                        </div>
                    ))
                }
            </div>
        )
    }
}