import React, { useState } from "react";
import Rating from "react-rating";
import "../../MyOrder/MyOrder.css";

const ManageOrder = ({ order, handleDelete }) => {
  const { name, pcode, price, brand, img, rating, email, _id, pending } = order;
  const [num, setNum] = useState(0);
  const handleStatus = () => {
    const checked = false;
    fetch("https://desolate-taiga-27947.herokuapp.com/manageOrders", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ _id, checked }),
    })
      .then((res) => res.json())
      .then((data) => {
        setNum(num + 1);
      });
  };
  return (
    <div className="col-lg-6 col-md-5 col-sm-12 order-card">
      <div className="order-card-inside">
        <div className="row ">
          <div className="col-lg-5 col-sm-12 col-md-4">
            <img src={img} className="img-fluid order-img" alt="" />
          </div>
          <div className="col-lg-7 p-2 col-sm-12 col-md-8 product-info">
            <div className="row">
              <div className="col-6">
                <Rating
                  style={{ fontSize: "12px", color: "#e84545" }}
                  initialRating={rating}
                  emptySymbol=" fas fa-star-half-alt"
                  fullSymbol="fas fa-star"
                  readonly
                />
              </div>
              <div className="col-6"></div>
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
            <small className="d-block">
              Status: -{" "}
              <span className="fw-bold text-success">
                {pending ? "Pending" : "Aproved"}
              </span>
            </small>

            <small className="d-block">
              Email: - <span className="fw-bold ">{email}</span>
            </small>
            <small className="d-block mt-2">
              <span className="edit_btn me-2" onClick={handleStatus}>
                <i className="far fa-edit" id="customize_icon"></i> Aproved
              </span>

              <span className="edit_btn" onClick={() => handleDelete(_id)}>
                <i className="far fa-trash-alt" id="customize_icon"></i> Delete
              </span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
