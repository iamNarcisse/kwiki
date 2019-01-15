import React, { Component } from 'react';

class ProductReview extends Component {

    render() {
        return (

            <div className="col-md-6">
                <div id="reviews">
                    <ul className="reviews">
                        <li>
                            <div className="review-heading">
                                <h5 className="name">John</h5>
                                <p className="date">27 DEC 2018, 8:0 PM</p>
                                <div className="review-rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o empty"></i>
                                </div>
                            </div>
                            <div className="review-body">
                                <p>Quality Product, delivery was speedy</p>
                            </div>
                        </li>
                    </ul>
                    <ul className="reviews-pagination">
                        <li className="active">1</li>
                        <li><a href="#first">2</a></li>
                        <li><a href="#second">3</a></li>
                        <li><a href="#fourth">4</a></li>
                        <li><a href="#last"><i className="fa fa-angle-right"></i></a></li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default ProductReview;