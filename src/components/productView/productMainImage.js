import React, { Component } from 'react';
import photo from '../store/product07.png';

class ProductMainImage extends Component {

    render() {
        return (
            <div className="col-md-5 col-md-push-2">
                <div id="product-main-img">
                    <div className="product-preview">
                        <img src={photo} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductMainImage;