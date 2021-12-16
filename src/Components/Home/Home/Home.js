import React from "react";
import Carousel from "../Carousel/Carousel";
import LastPart from "../LastPart/LastPart";
import OnSaleProduct from "../OnSale/OnSaleProduct";
import OurService from "../OurService/OurService";

const Home = () => {
  return (
    <div>
      <Carousel />
      <OnSaleProduct />

      <OurService />
      <LastPart />
    </div>
  );
};

export default Home;
