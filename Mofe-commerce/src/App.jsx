import { Routes, Route } from 'react-router'
import { axios } from 'axios'
import { HomePage } from './Pages/HomePage'
import { CheckOutPage } from './Pages/CheckOutPage'
import './App.css'
import { Orderpage } from './Pages/OrderPage';
import { useEffect, useState } from 'react';

function App() {
  // const [count, setCount] = useState(0)

    const [cart, setCart] = useState([])

    useEffect ( ()=> {
        axios.get('http://localhost:3000/api/cart-items').then((response) => {
        setCart(response.data)
      })
    })



  return (
    <>



      <Routes>

        <Route path="/" element={<HomePage cart={cart} />}></Route>

        <Route path="/checkout" element={<CheckOutPage  cart={cart} />}> </Route>

        <Route path="/order" element={<Orderpage />}> </Route>

      </Routes>
    </>

      
  );
}

export default App
