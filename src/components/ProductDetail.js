import { useParams } from "react-router-dom";
import useProduct from "../utils/useProduct";
import "../utils/styles/ProductDetails.css";

const ProductDetail = () => {

    const { productId } = useParams();

    // Get particlar product information based on the product id..
    const product = useProduct(productId);

    // Initially or when the product is null.. Loading or Shimmer UI is shown..
    if(product === null) return <div>Loading....</div>;

    return(
        <div className="product-detail-container">
            <div className="product-details-image-container">
                <img src={product.product_thumb} className="product-details-image" />
            </div>
            <div className="product-details">
                <div className="product-details-collection">
                    { product.product_collection }
                </div>
                <div className="product-details-name">
                    { product.product_name }
                </div>
                <p className="product-details-desc">
                    { product.product_desc }
                </p>
                <div className="product-details-color">
                    <h5 className="product-details-color-heading">Color</h5>
                    <div className="product-details-color-set">
                        { product.color_options.split(",").map((color) => {
                            console.log(color);
                            if(color === 'black')
                                return <div className="product-details-color-pattern color-black"></div>
                            else if(color === 'darkgrey')
                                return <div className="product-details-color-pattern color-darkgrey"></div>
                            else if(color === 'yellow')
                                return <div className="product-details-color-pattern color-yellow"></div>
                            else if(color === 'darkgreen')
                                return <div className="product-details-color-pattern color-darkgreen"></div>
                        })}
                    </div>    
                </div>
                <div className="product-details-buy-info">
                    <div className="product-details-price">
                        <span className="product-details-price-heading">
                            Price Per Unit
                        </span>
                        {/* If the sell price is present then cut the original price and show the discounted (sell) price */}
                        <div className={`product-price ${product.product_sell_price ? 'cut-product-price' : ''}`}>
                            ${product.product_price}
                        </div>
                        { product.product_sell_price && 
                            <div className="product-price">
                                ${product.product_sell_price}
                            </div>
                        }
                    </div>
                    <div className="product-details-buttons">
                        <div className="product-details-buy-button-container">
                            <button className="product-details-buy-button">Buy Now</button>
                        </div>
                        <div className="product-details-cart">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;