import { Route, Routes, useLocation } from 'react-router';
import { Toaster } from 'sonner';

import { Error404 } from '@/components/Error404/Error404';
import { Footer } from '@/components/Footer/Footer';
import { NavBar } from '@/components/Navbar/Navbar';
import { CreatePokemon } from '@/views/CreatePokemon/CreatePokemon';
import { Detail } from '@/views/Detail/Detail';
import { Home } from '@/views/Home/Home';
import { Landing } from '@/views/Landing/Landing';

import './App.css';

export function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== '/' && <NavBar />}
      <Routes>
        <Route
          element={<Landing />}
          path="/"
        />
        <Route
          element={<Home />}
          path="/pokemon"
        />
        <Route
          element={<Detail />}
          path="/pokemon/:id"
        />
        <Route
          element={<CreatePokemon />}
          path="/create"
        />
        <Route
          element={<Error404 />}
          path="*"
        />
      </Routes>
      {pathname !== '/' && <Footer />}
      <Toaster closeButton />
    </div>
  );
}
