import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductInfo } from '../../services/apiRequest';

//const userData = JSON.parse(localStorage.getItem('user_details'));
class StoreProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }

        this.getProduct = this.getProduct.bind(this);
    }

    componentDidMount() {
        this.getProduct();
    }

    getProduct = () => {
        getProductInfo()
            .then(axiosResponse => {
                console.log(axiosResponse)
                if (axiosResponse && axiosResponse.data.data) {

                    this.setState({
                        products: this.state.products.concat(axiosResponse.data.data)
                    })
                } else {
                    this.setState({
                        products: axiosResponse.data.data
                    })
                }
            })
    }

    render() {

        return (

            <div className="row">

                {this.state.products.map(item => {

                    return (

                        //<Products key={product._id}/>

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
                                    <h4 className="product-price">${item.price} <del className="product-old-price">${item.oldprice} </del></h4>
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
                                        <button className="quick-view"> <Link to={`productview/${item._id}`}><i className="fa fa-eye"></i></Link><span className="tooltipp">quick view</span></button>
                                    </div>
                                </div>
                                <div className="add-to-cart">
                                    <button
                                        className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                </div>
                            </div>
                        </div>



                    )

                })}
            </div>

        )
    }
}

export default StoreProducts;