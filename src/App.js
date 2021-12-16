import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Explore from "./Components/Home/Explore/Explore";
import Home from "./Components/Home/Home/Home";
import LastPart from "./Components/Home/LastPart/LastPart";
import Products from "./Components/Home/Products/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/product/:id" element={<Products />}></Route>
        </Routes>
        <LastPart />
      </BrowserRouter>
    </div>
  );
}

export default App;
