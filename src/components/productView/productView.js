import React, { Component } from 'react';
import Header from '../header';
import Navigation from '../navigation';
//import NewsLetter from '../newsletter';
import Footer from '../footer';
import ProductBreadCrumb from './productBreadCrumb';
import ProductDetails from './productDetails';
import ProductMainImage from './productMainImage';
import ProductTab from './productTab';
import ProductThumbImage from './productThumbImage';
import RelatedProduct from './relatedProducts';
import { getProductDetailsRequest, getTopProductRequestDetails, getFoodRequest, getCakeRequest, getWomenShoeRequest, getMenShoeRequest} from '../../services/apiRequest';


class ProductView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_details: {},
            top: {},
            food: {},
            cake:{},
            womenShoe: {},
            menShoe: {},
            showTop : false,
            showProduct: false,
            showFood: false,
            showCake: false,
            showWomenShoe: false,
            showMenShoe: false
        }
    }

    componentDidMount() {
        this.getProductDetails();
        this.getTopProductDetails();
        this.getFoodRequest();
        this.showCakeRequest();
        this.showWomenShoe();
        this.showMenShoe();
    }

    getTopProductDetails = () => {
        let top_product_id = this.props.match.params.item_id;
        console.log(' Here i am : ' +  top_product_id)
        getTopProductRequestDetails(top_product_id) 
        .then(axiosResponse => {
            console.log(axiosResponse)
            if(axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                this.setState( {
                    top : axiosResponse.data.data
                }, () => {this.setState({
                    showTop : true
                })})
            }
        }).catch(err => {console.log('here is the erro ' + err)})



    }

    getProductDetails = () => {
        let product_id = this.props.match.params.item_id;
        //console.log(product_id);
        getProductDetailsRequest(product_id)
            .then(axiosResponse => {
                console.log(axiosResponse)
                if (axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                    this.setState({
                        product_details: axiosResponse.data.data
                    }, () => { this.setState({showProduct : true}) })
                }
            }).catch(err => { console.log(err) })
    }

    getFoodRequest =() => {
        let food_id = this.props.match.params.item_id;
        getFoodRequest(food_id)
        .then(axiosResponse => {
            if(axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                this.setState({
                    food: axiosResponse.data.data
                }, () => { this.setState({showFood : true})})
            }
        })

    }


    showCakeRequest =() => {
        let cake_id = this.props.match.params.item_id;
        getCakeRequest(cake_id)
        .then(axiosResponse => {
            if(axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                this.setState({
                    cake: axiosResponse.data.data
                }, () => { this.setState({showCake : true})})
            }
        })

    }

    showWomenShoe = () => {
        let shoe_id = this.props.match.params.item_id;
        getWomenShoeRequest(shoe_id)
        .then(axiosResponse => {
            if(axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                this.setState({
                    womenShoe: axiosResponse.data.data
                }, () => {
                    this.setState({showWomenShoe : true})
                })
            }
        })
    }

    showMenShoe = () => {
        let shoe_id = this.props.match.params.item_id;
        getMenShoeRequest(shoe_id)
        .then(axiosResponse => {
            if(axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                this.setState({
                    menShoe: axiosResponse.data.data
                }, () => {
                    this.setState({showMenShoe : true})
                })
            }
        })
    }
    
    render() {
        
        return (

            <div >
                <Header />
                <Navigation />
                <ProductBreadCrumb />
                <div className="section">

                    <div className="container">
                        <div className="row">
                        {this.state.showTop === true && (<div>
                            <ProductMainImage image={this.state.top.image}/>
                            <ProductThumbImage image={this.state.top.image} />
                            <ProductDetails name={this.state.top.name} price={this.state.top.price}  oldprice={this.state.top.oldprice} details={this.state.top.details} /></div>
                        )}

                        {this.state.showFood === true && (<div>
                            <ProductMainImage image={this.state.food.image}/>
                            <ProductThumbImage image={this.state.food.image} />
                            <ProductDetails name={this.state.food.name} price={this.state.food.price}  oldprice={this.state.food.oldprice} details={this.state.food.details} /></div>
                        )}

                        {this.state.showCake === true && (<div>
                            <ProductMainImage image={this.state.cake.image}/>
                            <ProductThumbImage image={this.state.cake.image} />
                            <ProductDetails name={this.state.cake.name} price={this.state.cake.price}  oldprice={this.state.cake.oldprice} details={this.state.cake.details} /></div>
                        )}

                         {this.state.showWomenShoe === true && (<div>
                            <ProductMainImage image={this.state.womenShoe.image}/>
                            <ProductThumbImage image={this.state.womenShoe.image} />
                            <ProductDetails name={this.state.womenShoe.name} price={this.state.womenShoe.price}  oldprice={this.state.womenShoe.oldprice} details={this.state.womenShoe.details} /></div>
                        )}

                        {this.state.showMenShoe === true && (<div>
                            <ProductMainImage image={this.state.menShoe.image}/>
                            <ProductThumbImage image={this.state.menShoe.image} />
                            <ProductDetails name={this.state.menShoe.name} price={this.state.menShoe.price}  oldprice={this.state.menShoe.oldprice} details={this.state.menShoe.details} /></div>
                        )}

                        {this.state.showProduct === true && (<div><ProductMainImage image={this.state.product_details.image}/>
                            <ProductThumbImage image={this.state.product_details.image} />
                            <ProductDetails name={this.state.product_details.name} price={this.state.product_details.price}  oldprice={this.state.product_details.oldprice} details={this.state.product_details.details} /></div>)}
                            <ProductTab />

                        </div>
                    </div>
                </div>
                <RelatedProduct />
                <Footer />
            </div>

        )
    }
}

export default ProductView;