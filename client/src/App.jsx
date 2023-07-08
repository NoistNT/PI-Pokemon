import { Landing, Pokemon, Detail } from './views/index'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {
  const { pathname } = useLocation()
  return (
    <div className='App'>
      {pathname !== '/' && <Navbar />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/pokemon' element={<Pokemon />} />
        <Route path='/pokemon/:id' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
