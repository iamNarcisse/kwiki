import React, {Component} from 'react';
import Header from '../header';
import BreadCrumb from './breadCrumb';
import Section from './section';
import Newsletter from '../newsletter';
import Footer from '../footer';

class WomenCloth extends Component{ 

    render() {
        return(
            <div>
                <Header />
                <BreadCrumb />
                <Section />
                <Newsletter />
                <Footer />
            </div>

        )
    }
}

export default WomenCloth;