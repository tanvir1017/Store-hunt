import React, { useEffect, useState } from "react";
import Navigation2 from "../../Navigation/Navigation2";
import Hotdeals from "../OnSale/Hotdeals";
import OnSale from "../OnSale/OnSale";
import "../OnSale/OnSale.css";
import Trending from "../OnSale/Trending";
import "./Explore.css";

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
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Navigation2></Navigation2>
      <div className="row banner_sec">
        <div className="col-lg-12 container d-flex align-items-center justify-content-center col-sm-12 search">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="shadow"
              placeholder="&#xF002; Search"
              style={{ fontFamily: "Arial, FontAwesome" }}
            />
            <button className="shadow search_button" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <>
        {/* <!-- on sale section --> */}
        <section id="on-sale">
          <div className="container">
            <div className="title-box">
              <h2>Trending</h2>
            </div>
          </div>
        </section>
        {/* <!-- on sale section --> */}
        <div id="features-section">
          <div className="container">
            <div className="row p-3 mb-4">
              <div className="col-lg-12">
                <h5 className="mb-2 text-muted category-title">Trending </h5>
              </div>{" "}
              {trending.map((sale) => (
                <OnSale key={sale._id} sale={sale}></OnSale>
              ))}
            </div>
            {/* <!-- on sale section --> */}
            <section id="on-sale mb-2">
              <div className="container">
                <div className="title-box">
                  <h2>Hot-Deals</h2>
                </div>
              </div>
            </section>
            {/* <!-- hot deals section --> */}
            <div id="features-section">
              <div className="container">
                <div className="row p-3 mb-4">
                  <div className="col-lg-12">
                    <h5 className="mb-2 text-muted category-title">Hotdeal </h5>
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
              <div className="container">
                <div className="title-box">
                  <h2>On-Sale</h2>
                </div>
              </div>
            </section>
            {/* <!-- on sale section --> */}
            <div id="features-section">
              <div className="container">
                <div className="row p-3 mb-4">
                  <div className="col-lg-12">
                    <h5 className="mb-2 text-muted category-title">
                      Vagitables
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
    </div>
  );
};

export default Explore;
