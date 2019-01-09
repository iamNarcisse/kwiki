import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

const savedItemStyle = {
    textAlign: 'center',
    margin: '20px, 20px'
}

class SavedItemPage extends Component {

    state = {
        savedItem: []
    }

    componentDidMount() {

        this.handleSavedItem();
    }

    handleSavedItem = () => {

        if (JSON.parse(localStorage.getItem('user_details')) && Array.isArray(JSON.parse(localStorage.getItem('wishlist')))) {

            let savedItem = JSON.parse(localStorage.getItem('wishlist'));

            this.setState({
                savedItem: savedItem
            })

        } else {
            this.setState({
                savedItem: []
            })
        }
    }

    table = () => {
        return (
            <tr>
                <td>Product Details </td>
                <td>Availability</td>
                <td>Price</td>
                <td></td>
            </tr>
        )

    }

    render() {
        const { savedItem } = this.state;
        return (
            <div>
                <Header />

                <div className="saved">

                    <h2 style={savedItemStyle}>Saved Item</h2>

                    <table className="table table-striped">

                        <thead>
                            {JSON.parse(localStorage.getItem('user_details')) && this.table()}
                        </thead>
                        <tbody>

                            {savedItem.map(item => {

                                return (
                                    <tr key={item.productID}>
                                        <td>
                                            <div>
                                                <img src={item.productImage} alt={'product '} style={{ float: 'Right', height: '35px' }} />
                                                <p>{item.productName} </p>
                                                <p>Details</p>
                                                <p onClick={() => {

                                                    const id = item.productID;
                                                    console.log(id)
                                                    //Get products from localstorage
                                                    let getFromStorage = JSON.parse(localStorage.getItem('wishlist'));
                                                    //Loop through the array
                                                    for (let i = 0; i < getFromStorage.length; i++) {
                                                        if (getFromStorage[i].productID === id) {
                                                            getFromStorage.splice(i, 1);
                                                        }
                                                    }

                                                    localStorage.setItem('wishlist', JSON.stringify(getFromStorage))
                                                    window.location.reload()
                                                }}><i className="fa fa-close btn btn-danger"></i> Remove product</p>
                                            </div>
                                        </td>
                                        <td>In stock</td>
                                        <td>{item.productPrice}</td>
                                        <td><button className="btn btn-success">Buy Now</button></td>
                                    </tr>

                                )
                            })}


                        </tbody>
                    </table>

                </div>

                <Footer />

            </div>

        )
    }
}

export default SavedItemPage;