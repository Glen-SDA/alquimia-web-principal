import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Equipo from './pages/Equipo';
import ComoFunciona from './pages/ComoFunciona';
import Consentimiento from './pages/Consentimiento';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import Terminos from './pages/Terminos';
import Privacidad from './pages/Privacidad';
import GruposTerapeuticos from './pages/GruposTerapeuticos';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/consentimiento" element={<Consentimiento />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/grupos-terapeuticos" element={<GruposTerapeuticos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
