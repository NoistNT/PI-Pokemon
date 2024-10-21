import { Route, Routes, useLocation } from 'react-router-dom'

import Error404 from '@/components/Error404/Error404'
import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/Navbar/Navbar'
import { CreatePokemon, Detail, Home, Landing } from '@/views/index'

import './App.css'

function App() {
  const { pathname } = useLocation()

  return (
    <div className="App">
      {pathname !== '/' && <NavBar />}
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
