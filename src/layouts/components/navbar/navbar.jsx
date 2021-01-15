import React from "react";
import "./navbar.css";
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: false,
      loggedin: localStorage.getItem("loggedin"),
    };
  }
  render() {
    return (
      <nav>
        <div className="nav1">
          <div className="offers">
            <a href="/products/men">offers</a>
            <a href="">Fanbook</a>
            <a href="https://play.google.com/store/apps/details?id=com.bewakoof.bewakoof">
              <i class="fas fa-mobile"></i>
              Download App
            </a>
            <a href="/tribe">Tribe Membership</a>
          </div>
          <div className="contact">
            <a href="/contact">contact Us</a>
            <a href="/products/men">Track Order</a>
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
              <a href="/products/men">Men</a>
              <div className="dropdown">
                <div className="cat">
                  <div className="item">
                    <h2>topwere</h2>
                    <a href="/products/men">T-Shirts</a>
                    <a href="/products/men">Kurta</a>
                    <a href="/products/men">Vest</a>
                    <a href="/products/men">Shirt</a>
                    <a href="/products/men">Polo-T-Shirts</a>
                    <a href="/products/men">Hoodies</a>
                    <a href="/products/men">Sweater</a>
                    <a href="/products/men">Jackets</a>
                  </div>
                  <div className="item">
                    <h2>Bottomwere</h2>
                    <a href="/products/men">Denims</a>
                    <a href="/products/men">shorts</a>
                    <a href="/products/men">Joggers</a>
                    <a href="/products/men">Pyjamas</a>
                    <a href="/products/men">Boxers</a>
                  </div>
                  <div className="item">
                    <h2>Religional</h2>
                    <a href="/products/men">Marathi-T-Shirts</a>
                    <a href="/products/men">Gujrati-T-Shirts</a>
                    <a href="/products/men">Bengali-T-Shirts</a>
                  </div>
                  <div className="item">
                    <h2>Accesories</h2>
                    <a href="/products/men">Mobile Accesories</a>
                    <a href="/products/men">Mobile Covers</a>
                    <a href="/products/men">Laptop Bags</a>
                    <a href="/products/men">Short Backpage</a>
                    <a href="/products/men">Designer Wall Frames</a>
                    <a href="/products/men">Notebooks</a>
                  </div>
                  <div className="item">
                    <h2>Footwear</h2>
                    <a href="/products/men">Flip flops</a>
                    <a href="/products/men">Sliders</a>
                    <a href="/products/men">socks</a>
                  </div>
                  <div className="item">
                    <h2>Prevention Gear</h2>
                    <a href="/products/men">Protective Masks</a>
                    <a href="/products/men">Multipurposes Sanitizers</a>
                    <a href="/products/men">Protective Eyewear</a>
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
                    </div>{" "}
                    <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/bewakoof-fabric-of-the-month-navigation-icon-1607779850.png"
                        alt=""
                      />
                      <p>fabric of the month</p>
                    </div>{" "}
                    <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/dotd-navigation-icon-1593437306.png"
                        alt=""
                      />
                      <p>design of the day</p>
                    </div>{" "}
                    <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/beeakoof-bazaar-online-shopping-icon-1605014994.png"
                        alt=""
                      />
                      <p>bazaar by bewakoof</p>
                    </div>{" "}
                    <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navigation-icon-prevention-gear-1591190310.png"
                        alt=""
                      />
                      <p>prevention gear</p>
                    </div>{" "}
                    <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navigation-icon-1586869458.png"
                        alt=""
                      />
                      <p>bewakoof of recommendes</p>
                    </div>{" "}
                    <div className="litem">
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
                  <img
                    src="https://images.bewakoof.com/nav_menu/bewakoof-fabric-of-the-month-navigation-box-desktop-1607779849.jpg"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li>
              <a href="/products/women">Women</a>
              <div className="dropdown">
                <div className="cat">
                  <div className="item">
                    <h2>topwere</h2>
                    <a href="/products/men">T-Shirts</a>
                    <a href="/products/men">Kurta</a>
                    <a href="/products/men">Vest</a>
                    <a href="/products/men">Shirt</a>
                    <a href="/products/men">Polo-T-Shirts</a>
                    <a href="/products/men">Hoodies</a>
                    <a href="/products/men">Sweater</a>
                    <a href="/products/men">Jackets</a>
                  </div>
                  <div className="item">
                    <h2>Bottomwere</h2>
                    <a href="/products/men">Plazo & Legins</a>
                    <a href="/products/men">Denims</a>
                    <a href="/products/men">Joggers</a>
                    <a href="/products/men">Pyjamas</a>
                    <a href="/products/men">Boxers</a>
                  </div>
                  <div className="item">
                    <h2>Religional</h2>
                    <a href="/products/men">Marathi-T-Shirts</a>
                    <a href="/products/men">Gujrati-T-Shirts</a>
                    <a href="/products/men">Bengali-T-Shirts</a>
                  </div>
                  <div className="item">
                    <h2>Accesories</h2>
                    <a href="/products/men">Mobile Accesories</a>
                    <a href="/products/men">Mobile Covers</a>
                    <a href="/products/men">Laptop Bags</a>
                    <a href="/products/men">Short Backpage</a>
                    <a href="/products/men">Designer Wall Frames</a>
                    <a href="/products/men">Notebooks</a>
                  </div>
                  <div className="item">
                    <h2>Footwear</h2>
                    <a href="/products/men">Flip flops</a>
                    <a href="/products/men">Sliders</a>
                    <a href="/products/men">socks</a>
                  </div>
                  <div className="item">
                    <h2>Prevention Gear</h2>
                    <a href="/products/men">Protective Masks</a>
                    <a href="/products/men">Multipurposes Sanitizers</a>
                    <a href="/products/men">Protective Eyewear</a>
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
                    </div>{" "}
                    <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/bewakoof-fabric-of-the-month-navigation-icon-1607779850.png"
                        alt=""
                      />
                      <p>fabric of the month</p>
                    </div>{" "}
                    <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/dotd-navigation-icon-1593437306.png"
                        alt=""
                      />
                      <p>design of the day</p>
                    </div>{" "}
                    <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/beeakoof-bazaar-online-shopping-icon-1605014994.png"
                        alt=""
                      />
                      <p>bazaar by bewakoof</p>
                    </div>{" "}
                    <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navigation-icon-prevention-gear-1591190310.png"
                        alt=""
                      />
                      <p>prevention gear</p>
                    </div>{" "}
                    <div className="litem">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navigation-icon-1586869458.png"
                        alt=""
                      />
                      <p>bewakoof of recommendes</p>
                    </div>{" "}
                    <div className="litem">
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
                  <img
                    src="https://images.bewakoof.com/nav_menu/bewakoof-fabric-of-the-month-navigation-box-desktop-1607779849.jpg"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li>
              <a href="/products/mobile covers">Mobile Covers</a>
              <div className="dropdown">
                <div className="cat">
                  <div className="item">
                    <h2>Xiomi</h2>
                    <a href="/products/men">Xiomi poco m2 pro</a>
                    <a href="/products/men">Xiomi redmi 8A dual</a>
                    <a href="/products/men">Xiomi redmi 9 prime</a>
                  </div>
                  <div className="item">
                    <h2>OnePlus</h2>
                    <a href="/products/men">OnePlus 8T</a>
                    <a href="/products/men">OnePlus 8A</a>
                    <a href="/products/men">OnePlus Nord</a>
                  </div>
                  <div className="item">
                    <h2>Apple</h2>
                    <a href="/products/men">iphie 12</a>
                    <a href="/products/men">iphone 12 mini</a>
                    <a href="/products/men">iphone 12 pro max</a>
                  </div>
                  <div className="item">
                    <h2>Samsung</h2>
                    <a href="/products/men">samsung galaxy f41</a>
                    <a href="/products/men">samsung galaxy m51</a>
                    <a href="/products/men">samsung galaxy m01</a>
                  </div>
                  <div className="item">
                    <h2>Realme</h2>
                    <a href="/products/men">Realme 7</a>
                    <a href="/products/men">Realme 7 pro</a>
                    <a href="/products/men">Realme 6i</a>
                  </div>
                  <div className="item">
                    <h2>Vivo</h2>
                    <a href="/products/men">vivo v19</a>
                    <a href="/products/men">vivo y15</a>
                    <a href="/products/men">vivo s1 pro</a>
                  </div>
                </div>
                <div className="specials">
                  <div className="leftspecials">
                    <h4>other brands</h4>
                    <div className="litem">
                      <p>nokia</p>
                    </div>{" "}
                    <div className="litem">
                      <p>oppo</p>
                    </div>{" "}
                    <div className="litem">
                      <p>huwaei</p>
                    </div>{" "}
                    <div className="litem">
                      <p>motorolla</p>
                    </div>
                  </div>
                  <img
                    src="https://images.bewakoof.com/nav_menu/mobile-cover-dropdown-box-1558161466.jpg"
                    alt=""
                  />
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
            {localStorage.getItem("loggedin") === "true" ? (
              <>
                <div className="loggedin">
                  <i
                    onClick={() => {
                      this.setState({ option: !this.state.option });
                    }}
                    className={"fas fa-user user"}
                  ></i>
                  <div className={this.state.option ? "moreitems" : "logclose"}>
                    <button
                      type="button"
                      className="logout"
                      onClick={() => {
                        this.setState({ option: !this.state.option });
                        localStorage.removeItem("loggedin");
                      }}
                    >
                      log out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <a
                onClick={() => {
                  this.props.login();
                }}
              >
                Login
              </a>
            )}
            <a href="/products/men">
              <i class="fas fa-heart"></i>
            </a>
            <a href="/products/men">
              <i class="fas fa-shopping-bag"></i>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
