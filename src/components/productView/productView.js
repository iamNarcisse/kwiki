import React, { Component } from 'react';
import Header from '../header';
//import NewsLetter from '../newsletter';
import Footer from '../footer';
import ProductBreadCrumb from './productBreadCrumb';
import ProductDetails from './productDetails';
import ProductMainImage from './productMainImage';
import ProductTab from './productTab';
import ProductThumbImage from './productThumbImage';
import RelatedProduct from './relatedProducts';
import { getProductDetailsRequest, getMenClothRequest, getWomenAccessoriesRequest, getMenAccessoriesRequest, getWomenClothRequest, getTopProductRequestDetails, getFoodRequest, getCakeRequest, getWomenShoeRequest, getMenShoeRequest } from '../../services/apiRequest';
class ProductView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_details: {},
            top: {},
            food: {},
            cake: {},
            womenCloth: {},
            menCloth: {},
            womenShoe: {},
            menShoe: {},
            menAccess: {},
            womenAccess: {},
            showTop: false,
            showProduct: false,
            showFood: false,
            showCake: false,
            showWomenShoe: false,
            showMenShoe: false,
            showMenCloth: false,
            showWomenCloth: false,
            showMenAccess: false,
            showWomenAccess: false
        }
    }

    componentDidMount() {
        this.getProductDetails();
        this.getTopProductDetails();
        this.getFoodRequest();
        this.showCakeRequest();
        this.showWomenShoe();
        this.showMenShoe();
        this.showMenCloth();
        this.showWomenCloth();
        this.showMenAccess();
        this.showWomenAccess();
    }

    showWomenAccess = () => {

        let cloth_id = this.props.match.params.item_id;
        // console.log(' Here i am : ' +  top_product_id)
        getWomenAccessoriesRequest(cloth_id)
            .then(axiosResponse => {
                // console.log(axiosResponse)
                if (axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                    this.setState({
                        womenAccess: axiosResponse.data.data
                    }, () => {
                        this.setState({
                            showWomenAccess: true
                        })
                    })
                }
            }).catch(err => { console.log('here is the erro ' + err) })



    }

    showMenAccess = () => {

        let cloth_id = this.props.match.params.item_id;
        // console.log(' Here i am : ' +  top_product_id)
        getMenAccessoriesRequest(cloth_id)
            .then(axiosResponse => {
                // console.log(axiosResponse)
                if (axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                    this.setState({
                        menAccess: axiosResponse.data.data
                    }, () => {
                        this.setState({
                            showMenAccess: true
                        })
                    })
                }
            }).catch(err => { console.log('here is the erro ' + err) })

    }

    showWomenCloth = () => {

        let cloth_id = this.props.match.params.item_id;
        // console.log(' Here i am : ' +  top_product_id)
        getWomenClothRequest(cloth_id)
            .then(axiosResponse => {
                // console.log(axiosResponse)
                if (axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                    this.setState({
                        womenCloth: axiosResponse.data.data
                    }, () => {
                        this.setState({
                            showWomenCloth: true
                        })
                    })
                }
            }).catch(err => { console.log('here is the erro ' + err) })

    }

    showMenCloth = () => {

        let cloth_id = this.props.match.params.item_id;
        getMenClothRequest(cloth_id)
            .then(axiosResponse => {
                //console.log(axiosResponse)
                if (axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                    this.setState({
                        menCloth: axiosResponse.data.data
                    }, () => {
                        this.setState({
                            showMenCloth: true
                        })
                    })
                }
            }).catch(err => { console.log('here is the erro ' + err) })


    }

    getTopProductDetails = () => {
        let top_product_id = this.props.match.params.item_id;
        getTopProductRequestDetails(top_product_id)
            .then(axiosResponse => {
                //console.log(axiosResponse)
                if (axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                    this.setState({
                        top: axiosResponse.data.data
                    }, () => {
                        this.setState({
                            showTop: true
                        })
                    })
                }
            }).catch(err => { console.log('here is the erro ' + err) })



    }

    getProductDetails = () => {
        let product_id = this.props.match.params.item_id;
        //console.log(product_id);
        getProductDetailsRequest(product_id)
            .then(axiosResponse => {
                // console.log(axiosResponse)
                if (axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                    this.setState({
                        product_details: axiosResponse.data.data
                    }, () => { this.setState({ showProduct: true }) })
                }
            }).catch(err => { console.log(err) })
    }

    getFoodRequest = () => {
        let food_id = this.props.match.params.item_id;
        getFoodRequest(food_id)
            .then(axiosResponse => {
                if (axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                    this.setState({
                        food: axiosResponse.data.data
                    }, () => { this.setState({ showFood: true }) })
                }
            })

    }


    showCakeRequest = () => {
        let cake_id = this.props.match.params.item_id;
        getCakeRequest(cake_id)
            .then(axiosResponse => {
                if (axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                    this.setState({
                        cake: axiosResponse.data.data
                    }, () => { this.setState({ showCake: true }) })
                }
            })

    }

    showWomenShoe = () => {
        let shoe_id = this.props.match.params.item_id;
        getWomenShoeRequest(shoe_id)
            .then(axiosResponse => {
                if (axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                    this.setState({
                        womenShoe: axiosResponse.data.data
                    }, () => {
                        this.setState({ showWomenShoe: true })
                    })
                }
            })
    }

    showMenShoe = () => {
        let shoe_id = this.props.match.params.item_id;
        getMenShoeRequest(shoe_id)
            .then(axiosResponse => {
                if (axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                    this.setState({
                        menShoe: axiosResponse.data.data
                    }, () => {
                        this.setState({ showMenShoe: true })
                    })
                }
            })
    }

    render() {
        const { showCake, showWomenShoe,
            showMenShoe, showMenAccess,
            showWomenAccess, showMenCloth,
            showWomenCloth, showFood,
            showTop,showProduct,
            product_details,
            top,
            food,
            cake,
            womenCloth,
            menCloth,
            womenShoe,
            menShoe,
            menAccess,
            womenAccess,
        } = this.state;
        return (

            <div >
                <Header />
                <ProductBreadCrumb />
                <div className="section">

                    <div className="container">
                        <div className="row">
                            {showTop === true && (<div>
                                <ProductMainImage image={top.image} />
                                <ProductThumbImage image={top.image} />
                                <ProductDetails  { ...top } /></div>
                            )}

                            {showFood === true && (<div>
                                <ProductMainImage image={food.image} />
                                <ProductThumbImage image={food.image} />
                                <ProductDetails { ...food } /></div>
                            )}

                            {showCake === true && (<div>
                                <ProductMainImage image={cake.image} />
                                <ProductThumbImage image={cake.image} />
                                <ProductDetails { ...cake }/></div>
                            )}

                            {showWomenShoe === true && (<div>
                                <ProductMainImage image={womenShoe.image} />
                                <ProductThumbImage image={womenShoe.image} />
                                <ProductDetails {...womenShoe} /></div>
                            )}

                            {showMenShoe === true && (<div>
                                <ProductMainImage image={menShoe.image} />
                                <ProductThumbImage image={menShoe.image} />
                                <ProductDetails {...menShoe} /></div>
                            )}

                            {showMenAccess === true && (<div>
                                <ProductMainImage image={menAccess.image} />
                                <ProductThumbImage image={menAccess.image} />
                                <ProductDetails {...menAccess} /></div>
                            )}

                            {showWomenAccess === true && (<div>
                                <ProductMainImage image={womenAccess.image} />
                                <ProductThumbImage image={womenAccess.image} />
                                <ProductDetails {...womenAccess} /></div>
                            )}

                            {showMenCloth === true && (<div>
                                <ProductMainImage image={menCloth.image} />
                                <ProductThumbImage image={menCloth.image} />
                                <ProductDetails { ...menCloth } /></div>
                            )}

                            {showWomenCloth === true && (<div>
                                <ProductMainImage image={womenCloth.image} />
                                <ProductThumbImage image={womenCloth.image} />
                                <ProductDetails { ...womenCloth } /></div>
                            )}

                            {showProduct === true && (<div><ProductMainImage image={product_details.image} />
                            {<ProductThumbImage image={product_details.image} name={product_details.name} />}
                                <ProductDetails {...product_details}  /></div>)}
                          
                            {showProduct && <ProductTab details={product_details.details} />}
                            {showTop && <ProductTab details={top.details} />}
                            {showFood && <ProductTab details={food.details} />}
                            {showWomenCloth && <ProductTab details={womenCloth.details} />}
                            {showMenCloth && <ProductTab details={menCloth.details} />}
                            {showWomenAccess && <ProductTab details={womenAccess.details} />}
                            {showMenAccess && <ProductTab details={menAccess.details} />}
                            {showMenShoe && <ProductTab details={menShoe.details} />}
                            {showWomenShoe && <ProductTab details={womenShoe.details} />}
                            {showCake && <ProductTab details={cake.details} />}

                        </div>
                    </div>
                </div>
                { showProduct && <RelatedProduct { ...product_details } />}
                { showCake && <RelatedProduct { ...cake} />}
                { showFood && <RelatedProduct { ...food } />}
                { showTop && <RelatedProduct { ...top } />}
                { showMenAccess && <RelatedProduct { ...menAccess } />}
                { showWomenAccess && <RelatedProduct { ...womenAccess } />}
                { showMenCloth && <RelatedProduct { ...menCloth } />}
                { showWomenCloth && <RelatedProduct { ...womenCloth } />}
                { showMenShoe && <RelatedProduct { ...menShoe } />}
                { showWomenShoe && <RelatedProduct { ...womenShoe } />}
                <Footer />
            </div>

        )
    }
}

export default ProductView;