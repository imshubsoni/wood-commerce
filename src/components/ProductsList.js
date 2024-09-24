import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import "../utils/styles/ProductList.css";

const ProductsList = () => {

    const products = useSelector(state => state.products.filteredProducts);
    console.log(products);

    return(
        <div className="product-list">
            { products.map(product => {
                return <ProductCard product={product} key={product.id}/>
            })}
        </div>
    )
}

export default ProductsList;