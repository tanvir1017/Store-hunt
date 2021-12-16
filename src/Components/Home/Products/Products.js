import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import Navigation2 from "../../Navigation/Navigation2";
import "./Product.css";

const Products = () => {
  const { id } = useParams();
  console.log(id);
  const [singleProduct, setSingleProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data);
        console.log(data);
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
      <section class="product-slider">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
                data-intervel="2000"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={img} class="d-block w-100" alt="..." />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>

            <div class="col-md-7 text-start">
              <p class="new-arrival text-center">{condition}</p>
              <h3>{title}</h3>
              <p>Product Code: {pcode}</p>

              <Rating
                className="text-dark"
                initialRating={rating}
                emptySymbol=" fas fa-star-half-alt"
                fullSymbol="fas fa-star"
                readonly
              />

              <p class="price"> USD ${price}</p>
              <p>
                <b>Avilavility:</b> <span className="ms-2">{avilavility}</span>
              </p>
              <p>
                <b>Condition:</b> <span className="ms-2">{condition}</span>
              </p>
              <p>
                <b>Brand:</b> <span className="ms-2">{brand}</span>
              </p>
              <label>
                <b>Quantity:</b>
              </label>
              <input className="ms-2" type="number" placeholder="Item" />

              <button class="btn ml-5 mystyle ms-3 ">
                <i class="text-white mr-2 fas fa-shopping-cart"></i> Add to Cart
              </button>
              <button class="btn ml-2 mystyle ms-3 ">
                <i class="text-white mr-2 fas fa-shopping-basket"></i> Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- product slider start --> */}

      {/* <!-- product description --> */}
      <section class="product-description mt-5 text-start">
        <div class="container">
          <h5 class="font-weight-bold large mb-5 text-start">
            Product Description
          </h5>
          <p>
            {description}
            {description}
          </p>
          <p>{description}</p>
          <hr class="hr-style" />
        </div>

        {/* <!-- on sale section -->
                <section id="on-sale">
                    <div class="container">
                        <div class="title-box">
                            <h2>Realeted Product</h2>
                        </div>
                    </div>
                
                </section>
                <!-- on sale section -->
                
                <!-- featured section start here -->
                <div id="features-section">
                    <div class="container">
                        <div class="row border p-3 mb-4">
                            <div class="col-lg-12">
                                <h5 class="mb-2 text-muted ml-5">All you nedd in here</h5>
                
                            </div>
                
                            <div class="col-lg-3 col-md-6 ">
                                <div class="product-top">
                                    <img src="1 watch.jpg" class="mb-3 img-fluid" alt="">
                                    <div class="overlay-right">
                                        <button type="button" class="btn" title="Quick shop">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                        <button type="button" class="btn" title="Add to wishlist">
                                            <i class="fas fa-heart"></i>
                                        </button>
                                        <button type="button" class="btn" title="Add to cart">
                                            <i class="fas fa-shopping-cart"></i>
                                        </button>
                                    </div>
                
                                    <div class="product-review text-center">
                                        <i class=" fas fa-star "></i>
                                        <i class=" fas fa-star "></i>
                                        <i class=" fas fa-star "></i>
                                        <i class=" fas fa-star "></i>
                                        <i class=" fas fa-star-half "></i>
                                        <i class=" far fa-star"></i>
                                        <h4 class="small m-0 p-0">Fitness Watch</h4>
                                        <p class="small">tk: 900.00</p>
                
                                    </div>
                                </div>
                            </div>
                
                            <div class="col-lg-3 col-md-6">
                                <div class="product-top">
                                    <img src="2 shirt.jpg" class="mb-3 img-fluid" alt="">
                                    <div class="overlay-right">
                                        <button type="button" class="btn" title="Quick shop">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                        <button type="button" class="btn" title="Add to wishlist">
                                            <i class="fas fa-heart"></i>
                                        </button>
                                        <button type="button" class="btn" title="Add to cart">
                                            <i class="fas fa-shopping-cart"></i>
                                        </button>
                                    </div>
                
                                    <div class="product-review text-center">
                                        <i class=" fas fa-star "></i>
                                        <i class=" fas fa-star "></i>
                                        <i class=" fas fa-star "></i>
                                        <i class=" fas fa-star "></i>
                                        <i class=" fas fa-star-half "></i>
                                        <i class=" far fa-star"></i>
                                        <h4 class="small m-0 p-0">Shirt Package</h4>
                                        <p class="small">tk: 100.00</p>
                
                                    </div>
                                </div>
                            </div>
                
                            <div class="col-lg-3 col-md-6">
                                <div class="product-top">
                                    <img src="bag2.jpg" class="mb-3 img-fluid" alt="">
                                    <div class="overlay-right">
                                        <button type="button" class="btn" title="Quick shop">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                        <button type="button" class="btn" title="Add to wishlist">
                                            <i class="fas fa-heart"></i>
                                        </button>
                                        <button type="button" class="btn" title="Add to cart">
                                            <i class="fas fa-shopping-cart"></i>
                                        </button>
                                    </div>
                
                                    <div class="product-review text-center">
                                        <i class=" fas fa-star "></i>
                                        <i class=" fas fa-star "></i>
                                        <i class=" fas fa-star "></i>
                                        <i class=" fas fa-star "></i>
                                        <i class=" fas fa-star-half "></i>
                                        <i class=" far fa-star"></i>
                                        <h4 class="small m-0 p-0">Black Bag</h4>
                                        <p class="small">tk: 650.00</p>
                
                                    </div>
                                </div>
                            </div>
                
                            <div class="col-lg-3 col-md-6">
                                <div class="product-top">
                                    <img src="bag1.jpg" class="mb-3 img-fluid" alt="">
                                    <div class="overlay-right">
                                        <button type="button" class="btn" title="Quick shop">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                        <button type="button" class="btn" title="Add to wishlist">
                                            <i class="fas fa-heart"></i>
                                        </button>
                                        <button type="button" class="btn" title="Add to cart">
                                            <i class="fas fa-shopping-cart"></i>
                                        </button>
                                    </div>
                
                                    <div class="product-review text-center">
                                        <i class=" fas fa-star "></i>
                                        <i class=" fas fa-star "></i>
                                        <i class=" fas fa-star "></i>
                                        <i class=" fas fa-star "></i>
                                        <i class=" fas fa-star-half "></i>
                                        <i class=" far fa-star"></i>
                                        <h4 class="small m-0 p-0">Golden Bag</h4>
                                        <p class="small">tk: 2,150.00</p>
                
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
