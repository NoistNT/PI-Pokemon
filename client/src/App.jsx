import { Landing, Pokemon, Detail } from './views/index'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/pokemon' element={<Pokemon />} />
        <Route path='/pokemon/:id' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
