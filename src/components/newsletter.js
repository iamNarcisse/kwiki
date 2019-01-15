import React, { Component } from 'react';
class NewsLetter extends Component {
    render() {
        return (
            <div>
                <div id="newsletter" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="newsletter">
                                    <p>Sign Up for the <strong>NEWSLETTER</strong></p>
                                    <form>
                                        <input className="input" type="email" placeholder="Enter Your Email" />
                                        <button className="newsletter-btn"><i className="fa fa-envelope"></i> Subscribe</button>
                                    </form>
                                    <ul className="newsletter-follow">
                                        <li>
                                            <a href="#moreInfo" className="facebook"><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/kwikikartsng?s=08" className="twitter"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#moreInfo" className="instagram"><i className="fa fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href=" https://wa.me/2347066223284" className="whatsapp"><i className="fa fa-whatsapp" ></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default NewsLetter;