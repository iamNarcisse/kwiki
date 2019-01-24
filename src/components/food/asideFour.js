import React, { Component } from 'react';

import { getTopProduct } from '../../services/apiRequest';

class AsideFour extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topProduct: []
		}
	}
	componentDidMount() {
		this.showTopProduct();
	}

	showTopProduct = () => {
		getTopProduct()
			.then(axiosResponse => {
				if (axiosResponse && axiosResponse.data && axiosResponse.data.data) {
					this.setState({ topProduct: axiosResponse.data.data })
				}
			})
	}

	render() {
		return (
			<div className="aside">
				<h3 className="aside-title">Top selling</h3>

				{this.state.topProduct.map(item => {
					return (

						<div key={item._id} className="product-widget">
							<div className="product-img">
								<img src={item.image} alt="Product" />
							</div>
							<div className="product-body">
								<p className="product-category">{item.category}</p>
								<h3 className="product-name"><a href="#name">{item.name}</a></h3>
								<h4 className="product-price">&#8358;{item.price}</h4>
							</div>
						</div>

					)
				})}
			</div>
		)
	}
}

export default AsideFour;