import React, { Component } from 'react';
import photo from '../assets/img/product02.png';
class SectionOne extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-6">
                            <div className="shop">
                                <div className="shop-img">
                                    <img src={photo} alt="" />
                                </div>
                                <div className="shop-body">
                                    <h3>Laptop<br />Collection</h3>
                                    <a href="#moreInfo" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <div className="shop">
                                <div className="shop-img">
                                    <img src={photo} alt="" />
                                </div>
                                <div className="shop-body" >
                                    <h3>Accessories<br />Collection</h3>
                                    <a href="#moreInfo" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <div className="shop">
                                <div className="shop-img">
                                    <img src={photo} alt="" />
                                </div>
                                <div className="shop-body">
                                    <h3>Cameras<br />Collection</h3>
                                    <a href="#moreInfo" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionOne;