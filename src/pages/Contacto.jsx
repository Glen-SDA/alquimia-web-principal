import { useState } from 'react';

export default function Contacto() {
  const [form, setForm] = useState({ name: '', email: '', location: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Estamos aquí para responder tus preguntas y ayudarte a comenzar.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
            {submitted ? (
              <div className="bg-verde-50 border border-verde-200 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">&#10003;</div>
                <h3 className="text-xl font-bold text-verde-700 mb-2">Mensaje enviado</h3>
                <p className="text-gray-600">Te contactaremos dentro de las próximas 24-48 horas hábiles.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                  <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-500 focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-500 focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">¿En qué país te encuentras?</label>
                  <input type="text" required value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-500 focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Servicio de interés</label>
                  <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-500 focus:border-transparent outline-none">
                    <option value="">Seleccionar...</option>
                    <option value="terapia-venezuela">Terapia Clínica (estoy en Venezuela)</option>
                    <option value="coaching">Coaching de Vida (fuera de Venezuela)</option>
                    <option value="parejas">Herramienta de Parejas</option>
                    <option value="info">Información general</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea rows={4} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-500 focus:border-transparent outline-none resize-none" />
                </div>
                <button type="submit" className="w-full bg-verde-500 hover:bg-verde-600 text-white py-3 rounded-lg font-semibold transition">
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Información</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">Empresa</h3>
                  <p className="text-gray-600 text-sm">Alquimia Mental Online LLC</p>
                  <p className="text-gray-500 text-xs">Registrada en el Estado de Florida, EE.UU.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-verde-500 text-sm">contacto@alquimiamental.online</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">Horario de Atención</h3>
                  <p className="text-gray-600 text-sm">Lunes a Viernes: 9:00 AM - 7:00 PM (EST)</p>
                  <p className="text-gray-500 text-xs">Sábados: 9:00 AM - 1:00 PM (EST)</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">Tiempo de Respuesta</h3>
                  <p className="text-gray-600 text-sm">24-48 horas hábiles</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-semibold text-red-800 mb-2">Emergencias</h3>
              <p className="text-sm text-red-700">
                Este formulario NO es para emergencias. Si se encuentra en crisis o riesgo inmediato, contacte los servicios de emergencia de su país.
              </p>
              <ul className="text-sm text-red-600 mt-2 space-y-1">
                <li><strong>Venezuela:</strong> 0800-SALUD (72583)</li>
                <li><strong>EE.UU.:</strong> 988 o 911</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
