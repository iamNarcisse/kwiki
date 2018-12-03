import React, { Component, Suspense, lazy } from 'react';

const ImageComponent = lazy(() => import ('./imageComponent'));


class ProductMainImage extends Component {
    render() {
        return (
            <Suspense fallback={<p>Image loading...</p>} >
            <ImageComponent image={this.props.image} />
            </Suspense>
        )
    }
}
export default ProductMainImage;