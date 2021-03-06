import Axios from "axios";
const GetUserAuthToken = () => {
  return localStorage.getItem("user_token");
};

const getAdminAuthToken = () => {
  return localStorage.getItem("admin_token");
}

const axiosConfig = {
  headers: {
    "x-access-request-source": "Kwiki",
    "x-access-token": GetUserAuthToken()
  }
};

const adminConfig = {
  headers: {
    "x-access-request-source": "admin",
    "x-access-toke": getAdminAuthToken()
  }
};


//Naricsse
//Don't forget to comment http://localhost:3000 during production
//const apiUrl = 'https://arcane-shelf-55983.herokuapp.com';
const apiUrl = 'http://localhost:5000';
const productApiUrl = `${apiUrl}/products`;
const authApiUrl = `${apiUrl}/auth`;
const userApiUrl = `${apiUrl}/users`;
const cartApiUrl = `${apiUrl}/addtocart`;
const vendorApiUrl = `${apiUrl}/vendors`;


export const category = [ 'None', 'Products', 'Food', 'Accessories'];

/**
 * Simple Search Query for 
 * @param {string} -search_query goes here
 */
export const searchMeQuery = (category, query) => {
  if(category === undefined || category === 'Products') {
    let category = 'search';
   // console.log(category)
    return Axios.get(`${productApiUrl}/${category}?name=${query}`)
  }else if (category === 'Food') {
    let category = 'search_food';
    return Axios.get(`${productApiUrl}/${category}?name=${query}`)
  }else if(category === 'Cake') {
    let category = 'search_cake';
    return Axios.get(`${productApiUrl}/${category}?name=${query}`)
  }else {

  }
}

export const relatedProduct = (query) => {
  return Axios.get(`${productApiUrl}/search?name=${query}`)
}


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

//Add to cart Api here;
export const addToCart = (productId, userId, productName, firstName, lastName, email, tel, address, city, amount, qty, payment) => {
  //You are meant to use product, but for the sake of testing use productDetails
  let body = {
    product_id: productId,
    user_id: userId,
    product_name: productName,
    first_name: firstName,
    last_name: lastName,
    email: email,
    tel: tel,
    address: address,
    city: city,
    amount: amount,
    qty: qty,
    payment : payment
  }
 return Axios.post(`${cartApiUrl}/add`, body)

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

//All about WomenCloth
export const getWomenCloth = () => {
  return Axios.get(`${productApiUrl}/getwomencloth`)
}

export const getWomenClothRequest = (cloth_id) => {
  return Axios.get(`${productApiUrl}/getwomencloth/${cloth_id}`)
}

//All about MenCloth

export const getMenCloth = () => {
  return Axios.get(`${productApiUrl}/getmencloth`)
}

export const getMenClothRequest = (cloth_id) => {
  return Axios.get(`${productApiUrl}/getmencloth/${cloth_id}`)
}

//All about men accessories

export const getMenAccessories = () => {
  return Axios.get(`${productApiUrl}/getMenAccessories`)
}

export const getMenAccessoriesRequest = (cloth_id) => {
  return Axios.get(`${productApiUrl}/getMenAccessories/${cloth_id}`)
}

//All about Women Accessories

export const getWomenAaccessories = () => {
  return Axios.get(`${productApiUrl}/getWomenAccessories`)
}

export const getWomenAccessoriesRequest = (cloth_id) => {
  return Axios.get(`${productApiUrl}/getWomenAccessories/${cloth_id}`)
}

//getVendors 
export const getVendors = () => {
  return Axios.get(`${vendorApiUrl}/getvendor`)
}

//Pick router is here oo

export const sendPickUpAndDelivery = (data) => {
  return Axios.post(`${apiUrl}/pickups/add`, data)
}

//Admin router here
export const getEntireCustomers = () => {
  return Axios.get(`${apiUrl}/customers/get`)
}

//Get Entire customers order here

export const getEntireCustomersOrders = () => {
  return Axios.get(`${apiUrl}/customers/order`)
}

//Admin Login

export const adminLoginRequest = (email, password) => {
  let body = {
    email: email,
    password: password
  };
  return Axios.post(`${authApiUrl}/admin_login`, body, adminConfig);
};

//Profile Update 

export const updateProfile = (id, fname, lname, email, address, phone, dob) => {

  let body = {
    id : id,
    firstname : fname,
    lastname : lname,
    email : email,
    address : address,
    phoneNumber : phone,
    dob : dob
  };

  return Axios.post(`${apiUrl}/users/update_profile`, body, axiosConfig)
}

export const getUserOrderHistory = () => {
  return Axios.get(`${userApiUrl}/order_history`, axiosConfig);
}

/***
 * ========================
 * This handles wishlist
 * ========================
 */

 export const addToWish = (productID, userID, productName, userName) => {
   let body = {
     product_id : productID,
     user_id : userID,
     productName : productName,
     userName : userName
   }
  return Axios.post(`${cartApiUrl}/wishlist`, body)
 }