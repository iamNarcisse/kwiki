import React, { Component } from 'react';
class ProductMainImage extends Component {

    render() {
        return (
            <div className="col-md-5 col-md-push-2">
                <div id="product-main-img">
                    <div className="product-preview">
                        <img src={this.props.image} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductMainImage;