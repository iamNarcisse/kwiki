import Axios from "axios";


const apiUrl = 'http://localhost:3000/products';

/**
 * 
 * @param {*} searchQuery 
 * @param {*} limit no of houses to load
 * @param {*} limit_start  startin gpoint of the houses to be loaded/ This is used to prevent already loaded houses from reloading
 */
export const getProductInfo = () => {
    return Axios.get(`${apiUrl}`)
}

/**
 * 
 * Getting Details from product Api
 */
export const getProductDetailsRequest = (house_id) => {

    return Axios.get(`${apiUrl}/product/${house_id}`)
}