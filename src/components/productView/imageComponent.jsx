import React from 'react';
import LazyLoad from 'react-lazyload';

export default (props) => {
    return (
        <div className="col-md-5 col-md-push-2">
                <div id="product-main-img">
                    <div className="product-preview">
                    <LazyLoad height={200} >
                        <img src={props.image} alt="productImage" /></LazyLoad>
                    </div>
                </div>
            </div>
    );
}