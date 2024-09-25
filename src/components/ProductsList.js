import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import "../utils/styles/ProductList.css";
import { filterProducts } from "../utils/reduxStore/reduxSlices/productsSlice";
import Slider from "rc-slider";

const ProductsList = () => {

    const dispatch = useDispatch();

    // This function dispatches action when filter is changed -- and the filtered products will be saved in FilteredProducts.. which can be retrieved later.
    const handleFilter = () => {
        const collectionValue = document.getElementById('collection-filter').value;
        const colorValue = document.getElementById('color-filter').value;
        const categoryValue = document.getElementById('category-filter').value;

        dispatch(filterProducts({collectionValue,colorValue,categoryValue}));
    }

    // Get Filtered Products from the redux store
    const products = useSelector(state => state.products.filteredProducts);

    return(
        <div className="product-list-container">
            <div className="filter-container">
                <div className="filter-container-heading">
                    Filter By
                </div>
                <div className="filter-container-collection filter">
                    <select onChange={handleFilter} id="collection-filter">
                        <option value="">Collection</option>
                        <option value="coombes">Coombes</option>
                        <option value="keeveset">Keeve Set</option>
                        <option value="kappu">Kappu</option>
                        <option value="momo">Momo</option>
                    </select>
                </div>
                <div className="filter-container-color filter">
                    <select id="color-filter" onChange={handleFilter}>
                        <option value="">Color</option>
                        <option value="black">Black</option>
                        <option value="darkgreen">Dark Green</option>
                        <option value="yellow">Yellow</option>
                        <option value="darkgrey">Dark Grey</option>
                    </select>
                </div>
                <div className="filter-container-category filter">
                    <select id="category-filter" onChange={handleFilter}>
                        <option value="">Category</option>
                        <option value="table&chair">Table & Chair</option>
                        <option value="armchair">Armchair</option>
                        <option value="shelves">Shelves</option>
                        <option value="sidetable">Side Table</option>
                    </select>
                </div>
                {/* <div className="filter filter-container-price">
                    <h5>Price Range</h5>
                    <span>$0</span>
                    <Slider range min={0} max={10000} style={{flex:1, margin: '0 10px'}}/>
                    <span>$10,000</span>
                </div> */}
            </div>
            <div className="product-list">
                {/* Render product list -- for each product -- render a ProductCard */}
                {
                    // Display message when no products are found & if products are found then render them..
                    products.length === 0 ? <div className="no-products">Too many filters! No such product found.</div> :
                    products.map(product => {
                        return <ProductCard product={product} key={product.id}/>
                    })
                }
            </div>
        </div>    
    )
}

export default ProductsList;