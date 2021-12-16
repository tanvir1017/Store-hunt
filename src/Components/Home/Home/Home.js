import React from "react";
import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
import HomeProduct from "../HomeProduct/HomeProduct";
import OurService from "../OurService/OurService";

const Home = () => {
  return (
    <div>
      <Carousel />
      <HomeProduct />
      <div className="container-fluid" style={{ marginTop: "100px" }}>
        <Banner />
      </div>
      <OurService />
    </div>
  );
};

export default Home;
