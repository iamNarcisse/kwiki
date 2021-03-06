import React from 'react';
import { addToCart } from '../../services/apiRequest';
import { Link } from 'react-router-dom';
class OrderButton extends React.Component {
    render() {
        return (
            <Link to="/success" className="primary-btn order-submit" onClick={
                (e) => {
                   // e.preventDefault()
                    let user_details = JSON.parse(localStorage.getItem('user_details'));
                    let productData = JSON.parse(localStorage.getItem('product'));

                    if (!Array.isArray(productData) || !productData.length > 0) {
                        alert('No item in cart')
                    } else {
                        for (let i = 0; i < productData.length; i++) {
                            if (productData[i].id === undefined || productData[i].id === null) {
                                alert('Kindly add an Item to cart to Proceed')
                            } else if (user_details === null || user_details === undefined) {
                                alert('Kindly login to proceed')
                            } else if (this.props.tel === '' || this.props.city === '' || this.props.address === '') {
                                alert('Billing address must be filled')
                            } else {
                                    addToCart(
                                        productData[i].id,
                                        user_details._id,
                                        productData[i].name,
                                        this.props.firstName,
                                        this.props.lastName,
                                        user_details.email,
                                        this.props.tel,
                                        this.props.address, this.props.city,
                                        productData[i].price, productData[i].qty)
                                        .then(result => {
                                           // console.log(result);
                                            localStorage.setItem('on_delivery', true)
                                            localStorage.removeItem('product');
                                            window.location.reload();
                                          
                                        })
                                        .catch(err => {
                                            console.log(err)
                                        });
                            }
                        }
                    }
                }
            } >Place Order</Link>
        )
    }
}
export default OrderButton;