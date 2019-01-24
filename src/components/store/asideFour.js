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

	productBody = (name, price, oldprice, category) => (
		<div className="product-body">
			<p className="product-category">{category}</p>
			<h3 className="product-name"><a href="#name">{name}</a></h3>
			<h4 className="product-price">&#8358;{price} {/*<del className="product-old-price">$990.00</del>*/}</h4>
		</div>
	);



	render() {

		return (
			<div className="aside">
				<h3 className="aside-title">Top selling</h3>
				{
					this.state.topProduct.map(item => {
						return (
							<div key={item._id} className="product-widget">
								<div className="product-img">
									<img src={item.image} alt="Product" />
								</div>
								{this.productBody(item.name, item.price, '' , item.category)}
							</div>
						)
					})
				}



			</div>
		)
	}
}

export default AsideFour;