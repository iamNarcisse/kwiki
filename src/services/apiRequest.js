import Axios from "axios";
const GetUserAuthToken = () => {
    return localStorage.getItem("user_token");
  };
  
  const axiosConfig = {
    headers: {
      "x-access-request-source": "Kwiki",
      "x-access-token": GetUserAuthToken()  
    }
  };

const apiUrl = 'http://localhost:3000';
const productApiUrl = `${apiUrl}/products`;
const authApiUrl = `${apiUrl}/auth`;
const userApiUrl = `${apiUrl}/users`;

/**
 * 
 * @param {*} searchQuery 
 * @param {*} limit no of houses to load
 * @param {*} limit_start  startin gpoint of the houses to be loaded/ This is used to prevent already loaded houses from reloading
 */
export const getProductInfo = () => {
    return Axios.get(`${apiUrl}/products`)
}

/**
 * 
 Get topProduct Details
 */

 export const getTopProduct = () => {
   return Axios.get(`${apiUrl}/products/top`)
 }

/**
 * 
 * Getting Details from product Api
 */
export const getProductDetailsRequest = (product_id) => {

    return Axios.get(`${productApiUrl}/product/${product_id}`)
}

/** User details */

export const getUserDetailsRequest = () => {
    return Axios.get(`${userApiUrl}/user`, axiosConfig);
  };


  /**
   *
   */
  export const LoginRequest = (email, password) => {
    let body = {
      email: email,
      password: password
    };
    return Axios.post(`${authApiUrl}/login`, body, axiosConfig);
  };
  
  export const SignupRequest = (
    firstname,
    email,
    password,
    confirmPassword,
    lastname,
    phoneNumber
  ) => {
    let body = {
      email: email,
      firstname: firstname,
      lastname: lastname,
      phoneNumber: phoneNumber,
      password: password,
      confirmPassword: confirmPassword
    };
    return Axios.post(`${authApiUrl}/register`, body, axiosConfig);
  };
