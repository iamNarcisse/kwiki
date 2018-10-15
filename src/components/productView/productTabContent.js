import React, { Component } from 'react';
import Tab3 from './tab3';

class ProductTabContent extends Component {
    render() {
        return (
            <div className="tab-content">

                <div id="tab1" className="tab-pane fade in active">
                    <div className="row">
                        <div className="col-md-12">
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>

                <div id="tab2" className="tab-pane fade in">
                    <div className="row">
                        <div className="col-md-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                        </div>
                    </div>
                </div>

                <Tab3 />


            </div>
        )
    }
}

export default ProductTabContent;