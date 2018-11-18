import React, { Component } from 'react';
import {getVendors} from '../../services/apiRequest';
class Vendors extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vendor : []
        }
    }
    componentDidMount () {
        this.Vendors();
    }

    Vendors = () => {
     getVendors()
     .then(axiosResponse => {
         if(axiosResponse && axiosResponse.data.data) {
             this.setState({
                 vendor: axiosResponse.data.data
             })
         }
     })
    }

    render() {
        return (
            <div className="aside overflow">
                <h3 className="aside-title">Vendors</h3>
                {
                    this.state.vendor.map(vendor => {
                        return(
                            <div key={vendor._id}>
                    <div className="input-checkbox">
                        <input type="checkbox" id="brand-6" />
                        <label htmlFor="brand-6">
                            <span></span>
                            {vendor.name}
							<small>(12)</small>
                        </label>
                    </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Vendors;