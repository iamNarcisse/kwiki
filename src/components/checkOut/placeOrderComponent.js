import React from 'react';
class PlaceOrderButton extends React.Component {
    render() {
        return (
            <a href="#placeOrder" className="primary-btn order-submit" onClick={
                () => {
                    let user_details = JSON.parse(localStorage.getItem('user_details'));
                    let productData = JSON.parse(localStorage.getItem('product'));

                    if(!Array.isArray(productData) || !productData.length>0)  {
                        alert('No item in cart')
                    }else {
                    for (let i = 0; i < productData.length; i++) {
                        if (productData[i].id === undefined || productData[i].id === null) {
                            alert('Kindly add an Item to cart to Proceed')
                        } else if (user_details === null || user_details === undefined) {
                            alert('Kindly login to proceed')
                        } else {
                            let addToCart = {
                                //item_id: productData[i].id,
                               // user_id: user_details._id,
                               // item_name: productData[i].name,
                                user_firstName: this.props.firstName,  /**   Storing Billing Details to localStorage so that it can be fetched after payment is successful  */
                                user_lastName: this.props.lastName,
                                user_email: this.props.email,
                                user_tel: this.props.tel,
                                user_address: this.props.address,
                                user_city: this.props.city
                            }
                            localStorage.setItem('order_details', JSON.stringify(addToCart));
                            localStorage.setItem('order_placed', true);
                            window.location.reload();
                        }
                    }}
                }
            } >Place Order</a>
        )
    }
}
export default PlaceOrderButton;