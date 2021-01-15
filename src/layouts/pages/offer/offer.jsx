import React from 'react'
import './offer.css'
import Offers from './offers/offers'
import offer1 from '../../../assests/offer1.jpg'
import offer2 from '../../../assests/offer2.webp'
import offer3 from '../../../assests/offer3.jpg'
import tmc from '../../../assests/tmc.jpg'


export default class Offer extends React.Component{
    render(){
        return(
            <div className="offerpage">
                <h1 className="offerheading">
                Bewakoof Offers
                </h1>
                <p>Find the best offers across our platforms on this page.</p>
                <a href="/tribe">
                <img src={offer1} className="offerbanner" alt=""/>
                </a>
                <h1 className="offerheading2">Bewakoof Pocket Care</h1>
                <Offers />
                <div className="easytrip">
                   <a href="/tribe"> <img src={offer2} alt=""/></a>
                    <img src={offer3} alt=""/>
                </div>
                <img src={tmc} alt=""/>
            </div>
        )
    }
}