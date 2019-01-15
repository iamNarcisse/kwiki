import React, { Component } from 'react';
import { getProductInfo, addToWish } from '../../services/apiRequest';
import { Link } from 'react-router-dom';

class RelatedProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            related: []
        }
    }

    componentDidMount() {
        this.getRelatedProduct();
    }

    getRelatedProduct = () => {
        getProductInfo()
            .then(axiosResponse => {

                if (axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                    this.setState({
                        related: axiosResponse.data.data
                    })
                }
            }).catch(err => { console.log(err) })
    }

    render() {
        return (
            <div className="section">
                <div className="container">

                    <div className="row">

                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h3 className="title">Related Products</h3>
                            </div>
                        </div>

                        {this.state.related.map(item => {
                            return (

                                <div key={item._id} className="col-md-3 col-xs-6">
                                    <div className="product">
                                        <Link to={`/${item._id}`} onClick={() => { window.location.reload() }}>
                                            <div className="product-img">
                                                <img src={item.image} alt="product" />
                                                <div className="product-label">
                                                    {/* <span className="sale">-30%</span>*/}
                                                </div>
                                            </div></Link>
                                        <div className="product-body">
                                            <p className="product-category">{item.category}</p>
                                            <h3 className="product-name"><a href="#productname">{item.name}</a></h3>
                                            <h4 className="product-price">&#8358;{item.price}  { item.oldprice && <del className="product-old-price">&#8358;{item.oldprice}</del>}</h4>
                                            <div className="product-rating">
                                            </div>
                                            <div className="product-btns">
                                                <button className="add-to-wishlist" onClick={
                                                    (e) => {

                                                        if (!JSON.parse(localStorage.getItem('user_details'))) {

                                                            alert('You must be logged in')

                                                        } else {
                                                            e.preventDefault(); alert('Item added to wishlist')

                                                            if (JSON.parse(localStorage.getItem('wishlist')) === null || JSON.parse(localStorage.getItem('wishlist')) === undefined || !Array.isArray(JSON.parse(localStorage.getItem('wishlist')))) {
                                                                let userData = JSON.parse(localStorage.getItem('user_details'));
                                                                let wishedListArray = [];

                                                                let wishedItem = {
                                                                    productID: item._id,
                                                                    productName: item.name,
                                                                    productPrice: item.price,
                                                                    productImage: item.image,
                                                                    vendor: item.seller,

                                                                }
                                                                wishedListArray.push(wishedItem);
                                                                localStorage.setItem('wishlist', JSON.stringify(wishedListArray));
                                                                addToWish(item._id, userData._id, item.name, userData.firstname + userData.lastname)
                                                                    .then(result => { console.log(result) })
                                                                    .catch(err => { console.log(err) })
                                                            } else {
                                                                let userData = JSON.parse(localStorage.getItem('user_details'));
                                                                let wishedItem = JSON.parse(localStorage.getItem('wishlist'));
                                                                let list = {
                                                                    productID: item._id,
                                                                    productName: item.name,
                                                                    productPrice: item.price,
                                                                    productImage: item.image,
                                                                    vendor: item.seller,

                                                                }

                                                                wishedItem.push(list);

                                                                localStorage.setItem('wishlist', JSON.stringify(wishedItem));
                                                                addToWish(item._id, userData._id, item.name, userData.firstname + userData.lastname)
                                                                    .then(result => { console.log(result) })
                                                                    .catch(err => { console.log(err) })


                                                            }

                                                        }

                                                    }



                                                }><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                                <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                                <button className="quick-view"><Link to={`/${item._id}`} onClick={() => { window.location.reload() }}><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></Link></button>
                                            </div>
                                        </div>
                                        <div className="add-to-cart">
                                            <button className="add-to-cart-btn" onClick={
                                                () => {
                                                    const storedArray = []
                                                    //This code checks whether the product array in localstorage is empty and
                                                    //adds an item to it
                                                    //const totalArray = [];
                                                    const checkProduct = JSON.parse(localStorage.getItem('product'));
                                                    if (checkProduct === undefined || checkProduct === null) {
                                                        alert('Item added to cart')
                                                        const productData = { name: item.name, price: item.price, image: item.image, id: item._id }
                                                        storedArray.push(productData)
                                                        localStorage.setItem('product', JSON.stringify(storedArray))

                                                        //  window.location.reload();

                                                    } else {
                                                        alert('Item added to cart')
                                                        const getItem = JSON.parse(localStorage.getItem('product'));
                                                        const newData = { name: item.name, price: item.price, image: item.image, id: item._id }
                                                        getItem.push(newData)
                                                        localStorage.setItem('product', JSON.stringify(getItem))

                                                        // window.location.reload();

                                                    }

                                                }
                                            }><i className="fa fa-shopping-cart"></i> add to cart</button>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}





                    </div>
                </div>

            </div>

        )
    }
}
export default RelatedProduct;