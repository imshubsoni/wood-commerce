import { Link } from "react-router-dom";
import "../utils/styles/ProductList.css";

const ProductCard = ({product}) => {
    return(
        // Creating a link so that, once clicked, it will redirect to the /product/id (product details page) for the particlar product, based on the product id..
        <Link to={"/product/" + product.id} key={product.id}>
            <div className="product-card">
                <div className="product-card-image-container">
                    <img src={product.product_thumb} className="product-card-image" />
                </div>
                <div className="product-card-details-container">
                    <div className="product-card-name">
                        {product.product_collection}
                    </div>
                    <div className="product-card-flex-container product-card-first-container">
                        <div className="product-card-collection">
                            {product.product_category}
                        </div>
                        <div className="product-card-price">
                            ${product.product_sell_price ? product.product_sell_price : product.product_price}
                        </div>
                    </div>
                    <div className="product-card-flex-container">
                        {/* Creating Star rating using empty arrays */}
                        <div className="product-card-rating">
                            {
                                [...Array(product.star_rating)].map((n,i) => <i className="fa-solid fa-star"></i>)
                            }
                            {
                                [...Array(5-product.star_rating)].map((n,i) => <i class="fa-regular fa-star"></i>)
                            }
                        </div>
                        <div className="product-card-card-icon">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;