import React, { Component } from 'react';
import Header from '../header';
import Navigation from '../navigation';
import NewsLetter from '../newsletter';
import Footer from '../footer';
import ProductBreadCrumb from './productBreadCrumb';
import ProductDetails from './productDetails';
import ProductMainImage from './productMainImage';
import ProductTab from './productTab';
import ProductThumbImage from './productThumbImage';
import RelatedProduct from './relatedProducts';
import { getProductDetailsRequest } from '../../services/apiRequest';


class ProductView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_details: {}
        }
    }

    componentDidMount() {
        this.getProductDetails();
    }
    getProductDetails = () => {
        const product_id = this.props.match.params.item_id;
        console.log(product_id);
        getProductDetailsRequest(product_id)
            .then(axiosResponse => {
                console.log(axiosResponse)
                if (axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                    this.setState({
                        product_details: axiosResponse.data.data
                    }, () => { console.log(this.state.product_details) })
                }
            }).catch(err => { console.log(err) })
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

                            <ProductMainImage image={this.state.product_details.image}/>
                            <ProductThumbImage image={this.state.product_details.image} />
                            <ProductDetails name={this.state.product_details.name} price={this.state.product_details.price}  oldprice={this.state.product_details.oldprice} details={this.state.product_details.details} />
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