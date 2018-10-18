import React, {Component} from 'react';

import photo from './product07.png';

class AsideFour extends Component {

    render() {

        return(
            <div className="aside">
							<h3 className="aside-title">Top selling</h3>
							<div className="product-widget">
								<div className="product-img">
									<img src={photo} alt="Phone"  />
								</div>
								<div className="product-body">
									<p className="product-category">Category</p>
									<h3 className="product-name"><a href="#name">product name goes here</a></h3>
									<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
								</div>
							</div>

							<div className="product-widget">
								<div className="product-img">
									<img src={photo} alt="Samsung" />
								</div>
								<div className="product-body">
									<p className="product-category">Category</p>
									<h3 className="product-name"><a href="#name">product name goes here</a></h3>
									<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
								</div>
							</div>

							<div className="product-widget">
								<div className="product-img">
									<img src={photo} alt="Samsung" />
								</div>
								<div className="product-body">
									<p className="product-category">Category</p>
									<h3 className="product-name"><a href="#name">product name goes here</a></h3>
									<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
								</div>
							</div>
						</div>
        )
    }
}

export default AsideFour;