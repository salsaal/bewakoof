import React from "react";
import "./App.css";
import querypage from "./layouts/pages/querypage/querypage";
import tribe from "../src/layouts/pages/tribe/tribe";
import contactus from "../src/layouts/pages/contactus/contactus";
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
import Contactus from "../src/layouts/pages/contactus/contactus";
import Query from "./layouts/pages/querypage/querypage";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // querypage
      tab: 0,
      items: [
        {
          heading: "Orders, Delivery & Payment",
          questions: [
            {
              q1: "How do i check my order status?",
              answer: "hihikhi",
            },
          ],
        },
        {
          heading: "Cancellations",
          questions: [
            {
              q1: "Can i cancel my order?",
              answer:
                "Yes. You can cancel your item(s) until we start processing your order. Your order will be in Order confirmed status while it is eligible for cancellation.",
            },
            {
              q1: "how to i cancel my orderwhiich is already in progress",
              answer:
                "Once an order is cancelled, we cannot undo this. You will need to replace the order yourself.",
            },
            {
              q1: "can i cancel my cancellation request",
              answer:
                "Once an order is cancelled, we cannot undo this. You will need to replace the order yourself.",
            },
          ],
        },
        {
          heading: "refunds & Returns",
          questions: [
            {
              q1: "How do i return my products",
              answer: `You can return an order by clicking Return on the My Orders page.
             We accept returns within 15 days of the order. Please ensure while returning the product the packaging is intact the way it was delivered 
             We do not accept returns for boxer shorts due to hygiene concerns.
             We are retreating refund policy on notebooks. Thank you for loving them :)`,
            },
            {
              q1: "how will i get my refund",
              answer:
                "Once the order has been picked up, the refund will be initiated to your selected mode within 12-15 working days from the date your order is picked, subject to your returns passing the quality check.",
            },
          ],
        },
        {
          heading: "My Bewakooof Wallet",
          questions: [
            {
              q1: "i am unable  to use my coupon code",
              answer:
                " Since some of our products are already discounted, promotional coupons and codes will not be applicable on already discounted products. You can use them to purchase any non discounted product.",
            },
            {
              q1: "i am unable to use my wallet amount",
              answer:
                "Bewakoof wallet balance can be used to make purchases across the platform for all products. However, your minimum cart value needs to be INR 249 to use the Bewakoof Credits from your wallet's balance.",
            },
            {
              q1: "how do i use my bewakoof wallet",
              answer:
                "Step 1:While proceeding for payment after adding products to your cart, we have by default selected the 'Use Bewakoof Wallet' option on the payment page.Step 2:In case you choose to pay by other payment options, you can deselect the 'Use Bewakoof Wallet' option on the payment page.Step 3:In case the total amount exceeds Bewakoof Wallet balance, you can pay the remaining amount using any other payment option.",
            },
          ],
        },
        {
          heading: "my account",
          questions: [
            {
              q1: "i have forgotten my password",
              answer: "To generate a new password, please click the link below",
            },
            {
              q1:
                " I would like to unsubscribe from Bewakoof promotional SMS and emails.",
              answer:
                "We’re sorry to see you go. Please write to us here, and our customer care executive will help you resolve this.",
            },
            {
              q1: "i want to delete my account",
              answer:
                "Please write to us here, and our customer care executive will help you resolve this.",
            },
          ],
        },
        {
          heading: "tribe membership",
          questions: [
            {
              q1: "how do i became a tribe member",
              answer:
                "Joining the TriBe is simple. Follow the link given below and simply add your TriBe membership plan to your cart. Proceed to make your payment online. Your TriBe membership will be activated once your payment is successful. You will receive a welcome email confirming your membership.",
            },
            {
              q1: "can i use cod as tribe membership?",
              answer:
                "Yes, you can use COD to purchase your favourite products unless otherwise indicated. Please note that while purchasing the TriBe membership itself you will need to make your payment online and COD will not be applicable on that particular order.",
            },
            {
              q1: "can i cancel my tribe member ship",
              answer:
                "Since we do not refund the membership fees and the TriBe membership does not auto-renew, we do not currently support cancellation of the membership. Your membership will automatically end after the date of expiry.",
            },
          ],
        },
      ],
      products: [
        {
          id: 1,
          image: men1,
          color: "black",
          for: "men",
          type: "t-shirt",
          name: "Mens  t-shirt-black",
          price: "₹250",
          size: "s",
        },
        {
          id: 2,
          image: men2,
          color: "white",
          for: "men",
          type: "t-shirt",
          name: "Mens white",
          price: "₹230",
          size: "m",
        },
        {
          id: 3,
          image: men3,
          color: "red",
          for: "men",
          type: "jackets",
          name: "Mens black",
          price: "₹240",
          size: "l",
        },
        {
          id: 4,
          image: men4,
          color: "black",
          for: "men",
          type: "jackets",
          name: "Mens white",
          price: "₹340",
          size: "xl",
        },
        {
          id: 5,
          image: men5,
          color: "black",
          for: "men",
          type: "hoodies",
          name: "Mens black",
          price: "₹350",
          size: "xxl",
        },
        {
          id: 6,
          image: men6,
          color: "green",
          for: "men",
          type: "hoodies",
          name: "Mens white",
          price: "₹210",
          size: "s",
        },
        {
          id: 7,
          image: men7,
          color: "green",
          for: "men",
          type: "shirt",
          name: "Mens black",
          price: "₹280",
          size: "m",
        },
        {
          id: 8,
          image: men8,
          color: "black",
          for: "men",
          type: "shirt",
          name: "Mens white",
          price: "₹265",
          size: "l",
        },
        {
          id: 9,
          image: men9,
          color: "gray",
          for: "men",
          type: "kurta",
          name: "Mens black",
          price: "₹320",
          size: "xl",
        },
        {
          id: 10,
          image: men10,
          color: "red",
          for: "men",
          type: "kurta",
          name: "Mens white",
          price: "₹190",
          size: "xxl",
        },
      ],
      men: [
        {
          id: 9,
          image: men9,
          color: "gray",
          for: "men",
          type: "kurta",
          name: "Mens black",
          price: "₹320",
          size: "xl",
        },
        {
          id: 10,
          image: men10,
          color: "red",
          for: "men",
          type: "kurta",
          name: "Mens white",
          price: "₹190",
          size: "xxl",
        },
      ],
      name: "",
      filteredItems: [],
      sizeFilteredItems: [],
      colorFilteredItems: [],
      sort: true,
      result: null,
      check: true,
      color: true,
    };
  }
  render() {
    const handleTab = (value) => {
      this.setState({
        tab: value,
      });
    };
    const handleCategory = (category) => {
      alert("hi");
      console.log(category);
      if (category === "men") {
        this.setState({
          products: this.state.category,
        });
      }
    };
    const name = (name) => {
      this.setState({
        name: name,
      });
    };
    const clearFilter = () => {
      this.setState({
        check: true,
        filteredItems: [],
        sizeFilteredItems: [],
        colorFilteredItems: [],
      });
      // alert('hihihih')
      finalFilter = [];
      finalarray = ["hi"];
      console.log(finalarray);
    };
    const handleFilter = (item) => {
      console.log(item);
      let myarr = [];
      this.state.products.forEach((product) => {
        if (product.type.toLocaleLowerCase() === item.toLocaleLowerCase()) {
          myarr.push(product);
          this.setState({
            filteredItems: myarr,
          });
          this.setState({ check: false });
        }
      });
      console.log(
        this.state.check ? this.state.products : this.state.filteredItems
      );
    };
    const handleSizeFilter = (item) => {
      console.log(item);
      let myarr = [];
      this.state.products.forEach((product) => {
        if (product.size.toLocaleLowerCase() === item.toLocaleLowerCase()) {
          myarr.push(product);
          this.setState({
            sizeFilteredItems: myarr,
          });

          this.setState({ check: false });
          console.log(this.state.check);
        }
      });
      console.log(
        this.state.check ? this.state.products : this.state.sizeFilteredItems
      );
    };

    const handleColorFilter = (item) => {
      console.log(item);
      let myarray = [];
      this.state.products.forEach((product) => {
        if (product.color.toLocaleLowerCase() === item.toLocaleLowerCase()) {
          myarray.push(product);
          console.log(myarray);
          this.setState({
            colorFilteredItems: myarray,
          });
          this.setState({
            check: false,
          });
        }
      });
      console.log(
        this.state.check ? this.state.products : this.state.colorFilteredItems
      );
    };
    //   let finalSize=[]
    //  this.state.sizeFilteredItems.forEach((product,index)=>{
    //   console.log(product.type)
    //   // console.log(this.state.filteredItems)
    //   if(product.type.toLocaleLowerCase()===this.state.filteredItems[index].type.toLocaleLowerCase()){
    //   finalSize.push(product)
    //   console.log('matched')
    //   }
    //   })
    let finalFilter = [
      ...this.state.filteredItems,
      ...this.state.sizeFilteredItems,
      ...this.state.colorFilteredItems,
    ];
    // removing duplicates
    finalFilter = finalFilter.filter(function (elem, pos) {
      return finalFilter.indexOf(elem) === pos;
    });
    console.log(finalFilter);

    // const sort = () => {
    //   finalFilter = finalFilter.sort((a, b) => (a.price > b.price ? 1 : -1));
    //   return finalFilter;
    // };
    let result = (this.state.check ? this.state.products : finalFilter).length;
    console.log(result);
    let finalarray = this.state.check ? this.state.products : finalFilter;
    console.log(finalarray);
    const sort = () => {
      finalarray = finalarray.sort((a, b) => (a.price > b.price ? 1 : -1));
      console.log(finalarray);
      this.setState({
        sort: !this.state.sort,
      });
    };

    // handleFilter()
    return (
      <div className="App">
        <Navbar category={handleCategory} 
                name={name}
                />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            path="/construction"
            render={(props) => (
              <Construction
                products={finalarray}
                filter={handleFilter}
                sizeFilter={handleSizeFilter}
                colorFilter={handleColorFilter}
                sort={sort}
                clearFilter={clearFilter}
                result={result}
                name={this.state.name}
              />
            )}
          />
          <Route
            path="/querypage"
            render={(props) => (
              <Query
                key={this.state.tab}
                items={this.state.items}
                tab={this.state.tab}
              />
            )}
          />
          {console.log(this.state.tab)}
          <Route path="/tribe" component={tribe} />
          <Route
            path="/contact"
            render={(props) => (
              <Contactus
                items={this.state.items}
                tab={this.state.tab}
                ctab={handleTab}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}
