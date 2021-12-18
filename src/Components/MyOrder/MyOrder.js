import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import useAuth from "../Hooks/useAuth";
import Order from "./Order";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      `https://desolate-taiga-27947.herokuapp.com/order?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user.email]);
  // Delete Api
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this order!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const uri = `https://desolate-taiga-27947.herokuapp.com/order/${id}`;
        fetch(uri, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              swal("Poof! Your order has been deleted!", {
                icon: "success",
              });
              const remaining = orders.filter((order) => order._id !== id);
              setOrders(remaining);
            }
          });
      } else {
        swal("Your order is safe!");
      }
    });
  };
  return (
    <div>
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
            <Order
              key={order._id}
              order={order}
              handleDelete={handleDelete}
            ></Order>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
