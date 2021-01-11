import React, { Component } from "react";
import './question.css'
export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          question: "How do I become a TriBe member?",
          answer:
            "Joining the TriBe is simple. Follow the link given below and simply add your TriBe membership plan to your cart. Proceed to make your payment online. Your TriBe membership will be activated once your payment is successful. You will receive a welcome email confirming your membership",
        },
        {
            question: "Can I upgrade my TriBe Membership plan?",
            answer:"Currently we do not have an upgrade option but you can simply renew your TriBe membership for a longer term at the time of renewal."
              },
          {
            question: "Can I cancel my TriBe membership?",
            answer:"You can opt out of the TriBe any time. However, please note that we do not offer any refunds on the TriBe membership itself."
          },
          {
            question: "I want to return my products.",
            answer:"You can still return your products like all our other customers. Becoming a member only adds the amazing membership benefits to your account. Please refer to the Returns and refunds section on this page."          },
      ],
    };
  }
  render() {
      return(
          <div className="questioncontainer">
              <h1>Frequently Asked Questions</h1>
                  {this.state.questions.map(function(item){
                      return(
                         
              <div className="questionans">

                          <h2>{item.question}</h2>
                          <p>{item.answer}</p>
              </div>

                          
                      )
                  })}
          </div>
      )
  }
}
