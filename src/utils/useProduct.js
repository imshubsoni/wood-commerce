import { useEffect, useState } from "react"
import { products } from "./products";

const useProduct = (productId) => {
    // Fetch particular product from the Products.js based on product id and return it..
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        fetchAndSetProduct();
    },[]);

    const fetchAndSetProduct = () => {
        const product = products.filter((product) => product.id === productId)[0];

        setProductDetails(product);
    };

    return productDetails;
}

export default useProduct;