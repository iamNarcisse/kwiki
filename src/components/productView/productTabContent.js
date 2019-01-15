import React, { Component } from 'react';
import Tab3 from './tab3';

class ProductTabContent extends Component {
    render() {
        return (
            <div className="tab-content">

                <div id="tab1" className="tab-pane fade in active">
                    <div className="row">
                        <div className="col-md-12">
                            <p>Quality Product, I recommend</p>
                        </div>
                    </div>
                </div>

                <div id="tab2" className="tab-pane fade in">
                    <div className="row">
                        <div className="col-md-12">
                            <p>Exquisite</p>
                        </div>
                    </div>
                </div>

                <Tab3 />


            </div>
        )
    }
}

export default ProductTabContent;