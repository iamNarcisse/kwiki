import React from 'react';
import Header from '../header';
import BreadCrumb from './breadCrumb'
import Section from './section';
import NewsLetter from '../newsletter';
import Footer from '../footer';

const Store = () => {
    return (
        <div >
            <Header />
            <BreadCrumb />
            <Section />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Store;