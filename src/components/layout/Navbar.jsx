import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const BOOKING_URL = import.meta.env.VITE_RESERVAS_URL || 'https://alquimia-mental-reservas-1.onrender.com/booking';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/equipo', label: 'Nuestro Equipo' },
  { to: '/como-funciona', label: 'Cómo Funciona' },
  { to: '/blog', label: 'Blog' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Alquimia Mental Online" className="h-12 w-auto" />
            <div className="leading-tight">
              <span className="text-sm sm:text-lg font-bold text-gray-900">Alquimia Mental Online</span>
              <span className="hidden sm:block text-xs text-verde-500">Bienestar emocional profesional</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {links.map(l => (
              <Link key={l.to} to={l.to} className={`text-sm font-medium transition ${pathname === l.to ? 'text-verde-500' : 'text-gray-600 hover:text-verde-500'}`}>
                {l.label}
              </Link>
            ))}
            <a href={BOOKING_URL} className="bg-verde-500 hover:bg-verde-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition">
              Agendar Cita
            </a>
          </div>

          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 space-y-1">
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className={`block py-2.5 px-3 rounded-lg text-sm font-medium ${pathname === l.to ? 'bg-verde-50 text-verde-500' : 'text-gray-600 hover:bg-gray-50'}`}>
                {l.label}
              </Link>
            ))}
            <a href={BOOKING_URL} onClick={() => setOpen(false)} className="block text-center bg-verde-500 text-white py-2.5 rounded-lg text-sm font-semibold mt-2">
              Agendar Cita
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
