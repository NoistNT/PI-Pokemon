import { Landing, Home, Detail } from './views/index'
import { Route, Routes, useLocation } from 'react-router-dom'
import Error404 from './components/Error404/Error404'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {
  const { pathname } = useLocation()

  return (
    <div className='App'>
      {pathname !== '/' && <Navbar />}

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/pokemon' element={<Home />} />
        <Route path='/pokemon/:id' element={<Detail />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
