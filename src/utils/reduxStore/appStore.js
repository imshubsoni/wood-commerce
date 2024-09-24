import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reduxSlices/productsSlice";

const appStore = configureStore({
    reducer:{
        products: productReducer,
    },
});

export default appStore;