import React from "react";
import Header from '../header';
import Footer from '../footer';
import { Link } from 'react-router-dom';
class AboutUs extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="about-row" style={{ textAlign: 'center' }}>
            <p className="head1">About Us</p>
            <span className="menu-title">Our Vision</span>
            <span className="separator"></span>
            <span className="menu-title">Mission</span>
            <span className="separator"></span>
            <span className="menu-title">Objective</span>
            <br className="clear" />
            <div className="horizontal"></div>
          </div>
          <br className="clear" />
          <div className="about-row">
            <div>
              <img style={{ verticalAlign: 'middle', maxWidth: '100%', border: '0' }} src="https://static.jumia.com.ng/cms/content-pages/About/KE_W19_LP_About_Us_01.jpg" alt="about" />
            </div>
            <p className="sub-head"></p>

            <div className="about-row">
              <br />
              <br />
              <center>
                <img style={{ verticalAlign: 'middle', maxWidth: '100%', border: '0' }} src="https://static.jumia.com.ng/cms/content-pages/About/KE_W19_LP_About_Us_06.png" alt="history" />

                <div className="grey_wrap">
                  <p className="sub-title1">What We Do
            </p>
                  <br />
                  <div className="grid1">
                    <ul className="lst">
                      <li>Access to 100% genuine products from local vendors</li>
                      <li>Commitment to the growth of SMEs in sales and marketing.</li>
                      <li>Buy from your preferred vendor at the same offline prices</li>
                      <li>Element of surprises in our deliveries</li>
                      <li>Pick up/Delivery</li>
                    </ul>
                  </div>
                  <div className="grid1">
                    <ul className="lst">
                      <li>Same day Delivery</li>
                      <li>Pay cash on delivery</li>
                      <li>Assisting our customers for the best shopping and logistics experience</li>
                      <li>2-3 working days for deliveries outside Ibadan</li>
                    </ul>
                  </div>
                  <br className="clear" />
                  <br />
                </div>
              </center>
            </div>

            <div className="about-row">
              <br />
              <br />
              <center>
                <img style={{ verticalAlign: 'middle', maxWidth: '100%', border: '0' }} src="https://static.jumia.com.ng/cms/content-pages/About/KE_W19_LP_About_Us_06.png" alt="history" />

                <div className="grey_wrap">
                  <p className="sub-title1">Kwikkarts Today
            </p>
                  <br />
                  <div className="grid1">
                    <ul className="lst">
                      <li>Customer based Over 5000</li>
                    </ul>
                  </div>
                  <div className="grid1">
                    <ul className="lst">
                      <li>Over one year of delivering happiness and surprises.</li>
                    </ul>
                  </div>
                  <br className="clear" />
                  <br />
                </div>
              </center>
            </div>

            <div className="about-row">
            <br/>
            <br/>
            <center>
            <Link to="/" class="btnn">Shop Now</Link>
            <Link to="/pickup" class="btnn" style={{marginLeft: "5%"}}>Lets handle your Pickup/Delivery Today</Link>
            </center>
            </div>


          </div>
        </div>
        <br className="clear" /><br />

        <Footer />
      </div>
    )
  }
}

export default AboutUs