import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductInfo } from '../../services/apiRequest';
import Pagination from '../../utils/Pagination';

const storedArray = [];
class StoreProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            exampleItems : [],
            pageOfItems : []
        }
    }

    componentDidMount() {
        this.fetchProduct();
    }

    fetchProduct = () => {
        getProductInfo()
        .then(Response=>{
            this.setState({
                exampleItems : Response.data.data
            })
        })
        .catch(error=> {
            console.log(error)
        })
    }

    onChangePage = (pageOfItems) => {
        //update state with new page of items
        this.setState({
          pageOfItems: pageOfItems
        });
      }


    render() {
        return (
           <div>
            <div className="row">
                {this.state.pageOfItems.map(item => {

                    return (
                        //<Products key={product._id}/>

                        <div className="col-md-4 col-xs-6" key={item._id}>
                            <div className="product">
                                <Link to={`productview/${item._id}`}><div className="product-img">
                                    <img src={item.image} alt="product" />
                                    <div className="product-label">
                                       { item.discount && <span className="sale">-30%</span>}
                                        <span className="new">NEW</span>
                                    </div>
                                </div></Link>
                                <div className="product-body">
                                    <p className="product-category">{item.category}</p>
                                    <h3 className="product-name"><a href="#url">{item.name}</a></h3>
                                    <h4 className="product-price">&#8358;{item.price} <del className="product-old-price">&#8358;{item.oldprice} </del></h4>
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
                                    <button className="add-to-cart-btn" onClick={
                                        () => {
                                            const checkProduct = JSON.parse(localStorage.getItem('product'));
                                            if (checkProduct === undefined || checkProduct === null) {
                                                alert('Item added to cart')
                                                const productData = { name: item.name, price: item.price, image: item.image, id: item._id, qty: 1 }
                                                storedArray.push(productData)
                                                localStorage.setItem('product', JSON.stringify(storedArray))
                                            } else {
                                                alert('Item added to cart')
                                                const getItem = JSON.parse(localStorage.getItem('product'));
                                                const newData = { name: item.name, price: item.price, image: item.image, id: item._id, qty: 1 }
                                                getItem.push(newData)
                                                localStorage.setItem('product', JSON.stringify(getItem))
                                            }
                                        }
                                    }><i className="fa fa-shopping-cart"></i> add to cart</button>
                                </div>
                            </div>
                        </div>



                    )

                })}

            </div>
            <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
            </div>

        )
    }
}

export default StoreProducts;