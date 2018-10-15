import React, {Component} from 'react';
import ProductTabContent from './productTabContent';

class ProductTab extends Component {

    render() {

        return(
            <div className="col-md-12">
						<div id="product-tab">

							<ul className="tab-nav">
								<li className="active"><a data-toggle="tab" href="#tab1">Description</a></li>
								<li><a data-toggle="tab" href="#tab2">Details</a></li>
								<li><a data-toggle="tab" href="#tab3">Reviews (3)</a></li>
							</ul>
                            <ProductTabContent />
                            </div>
                            </div>
        )
    }
}

export default ProductTab;