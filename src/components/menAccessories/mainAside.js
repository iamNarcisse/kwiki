import React, { Component } from 'react';
//import AsideOne from './asideOne';
//import PriceSpinner from './asideTwo';
//import AsideThree from './asideThree';
import AsideFour from './asideFour';

class MainAside extends Component {
    render() {

        return (
            <div id="aside" className="col-md-3">
                {/* <AsideOne />
             <PriceSpinner />
             <AsideThree />*/}
                <AsideFour />
            </div>
        )
    }
}

export default MainAside;