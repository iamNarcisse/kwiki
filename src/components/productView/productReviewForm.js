import React, { Component } from 'react';

class ProductReviewForm extends Component {
    render() {
        return (
            <div className="col-md-3">
                <div id="review-form">
                    <form className="review-form">
                        <input className="input" type="text" placeholder="Your Name" />
                        <input className="input" type="email" placeholder="Your Email" />
                        <textarea className="input" placeholder="Your Review"></textarea>
                        <div className="input-rating">
                            <span>Your Rating: </span>
                            <div className="stars">
                                <input id="star5" name="rating" value="5" type="radio" />
                                <input id="star4" name="rating" value="4" type="radio" />
                                <input id="star3" name="rating" value="3" type="radio" />
                                <input id="star2" name="rating" value="2" type="radio" />
                                <input id="star1" name="rating" value="1" type="radio" />
                            </div>
                        </div>
                        <button onClick={(e)=>e.preventDefault()} className="primary-btn">Submit</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default ProductReviewForm;