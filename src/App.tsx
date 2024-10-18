import { Route, Routes, useLocation } from 'react-router-dom'

import './App.css'
import Error404 from './components/Error404/Error404'
import Footer from './components/Footer/Footer'
import CreatePokemon from './views/CreatePokemon/CreatePokemon'
import { Home, Landing } from './views/index'

function App() {
  const { pathname } = useLocation()

  return (
    <div className="App">
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Home />} path="/pokemon" />
        <Route element={<CreatePokemon />} path="/create" />
        <Route element={<Error404 />} path="*" />
      </Routes>

      {pathname !== '/' && <Footer />}
    </div>
  )
}

export default App
