import React, { Component } from 'react';
import photo from '../store/product07.png';


class ProductThumbImage extends Component {
    render() {
        return (
            <div className="col-md-2  col-md-pull-5">
                <div id="product-imgs">
                    <div className="product-preview">
                        <img src={this.props.image} alt="product" />
                    </div>

                </div>
            </div>
        )
    }
}

export default ProductThumbImage;