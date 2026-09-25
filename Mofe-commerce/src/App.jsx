import { Routes, Route } from "react-router";
import axios from "axios";
import { HomePage } from "./Pages/home/HomePage";
import { CheckOutPage } from "../src/Pages/checkout/CheckOutPage";
import "./App.css";
import { Orderpage } from "../src/Pages/checkout/OrderPage";
import { useEffect, useState } from "react";

function App() {

  const [cart, setCart] = useState([]);



  const fetchCart = async () => {
    const response = await axios.get(
      "/api/cart-items?expand=product",
    );
    setCart(response.data);
  }


  useEffect(() => {
    fetchCart();
  }, []);

  // useEffect(() => {
  //   axios.get("/api/cart-items?expand=product")
  //     .then((response) => {
  //       setCart(response.data);
  //     });
  // }, []);

  let totalQuantity = 0;//Accumulator

  cart.forEach((cartList) => {
    
    totalQuantity = totalQuantity + cartList.quantity;
  });


  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage cart={cart} totalQuantity={totalQuantity}  fetchCart={fetchCart}/>}
        ></Route>

        <Route
          path="/checkout"
          element={<CheckOutPage cart={cart} totalQuantity={totalQuantity} fetchCart={fetchCart}/>}
        >
          {" "}
        </Route>

        <Route path="/order" element={<Orderpage />}>
          {" "}
        </Route>
      </Routes>
    </>
  );
}

export default App;
