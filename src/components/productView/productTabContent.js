import React from 'react';
import Tab3 from './tab3';

const  ProductTabContent =  (props) => {

        return (
            <div className="tab-content">

                <div id="tab1" className="tab-pane fade in active">
                    <div className="row">
                        <div className="col-md-12">
                            <p>{props.details}</p>
                        </div>
                    </div>
                </div>

                <div id="tab2" className="tab-pane fade in">
                    <div className="row">
                        <div className="col-md-12">
                            <p>{props.details}</p>
                        </div>
                    </div>
                </div>

                <Tab3 />


            </div>
        )
    }

export default ProductTabContent;