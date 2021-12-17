import React, { useEffect, useState } from "react";
import Navigation2 from "../Navigation/Navigation2";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  // const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/order`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <Navigation2 />
      <h2>{orders.length}</h2>
    </div>
  );
};

export default MyOrder;
