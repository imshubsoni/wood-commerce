import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState:{
        products: [],
        filteredProducts: []
    },
    reducers:{
        initializeProducts: (state, action) => {
            state.products = action.payload;
            state.filteredProducts = action.payload;
        }
    }
});

// export Actions which can be used to update Products
export const { initializeProducts } = productsSlice.actions;

// export reduces which can be added to main store
export default productsSlice.reducer;