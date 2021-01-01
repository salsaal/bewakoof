import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Navbar from "../src/layouts/components/navbar/navbar";
import Homepage from "./layouts/pages/homepage/homepage";
import Footer from "./layouts/components/footer/footer";
import Construction from "./layouts/pages/construction/construction";
import { Switch, Route } from "react-router-dom";
import men1 from "../src/assests/men1.jpg";
import men2 from "../src/assests/men2.webp";
import men3 from "../src/assests/men3.jpg";
import men4 from "../src/assests/men4.jpg";
import men5 from "../src/assests/men5.jpg";
import men6 from "../src/assests/men6.jpg";
import men7 from "../src/assests/men7.jpg";
import men8 from "../src/assests/men8.jpg";
import men9 from "../src/assests/men9.jpg";
import men10 from "../src/assests/men10.jpg";



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          image: men1,
          color: "black",
          for: "men",
          type:"t-shirt",
          name: 'Mens  t-shirt-black',
          price:'₹250',
          size:'s'
        
        },
        {
          id: 2,
          image: men2,
          color: "white",
          for: "men",
          type:"t-shirt",
          name: 'Mens white',
          price:'₹230',
          size:'m'

        },
        {
          id: 3,
          image: men3,
          color: "red",
          for: "men",
          type:"jackets",
          name: 'Mens black',
          price:'₹240',
          size:'l'

        
        },
        {
          id: 4,
          image: men4,
          color: "black",
          for: "men",
          type:"jackets",
          name: 'Mens white',
          price:'₹340',
          size:'xl'
       
        },
        {
          id: 5,
          image: men5,
          color: "black",
          for: "men",
          type:"hoodies",
          name: 'Mens black',
          price:'₹350',
          size:'xxl'

        },
        {
          id: 6,
          image: men6,
          color: "green",
          for: "men",
          type:"hoodies",
          name: 'Mens white',
          price:'₹210',
          size:'s'

        },
        {
          id: 7,
          image: men7,
          color: "green",
          for: "men",
          type:"shirt",
          name: 'Mens black',
          price:'₹280',
          size:'m'

        
        },
        {
          id: 8,
          image: men8,
          color: "black",
          for: "men",
          type:"shirt",
          name: 'Mens white',
          price:'₹265',
          size:'l'
        },
        {
          id: 9,
          image: men9,
          color: "gray",
          for: "men",
          type:"kurta",
          name: 'Mens black',
          price:'₹320',
          size:'xl'

        
        },
        {
          id: 10,
          image: men10,
          color: "red",
          for: "men",
          type:"kurta",
          name: 'Mens white',
          price:'₹190',
          size:'xxl'

        },
      ],
      filteredItems:[],
      sizeFilteredItems:[],
      colorFilteredItems:[],
      check:true,
      color:true,
    };
  }
  render() {
    const handleFilter=(item)=>{
      console.log(item)
      let myarr=[]
      this.state.products.forEach(product=>{
        if(product.type.toLocaleLowerCase()===item.toLocaleLowerCase())
        {
          myarr.push(product)
          this.setState({
            filteredItems:myarr
          })
          this.setState({check:false})
        }
      })
      console.log(this.state.check ?this.state.products: this.state.filteredItems)
     }
     const handleSizeFilter=(item)=>{
      console.log(item)
      let myarr=[]
      this.state.products.forEach(product=>{
        if(product.size.toLocaleLowerCase()===item.toLocaleLowerCase())
        {
        
          myarr.push(product)
          this.setState({
            sizeFilteredItems:myarr
          })

          this.setState({check:false})
          console.log(this.state.check)
        }
      })
      console.log(this.state.check ?this.state.products: this.state.sizeFilteredItems)
     }
    


     const handleColorFilter=(item)=>{
      console.log(item)
      let myarray=[]
      this.state.products.forEach(product=>{
        if(product.color.toLocaleLowerCase()===item.toLocaleLowerCase())
        {
          myarray.push(product)
          console.log(myarray)
          this.setState({
            colorFilteredItems:myarray
          }
          )
         this.setState({
           check:false,
         }
         )
        }
      })
      console.log(this.state.check ?this.state.products: this.state.colorFilteredItems)
     }
     
    
     let finalFilter=[...this.state.filteredItems,...this.state.sizeFilteredItems,...this.state.colorFilteredItems]
     console.log(finalFilter)
     finalFilter = finalFilter.filter(function(elem, pos) {
      return finalFilter.indexOf(elem) === pos;
      
});
const sort=()=>{
 finalFilter= finalFilter.sort((a, b) => (a.price > b.price) ? 1 : -1)
  return finalFilter;
 }
 console.log(finalFilter)

    // handleFilter()
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            path="/construction"
            render={(props) => <Construction products={this.state.check ? this.state.products:finalFilter} filter={handleFilter} sizeFilter={handleSizeFilter} colorFilter={handleColorFilter} sort={sort}/>}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}
