import React from "react";
import "./App.css";
import Refer from '../src/layouts/pages/refer-earn/refer'
import Myprofile from '../src/layouts/pages/myprofile/myprofile'
import MyWallet from '../src/layouts/pages/mywallet/mywallet'
import Tmc from '../src/layouts/pages/tmc/tmc'
import Myorders from '../src/layouts/pages/myorders/myorder'
import Offer from '../src/layouts/pages/offer/offer'
import Fanbook from '../src/layouts/pages/fanbook/fanbook'
import Cart from "../src/layouts/pages/cart/cart";
import Wishlist from "../src/layouts/pages/wishlist/wishlist";
import Login from '../src/layouts/components/login/login'
import querypage from "./layouts/pages/querypage/querypage";
import tribe from "../src/layouts/pages/tribe/tribe";
import contactus from "../src/layouts/pages/contactus/contactus";
import Navbar from "../src/layouts/components/navbar/navbar";
import Homepage from "./layouts/pages/homepage/homepage";
import Footer from "./layouts/components/footer/footer";
import Construction from "./layouts/pages/construction/construction";
import Alert from '../src/layouts/components/alert/alert'
import { Switch, Route } from "react-router-dom";
import Contactus from "../src/layouts/pages/contactus/contactus";
import Query from "./layouts/pages/querypage/querypage";
import Myaddress from './layouts/pages/myaddress/myaddress'
import products from "./productsHub/products";
import Myaccount from '../src/layouts/pages/myaccount/myaccount'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin:false,
      login:false,
      alert:false
,
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
      ]
    };
  }
  login=()=>{
    this.setState({
      login:!this.state.login
    })
  }
  alert=()=>{
    this.setState({alert:true})
  }
  render() {
    const handleTab = (value) => {
      this.setState({
        tab: value,
      });
    };
    // localStorage.removeItem('loggedin')
    return (
      <div className="App">
        <Navbar
        login={this.login} />
        {
        this.state.alert?<Alert />:null
        }
        {this.state.login?<Login toggle={this.login}toggleAlert={this.alert}/>:null}
        <Switch>
          <Route path="/offer" component={Offer} />
          <Route path="/account/:id" component={Myaccount} />
          <Route  path="/tmc" component={Tmc}/>
          <Route  path="/orders/:id" component={Myorders}/>
          <Route  path="/wallet/:id" component={MyWallet}/>
          <Route path="/address/:id" component={Myaddress}/>
          <Route path="/profile/:id" component={Myprofile}/>
          <Route  path="/fanbook" component={Fanbook}/> 
          <Route  path="/refer" component={Refer}/> 
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/wishlist/:id" component={Wishlist} />
          <Route exact path="/" component={Homepage} />
          <Route
            path="/products/:id"
            component={Construction}
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
