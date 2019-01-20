import React, { Suspense, lazy } from 'react';
const ThumbImageComponent = lazy(()=> import('./thumbImageComponent'))

const  ProductThumbImage = (props) => {
        return (
            <Suspense fallback={<p style={{fontWeight: '6px'}}>Image loading...</p>}>
            {/*<ThumbImageComponent image={this.props.image}/>*/}
            {<ThumbImageComponent image="" name={props.name} />}
            </Suspense>
        )
}

export default ProductThumbImage;