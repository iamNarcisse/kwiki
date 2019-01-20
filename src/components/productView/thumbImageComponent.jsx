import React from 'react';
import LazyLoad from 'react-lazyload';

export default (props) => {
    return (
        <div className="col-md-2  col-md-pull-5">
            <div id="product-imgs">
                <div className="product-preview">
                    { /*<LazyLoad height={200}><img src={props.image} alt={props.name} /></LazyLoad>*/}
                    <LazyLoad height={200}><em>{props.name}</em></LazyLoad>
                </div>

            </div>
        </div>
    );
}