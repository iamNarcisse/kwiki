import React, { Component } from 'react';
import photo from '../assets/img/food1.jpg';

class SectionThree extends Component {

	constructor(props) {
		super(props)
		this.state = {
			products : [ {
				image: photo,
				price : 6000,
				name: 'Kwiki'
			},

			{
				image: photo,
				price : 7000,
				name: 'Kwiki'
			},

			{
				image: photo,
				price : 5000,
				name: 'Kwiki'
			}
			]
		}
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
										<li className="active"><a data-toggle="tab" href="#tab2">Laptops</a></li>
										<li><a data-toggle="tab" href="#tab2">Smartphones</a></li>
										<li><a data-toggle="tab" href="#tab2">Cameras</a></li>
										<li><a data-toggle="tab" href="#tab2">Accessories</a></li>
									</ul>
								</div>
							</div>
						</div >
						<div className="col-md-12">
							<div className="row">
{

	this.state.products.map(product => {
                    

		return(

			<div className="col-md-4 col-xs-6" key={product._id}>
									<div className="product">
										<div className="product-img">
											<img src={product.image} alt="" />
											<div className="product-label">
												<span className="sale">-30%</span>
												<span className="new">NEW</span>
											</div>
										</div>
										<div className="product-body">
											<p className="product-category">Category</p>
											<h3 className="product-name"><a href="#url">{product.name}</a></h3>
											<h4 className="product-price">${product.price} <del className="product-old-price">$990.00</del></h4>
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
												<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
											</div>
										</div>
										<div className="add-to-cart">
											<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
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