import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import "../../MyOrder/MyOrder.css";
import ManageOrder from "./ManageOrder";
const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/manageOrders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  });
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
        const uri = `http://localhost:5000/manageOrders/${id}`;
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
              <h2>Total Orders: - {orders.length}</h2>
            </div>
          </div>
        </section>
        {/* <!-- on sale section --> */}
        <div className="row ">
          {orders.map((order) => (
            <ManageOrder
              key={order._id}
              order={order}
              handleDelete={handleDelete}
            ></ManageOrder>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
