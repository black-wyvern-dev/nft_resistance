import axios from 'axios';
require('dotenv').config()
const baseUrl = process.env.REACT_APP_SERVER_URL;

// Get user asset
export const getUserAsset = async (walletAddress) => {
    const instance = axios.create({
        baseURL: baseUrl
    });
    return await instance.get("/user/asset", {
        params: { walletAddress: walletAddress },
    })
}

// Set user asset
export const setUserAsset = async (item) => {
    const instance = axios.create({
        baseURL: baseUrl
    });
    return await instance.post("/user/setAsset", {
        params: { item: item },
    })
}

// // Get search data
// export const getSearchData = async (name) => {
//     const instance = axios.create({
//         baseURL: baseUrl
//     });
//     return await instance.get("/user/getSearchData", {
//         params: { name: name },
//     })
// }
