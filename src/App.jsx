import { Route, Routes, useLocation } from 'react-router-dom'

import { Landing, Home, Detail } from './views/index'
import Error404 from './components/Error404/Error404'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import CreatePokemon from './views/CreatePokemon/CreatePokemon'
import './App.css'

function App() {
  const { pathname } = useLocation()

  return (
    <div className="App">
      {pathname !== '/' && <Navbar />}

      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Home />} path="/pokemon" />
        <Route element={<Detail />} path="/pokemon/:id" />
        <Route element={<CreatePokemon />} path="/create" />
        <Route element={<Error404 />} path="*" />
      </Routes>

      {pathname !== '/' && <Footer />}
    </div>
  )
}

export default App
