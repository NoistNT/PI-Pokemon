import { Landing, Home, Detail } from './views/index'
import { Route, Routes, useLocation } from 'react-router-dom'
import Error404 from './components/Error404/Error404'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import CreatePokemon from './views/CreatePokemon/CreatePokemon'
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
        <Route path='/create' element={<CreatePokemon />} />
        <Route path='*' element={<Error404 />} />
      </Routes>

      {pathname !== '/' && <Footer />}
    </div>
  )
}

export default App
