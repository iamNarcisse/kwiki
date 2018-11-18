import React, { Component } from 'react';
import myImage from '../assets/img/food1.jpg';
import CartDetails from './cartDetails';
const pic = myImage;
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
                cart: {},
                 qty: '',
                productImage: pic,
        }
    }

    componentDidMount() {
        this.getFromStorage();
    }

    getFromStorage = () => {
        const getFromStorage = JSON.parse(localStorage.getItem('product'));
        //console.log(getFromStorage);
        if(getFromStorage !==undefined &&  getFromStorage !== null) {
            this.setState({
                cart : getFromStorage
            }, ()=> {this.setState({qty: 1})})
        }else {
            this.setState({
                cart: {price : 0}
            })
        }
        
    }


    render() {
        return (
        <CartDetails price={this.state.cart.price} name={this.state.cart.name} image={this.state.cart.image}  qty={this.state.qty} />
        )
    }
}
export default Cart;