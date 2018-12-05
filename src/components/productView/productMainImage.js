import React, { Component, Suspense, lazy } from 'react';

const ImageComponent = lazy(() => import ('./imageComponent'));


class ProductMainImage extends Component {
    render() {
        return (
            <Suspense fallback={<p style={{fontWeight: '6px'}}>Image loading...</p>} >
            <ImageComponent image={this.props.image} />
            </Suspense>
        )
    }
}
export default ProductMainImage;