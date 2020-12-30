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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          image: men1,
          color: "black",
          type: "men",
          name: 'Mens black',
          price:'₹250',
        
        },
        {
          id: 2,
          image: men2,
          color: "white",
          type: "men",
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
