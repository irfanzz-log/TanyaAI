import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Hm from './pages/Hm';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hm' element={<Hm />} />
      </Routes>
    </>
  )
}

export default App
