import React from 'react';
import { Link } from 'react-router-dom';
const Footer = (props) => {
        return (
            <div>
                {/* FOOTER */}
                <footer id="footer">
                    {/* top footer */}
                    <div className="section">
                        {/* container */}
                        <div className="container">
                            {/* row */}
                            <div className="row">
                                <div className="col-md-3 col-xs-6">
                                    <div className="footer">
                                        <h3 className="footer-title">About Us</h3>
                                        <p>Kwikikarts, a top notch online delivery that gets you want you want just the way you like with no extra charge</p>
                                        <ul className="footer-links">
                                            <li><a href="#moreInfo"><i className="fa fa-map-marker"></i>Shop 5, Kuti Hall, University of Ibadan</a></li>
                                            <li><a href="#moreInfo"><i className="fa fa-phone"></i>+234 706-622-3284</a></li>
                                            <li><a href="#moreInfo"><i className="fa fa-envelope-o"></i>kwikikarts@gmail.com</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-3 col-xs-6">
                                    <div className="footer">
                                        <h3 className="footer-title">Categories</h3>
                                        <ul className="footer-links">
                                            <li><a href="#moreInfo">Hot deals</a></li>
                                            <li><a href="#moreInfo">Laptops</a></li>
                                            <li><a href="#moreInfo">Smartphones</a></li>
                                            <li><a href="#moreInfo">Cameras</a></li>
                                            <li><a href="#moreInfo">Accessories</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="clearfix visible-xs"></div>

                                <div className="col-md-3 col-xs-6">
                                    <div className="footer">
                                        <h3 className="footer-title">Information</h3>
                                        <ul className="footer-links">
                                            <li><Link to="/aboutus">About Us</Link></li>
                                            <li><a href="#moreInfo">Contact Us</a></li>
                                            <li><a href="#moreInfo">Privacy Policy</a></li>
                                            <li><a href="#moreInfo">Orders and Returns</a></li>
                                            <li><a href="#moreInfo">Terms & Conditions</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-3 col-xs-6">
                                    <div className="footer">
                                        <h3 className="footer-title">Service</h3>
                                        <ul className="footer-links">
                                            <li><a href="#moreInfo">My Account</a></li>
                                            <li><a href="#moreInfo">View Cart</a></li>
                                            <li><a href="#moreInfo">Wishlist</a></li>
                                            <li><a href="#moreInfo">Help</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* /row */}
                        </div>
                        {/* /container */}
                    </div>
                    {/* /top footer */}

                    {/* bottom footer */}
                    <div id="bottom-footer" className="section">
                        <div className="container">
                            {/* row */}
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <ul className="footer-payments">
                                        <li><a href="#moreInfo"><i className="fa fa-cc-visa"></i></a></li>
                        
                                
                                        <li><a href="#moreInfo"><i className="fa fa-cc-mastercard"></i></a></li>
                                      
                                    </ul>
                                    <span className="copyright">
                                        Copyright &copy; 2018 All rights reserved | Built By <a href="#kwiki" target="_blank">LevoInc</a>
                                    </span>
                                </div>
                            </div>
                            {/* /row */}
                        </div>
                        {/* /container */}
                    </div>
                    {/* /bottom footer */}
                </footer>
                {/* /FOOTER */}
            </div>
        )
}

export default Footer;