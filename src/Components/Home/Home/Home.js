import React from "react";
import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
import HomeProduct from "../HomeProduct/HomeProduct";
import LastPart from "../LastPart/LastPart";
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
      <LastPart />
    </div>
  );
};

export default Home;
