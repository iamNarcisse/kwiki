import React, { Component } from 'react';
//import { getProductDetailsRequest } from '../../services/apiRequest';

class ProductDetails extends Component {


    constructor(props) {
        super(props);
        this.state = {
            qty: 1,
            price: '',
        }
    }


    onSubmit = (e) => {
        e.preventDefault();
        alert('Added to Cart');
        this.setState({
            price: this.props.price,
            name: this.props.name
        })
        console.log(this.state.name);
    }
    onQtyAdd = () => {
        this.setState({ qty: this.state.qty + 1 });

    }

    onQtySubstract = () => {
        this.setState({ qty: this.state.qty - 1 });
    }

    checkoutDetails = (name, price, qty) => {
        this.setState({
            name: name,
            price: price,
            qty: qty
        })
    }

    addToStorage =() => {
        const productData = {name: this.props.name, price: this.props.price, image: this.props.image }
        localStorage.setItem('product',JSON.stringify(productData))
    }






    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="col-md-5">
                    <div className="product-details">
                        <h2 className="product-name" value={this.props.name} >{this.props.name}</h2>
                        <div>
                            <div className="product-rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <a className="review-link" href="#review">10 Review(s) | Add your review</a>
                        </div>
                        <div>
                            <h3 className="product-price" value={this.props.price} >&#8358;{this.props.price} <del className="product-old-price"> ${this.props.oldprice}</del></h3>
                            <span className="product-available">In Stock</span>
                        </div>
                        <p>{this.props.details}</p>

                        <div className="product-options">
                            <label>
                                Size
									<select className="input-select">
                                    <option value="0">X</option>
                                </select>
                            </label>
                            <label>
                                Color
									<select className="input-select">
                                    <option value="0">Red</option>
                                </select>
                            </label>
                        </div>

                        <div className="add-to-cart">
                            <div className="qty-label">
                                Qty :
									<div className="input-number">
                                    <input type="number" value={this.state.qty} />
                                    <span className="qty-up" onClick={this.onQtyAdd}>+</span>
                                    <span className="qty-down" onClick={this.onQtySubstract}>-</span>
                                </div>
                            </div>
                            <button onClick={(e) => {e.preventDefault(); this.addToStorage(); alert('Added to cart'); this.checkoutDetails() } } className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                        </div>

                        <ul className="product-btns">
                            <li><a href="#whish"><i className="fa fa-heart-o"></i> add to wishlist</a></li>
                            <li><a href="#compare"><i className="fa fa-exchange"></i> add to compare</a></li>
                        </ul>

                        <ul className="product-links">
                            <li>Category:</li>
                            <li><a href="#headphone">Headphones</a></li>
                            <li><a href="#acessories">Accessories</a></li>
                        </ul>

                        <ul className="product-links">
                            <li>Share:</li>
                            <li><a href="#facebook"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#twitter"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#google"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="#evenlope"><i className="fa fa-envelope"></i></a></li>
                        </ul>

                    </div>
                </div></form>
        )
    }
}

export default ProductDetails;