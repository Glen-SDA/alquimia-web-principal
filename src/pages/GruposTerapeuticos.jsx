import { Link } from 'react-router-dom';

const BOOKING_URL = 'https://alquimia-mental-reservas-1.onrender.com/booking';

const groups = [
  {
    name: 'Sanación de Heridas del Pasado',
    icon: '🌿',
    description: 'Las experiencias dolorosas del pasado pueden seguir afectando tu presente sin que lo notes. En este grupo trabajamos juntos para identificar, procesar y sanar esas heridas, desarrollando herramientas para gestionar emociones y construir relaciones más sanas. Aquí encontrarás comprensión genuina, acompañamiento profesional y la fuerza colectiva de quienes también están en ese camino.',
  },
  {
    name: 'Amor Propio y Relaciones Saludables',
    icon: '💛',
    description: 'La relación más importante de tu vida es la que tienes contigo mismo. A través de dinámicas grupales, ejercicios de reflexión y actividades creativas, explorarás los fundamentos de tu autoestima, aprenderás a conocerte en profundidad, a amarte incondicionalmente y a establecer límites saludables que protejan tu bienestar en todas tus relaciones.',
  },
  {
    name: 'Autorregulación Emocional',
    icon: '🧘',
    description: 'Gestionar lo que sientes no es reprimir tus emociones — es aprender a habitarlas sin que te dominen. En este grupo desarrollarás habilidades prácticas a través de respiración consciente, mindfulness, meditación guiada y visualización, y crearás tu propio plan personal de autorregulación. El apoyo mutuo del grupo potencia cada aprendizaje.',
  },
  {
    name: 'Soy Narcisista',
    icon: '🪞',
    description: 'El primer paso hacia el cambio es reconocer los patrones que nos distancian de los demás y de nosotros mismos. Este grupo está diseñado para personas con rasgos de personalidad narcisista que desean desarrollar mayor autoconciencia, comprender el impacto de sus comportamientos y construir relaciones más auténticas y satisfactorias — en un espacio sin juicio, orientado al crecimiento real.',
  },
  {
    name: 'TDAH',
    icon: '⚡',
    description: 'Vivir con TDAH puede ser agotador cuando el mundo no está diseñado para tu mente. En Alquimia Mental hemos creado un espacio terapéutico grupal donde aprenderás a manejar tus síntomas, fortalecer tus habilidades sociales y desarrollar estrategias prácticas para la vida diaria — junto a personas que realmente entienden lo que vives.',
  },
  {
    name: 'Libertad y Plenitud',
    tag: 'Para personas neurodivergentes',
    icon: '🌈',
    description: 'Ser neurodivergente no es una limitación — es una forma diferente y valiosa de percibir el mundo. Este grupo te ayudará a entender tu propio estilo de aprendizaje y comunicación, a potenciar tus capacidades únicas y a alcanzar todo tu potencial, profesional y personal, desde un lugar de aceptación y fortaleza.',
  },
  {
    name: 'Superando las Pérdidas',
    icon: '🕊️',
    description: 'Perder a alguien o algo significativo puede cambiar el mundo tal como lo conocías. Este grupo terapéutico es un espacio seguro para procesar el duelo, identificar y gestionar las emociones que surgen, y encontrar un nuevo camino hacia adelante — con acompañamiento profesional y el apoyo de personas que han transitado experiencias similares.',
  },
];

const myths = [
  { myth: '"Voy a tener que contar toda mi vida"', truth: 'Participar es completamente voluntario. Hablas cuando estás listo.' },
  { myth: '"Me van a juzgar"', truth: 'El respeto y la confidencialidad son las reglas fundamentales del grupo.' },
  { myth: '"Me sentiré peor escuchando los problemas de otros"', truth: 'Escuchar a otros con retos similares reduce tu aislamiento y fortalece tu autoestima.' },
  { myth: '"Los grupos no dan resultados"', truth: 'Tendrás acceso a más respuestas y perspectivas que en una consulta individual.' },
];

const benefits = [
  'Aprende estrategias de afrontamiento reales de personas que las han aplicado con éxito.',
  'Reduce la sensación de aislamiento — descubres que tus preocupaciones son más comunes de lo que crees.',
  'Fortalece tu confianza y autoestima a través del enfoque colectivo.',
  'Recibe herramientas prácticas de autocuidado y manejo del estrés.',
  'Mantén la esperanza y el optimismo rodeándote de personas en proceso de recuperación.',
  'Desarrolla habilidades de escucha empática e interacción saludable.',
  'Todo lo compartido en el grupo es estrictamente confidencial.',
];

