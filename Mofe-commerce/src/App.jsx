import { Routes, Route } from 'react-router'
import { HomePage } from './Pages/HomePage'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        
        <Route path="/checkout" element={<div>Money Must be Made </div>}></Route>
      </Routes>
    </>

      
  )
}

export default App
