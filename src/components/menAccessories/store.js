import React, {Component} from 'react';
import Header from '../header';
import Navigation from '../navigation';
import BreadCrumb from './breadCrumb'
import Section from './section';
import NewsLetter from '../newsletter';
import Footer from '../footer';

class Store extends Component {

    render() {

        return(
            <div >
         <Header />
         <Navigation />
         <BreadCrumb />
         <Section />
         <NewsLetter />
         <Footer />
         </div>
        )
    }
}

export default Store;