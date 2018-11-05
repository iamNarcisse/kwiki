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
const cartApiUrl = `${apiUrl}/addtocart`;

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


 export const getTopProductRequestDetails = (product_id) => {
   return Axios.get(`${productApiUrl}/top/${product_id}`)
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

  export const addToCart = (productId, userId) => {
    let body = {
      product_id : productId,
      user_id : userId
    }
    Axios.post(`${cartApiUrl}/add`, body, axiosConfig)

  }

  //all about cake here
  export const getCake = () => {
   return Axios.get(`${productApiUrl}/getcake`)
  }
  
  export const getCakeRequest = (cake_id) => {
    return Axios.get(`${productApiUrl}/getcake/${cake_id}`)
  }

  //All about food here
  export const getFood = () => {
    return Axios.get(`${productApiUrl}/getfood`)
   }

   export const getFoodRequest = (food_id) => {
    return Axios.get(`${productApiUrl}/getfood/${food_id}`)
  }

  //All about shoe

   export const getMenShoe = () => {
    return Axios.get(`${productApiUrl}/getmenshoe`)
   }

   export const getMenShoeRequest = (shoe_id) => {
     return Axios.get(`${productApiUrl}/getmenshoe/${shoe_id}`)
   }

   //All about WomenShoe
   export const getWomenShoe = () => {
     return Axios.get(`${productApiUrl}/getwomenshoe`)
   }

   export const getWomenShoeRequest = (shoe_id) => {
     return Axios.get(`${productApiUrl}/getwomenshoe/${shoe_id}`)
   }