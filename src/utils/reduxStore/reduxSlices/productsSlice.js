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
        },
        filterProducts: (state, action) => {
            state.filteredProducts = state.products.filter((product) => {
                return (( action.payload.collectionValue === '' ? product : product.product_collection.toLowerCase().replaceAll(' ', '') === action.payload.collectionValue)
                    && (action.payload.colorValue === '' ? product : product.color_options.split(",").includes(action.payload.colorValue))
                    && (action.payload.categoryValue === '' ? product : product.product_category.toLowerCase().replaceAll(' ','') === action.payload.categoryValue ));
            });
        }
    }
});

// export Actions which can be used to update Products
export const { initializeProducts, filterProducts } = productsSlice.actions;

// export reduces which can be added to main store
export default productsSlice.reducer;