import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const HomeProduct = () => {
  const [homeProducts, setHomeProducts] = useState([]);
  const size = 8;
  useEffect(() => {
    fetch(`http://localhost:5000/product?size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setHomeProducts(data);
      });
  }, []);
  return (
    <div id="features-section">
      <div className="container">
        <div className="row p-3 mb-4">
          {homeProducts.map((sale) => (
            <Product key={sale._id} sale={sale}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
