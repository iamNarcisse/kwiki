import React, { Component } from 'react';
import { getProductInfo } from '../../services/apiRequest';
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
                console.log(axiosResponse)

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

                        { this.state.related.map(item => {
                            return(

                                <div key={item._id} className="col-md-3 col-xs-6">
                            <div className="product">
                            
                                <div className="product-img">
                                    <img src={item.image} alt="" />
                                    <div className="product-label">
                                        <span className="sale">-30%</span>
                                    </div>
                                </div>
                                <div className="product-body">
                                    <p className="product-category">Category</p>
                                    <h3 className="product-name"><a href="#productname">{item.name}</a></h3>
                                    <h4 className="product-price">${item.price} <del className="product-old-price">${item.oldprice}</del></h4>
                                    <div className="product-rating">
                                    </div>
                                    <div className="product-btns">
                                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                        <button className="quick-view"><Link to={`/productview/${item._id}`}><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></Link></button>
                                    </div>
                                </div>
                                <div className="add-to-cart">
                                    <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
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