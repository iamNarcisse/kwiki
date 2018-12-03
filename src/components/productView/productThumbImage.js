import React, { Component, Suspense, lazy } from 'react';
const ThumbImageComponent = lazy(()=> import('./thumbImageComponent'))

class ProductThumbImage extends Component {
    render() {
        return (
            <Suspense fallback={<p>Image loading...</p>}>
            <ThumbImageComponent image={this.props.image}/>
            </Suspense>
        )
    }
}

export default ProductThumbImage;