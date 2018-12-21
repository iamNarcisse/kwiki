import React, { Component } from 'react';
//import CardExample from '../cardExample';
import ProfileNavBar from '../navBar';
import EditProduct from './editProduct';
class ManageProduct extends Component {
    render() {
        return (
            <div>
                <ProfileNavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-md-4 col-lg-4">
                        <EditProduct title=" Add New Product" />
                        </div>
                        <div className="col-sm-3 col-md-4 col-lg-4">
                            <EditProduct title=" Add Top Product" />
                        </div>
                        <div className="col-sm-3 col-md-4 col-lg-4">
                            <EditProduct title="Add Foodie Product" />
                        </div>
                    </div>
                    <br /><br />

                </div>
            </div>

        )
    }
}
export default ManageProduct;
