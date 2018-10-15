import React, { Component } from 'react';
import ProductTab from './productTab';
import ProductMainImage from './productMainImage';
import ProductThumbImage from './productThumbImage';
import ProductDetails from './productDetails';




class SectionOne extends Component {

    render() {
        return (

            <div className="section">

                <div className="container">
                    <div className="row">

                    <ProductMainImage />
                    <ProductThumbImage />
                    <ProductDetails />
                    <ProductTab />

                    </div>
                </div>
            </div>

        )
    }
}

export default SectionOne;