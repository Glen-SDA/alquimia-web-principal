const posts = [
  {
    title: '5 Herramientas para Manejar la Ansiedad en el Día a Día',
    excerpt: 'Estrategias prácticas basadas en evidencia para reducir los niveles de ansiedad cotidiana y recuperar tu tranquilidad.',
    category: 'Bienestar Emocional',
    date: '10 Feb 2026',
  },
  {
    title: 'Comunicación Asertiva: La Clave para Relaciones Saludables',
    excerpt: 'Aprende a expresar tus necesidades de forma clara y respetuosa, mejorando tus relaciones personales y profesionales.',
    category: 'Relaciones',
    date: '5 Feb 2026',
  },
  {
    title: 'El Proceso Migratorio y la Salud Emocional',
    excerpt: 'Cómo cuidar tu bienestar emocional durante las transiciones de vida que implica la migración.',
    category: 'Psicoeducación',
    date: '28 Ene 2026',
  },
  {
    title: '¿Qué es el Acompañamiento Emocional?',
    excerpt: 'Entiende la diferencia entre terapia clínica y acompañamiento emocional, y cómo cada uno puede ayudarte.',
    category: 'Educación',
    date: '20 Ene 2026',
  },
  {
    title: 'Mindfulness para Principiantes: Guía Práctica',
    excerpt: 'Introducción a las técnicas de atención plena y cómo integrarlas en tu rutina diaria para reducir el estrés.',
    category: 'Bienestar Emocional',
    date: '15 Ene 2026',
  },
  {
    title: 'Señales de que Necesitas Apoyo Profesional',
    excerpt: 'Aprende a identificar cuándo es momento de buscar ayuda profesional para tu salud emocional.',
    category: 'Psicoeducación',
    date: '8 Ene 2026',
  },
];

const categoryColors = {
  'Bienestar Emocional': 'bg-verde-50 text-verde-700',
  'Relaciones': 'bg-pink-50 text-pink-700',
  'Psicoeducación': 'bg-blue-50 text-blue-700',
  'Educación': 'bg-amber-50 text-amber-700',
};

export default function Blog() {
  return (
    <div>
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog Psicoeducativo</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Recursos y artículos para tu bienestar emocional. Contenido educativo, no clínico.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-10 text-center">
          <p className="text-sm text-amber-800">
            Este contenido es de carácter psicoeducativo e informativo. No constituye consejo médico, diagnóstico ni tratamiento profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition group cursor-pointer">
              <div className="bg-gradient-to-br from-verde-500 to-verde-700 h-40 flex items-center justify-center">
                <span className="text-5xl text-white/30 font-extrabold">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>{post.category}</span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-verde-500 transition">{post.title}</h3>
                <p className="text-gray-600 text-sm">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
