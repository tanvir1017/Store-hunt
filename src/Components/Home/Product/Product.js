import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "../OnSale/OnSale.css";

const Product = ({ sale }) => {
  const { name, price, img, rating, _id } = sale;
  return (
    <div className=" col-lg-3 col-md-6 ">
      <div class="product-top">
        <Link to={`/product/${_id}`}>
          <img src={img} class="mb-3 img-fluid " alt="" />
        </Link>
        <div className="icon">
          <div class="overlay-right">
            <button type="button" class="btn" title="Quick shop">
              <i class="fas fa-eye shadow"></i>
            </button>
            <button type="button" class="btn" title="Add to wishlist">
              <i class="fas fa-heart shadow"></i>
            </button>
            <button type="button" class="btn" title="Add to cart">
              <i class="fas fa-shopping-cart shadow"></i>
            </button>
          </div>

          <div class="product-review text-center">
            <Rating
              className="text-dark"
              initialRating={rating}
              emptySymbol=" fas fa-star-half-alt"
              fullSymbol="fas fa-star"
              readonly
            />

            <h4 class="small m-0 p-0">{name}</h4>
            <p class="small">Price: ${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
