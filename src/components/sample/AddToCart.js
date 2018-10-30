import React, { Component } from 'react';

let productList = [
    { name: 'Checking this Out', price: '6000'},
    {name: 'Peppered Rice', price: '6000'}
]

class AddToCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
             productList: '',
             total: 0
        }
    }

    componentDidMount () {
        setTimeout(() => {
            this.setState({productList: productList});
        }, 1000);
    }

    calculateTotal = (price) => {
      this.setState({
        total: this.state.price + price
      });
    }

    showProduct = (name) => {
        alert(name);
    }





    render() {
        return (
            <div>

            </div>

        )
    }
}

export default AddToCart;