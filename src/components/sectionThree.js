import React, { Component } from 'react';
import { getTopProduct, getFood} from '../services/apiRequest';
import {Link} from 'react-router-dom';
//import ShowTopFood from './showTopFood';

class SectionThree extends Component {
	constructor(props) {
		super(props)
		this.state = {
			topProduct: [],
			food: [],
			showFood: false
		}
	}

	componentDidMount() {
		this.getTopProductDetails();
		this.getFoodDetails();
	}

	getFoodDetails =() => {
		getFood()
		.then(axiosResponse => {
			if(axiosResponse && axiosResponse.data.data) {
				this.setState({food : axiosResponse.data.data}, ()=> {this.setState({showFood : true})})
			}
		})

	}


	getTopProductDetails = () => {
		getTopProduct()
		.then(axiosResponse => {
			console.log(this.state)
			if (axiosResponse && axiosResponse.data && axiosResponse.data.data) {
				this.setState({
					topProduct: axiosResponse.data.data
				}, () => {this.setState({user : localStorage.getItem('user_details')})})
			}
		}).catch(err => {
			console.log(' Here is the error' + err)
		})
	}
	render() {
		return (
			< div className="section" >

				< div className="container" >

					< div className="row" >
						< div className="col-md-12" >
							<div className="section-title">
								<h3 className="title">Top selling</h3>
								<div className="section-nav">
									<ul className="section-tab-nav tab-nav">
										<li className="active" data-toggle="tab"><Link to="#all">All</Link></li>
										<li><Link to="/food">Food</Link></li>
										<li><Link to="/cakes">Cakes</Link></li>
									</ul>
								</div>
							</div>
						</div >
						<div className="col-md-12">
							<div className="row">
								{
									this.state.topProduct.map(item => {
										return (
											<div className="col-md-4 col-xs-6" key={item._id}>
												<div className="product">
													<div className="product-img">
														<img src={item.image} alt="" />
														<div className="product-label">
															<span className="sale">-30%</span>
															<span className="new">NEW</span>
														</div>
													</div>
													<div className="product-body">
														<p className="product-category">Category</p>
														<h3 className="product-name"><a href="#url">{item.name}</a></h3>
														<h4 className="product-price">${item.price} <del className="product-old-price">$990.00</del></h4>
														<h4 className="product-name">Sold By <a href="#add">{item.seller}</a></h4>
														<div className="product-rating">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
														</div>
														<div className="product-btns">
															<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
															<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
															<button className="quick-view"><Link to ={`productview/${item._id}`} ><i className="fa fa-eye"></i></Link><span className="tooltipp">quick view</span></button>
														</div>
													</div>
													<div className="add-to-cart">
														<button  onClick={() => {console.log(this.state.user.firstname);
														}} className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
													</div>
												</div>
											</div>

										)
									})
								}
							</div></div>
					</div>
				</div>
			</div>

		)
	}
}
export default SectionThree;