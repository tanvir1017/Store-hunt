import axios from "axios";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../Hooks/useAuth";
import Navigation2 from "../../Navigation/Navigation2";
import "./Product.css";

const Products = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const handleBuyNOw = () => {
    const data = {
      name: name,
      pcode: pcode,
      price: price,
      brand: brand,
      img: img,
      rating: rating,
      email: user.email,
      pending: true,
    };

    axios
      .post("https://desolate-taiga-27947.herokuapp.com/order", data)
      .then((res) => {
        if (res.data.insertedId) {
          swal({
            title: "Order Recived Successfully",
            text: "our delivery soldier will give the product within 5 to 7 days",
            icon: "success",
            button: "Ok",
          });
        }
      });
  };
  useEffect(() => {
    fetch(`https://desolate-taiga-27947.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data);
      });
  }, [id]);

  const {
    name,
    title,
    pcode,
    avilavility,
    condition,
    brand,
    price,
    rating,
    img,
    description,
  } = singleProduct;

  // console.log(data);
  return (
    <div>
      <Navigation2 />
      {/* <!-- product slider start --> */}
      <section className="product-slider">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
                data-intervel="2000"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={img} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>

            <div className="col-md-7 text-start">
              <p className="new-arrival text-center">{condition}</p>
              <h3>{title}</h3>
              <p>Product Code: {pcode}</p>

              <Rating
                className="text-dark"
                initialRating={rating}
                emptySymbol=" fas fa-star-half-alt"
                fullSymbol="fas fa-star"
                readonly
              />

              <p className="price"> USD ${price}</p>
              <p>
                <b>Avilavility:</b> <span className="ms-2">{avilavility}</span>
              </p>
              <p>
                <b>Condition:</b> <span className="ms-2">{condition}</span>
              </p>
              <p>
                <b>Brand:</b> <span className="ms-2">{brand}</span>
              </p>
              <div className="quantity-input">
                <label>
                  <b>Quantity:</b>
                </label>
                <input className="ms-2" type="number" placeholder="Item" />

                <button className="btn ml-5 mystyle ms-3 ">
                  <i className="text-white mr-2 fas fa-shopping-cart"></i> Add
                  to Cart
                </button>
                <button
                  className="btn ml-2 mystyle ms-3"
                  onClick={handleBuyNOw}
                >
                  <i className="text-white mr-2 fas fa-shopping-basket"></i> Buy
                  Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- product slider start --> */}

      {/* <!-- product description --> */}
      <section className="product-description mt-5 text-start">
        <div className="container">
          <h5 className="font-weight-bold large mb-5 text-start">
            Product Description
          </h5>
          <p>
            {description}
            {description}
          </p>
          <p>{description}</p>
          <hr className="hr-style" />
        </div>
      </section>
      {/* <!-- product description --> */}
    </div>
  );
};

export default Products;
