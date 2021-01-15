import React from 'react'
import './fanbook.css'
import fanbook from '../../../assests/fanbook.jpg'
import fanbook1 from '../../../assests/fanbook1.jpg'
import fanbook2 from '../../../assests/fanbook2.jpg'
import fanbook3 from '../../../assests/fanbook3.jpg'
import fanbook4 from '../../../assests/fanbook4.jpg'
import fanbook5 from '../../../assests/fanbook5.jpg'

 export default class Fanbook extends React.Component{
     constructor(props){
         super(props)
         this.state={
             images:[
                 fanbook2,
                 fanbook3,
                 fanbook4,
                 fanbook5
             ]
         }
     }
     render(){
         return(
             <div className="fanbook">
                <img src={fanbook} alt=""/>
                <img src={fanbook1} alt=""/>
                <div className="fanbookimageconta">
                    {
                     this.state.images.map((img)=>(
                         <img src={img}></img>
                     ))   
                    }
                </div>
             </div>
         )
     }
 }