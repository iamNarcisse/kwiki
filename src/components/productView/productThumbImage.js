import React, { Component, Suspense, lazy } from 'react';
const ThumbImageComponent = lazy(()=> import('./thumbImageComponent'))

class ProductThumbImage extends Component {
    render() {
        return (
            <Suspense fallback={<p style={{fontWeight: '6px'}}>Image loading...</p>}>
            <ThumbImageComponent image={this.props.image}/>
            </Suspense>
        )
    }
}

export default ProductThumbImage;