import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeProducts } from "../utils/reduxStore/reduxSlices/productsSlice";
import { products } from "../utils/products";
import ProductsList from "./ProductsList";

const Body = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeProducts(products));
    }, [dispatch])

    return (
        <div>
            <ProductsList />
        </div>
    )
}

export default Body;