import React from 'react';
const AsideOne = () => {

    const CheckBox = (value, category) => (
        <div className="input-checkbox">
            <input type="checkbox" id={`${category}`} />
            <label >
                <span></span>
                {value}
                <small>(120)</small>
            </label>
        </div>
    );

    return (
        <div className="aside">
            <h3 className="aside-title">Categories</h3>
            <div className="checkbox-filter">

                {CheckBox(Food)}

                {CheckBox(Cake)}

                {CheckBox(Shows)}

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


export default AsideOne;