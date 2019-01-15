import React, { Component } from 'react';
import { addToWish } from '../../services/apiRequest';
import { Link } from 'react-router-dom';
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

    /*checkoutDetails = (name, price, qty) => {
        this.setState({
            name: name,
            price: price,
            qty: qty
        })
    }*/

    addToStorage = () => {
        let storedArray = [];
        let checkProduct = JSON.parse(localStorage.getItem('product'));
        if (!Array.isArray(checkProduct) || checkProduct === null) {
            alert('Item added to cart')
            let productData = { name: this.props.name, price: this.props.price, image: this.props.image, id: this.props.id }
            storedArray.push(productData)
            localStorage.setItem('product', JSON.stringify(storedArray))

            // window.location.reload();
        } else {
            alert('Item added to cart')
            let getItem = JSON.parse(localStorage.getItem('product'));
            let newData = { name: this.props.name, price: this.props.price, image: this.props.image, id: this.props.id }
            getItem.push(newData)
            localStorage.setItem('product', JSON.stringify(getItem))
            // window.location.reload();

        }
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
                            <h3 className="product-price" value={this.props.price} >&#8358;{this.props.price} <del className="product-old-price"> &#8358;{this.props.oldprice}</del></h3>
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
                            <button onClick={(e) => { e.preventDefault(); this.addToStorage(); }} className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                        </div>

                        <ul className="product-btns">
                            <li><a href="#whish" onClick={
                                (e) => {
                                    if (!JSON.parse(localStorage.getItem('user_details'))) {

                                        alert('You must be logged in')

                                    } else {
                                        e.preventDefault(); alert('Item added to wishlist')

                                        if (JSON.parse(localStorage.getItem('wishlist')) === null || JSON.parse(localStorage.getItem('wishlist')) === undefined || !Array.isArray(JSON.parse(localStorage.getItem('wishlist')))) {
                                            let userData = JSON.parse(localStorage.getItem('user_details'));
                                            let wishedListArray = [];

                                            let wishedItem = {
                                                productID: this.props.id,
                                                productName: this.props.name,
                                                productPrice: this.props.price,
                                                productImage: this.props.image,
                                                vendor: this.props.seller,

                                            }
                                            wishedListArray.push(wishedItem);
                                            localStorage.setItem('wishlist', JSON.stringify(wishedListArray));
                                            addToWish(this.props.id, userData._id, this.props.name, userData.firstname + userData.lastname)
                                                .then(result => { console.log(result) })
                                                .catch(err => { console.log(err) })
                                        } else {
                                            let userData = JSON.parse(localStorage.getItem('user_details'));
                                            let wishedItem = JSON.parse(localStorage.getItem('wishlist'));

                                            let list = {
                                                productID: this.props.id,
                                                productName: this.props.name,
                                                productPrice: this.props.price,
                                                productImage: this.props.image,
                                                vendor: this.props.seller,

                                            }

                                            wishedItem.push(list);

                                            localStorage.setItem('wishlist', JSON.stringify(wishedItem));
                                            addToWish(this.props.id, userData._id, this.props.name, userData.firstname + userData.lastname)
                                                .then(result => { console.log(result) })
                                                .catch(err => { console.log(err) })


                                        }

                                    }
                                }
                            }><i className="fa fa-heart-o"></i> add to wishlist</a></li>
                            <li><a href="#compare"><i className="fa fa-exchange"></i> add to compare</a></li>
                        </ul>

                        <ul className="product-links">
                            <li>Category:</li>
                            <li><Link  to="/food">{this.props.category}</Link></li>
                            {/*<li><a href="#acessories">Accessories</a></li>*/}
                        </ul>

                        <ul className="product-links">
                            <li>Share:</li>6
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