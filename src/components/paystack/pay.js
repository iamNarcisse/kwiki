import React, { Component } from 'react';
import { addToCart } from '../../services/apiRequest';
import PaystackButton from 'react-paystack';

const product_details = JSON.parse(localStorage.getItem('product')); //Fetches product added to cart
const user_details = JSON.parse(localStorage.getItem('user_details')); //Fetches user_details
const order_details = JSON.parse(localStorage.getItem('order_details')); //Fetches order_details from localstorage

//const amount = JSON.parse(localStorage.getItem('SumTotal'));
//const price = parseInt(amount + '00'); //This converts the amount to an integer

class Pay extends Component {
  state = {
    key: "pk_test_e007f471fef14a60a725e1bf80ac234e6fad5764", //PAYSTACK PUBLIC KEY
    email: user_details.email,  // customer email
    amount: 0 //equals NGN100,
  }

  componentDidMount() {
    this.Check();
    this.checkAmount();
  }

  checkAmount = () => {
    let amount = JSON.parse(localStorage.getItem('SumTotal'));
    let calculatePrice = parseInt(amount + '00'); //This converts the amount to an integer
    if (amount <= 2000) {
      let price = calculatePrice + 5000;
      this.setState({
        amount: price
      })
    } else {
      let price = calculatePrice + 10000;
      this.setState({
        amount: price
      })
    }
  }

  //This function checks if product array is empty to avoid making payments when product is empty
  Check = () => {
    if (Array.isArray(localStorage.getItem('product')) || localStorage.getItem('product') > 0) {
      localStorage.setItem('order_placed', true);
    } else {
      localStorage.removeItem('order_placed');
    }

  }

  callback = (response) => {
    console.log(response); // card charged successfully, get reference here
    for (let i = 0; i < product_details.length; i++) {
      addToCart(
        product_details[i].id,
        user_details._id,
        product_details[i].name,
        order_details.user_firstName,
        order_details.user_lastName,
        user_details.email,
        order_details.user_tel,
        order_details.user_address, order_details.user_city,
        product_details[i].price, product_details[i].qty, 'online')
        .then(result => {
          console.log(result)
          localStorage.removeItem('order_placed');
          localStorage.removeItem('product');
          window.location.reload();
        })
        .catch(err => {
          console.log(err)
        });
    }



  }

  close = () => {
    console.log("Payment closed");
    localStorage.removeItem('order_placed');
    window.location.reload();
  }

  getReference = () => {
    //you can put any unique reference implementation code here
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for (let i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  render() {
    return (
      <div>
        <br />
        <div className="container">
        <p style={{textAlign : 'center'}}>Your order is almost placed, make payment to continue. Your payment is secured</p>
        </div><br /><br />
        <p style={{ textAlign: 'center' }}>
          <PaystackButton
            text="Make Payment"
            class="btn btn-success payButton"
            callback={this.callback}
            close={this.close}
            disabled={false} /*disable payment button*/
            embed={false} /*payment embed in your app instead of a pop up*/
            reference={this.getReference()}
            email={this.state.email}
            amount={this.state.amount}
            paystackkey={this.state.key}
          />
        </p>
      </div>
    );
  }
}

export default Pay;