import React, { useEffect, useState } from "react";
import Navigation2 from "../../Navigation/Navigation2";
import LastPart from "../LastPart/LastPart";
import OnSale from "../OnSale/OnSale";
import "../OnSale/OnSale.css";
import "./Explore.css";

const Explore = () => {
  const [num, setNum] = useState(0);
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    fetch("https://desolate-taiga-27947.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => {
        setDisplay(data);
      });
  }, [num]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSearch = (e) => {
    const searchValue = e.target.value;

    const findData = display.filter((sale) => sale.name.includes(searchValue));
    setDisplay(findData);
    setNum(num + 1);
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
              onChange={handleSearch}
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
              <h2>Available </h2>
            </div>
          </div>
        </section>
        {/* <!-- on sale section --> */}
        <div id="features-section">
          <div className="container">
            <div className="row p-3 mb-4">
              <div className="col-lg-12">
                <h5 className="mb-2 text-muted category-title">On Sale </h5>
              </div>{" "}
              {display.map((sale) => (
                <OnSale key={sale._id} sale={sale}></OnSale>
              ))}
            </div>
          </div>
        </div>
      </>
      <LastPart></LastPart>
    </div>
  );
};

export default Explore;
