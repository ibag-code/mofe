import { Routes, Route } from 'react-router'
import { HomePage } from './Pages/HomePage'
import { CheckOutPage } from './Pages/CheckOutPage'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage />}></Route>

        <Route path="/checkout" element={<CheckOutPage />}> </Route>

      </Routes>
    </>

      
  );
}

export default App
