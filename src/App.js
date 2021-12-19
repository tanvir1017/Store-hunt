import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Components/Context/AuthProvider/AuthProvider";
import AddProduct from "./Components/Dashboard/AddProduct/AddProduct";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import ManageOrders from "./Components/Dashboard/ManageOrders/ManageOrders";
import ManageProducts from "./Components/Dashboard/ManageProducts/ManageProducts";
import Explore from "./Components/Home/Explore/Explore";
import Home from "./Components/Home/Home/Home";
import Products from "./Components/Home/Products/Products";
import MyOrder from "./Components/MyOrder/MyOrder";
import AdminRoute from "./Components/Private/AdminRoute";
import PrivateRoute from "./Components/Private/PrivateRoute";
import Login from "./Components/Registation/Login";
import Registation from "./Components/Registation/Registation";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route
              path="/explore"
              element={
                <PrivateRoute>
                  <Explore />{" "}
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/product/:id"
              element={
                <PrivateRoute>
                  <Products />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />{" "}
                </PrivateRoute>
              }
            >
              <Route path={`/dashboard/myOrders`} element={<MyOrder />} />
              <Route
                path={`/dashboard/manageProducts`}
                element={<ManageProducts />}
              />
              <Route
                path={`/dashboard/mangeOrders`}
                element={<ManageOrders />}
              />
              <Route
                path={`/dashboard/makeAdmin`}
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              />
              <Route path={`/dashboard/addProduct`} element={<AddProduct />} />
            </Route>
            <Route path="/registation" element={<Registation />}></Route>
            <Route path="/logIn" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
