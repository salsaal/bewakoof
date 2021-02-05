import React from "react";
import logo from "../../../assests/logo.jpg";
import "./footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <img src={logo} alt="" />
        <div className="services">
          <div className="service">
            <h3>Customer Service</h3>
            <a href="/contact">contact us</a>
            <a href="/contact">track order</a>
            <a href="/contact">cancel Order</a>
            <a href="/contact"> return order</a>
          </div>
          <div className="service">
            <h3>company</h3>
            <a href="/about">about us</a>
            <a>we'r hiring</a>
            <a href="/tmc">terms and conditions</a>
            <a href="/privacy">privacy & polivcy</a>
            <a>blog</a>
          </div>
          <div className="service">
            <h3>Connect with us</h3>
            <a href="https://www.facebook.com/search/top?q=bewakoof%20com">
              <i class="fab fa-facebook-square"></i> 4.7M people like this
            </a>
            <a href="https://www.instagram.com/bewakoofofficial/">
              <i class="fab fa-instagram"></i>1M followeres
            </a>
            <div className="iconcontainer">
              <a href="https://twitter.com/bewakoof">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://in.pinterest.com/bewakoof/_created/">
                <i class="fab fa-pinterest-square"></i>
              </a>
              <a href="https://www.snapchat.com/add/bewakoof_tv">
                <i class="fab fa-snapchat-ghost"></i>
              </a>
              <a href="https://apps.apple.com/in/app/bewakoof/id1100190514">
                <i class="fab fa-apple"></i>
                </a>
            </div>
          </div>
          <div className="service">
            <h3>keep up to date</h3>
            <div className="email">
              <input type="email" placeholder="Enter Your Email ID" />
              <button>subscribe</button>
            </div>
          </div>
        </div>
        <div className="payment">
          <div>
            <a href="/contact">
              <i class="fas fa-undo"></i>
              <p>15 Days return policy</p>
            </a>
            <a href="/contact">
              <i class="fas fa-truck"></i>
              <p>Cash On Delivery</p>
            </a>
          </div>
          <div>
            <h3>Download the app</h3>
            <div>
              <a href="https://play.google.com/store/apps/details?id=com.bewakoof.bewakoof">

              <img
                src="https://images.bewakoof.com/web/app_android_v1.png"
                alt=""
                />
              </a>
              <a href="https://apps.apple.com/in/app/bewakoof/id1100190514">
                
              <img
                src="https://images.bewakoof.com/web/app_ios_v1.png"
                alt=""
              />
              </a>

            </div>
          </div>
          <div>
            <h3>100% secure payment</h3>
            <img
              src="https://images.bewakoof.com/web/secure-payments-image.png"
              alt=""
              className="pay"
            />
          </div>
        </div>
        <div className="line"></div>
        <div className="category">
          <div className="type">
            <h1>mens clothing</h1>
            <a>Men's New Arrivals</a>
            <a>top wear</a>
            <a>men's t-shirt</a>
            <a>men's hlaf sleeve t-shirts</a>
            <a>men's long sleev t-shirts</a>

            <br />
            <a>bottoms wear</a>
            <a>men's jogger</a>
            <a>men's pants</a>

            <br />
            <a>featured</a>
            <a>xxxl t-shirts</a>
            <a>men's sliders</a>
            <a>masks</a>
            <a>sanitizers</a>
            <a>surgical masks</a>
            <a>n95 masks</a>
            <a>kawach masks</a>
          </div>
          <div className="type">
            <h1>womens clothing</h1>

            <a>women's top wear</a>
            <a>women's new arrivals</a>
            <a>women's t-shirts</a>
            <a>women's dresses</a>
            <a>women 3/4 sleeve t-shirts</a>

            <br />
            <a>women's bottom wear</a>
            <a>women's jogger</a>
            <a>bags</a>

            <br />
            <a>featured</a>
            <a>women's slides</a>
            <a>xxxl clothes</a>
            <a>clearence zone</a>
          </div>{" "}
          <div className="type">
            <h1>mobile covers</h1>

            <a>brands apple</a>
            <a>motorolla</a>
            <a>samsung</a>
            <a>xiomi</a>
            <a>oneplus</a>
            <a>vivo</a>
            <a>nokia</a>
          </div>{" "}
          <div className="type">
            <a href="">fanbook</a>
            <a href="">offers</a>
            <a href="">sitemap</a>
          </div>
        </div>
        <div className="about">
          <h2>BEWAKOOF THE NEW AGE ONLINE SHOPPING EXPERIENCE.</h2>
          <p>
            {" "}
            Founded in 2012, Bewakoof is a lifestyle fashion brand that makes
            creative, distinctive fashion for the trendy, contemporary Indian.
            Bewakoof was created on the principle of creating impact through
            innovation, honesty and thoughtfulness.
            <br />
            <br /> With a team of 400 members, and 2mn products sold till date.
            We like to experiment freely, which allows us to balance creativity
            and relatability, and our innovative designs. Our range of products
            is always fresh and up-to-date, and we clock sales of over 1 lakh
            products a month. Our innovation focus extends to our operations as
            well. We are vertically integrated, manufacture our own products,
            and cut out the middleman wherever possible. This direct-to-consumer
            model allows us to create high-quality fashion at affordable prices.
            A thoughtful brand, we actively attempt to minimize our
            environmental footprint and maximize our social impact. These
            efforts are integrated right into our day-to-day operations, from
            rainwater harvesting to paper packaging to employee benefits. To
            create an accessible, affordable and thoughtful experience of online
            shopping in India.
          </p>
        </div>
        <div className="about">
          <h2>
            NLINE SHOPPING AT BEWAKOOF IS HASSLE-FREE, CONVENIENT AND
            SUPER-EXCITING!
          </h2>
          <p>
            {" "}
            Online Shopping has always been a fun and exciting task for most and
            more so when the shopping mall is none other than your own house. We
            have all had days when we have planned trips to the clothing store
            in advance, dreaming about what we would buy once we get there. Now
            we wouldnt think twice before indulging in some online shopping.
            Well, cut to todays time and age, you can do all this from the
            comfort of your home while enjoying many online shopping offers,
            right from amazing deals and discounts to one of the most robust
            user interface amongst most online shopping sites in India, with
            many shopping filters to make your shopping experience truly hassle
            free. This in our own words is what we call Bewakoof.com.
            <br />
            <br />
            Bewakoof, THE place to be when it comes to the coolest in online
            fashion, offers you fine, high-quality merchandise go ahead and
            indulge in a bit of online shopping for men and womens fashion. So
            browse through the exciting categories we have on offer from mens
            fashion to basic mens clothing as well as wide variety in womenswear
            and womens clothes to the amazing range of accessories, fill up your
            carts and get fast home delivery for all orders. All of this topped
            with our exclusive online shopping offers makes for an exciting,
            irresistible and uber cool combo! You can even gift some to your
            near and dear ones while being absolutely certain that it will put a
            smile on their faces.
          </p>
        </div>
        <div className="about">
          <h2>COLOR OF THE MONTH- 30 DAYS, 1 SHADE!</h2>
          <p>
            {" "}
            When was the last time you played the colour game that we all loved
            in our childhood? Well, we believe that we are always children at
            heart and for all the children within us, bewakoof.com runs colour
            of the month. Color of the month is a vibe that we feel every month.
            To communicate that to our consumers and creating the mood for it is
            our sole purpose. Our palette refreshes every month and every color
            has a story to tell.
            <br />
            <br />A fresh new concept for online fashion, for fresh new looks.
            Every month on the first, we choose a new colour and showcase all
            our products for that particular colour. Apparels, mostly solid
            colored plain t-shirts, are available at an exclusive discounted
            price every first of the month. There are options available in
            sleeve styles Boyfriend sleeves for women, full sleeve t-shirts for
            men and more. You can buy those throughout the month but the
            exclusive price will only be valid for that one day, the first of
            every month. Online shopping never seemed so fresh and exciting. So
            hurry up and stack your cart with your favourite colour before it
            goes out of stock!
          </p>
        </div>
        <div className="about">
          <h2>OUR PHILOSOPHY</h2>
          <p>
            {" "}
            We believe in creating the kind of fashion, that makes you stand out
            as they are in line with the latest local and global trends of the
            industry, but also at the same time offer value for money
            functionality, with quality materials and comfortable and flattering
            prints. We try to look into the psyche of our customers, and try to
            get inspired by the conversations and experiences around us while
            creating our graphics, to ensure that they are relatable. We believe
            in constant and consistent innovation to ensure that our fans get
            nothing short of the bets at affordable rates! While most people do
            not know, we do not outsource the manufacturing of our products,
            everything from the conception of the designs to the manufacture and
            the styling that you see on the photographs of the banners and
            product pages of our website all happen in house! We go from yarn to
            product and since we 're vertically integrated and bring fashion
            from us directly to your doorstep without any middlemen that also
            further ensures reliability because for us it is not just about the
            money but about building the trust and credibility in our fans about
            our brand. We also make sure to decrease the impact on environment
            and are building initiatives that will help us with the same, for
            now by optimizing our processes to use only as much as we need from
            nature, rain water harvesting and recycling the water from our RO
            water facility, because we believe that the spirit of Bewakoof is
            about creating an impact by breaking conventions and having a
            different perspective!
          </p>
        </div>
      </footer>
    );
  }
}
