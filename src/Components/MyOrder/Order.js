import React from "react";
import Rating from "react-rating";
import "./MyOrder.css";

const Order = ({ order, handleDelete }) => {
  const { name, pcode, price, brand, img, rating, email, _id } = order;
  return (
    <div className="col-lg-6 col-md-5 col-sm-12 order-card">
      <div className="order-card-inside">
        <div className="row ">
          <div className="col-lg-5 col-sm-12 col-md-4">
            <img src={img} className="img-fluid order-img" alt="" />
          </div>
          <div className="col-lg-7 p-2 col-sm-12 col-md-8 product-info">
            <div className="row">
              <div className="col-4">
                <Rating
                  style={{ fontSize: "12px", color: "#e84545" }}
                  initialRating={rating}
                  emptySymbol=" fas fa-star-half-alt"
                  fullSymbol="fas fa-star"
                  readonly
                />
              </div>
              <div className="col-8">
                <span className="shadow edit_btn">
                  <i className="far fa-edit " id="customize_icon"></i> Edit
                </span>

                <span
                  className="shadow edit_btn"
                  onClick={() => handleDelete(_id)}
                >
                  <i className="far fa-trash-alt " id="customize_icon"></i>{" "}
                  Delete
                </span>
              </div>
            </div>
            <small className="d-block">
              Product: - <span className="fw-bold ">{name}</span>
            </small>

            <small className="d-block">
              Code: - <span className="fw-bold ">{pcode}</span>
            </small>
            <small className="d-block">
              Brand: - <span className="fw-bold ">{brand}</span>
            </small>
            <small className="d-block">
              Price: - <span className="fw-bold">{price}</span>
            </small>

            <h5 className="owner-info">Owener info</h5>
            <small className="d-block">
              Email: - <span className="fw-bold ">{email}</span>
            </small>
            <small className="d-block">
              <span className="fst-italic">pending...</span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
