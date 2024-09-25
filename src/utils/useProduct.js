import { useEffect, useState } from "react"
import { products } from "./products";

const useProduct = (productId) => {
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        fetchAndSetProduct();
    },[]);

    const fetchAndSetProduct = () => {
        const product = products.filter((product) => product.id === productId);

        setProductDetails(product);
    };

    return productDetails;
}

export default useProduct;