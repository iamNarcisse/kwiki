import React, { Component } from 'react';
import ProductRating from './productRating';
import ProductReview from './productReview';
import ProductReviewForm from './productReviewForm';

class Tab3 extends Component { 

    render() {

        return (

            <div id="tab3" className="tab-pane fade in">
                <div className="row">

                <ProductRating />
                <ProductReview />
                <ProductReviewForm />



                </div>
            </div>

        )
    }
}

export default Tab3;