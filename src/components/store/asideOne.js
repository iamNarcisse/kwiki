import React, { Component } from 'react';

class AsideOne extends Component {
    render() {

        return (

                <div className="aside">
                    <h3 className="aside-title">Categories</h3>
                    <div className="checkbox-filter">

                        <div className="input-checkbox">
                            <input type="checkbox" id="category-1" />
                            <label >
                                <span></span>
                                Laptops
										<small>(120)</small>
                            </label>
                        </div>

                        <div className="input-checkbox">
                            <input type="checkbox" id="category-2" />
                            <label >
                                <span></span>
                                Smartphones
										<small>(740)</small>
                            </label>
                        </div>

                        <div className="input-checkbox">
                            <input type="checkbox" id="category-3" />
                            <label >
                                <span></span>
                                Cameras
										<small>(1450)</small>
                            </label>
                        </div>

                        <div className="input-checkbox">
                            <input type="checkbox" id="category-4" />
                            <label>
                                <span></span>
                                Accessories
										<small>(578)</small>
                            </label>
                        </div>

                        <div className="input-checkbox">
                            <input type="checkbox" id="category-5" />
                            <label >
                                <span></span>
                                Laptops
										<small>(120)</small>
                            </label>
                        </div>


                    </div>
                </div>
        )
    }
}

export default AsideOne;