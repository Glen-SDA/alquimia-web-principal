import { Link } from 'react-router-dom';

const steps = [
  { step: '1', title: 'Identifica tu servicio', desc: 'Si estás en Venezuela, puedes acceder a terapia psicológica clínica. Si estás en EE.UU. u otro país, ofrecemos coaching de vida.' },
  { step: '2', title: 'Lee el consentimiento informado', desc: 'Antes de agendar, deberás leer y aceptar nuestro consentimiento informado donde se detallan los alcances, limitaciones, confidencialidad y jurisdicción del servicio.' },
  { step: '3', title: 'Completa la verificación', desc: 'Para terapia clínica (Venezuela), deberás confirmar tu ubicación física. Para coaching de vida, confirmar que entiendes el alcance del servicio.' },
  { step: '4', title: 'Agenda tu primera sesión', desc: 'Elige el profesional y horario que prefieras. Tu primera sesión incluye una evaluación inicial para entender tus necesidades.' },
  { step: '5', title: 'Inicia tu proceso', desc: 'Recibe acompañamiento continuo con sesiones regulares, seguimiento de progreso y recursos complementarios.' },
];

const faqs = [
  { q: '¿Cuál es la diferencia entre terapia clínica y coaching de vida?', a: 'La terapia clínica incluye diagnóstico y tratamiento de trastornos mentales por un profesional licenciado. Solo está disponible para pacientes en Venezuela. El coaching de vida es acompañamiento profesional para el bienestar emocional y crecimiento personal, sin diagnóstico ni tratamiento clínico.' },
  { q: '¿Por qué la terapia clínica solo está disponible para Venezuela?', a: 'Nuestros psicólogos tienen licencia vigente en Venezuela. Las leyes de telepsicología requieren que el profesional esté licenciado en la jurisdicción donde se encuentra el paciente. Estamos en proceso de obtener licencias en EE.UU.' },
  { q: '¿Las sesiones son confidenciales?', a: 'Sí. Seguimos protocolos alineados con HIPAA y mantenemos estricta confidencialidad. Las excepciones se detallan en nuestro consentimiento informado.' },
  { q: '¿Qué pasa si estoy en crisis?', a: 'Este servicio no está diseñado para atender emergencias. Si te encuentras en crisis o riesgo inmediato, contacta los servicios locales de emergencia de tu país.' },
  { q: '¿Cómo son las sesiones?', a: 'Las sesiones son por videollamada en una plataforma segura. Duran entre 45-60 minutos y se agendan según disponibilidad del profesional.' },
  { q: '¿Puedo cancelar una sesión?', a: 'Sí, con al menos 24 horas de anticipación sin costo. Cancelaciones tardías o inasistencias pueden generar un cargo según nuestra política de cancelación.' },
];

export default function ComoFunciona() {
  return (
    <div>
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Cómo Funciona</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Un proceso simple, transparente y ético desde el primer contacto.</p>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-8">
          {steps.map(s => (
            <div key={s.step} className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-verde-500 text-white rounded-full flex items-center justify-center text-lg font-bold shrink-0">{s.step}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-verde-500 transition list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-verde-500 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h2>
        <p className="text-gray-600 mb-8">Revisa el consentimiento informado y agenda tu primera sesión.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/consentimiento" className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition">Consentimiento Informado</Link>
          <Link to="/contacto" className="bg-verde-500 hover:bg-verde-600 text-white px-6 py-3 rounded-xl font-semibold transition">Contactar</Link>
        </div>
      </section>
    </div>
  );
}
