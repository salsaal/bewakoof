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
        
        },
        {
          id: 2,
          image: men2,
          color: "white",
          for: "men",
          type:"t-shirt",
          name: 'Mens white',
          price:'₹240',
        },
        {
          id: 3,
          image: men3,
          color: "black",
          for: "men",
          type:"t-shirt",
          name: 'Mens black',
          price:'₹250',
        
        },
        {
          id: 4,
          image: men4,
          color: "white",
          for: "men",
          type:"t-shirt",
          name: 'Mens white',
          price:'₹240',
       
        },
        {
          id: 5,
          image: men5,
          color: "black",
          for: "men",
          type:"t-shirt",
          name: 'Mens black',
          price:'₹250',
        },
        {
          id: 6,
          image: men6,
          color: "white",
          for: "men",
          type:"t-shirt",
          name: 'Mens white',
          price:'₹240',
        },
        {
          id: 7,
          image: men7,
          color: "black",
          for: "men",
          type:"t-shirt",
          name: 'Mens black',
          price:'₹250',
        
        },
        {
          id: 8,
          image: men8,
          color: "white",
          for: "men",
          type:"t-shirt",
          name: 'Mens white',
          price:'₹240',
        },
        {
          id: 9,
          image: men9,
          color: "black",
          for: "men",
          type:"t-shirt",
          name: 'Mens black',
          price:'₹250',
        
        },
        {
          id: 10,
          image: men10,
          color: "white",
          for: "men",
          type:"t-shirt",
          name: 'Mens white',
          price:'₹240',
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            path="/construction"
            render={(props) => <Construction products={this.state.products} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}
