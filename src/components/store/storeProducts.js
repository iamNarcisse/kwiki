import React, {Component} from 'react';
import Products from './productsInStrore';

class StoreProducts extends Component {

    render() {

        return(

            <div class="row">
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            </div>

        )
    }
}

export default StoreProducts;