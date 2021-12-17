import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import Navigation2 from "../../Navigation/Navigation2";
import "./Product.css";

const Products = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data);
      });
  }, [id]);
  const {
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
                <button className="btn ml-2 mystyle ms-3 ">
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

        {/* <!-- on sale section -->
                <section id="on-sale">
                    <div className="container">
                        <div className="title-box">
                            <h2>Realeted Product</h2>
                        </div>
                    </div>
                
                </section>
                <!-- on sale section -->
                
                <!-- featured section start here -->
                <div id="features-section">
                    <div className="container">
                        <div className="row border p-3 mb-4">
                            <div className="col-lg-12">
                                <h5 className="mb-2 text-muted ml-5">All you nedd in here</h5>
                
                            </div>
                
                            <div className="col-lg-3 col-md-6 ">
                                <div className="product-top">
                                    <img src="1 watch.jpg" className="mb-3 img-fluid" alt="">
                                    <div className="overlay-right">
                                        <button type="button" className="btn" title="Quick shop">
                                            <i className="fas fa-eye"></i>
                                        </button>
                                        <button type="button" className="btn" title="Add to wishlist">
                                            <i className="fas fa-heart"></i>
                                        </button>
                                        <button type="button" className="btn" title="Add to cart">
                                            <i className="fas fa-shopping-cart"></i>
                                        </button>
                                    </div>
                
                                    <div className="product-review text-center">
                                        <i className=" fas fa-star "></i>
                                        <i className=" fas fa-star "></i>
                                        <i className=" fas fa-star "></i>
                                        <i className=" fas fa-star "></i>
                                        <i className=" fas fa-star-half "></i>
                                        <i className=" far fa-star"></i>
                                        <h4 className="small m-0 p-0">Fitness Watch</h4>
                                        <p className="small">tk: 900.00</p>
                
                                    </div>
                                </div>
                            </div>
                
                            <div className="col-lg-3 col-md-6">
                                <div className="product-top">
                                    <img src="2 shirt.jpg" className="mb-3 img-fluid" alt="">
                                    <div className="overlay-right">
                                        <button type="button" className="btn" title="Quick shop">
                                            <i className="fas fa-eye"></i>
                                        </button>
                                        <button type="button" className="btn" title="Add to wishlist">
                                            <i className="fas fa-heart"></i>
                                        </button>
                                        <button type="button" className="btn" title="Add to cart">
                                            <i className="fas fa-shopping-cart"></i>
                                        </button>
                                    </div>
                
                                    <div className="product-review text-center">
                                        <i className=" fas fa-star "></i>
                                        <i className=" fas fa-star "></i>
                                        <i className=" fas fa-star "></i>
                                        <i className=" fas fa-star "></i>
                                        <i className=" fas fa-star-half "></i>
                                        <i className=" far fa-star"></i>
                                        <h4 className="small m-0 p-0">Shirt Package</h4>
                                        <p className="small">tk: 100.00</p>
                
                                    </div>
                                </div>
                            </div>
                
                            <div className="col-lg-3 col-md-6">
                                <div className="product-top">
                                    <img src="bag2.jpg" className="mb-3 img-fluid" alt="">
                                    <div className="overlay-right">
                                        <button type="button" className="btn" title="Quick shop">
                                            <i className="fas fa-eye"></i>
                                        </button>
                                        <button type="button" className="btn" title="Add to wishlist">
                                            <i className="fas fa-heart"></i>
                                        </button>
                                        <button type="button" className="btn" title="Add to cart">
                                            <i className="fas fa-shopping-cart"></i>
                                        </button>
                                    </div>
                
                                    <div className="product-review text-center">
                                        <i className=" fas fa-star "></i>
                                        <i className=" fas fa-star "></i>
                                        <i className=" fas fa-star "></i>
                                        <i className=" fas fa-star "></i>
                                        <i className=" fas fa-star-half "></i>
                                        <i className=" far fa-star"></i>
                                        <h4 className="small m-0 p-0">Black Bag</h4>
                                        <p className="small">tk: 650.00</p>
                
                                    </div>
                                </div>
                            </div>
                
                            <div className="col-lg-3 col-md-6">
                                <div className="product-top">
                                    <img src="bag1.jpg" className="mb-3 img-fluid" alt="">
                                    <div className="overlay-right">
                                        <button type="button" className="btn" title="Quick shop">
                                            <i className="fas fa-eye"></i>
                                        </button>
                                        <button type="button" className="btn" title="Add to wishlist">
                                            <i className="fas fa-heart"></i>
                                        </button>
                                        <button type="button" className="btn" title="Add to cart">
                                            <i className="fas fa-shopping-cart"></i>
                                        </button>
                                    </div>
                
                                    <div className="product-review text-center">
                                        <i className=" fas fa-star "></i>
                                        <i className=" fas fa-star "></i>
                                        <i className=" fas fa-star "></i>
                                        <i className=" fas fa-star "></i>
                                        <i className=" fas fa-star-half "></i>
                                        <i className=" far fa-star"></i>
                                        <h4 className="small m-0 p-0">Golden Bag</h4>
                                        <p className="small">tk: 2,150.00</p>
                
                                    </div>
                                </div>
                            </div>
                
                        </div> */}
      </section>
      {/* <!-- product description --> */}
    </div>
  );
};

export default Products;
