import { useParams } from "react-router-dom";
import useProduct from "../utils/useProduct";

const ProductDetail = () => {

    const { productId } = useParams();

    const product = useProduct(productId);

    if(product === null) return;

    return(
        <div className="product-detail-container">
            Product details page : {productId}
        </div>
    )
}

export default ProductDetail;