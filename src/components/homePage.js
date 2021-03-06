import React, { Component } from 'react';
import Header from './header';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import HotDeals from './hotDeals';
import SectionThree from './sectionThree';
import NewsLetter from './newsletter';
import Footer from './footer';
class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <SectionOne />
                <SectionTwo />
                <HotDeals />
                <SectionThree />
                <NewsLetter />
                <Footer />
            </div>
        )
    }
}

export default HomePage;