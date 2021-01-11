import React from "react";
import "./navbar.css";
export default class Navbar extends React.Component {
  render(props) {
    return (
      <nav>
        <div className="nav1">
          <div className="offers">
            <a href="/construction">offers</a>
            <a href="">Fanbook</a>
            <a href="/construction">
              <i class="fas fa-mobile"></i>
              Download App
            </a>
            <a href="/tribe">Tribe Membership</a>
          </div>
          <div className="contact">
            <a href="/contact">contact Us</a>
            <a href="/construction">Track Order</a>
          </div>
        </div>
        <div className="nav2">
          <div className="dropdownwrapper">
            <a href="/">
              <img
                src="https://images.bewakoof.com/logos/bewakoof-logo-og.png"
                alt=""
              />
            </a>
            <li>
              <a href="/construction" name="men"
              onClick={(e)=>{
                // console.log(e.target.name)
                this.props.name(e.target.name)

              }}>Men</a>
              <div className="dropdown">
                <div className="cat">
                  <div className="item">
                    <h2>topwere</h2>
                    <a href="/construction">T-Shirts</a>
                    <a href="/construction">Kurta</a>
                    <a href="/construction">Vest</a>
                    <a href="/construction">Shirt</a>
                    <a href="/construction">Polo-T-Shirts</a>
                    <a href="/construction">Hoodies</a>
                    <a href="/construction">Sweater</a>
                    <a href="/construction">Jackets</a>
                  </div>
                  <div className="item">
                    <h2>Bottomwere</h2>
                    <a href="/construction">Denims</a>
                    <a href="/construction">shorts</a>
                    <a href="/construction">Joggers</a>
                    <a href="/construction">Pyjamas</a>
                    <a href="/construction">Boxers</a>
                  </div>
                  <div className="item">
                    <h2>Religional</h2>
                    <a href="/construction">Marathi-T-Shirts</a>
                    <a href="/construction">Gujrati-T-Shirts</a>
                    <a href="/construction">Bengali-T-Shirts</a>
                  </div>
                  <div className="item">
                    <h2>Accesories</h2>
                    <a href="/construction">Mobile Accesories</a>
                    <a href="/construction">Mobile Covers</a>
                    <a href="/construction">Laptop Bags</a>
                    <a href="/construction">Short Backpage</a>
                    <a href="/construction">Designer Wall Frames</a>
                    <a href="/construction">Notebooks</a>
                  </div>
                  <div className="item">
                    <h2>Footwear</h2>
                    <a href="/construction">Flip flops</a>
                    <a href="/construction">Sliders</a>
                    <a href="/construction">socks</a>
                  </div>
                  <div className="item">
                    <h2>Prevention Gear</h2>
                    <a href="/construction">Protective Masks</a>
                    <a href="/construction">Multipurposes Sanitizers</a>
                    <a href="/construction">Protective Eyewear</a>
                  </div>
                </div>
                <div className="specials">
                  <div className="leftspecials">
                    <h4>specials</h4>
                  
                      <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/winter-navigation-icon-1607622564.png"
                        alt=""
                      />
                      <p>win over winter sales</p>
                      </div>
                      <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/tribe-navigation-icon-1565187343.png"
                        alt=""
                      />
                      <p>tribe membership</p>
                      </div>   <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/bewakoof-fabric-of-the-month-navigation-icon-1607779850.png"
                        alt=""
                      />
                      <p>fabric of the month</p>
                      </div>   <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/dotd-navigation-icon-1593437306.png"
                        alt=""
                      />
                      <p>design of the day</p>
                      </div>   <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/beeakoof-bazaar-online-shopping-icon-1605014994.png"
                        alt=""
                      />
                      <p>bazaar by bewakoof</p>
                      </div>   <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navigation-icon-prevention-gear-1591190310.png"
                        alt=""
                      />
                      <p>prevention gear</p>
                      </div>   <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navigation-icon-1586869458.png"
                        alt=""
                      />
                      <p>bewakoof of recommendes</p>
                      </div>   <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/clearance-sale-upto-60--off-bewakoof-1585835238.png"
                        alt=""
                      />
                      <p>saving zone</p>
                      </div>
                      <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navi-collab-icon-1579514101.gif"
                        alt=""
                      />
                      <p>collaborations</p>
                      </div>
                  </div>
                <img src="https://images.bewakoof.com/nav_menu/bewakoof-fabric-of-the-month-navigation-box-desktop-1607779849.jpg" alt=""/>
                </div>
              </div>
            </li>
            <li>
              <a href="/construction">Women</a>
              <div className="dropdown">
                <div className="cat">
                  <div className="item">
                    <h2>topwere</h2>
                    <a href="/construction">T-Shirts</a>
                    <a href="/construction">Kurta</a>
                    <a href="/construction">Vest</a>
                    <a href="/construction">Shirt</a>
                    <a href="/construction">Polo-T-Shirts</a>
                    <a href="/construction">Hoodies</a>
                    <a href="/construction">Sweater</a>
                    <a href="/construction">Jackets</a>
                  </div>
                  <div className="item">
                    <h2>Bottomwere</h2>
                    <a href="/construction">Plazo & Legins</a>
                    <a href="/construction">Denims</a>
                    <a href="/construction">Joggers</a>
                    <a href="/construction">Pyjamas</a>
                    <a href="/construction">Boxers</a>
                  </div>
                  <div className="item">
                    <h2>Religional</h2>
                    <a href="/construction">Marathi-T-Shirts</a>
                    <a href="/construction">Gujrati-T-Shirts</a>
                    <a href="/construction">Bengali-T-Shirts</a>
                  </div>
                  <div className="item">
                    <h2>Accesories</h2>
                    <a href="/construction">Mobile Accesories</a>
                    <a href="/construction">Mobile Covers</a>
                    <a href="/construction">Laptop Bags</a>
                    <a href="/construction">Short Backpage</a>
                    <a href="/construction">Designer Wall Frames</a>
                    <a href="/construction">Notebooks</a>
                  </div>
                  <div className="item">
                    <h2>Footwear</h2>
                    <a href="/construction">Flip flops</a>
                    <a href="/construction">Sliders</a>
                    <a href="/construction">socks</a>
                  </div>
                  <div className="item">
                    <h2>Prevention Gear</h2>
                    <a href="/construction">Protective Masks</a>
                    <a href="/construction">Multipurposes Sanitizers</a>
                    <a href="/construction">Protective Eyewear</a>
                  </div>
                </div>
                <div className="specials">
                  <div className="leftspecials">
                    <h4>specials</h4>
                  
                      <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/winter-navigation-icon-1607622564.png"
                        alt=""
                      />
                      <p>win over winter sales</p>
                      </div>
                      <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/tribe-navigation-icon-1565187343.png"
                        alt=""
                      />
                      <p>tribe membership</p>
                      </div>   <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/bewakoof-fabric-of-the-month-navigation-icon-1607779850.png"
                        alt=""
                      />
                      <p>fabric of the month</p>
                      </div>   <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/dotd-navigation-icon-1593437306.png"
                        alt=""
                      />
                      <p>design of the day</p>
                      </div>   <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/beeakoof-bazaar-online-shopping-icon-1605014994.png"
                        alt=""
                      />
                      <p>bazaar by bewakoof</p>
                      </div>   <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navigation-icon-prevention-gear-1591190310.png"
                        alt=""
                      />
                      <p>prevention gear</p>
                      </div>   <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navigation-icon-1586869458.png"
                        alt=""
                      />
                      <p>bewakoof of recommendes</p>
                      </div>   <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/clearance-sale-upto-60--off-bewakoof-1585835238.png"
                        alt=""
                      />
                      <p>saving zone</p>
                      </div>
                      <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navi-collab-icon-1579514101.gif"
                        alt=""
                      />
                      <p>collaborations</p>
                      </div>
                  </div>
                <img src="https://images.bewakoof.com/nav_menu/bewakoof-fabric-of-the-month-navigation-box-desktop-1607779849.jpg" alt=""/>
                </div>
              </div>
            </li>
            <li>
              <a href="/construction">Mobile Covers</a>
              <div className="dropdown">
                <div className="cat">
                  <div className="item">
                    <h2>Xiomi</h2>
                    <a href="/construction">Xiomi poco m2 pro</a>
                    <a href="/construction">Xiomi redmi 8A dual</a>
                    <a href="/construction">Xiomi redmi 9 prime</a>
                  </div>
                  <div className="item">
                    <h2>OnePlus</h2>
                    <a href="/construction">OnePlus 8T</a>
                    <a href="/construction">OnePlus 8A</a>
                    <a href="/construction">OnePlus Nord</a>
                  </div>
                  <div className="item">
                    <h2>Apple</h2>
                    <a href="/construction">iphie 12</a>
                    <a href="/construction">iphone 12 mini</a>
                    <a href="/construction">iphone 12 pro max</a>
                  </div>
                  <div className="item">
                    <h2>Samsung</h2>
                    <a href="/construction">samsung galaxy f41</a>
                    <a href="/construction">samsung galaxy m51</a>
                    <a href="/construction">samsung galaxy m01</a>
                  </div>
                  <div className="item">
                    <h2>Realme</h2>
                    <a href="/construction">Realme 7</a>
                    <a href="/construction">Realme 7 pro</a>
                    <a href="/construction">Realme 6i</a>

                  </div>
                  <div className="item">
                    <h2>Vivo</h2>
                  <a href="/construction">vivo v19</a>
                  <a href="/construction">vivo y15</a>
                  <a href="/construction">vivo s1 pro</a>
                  </div>
                </div>
                <div className="specials">
                  <div className="leftspecials">
                    <h4>other brands</h4>
                  
                      <div className="litem">
                       <p>nokia</p>
                      </div>   <div className="litem">
                     
                      <p>oppo</p>
                      </div>   <div className="litem">
                     
                      <p>huwaei</p>
                      </div>   <div className="litem">
                      <p>motorolla</p>
                      </div>
                  </div>
                <img src="https://images.bewakoof.com/nav_menu/mobile-cover-dropdown-box-1558161466.jpg" alt=""/>
                </div>
                </div>
            </li>
          </div>
          <div className="login">
            <div className="inputwrapper">
              <input
                type="text"
                placeholder="Search by product,category,collection"
              />
              <i class="fas fa-search"></i>
            </div>
            <a href="/construction">Login</a>
            <a href="/construction">
              <i class="fas fa-heart"></i>
            </a>
            <a href="/construction">
              <i class="fas fa-shopping-bag"></i>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
