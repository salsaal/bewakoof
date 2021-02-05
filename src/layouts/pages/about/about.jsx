import React, { Component } from 'react'
import './about.css'
import about1 from '../../../assests/about1.png'
import about2 from '../../../assests/about2.webp'
export default class About extends Component {
    render() {
        return (
            <div className="about-page">
                <div className="about-intro">
                    <div className="story">
                        <h1 className="aheading">Our Story</h1>
                        <img src={about1} alt=""/>
                    </div>
                    <div className="story-description">
                        <p className="description-heading">
                        Our story starts with the name
                       <span> Bewakoof.</span>
                        </p>
                        <p>	
                            Our story starts with the name
                            Bewakoof.
                            Society perceives Bewakoof as stupid. But what does society call Bewakoof?
                            Often, it’s anything different or anything that’s done differently.</p>
                        <p>
                        Often when people have done the right thing, without caring about what society thinks, they have been called Bewakoof. These are the people who have changed the world and made it a better place.
                        </p>
                    </div>
                </div>
                <div className="black-about">
                    <p className="black-content">
                    Making an impact through <span>innovation,</span> 
                   <span> honesty,</span> and <span> thoughtfulness</span>
                    </p>
                </div>
                <div className="look-about">
                    <p className="description-heading">
                        For us, Bewakoof is the spirit of looking at things differently.
                    </p>
                    <p>
                        Trying new things even when success is not guaranteed. <br/>
                        Not stepping on others to get ahead. <br/>
                        Thinking about the benefit of others just as you’d think about your own.
                    </p>
                    <p>
                        This was the spirit on which Bewakoof was founded in 2012. <br/>
                        With the belief that a business cannot be about financial gain alone.
                    </p>
                    <p className="description-heading">
                    It is about making a positive impact. That’s what Bewakoof is about.
                    </p>
                </div>
                <img src={about2} alt="" />
                <div className="fashion-about">
                <p><span>Bewakoof </span>is</p>
                <h1>Distinctive fashion <br/>
                for the <span>contemporary Indian</span></h1>
                <p>with <span> In-house capabilities </span> in design, manufacturing, technology, data science, and marketing</p>
                </div>
                <div className="history-about">
                    <div className="history">
                        <h1>7 years</h1>
                        <p>of journey so far</p>
                    </div>
                    <div className="history">
                        <h1>250+</h1>
                        <p>team-members</p>
                    </div>
                    <div className="history">
                        <h1>1 crore+</h1>
                        <p>products sold!</p>
                    </div>
                    <div className="history">
                        <h1>60 Lakhs+</h1>
                        <p>app downloads</p>
                    </div>
                </div>
                <div className="last-section">
                    <p>
                    What makes us <span> Bewakoof</span>
                    </p>
                    <div className="last-about">
                        <div className="last-design">
                            <h1>Innovative design</h1>
                            <p>Creating designs that are an extension of you.</p>
                        </div>
                        <div className="last-design">
                            <h1>Direct to consumer model</h1>
                            <p>Bringing accessibility and value to everyday fashion.</p>
                        </div>
                        <div className="last-design">
                            <h1>Homegrown</h1>
                            <p>Imagined in India, Made in India.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
