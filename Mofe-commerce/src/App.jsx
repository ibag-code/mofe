import { Routes, Route } from 'react-router'
import { HomePage } from './Pages/HomePage'
import { CheckOutPage } from './Pages/CheckOutPage'
import './App.css'
import { Orderpage } from './Pages/OrderPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage />}></Route>

        <Route path="/checkout" element={<CheckOutPage />}> </Route>

        <Route path="/order" element={<Orderpage />}> </Route>

      </Routes>
    </>

      
  );
}

export default App
