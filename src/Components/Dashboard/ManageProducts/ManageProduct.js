import React from "react";
import Rating from "react-rating";
import "../../Home/Product/product.css";
const ManageProduct = ({ manageProduct, handleDelete }) => {
  const { name, price, img, rating, _id } = manageProduct;
  return (
    <div className=" col-lg-3 col-md-6 mt-4">
      <div className="product-top">
        <img src={img} className="mb-3 img-fluid " alt="" />

        <div className="icon">
          <div className="product_hover">
            <button type="button" className="btn" title="Edit Product">
              <i className="far fa-edit fas" />
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => handleDelete(_id)}
              title="Delete Prodcut"
            >
              <i className="far fa-trash-alt fas" />
            </button>
          </div>

          <div className="product-review text-center">
            <Rating
              className="text-dark"
              initialRating={rating}
              emptySymbol=" fas fa-star-half-alt"
              fullSymbol="fas fa-star"
              readonly
            />

            <h4 className="small m-0 p-0">{name}</h4>
            <p className="small">Price: ${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
