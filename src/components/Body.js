import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeProducts } from "../utils/reduxStore/reduxSlices/productsSlice";
import { products } from "../utils/products";
import ProductsList from "./ProductsList";

const Body = () => {

    const dispatch = useDispatch();

    // We create a List of Products in products.js -- so we are now updating the same to redux store.
    // -- all further operations on products will be done on redux store and not on products.js file
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