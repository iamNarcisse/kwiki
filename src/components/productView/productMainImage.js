import React, { Component, Suspense, lazy } from 'react';
import MyLoader from '../../utils/ContentLoader';
const ImageComponent = lazy(() => import ('./imageComponent'));

class ProductMainImage extends Component {
    render() {
        return (
            <Suspense fallback={<MyLoader />} >
            <ImageComponent  image={this.props.image} />
            </Suspense>
        )
    }
}
export default ProductMainImage;