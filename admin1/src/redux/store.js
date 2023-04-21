import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import cartReducer from "./slice/cartSlice";
import userReducer from "./slice/userSlice";


const rootReducers = combineReducers({
    productStore : productReducer,
    cartReducer : cartReducer,
    userReducer : userReducer
});

const store = configureStore({
    reducer : rootReducers
});

export default store;