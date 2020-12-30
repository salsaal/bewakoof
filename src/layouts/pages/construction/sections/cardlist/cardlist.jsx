import React from 'react'
import './cardlist.css'
import Card from '../card/card'
export  default class Cardlist extends React.Component{
    render(props){
        return(
            <div className="cardlist">
                {
                    this.props.products.map(item =>(
                        <Card key={item.id} products={item} />
                    ))
                }
            </div>
        )
    }
} 