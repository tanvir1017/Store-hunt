import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import ManageProduct from "./ManageProduct";

const ManageProducts = () => {
  const [manageProducts, setManageProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        setManageProducts(data);
      });
  }, []);
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
        const uri = `http://localhost:5000/product/${id}`;
        fetch(uri, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              swal("Poof! Your order has been deleted!", {
                icon: "success",
              });
              const remaining = manageProducts.filter(
                (manageProduct) => manageProduct._id !== id
              );
              setManageProducts(remaining);
            }
          });
      } else {
        swal("Your order is safe!");
      }
    });
  };
  return (
    <div id="features-section">
      <div className="container">
        <div className="row p-3 mb-4">
          {manageProducts.map((manageProduct) => (
            <ManageProduct
              key={manageProduct._id}
              manageProduct={manageProduct}
              handleDelete={handleDelete}
            ></ManageProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
