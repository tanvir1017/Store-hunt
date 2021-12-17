import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Components/Context/AuthProvider/AuthProvider";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Explore from "./Components/Home/Explore/Explore";
import Home from "./Components/Home/Home/Home";
import LastPart from "./Components/Home/LastPart/LastPart";
import Products from "./Components/Home/Products/Products";
import MyOrder from "./Components/MyOrder/MyOrder";
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
              path="/myOrders"
              element={
                <PrivateRoute>
                  <MyOrder />
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
            ></Route>
            <Route path="/registation" element={<Registation />}></Route>
            <Route path="/logIn" element={<Login />}></Route>
          </Routes>
          <LastPart />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
