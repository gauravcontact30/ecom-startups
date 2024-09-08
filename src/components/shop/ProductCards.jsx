import React from "react";
import { Link } from "react-router-dom";
import Rating from "../rating/Rating";

const ProductCards = ({ GridList, products }) => {
  return (
    <div className={`shop-product-wrap row ${GridList ? "grid" : "list"}`}>
      {products.map((product, i) => (
        <div key={i} className="col-lg-4 col-md-6 col-12">
          {/* grid - style */}
          <div className="product-item">
            {/* Product images */}
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={product.img} alt="" />
              </div>
              {/* Product action links */}
              <div className="product-action-link">
                <Link to={`/shop/${product.id}`}>
                  <i className="icofont-eye"></i>
                </Link>
                <a href="#">
                  <i className="icofont-heart" />
                </a>
                <Link to={`/cart-page`}>
                  <i className="icofont-cart-alt"></i>
                </Link>
              </div>
            </div>
            {/* Product content */}
            <div className="product-content">
              <h6>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </h6>
              <p className="productRating">
                <Rating />
              </p>
              <h6>${product.price}</h6>
            </div>
          </div>
          {/* list - style */}
          <div className="product-list-item">
            {/* Product images */}
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={product.img} alt="" />
              </div>
              {/* Product action links */}
              <div className="product-action-link">
                <Link to={`/shop/${product.id}`}>
                  <i className="icofont-eye"></i>
                </Link>
                <a href="#">
                  <i className="icofont-heart" />
                </a>
                <Link to={`/cart-page`}>
                  <i className="icofont-cart-alt"></i>
                </Link>
              </div>
            </div>
            {/* Product content */}
            <div className="product-content">
              <h6>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </h6>
              <p className="productRating">
                <Rating />
              </p>
              <h6>${product.price}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
