import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Servicios() {
  const [venezuelaCheck, setVenezuelaCheck] = useState(false);

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Servicios diferenciados según tu ubicación, con total transparencia sobre alcances y limitaciones.</p>
        </div>
      </section>

      {/* Terapia Clínica Venezuela */}
      <section id="terapia" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-verde-50 border-2 border-verde-200 rounded-2xl p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-verde-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">Solo Venezuela</div>
            <span className="text-sm text-gray-500">Servicio regulado por normativa venezolana</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Terapia Psicológica Clínica</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Disponible únicamente para personas ubicadas físicamente en Venezuela. Nuestros psicólogos cuentan con licencia vigente en Venezuela y están habilitados para ofrecer diagnóstico y tratamiento clínico.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Incluye:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-verde-500 font-bold">&#10003;</span>Evaluación psicológica inicial</li>
                <li className="flex items-start gap-2"><span className="text-verde-500 font-bold">&#10003;</span>Diagnóstico clínico</li>
                <li className="flex items-start gap-2"><span className="text-verde-500 font-bold">&#10003;</span>Plan de tratamiento personalizado</li>
                <li className="flex items-start gap-2"><span className="text-verde-500 font-bold">&#10003;</span>Psicoterapia individual</li>
                <li className="flex items-start gap-2"><span className="text-verde-500 font-bold">&#10003;</span>Terapia de pareja</li>
                <li className="flex items-start gap-2"><span className="text-verde-500 font-bold">&#10003;</span>Seguimiento y evolución del proceso</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Marco Regulatorio:</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Ley de Ejercicio de la Psicología de Venezuela</li>
                <li>Código de Ética del Psicólogo de Venezuela</li>
                <li>Federación de Psicólogos de Venezuela (FPV)</li>
                <li>Profesionales con número de colegiatura verificable</li>
              </ul>
            </div>
          </div>

          {/* Checkbox obligatorio */}
          <div className="bg-white rounded-xl p-6 border border-verde-200">
            <h3 className="font-semibold mb-3">Para agendar terapia clínica:</h3>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={venezuelaCheck} onChange={e => setVenezuelaCheck(e.target.checked)} className="mt-1 w-5 h-5 accent-verde-500" />
              <span className="text-sm text-gray-700">Declaro que me encuentro físicamente en Venezuela y entiendo que este servicio de terapia clínica solo está disponible para personas en territorio venezolano.</span>
            </label>
            <div className="mt-4">
              <button disabled={!venezuelaCheck} className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition ${venezuelaCheck ? 'bg-verde-500 hover:bg-verde-600 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
                Agendar Terapia Clínica
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Acompañamiento Emocional */}
      <section id="acompanamiento" className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-full">EE.UU. e Internacional</div>
            <span className="text-sm text-gray-500">Disponible para hispanohablantes en todo el mundo</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Acompañamiento Emocional y Orientación Psicoeducativa</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Este servicio está orientado al bienestar emocional, crecimiento personal y orientación psicoeducativa. No sustituye atención psiquiátrica o psicológica clínica.
          </p>

          {/* Lo que NO es */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-amber-900 mb-3">Importante - Este servicio NO es:</h3>
            <ul className="space-y-2 text-sm text-amber-800">
              <li className="flex items-start gap-2"><span className="font-bold">&#10007;</span>No es psicoterapia ni tratamiento clínico</li>
              <li className="flex items-start gap-2"><span className="font-bold">&#10007;</span>No incluye diagnóstico de trastornos mentales</li>
              <li className="flex items-start gap-2"><span className="font-bold">&#10007;</span>No sustituye atención psiquiátrica o psicológica clínica</li>
              <li className="flex items-start gap-2"><span className="font-bold">&#10007;</span>No es un servicio de emergencias o crisis</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Incluye:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-verde-500 font-bold">&#10003;</span>Orientación para el bienestar emocional</li>
                <li className="flex items-start gap-2"><span className="text-verde-500 font-bold">&#10003;</span>Herramientas de crecimiento personal</li>
                <li className="flex items-start gap-2"><span className="text-verde-500 font-bold">&#10003;</span>Manejo de estrés y ansiedad cotidiana</li>
                <li className="flex items-start gap-2"><span className="text-verde-500 font-bold">&#10003;</span>Acompañamiento en transiciones de vida</li>
                <li className="flex items-start gap-2"><span className="text-verde-500 font-bold">&#10003;</span>Orientación en relaciones interpersonales</li>
                <li className="flex items-start gap-2"><span className="text-verde-500 font-bold">&#10003;</span>Psicoeducación y recursos de autoayuda</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Ideal para:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-verde-500 font-bold">&#10003;</span>Hispanohablantes en EE.UU.</li>
                <li className="flex items-start gap-2"><span className="text-verde-500 font-bold">&#10003;</span>Personas en proceso migratorio</li>
                <li className="flex items-start gap-2"><span className="text-verde-500 font-bold">&#10003;</span>Quienes buscan crecimiento personal</li>
                <li className="flex items-start gap-2"><span className="text-verde-500 font-bold">&#10003;</span>Parejas que desean mejorar su comunicación</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link to="/consentimiento" className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition">
              Leer Consentimiento Informado
            </Link>
            <Link to="/contacto" className="bg-verde-500 hover:bg-verde-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition">
              Solicitar Acompañamiento
            </Link>
          </div>
        </div>
      </section>

      {/* Nota sobre licencias EE.UU. */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-gray-500">
            Estamos en proceso de obtención de licencias en EE.UU. para poder ofrecer servicios de psicología clínica en estados específicos.
            Mientras tanto, nuestros servicios internacionales se limitan a acompañamiento emocional y orientación psicoeducativa.
          </p>
        </div>
      </section>
    </div>
  );
}
