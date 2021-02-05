import React from 'react'
import './cardlist.css'
import Card from '../card/card'
export  default class Cardlist extends React.Component{
    render(){
        return(
            <>
            {this.props.products.length===0?(
                <h1 className='noresult'>no results</h1>
            ):( <div className="cardlist">
                {
                   this.props.products.map(item =>(
                       <Card key={item.id} products={item} id={item.id}/>

                    ))
                }
            </div>)}
           
            </>
        )
    }
} 