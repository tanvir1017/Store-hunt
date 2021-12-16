import React from "react";
import Rating from "react-rating";
import "./OnSale.css";

const Trending = ({ sale }) => {
  const { name, price, img, rating } = sale;
  return (
    <div className=" col-lg-3 col-md-6 mt-4 ">
      <div class="product-top">
        <a href="/Product/index.html">
          <img src={img} class="mb-3 img-fluid " alt="" />
        </a>
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

export default Trending;
