import React, { useEffect, useState } from "react";
import Navigation2 from "../../Navigation/Navigation2";
import Hotdeals from "../OnSale/Hotdeals";
import OnSale from "../OnSale/OnSale";
import "../OnSale/OnSale.css";
import Trending from "../OnSale/Trending";

const Explore = () => {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        setSales(data);
      });
  }, []);
  const trending = sales.filter((sale) => sale.category === "trending");
  const hotdeals = sales.filter((sale) => sale.category === "hotdeals");
  const vagitables = sales.filter((sale) => sale.category === "vagitables");
  return (
    <div>
      <Navigation2></Navigation2>
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
          <div className="container">
            <div class="row p-3 mb-4">
              <div class="col-lg-12">
                <h5 class="mb-2 text-muted category-title">Trending </h5>
              </div>{" "}
              {trending.map((sale) => (
                <OnSale key={sale._id} sale={sale}></OnSale>
              ))}
            </div>
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
              <div className="container">
                <div class="row p-3 mb-4">
                  <div class="col-lg-12">
                    <h5 class="mb-2 text-muted category-title">Hotdeal </h5>
                  </div>{" "}
                  {/* <!-- on sale section --> */}
                  {hotdeals.map((sale) => (
                    <Trending key={sale._id} sale={sale}></Trending>
                  ))}
                </div>
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
              <div className="container">
                <div class="row p-3 mb-4">
                  <div class="col-lg-12">
                    <h5 class="mb-2 text-muted category-title">Vagitables</h5>
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
    </div>
  );
};

export default Explore;
