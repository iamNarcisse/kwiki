import React, { Component } from 'react';

class AsideThree extends Component {

    render() {

        return (

            <div className="aside">
                <h3 className="aside-title">Brand</h3>
                <div className="checkbox-filter">
                    <div className="input-checkbox">
                        <input type="checkbox" id="brand-1" />
                        <label for="brand-1">
                            <span></span>
                            SAMSUNG
										<small>(578)</small>
                        </label>
                    </div>
                    <div className="input-checkbox">
                        <input type="checkbox" id="brand-2" />
                        <label for="brand-2">
                            <span></span>
                            LG
										<small>(125)</small>
                        </label>
                    </div>
                    <div className="input-checkbox">
                        <input type="checkbox" id="brand-3" />
                        <label for="brand-3">
                            <span></span>
                            SONY
										<small>(755)</small>
                        </label>
                    </div>
                    <div className="input-checkbox">
                        <input type="checkbox" id="brand-4" />
                        <label for="brand-4">
                            <span></span>
                            SAMSUNG
										<small>(578)</small>
                        </label>
                    </div>
                    <div className="input-checkbox">
                        <input type="checkbox" id="brand-5" />
                        <label for="brand-5">
                            <span></span>
                            LG
										<small>(125)</small>
                        </label>
                    </div>
                    <div className="input-checkbox">
                        <input type="checkbox" id="brand-6" />
                        <label for="brand-6">
                            <span></span>
                            SONY
										<small>(755)</small>
                        </label>
                    </div>
                </div>
            </div>

        )
    }
}

export default AsideThree;