import React, {Component} from 'react';
import Header from '../header';
import Navigation from '../navigation';
import NewsLetter from '../newsletter';
import Footer from '../footer';
import ProductBreadCrumb from './productBreadCrumb';
import SectionOne from './sectionOne';
import RelatedProduct from './relatedProducts';
class ProductView extends Component {

    render() {
        return(
               
            <div >
                <Header />
                <Navigation />
                <ProductBreadCrumb />
                <SectionOne />
                <RelatedProduct />
                <NewsLetter />
                <Footer />
            </div>

        )
    }
}

export default ProductView;