export default function GruposTerapeuticos() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Grupos Terapéuticos</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">La fuerza colectiva como motor de transformación personal.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">El poder de sanar en comunidad</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Los grupos terapéuticos son una herramienta poderosa y a menudo subestimada. Ya sea que busques apoyo para manejar ansiedad, depresión, duelo, adicciones u otras situaciones de salud mental, unirte a un grupo terapéutico puede ser uno de los pasos más transformadores en tu proceso de sanación.
          </p>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600 leading-relaxed">
            A diferencia de los grupos de apoyo informales, nuestros grupos son dirigidos por especialistas en salud mental que guían cada sesión con propósito y estructura. El terapeuta reúne a personas con experiencias similares y les proporciona herramientas ajustadas a las necesidades que surgen en el momento.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Lo que hace únicos a los grupos terapéuticos es la fuerza colectiva: escuchar a otros con retos similares reduce el aislamiento, amplía tus perspectivas y crea una red de apoyo genuina que va más allá de lo que ofrece una consulta individual. En Alquimia Mental, nuestros grupos online están disponibles para ti, estés donde estés.
          </p>
        </div>
      </section>

      {/* Group Cards */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Nuestros Grupos</h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">Encuentra el espacio que mejor se adapte a tu momento de vida.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map(g => (
              <div key={g.name} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition flex flex-col">
                <div className="text-3xl mb-3">{g.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{g.name}</h3>
                {g.tag && (
                  <span className="inline-block bg-verde-50 text-verde-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-3 w-fit">{g.tag}</span>
                )}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mt-2">{g.description}</p>
                <a href={BOOKING_URL} className="mt-5 block text-center bg-verde-500 hover:bg-verde-600 text-white py-2.5 rounded-lg font-semibold text-sm transition">
                  Inscribirme
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Myths */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Mitos sobre los grupos terapéuticos</h2>
        <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
          Muchas personas creen que los grupos de apoyo son incómodos, inútiles o vergonzosos. Temen ser juzgadas, tener que "contar su vida" o sentirse peor al escuchar los problemas de otros. La realidad es diferente: un grupo bien dirigido es un espacio de respeto, confidencialidad y apoyo genuino — donde nadie está obligado a hablar hasta que esté listo, y donde el simple acto de sentirte acompañado puede ser profundamente liberador.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {myths.map(m => (
            <div key={m.myth} className="bg-white rounded-xl border border-gray-200 p-5">
              <p className="text-sm font-semibold text-red-500 mb-2 line-through decoration-red-300">{m.myth}</p>
              <p className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-verde-500 font-bold mt-0.5 shrink-0">&#10003;</span>
                {m.truth}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-verde-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Beneficios de un grupo terapéutico</h2>
          <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            Un grupo terapéutico es mucho más que compartir experiencias — es un espacio donde aprendes habilidades reales de vida. En un ambiente seguro y sin juicios, podrás expresar tus emociones, aprender estrategias de afrontamiento, descubrir que no estás solo en tus dificultades y crecer a través de la perspectiva colectiva.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {benefits.map(b => (
              <div key={b} className="flex items-start gap-3 bg-white rounded-xl p-4">
                <span className="text-verde-500 font-bold mt-0.5 shrink-0">&#10003;</span>
                <p className="text-sm text-gray-700">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we organize */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Cómo nos organizamos</h2>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          <div className="text-center bg-gray-50 rounded-2xl p-6">
            <div className="text-3xl font-extrabold text-verde-500 mb-2">6-12</div>
            <p className="text-sm text-gray-600">Participantes por grupo</p>
          </div>
          <div className="text-center bg-gray-50 rounded-2xl p-6">
            <div className="text-3xl font-extrabold text-verde-500 mb-2">1-2h</div>
            <p className="text-sm text-gray-600">Duración por sesión</p>
          </div>
          <div className="text-center bg-gray-50 rounded-2xl p-6">
            <div className="text-3xl font-extrabold text-verde-500 mb-2">12</div>
            <p className="text-sm text-gray-600">Semanas de programa</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="font-bold text-gray-900 mb-4">Estructura de cada sesión:</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-verde-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Bienvenida</p>
                <p className="text-xs text-gray-500">A cargo del terapeuta facilitador</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-verde-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Espacio personal</p>
                <p className="text-xs text-gray-500">Tiempo para cada participante</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-verde-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Discusión grupal</p>
                <p className="text-xs text-gray-500">Sobre el tema de la semana</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-verde-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Cierre reflexivo</p>
                <p className="text-xs text-gray-500">Integración y compromisos</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">La puntualidad, la empatía y el respeto son los pilares de nuestra comunidad. La confidencialidad es un principio fundamental e innegociable.</p>
          </div>
        </div>

        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p className="text-sm text-amber-800">
            <strong>Recomendación:</strong> Complementar la terapia grupal con sesiones individuales para maximizar los resultados.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-verde-500 to-verde-700 text-white py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Tu proceso de transformación comienza aquí</h2>
          <p className="text-verde-100 mb-8">Únete a un grupo y descubre el poder de sanar en comunidad.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={BOOKING_URL} className="inline-block bg-white text-verde-600 px-8 py-3.5 rounded-xl font-semibold text-lg hover:bg-gray-100 transition shadow-lg">
              Inscribirme
            </a>
            <Link to="/contacto" className="inline-block bg-verde-600 hover:bg-verde-800 text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition border border-verde-400">
              Consultar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
