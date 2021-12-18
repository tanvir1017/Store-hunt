import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import Navigation2 from "../Navigation/Navigation2";
import Order from "./Order";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/order?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user.email]);
  return (
    <div>
      <Navigation2 />
      <div className="container">
        {/* <!-- on sale section --> */}
        <section id="on_sale">
          <div className="container">
            <div className="title-box">
              <h2>Your orders: - {orders.length}</h2>
            </div>
          </div>
        </section>
        {/* <!-- on sale section --> */}
        <div className="row ">
          {orders.map((order) => (
            <Order key={order._id} order={order}></Order>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
