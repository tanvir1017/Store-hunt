import React, { useEffect, useState } from "react";
import Hotdeals from "./Hotdeals";
import OnSale from "./OnSale";
import "./OnSale.css";
import Trending from "./Trending";

const OnSaleProduct = () => {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSales(data);
      });
  }, []);
  const trending = sales.filter((sale) => sale.category === "trending");
  const hotdeals = sales.filter((sale) => sale.category === "hotdeals");
  const vagitables = sales.filter((sale) => sale.category === "vagitables");

  return (
    <>
      {/* <!-- on sale section --> */}
      <section id="on-sale">
        <div class="container">
          <div class="title-box">
            <h2>On-Sale</h2>
          </div>
        </div>
      </section>
      {/* <!-- on sale section --> */}
      <div id="features-section">
        <div class="container">
          <div class="row p-3 mb-4">
            <div class="col-lg-12">
              <h5 class="mb-2 text-muted category-title">Trending </h5>
            </div>{" "}
            {trending.map((sale) => (
              <OnSale key={sale._id} sale={sale}></OnSale>
            ))}
            {/* <!-- on sale section --> */}
            <section id="on-sale mb-2">
              <div class="container">
                <div class="title-box">
                  <h2>Hot-Deals</h2>
                </div>
              </div>
            </section>
            {/* <!-- hot deals section --> */}
            <div id="features-section">
              <div class="row p-3 mb-4">
                <div class="col-lg-12">
                  <h5 class="mb-2 text-muted category-title">
                    {hotdeals[0].category}{" "}
                  </h5>
                </div>{" "}
                {/* <!-- on sale section --> */}
                {hotdeals.map((sale) => (
                  <Trending key={sale._id} sale={sale}></Trending>
                ))}
              </div>
            </div>
            {/* <!-- on sale section --> */}
            <section id="on-sale">
              <div class="container">
                <div class="title-box">
                  <h2>On-Sale</h2>
                </div>
              </div>
            </section>
            {/* <!-- on sale section --> */}
            <div id="features-section">
              <div class="row p-3 mb-4">
                <div class="col-lg-12">
                  <h5 class="mb-2 text-muted category-title">
                    {vagitables[0].category}{" "}
                  </h5>
                </div>{" "}
                {vagitables.map((sale) => (
                  <Hotdeals key={sale._id} sale={sale}></Hotdeals>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnSaleProduct;
