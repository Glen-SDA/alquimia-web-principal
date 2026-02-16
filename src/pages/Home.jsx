import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

const heroImages = ['/Hero01.png', '/Hero02.png', '/Hero03.png', '/Hero04.png', '/Hero05.png'];
const BOOKING_URL = import.meta.env.VITE_RESERVAS_URL || 'https://reservas.alquimiamental.online/booking';

export default function Home() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(i => (i + 1) % heroImages.length), []);
  const prev = useCallback(() => setCurrent(i => (i - 1 + heroImages.length) % heroImages.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div>
      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        {/* Carousel background */}
        {heroImages.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto pl-16 pr-16 sm:pl-24 sm:pr-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              ¡Tienes el poder de<br />
              <span className="text-verde-400">transformar tu vida!</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4 max-w-2xl">
              Estamos aquí para acompañarte en tu camino hacia una mente en equilibrio y plena felicidad.
            </p>
            <p className="text-sm text-gray-400 mb-8">Alquimia Mental Online LLC - Registrada en Florida, EE.UU.</p>
            <div className="flex gap-4 flex-wrap">
              <a href={BOOKING_URL} className="bg-verde-500 hover:bg-verde-600 text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition shadow-lg">
                Reserva Ahora
              </a>
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition" aria-label="Anterior">
          &#8249;
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition" aria-label="Siguiente">
          &#8250;
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition ${i === current ? 'bg-verde-400 scale-125' : 'bg-white/50 hover:bg-white/80'}`} aria-label={`Foto ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-3">Conéctate con nuestro equipo de profesionales altamente efectivos</h2>
          <p className="text-base sm:text-lg font-semibold mb-6" style={{ color: '#E91E63' }}>Adopta hoy una mentalidad más saludable y feliz</p>
          <p className="text-gray-600 text-base max-w-3xl mx-auto">En Alquimia Mental, creemos en el poder transformador de una mente equilibrada y plena. Nuestro compromiso con tu bienestar mental es el corazón de nuestra misión. Con un equipo altamente capacitado, ofrecemos servicios de salud mental superiores, combinando un enfoque enriquecedor y eficaz.</p>
        </div>
      </section>

      {/* Two Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Nuestros Servicios</h2>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">En Alquimia Mental, creemos en el poder transformador de una mente equilibrada y plena.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Terapia Venezuela */}
          <div className="border-2 border-verde-200 rounded-2xl p-8 hover:shadow-lg transition bg-verde-50/30">
            <div className="bg-verde-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">Solo Venezuela</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Terapia Psicológica Clínica</h3>
            <p className="text-gray-600 mb-4">Psicoterapia profesional prestada por psicólogos con licencia vigente en Venezuela, para pacientes ubicados físicamente en el país.</p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-start gap-2"><span className="text-verde-500 mt-0.5">&#10003;</span>Profesionales con colegiatura venezolana con más de 20 años de experiencia</li>
              <li className="flex items-start gap-2"><span className="text-verde-500 mt-0.5">&#10003;</span>Diagnóstico y tratamiento clínico</li>
              <li className="flex items-start gap-2"><span className="text-verde-500 mt-0.5">&#10003;</span>Terapia individual, de pareja, familias y grupos terapéuticos</li>
              <li className="flex items-start gap-2"><span className="text-verde-500 mt-0.5">&#10003;</span>Seguimiento continuo del proceso terapéutico</li>
            </ul>
            <Link to="/servicios#terapia" className="inline-block bg-verde-500 hover:bg-verde-600 text-white px-6 py-2.5 rounded-lg font-semibold transition text-sm">
              Más Información
            </Link>
          </div>

          {/* Acompañamiento Internacional */}
          <div className="border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
            <div className="bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">EE.UU. e Internacional</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Acompañamiento Emocional</h3>
            <p className="text-gray-600 mb-4">Orientación psicoeducativa y apoyo emocional para hispanohablantes. Enfocado en bienestar y crecimiento personal.</p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-start gap-2"><span className="text-verde-500 mt-0.5">&#10003;</span>Bienestar emocional y crecimiento personal</li>
              <li className="flex items-start gap-2"><span className="text-verde-500 mt-0.5">&#10003;</span>Orientación psicoeducativa</li>
              <li className="flex items-start gap-2"><span className="text-verde-500 mt-0.5">&#10003;</span>Manejo de estrés y transiciones de vida, biodescodificación y coaching emocional</li>
              <li className="flex items-start gap-2"><span className="text-verde-500 mt-0.5">&#10003;</span>Para hispanohablantes en cualquier país</li>
            </ul>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
              <p className="text-xs text-amber-800">Este servicio <strong>no constituye</strong> psicoterapia, diagnóstico ni tratamiento de trastornos mentales.</p>
            </div>
            <Link to="/servicios#acompanamiento" className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-semibold transition text-sm">
              Más Información
            </Link>
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-extrabold text-verde-500 mb-2">LLC</div>
              <p className="text-sm text-gray-600">Empresa registrada en Florida, EE.UU.</p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-verde-500 mb-2">100%</div>
              <p className="text-sm text-gray-600">Profesionales licenciados y verificados</p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-verde-500 mb-2">HIPAA</div>
              <p className="text-sm text-gray-600">Protocolos de privacidad alineados</p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-verde-500 mb-2">Ético</div>
              <p className="text-sm text-gray-600">Transparencia total en servicios</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Cómo Funciona</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: '1', title: 'Elige tu servicio', desc: 'Selecciona entre terapia clínica (Venezuela) o acompañamiento emocional (internacional).' },
            { step: '2', title: 'Completa el consentimiento', desc: 'Lee y acepta el consentimiento informado con toda la información sobre alcances y limitaciones.' },
            { step: '3', title: 'Inicia tu proceso', desc: 'Agenda tu primera sesión con un profesional calificado de nuestro equipo.' },
          ].map(s => (
            <div key={s.step} className="text-center">
              <div className="w-14 h-14 bg-verde-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/como-funciona" className="text-verde-500 hover:text-verde-600 font-semibold transition">Ver detalles completos &rarr;</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-verde-500 to-verde-700 text-white py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Creemos en tu capacidad de transformarte</h2>
          <p className="text-verde-100 mb-8">Nuestro equipo de profesionales está listo para acompañarte.</p>
          <a href={BOOKING_URL} className="inline-block bg-white text-verde-600 px-8 py-3.5 rounded-xl font-semibold text-lg hover:bg-gray-100 transition shadow-lg">
            Reserva Ahora
          </a>
        </div>
      </section>
    </div>
  );
}
