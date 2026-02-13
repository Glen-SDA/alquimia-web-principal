const team = [
  {
    name: 'Dra. María González',
    title: 'Psicóloga Clínica',
    license: 'Venezuela',
    colegiatura: 'FPV-12345',
    services: ['Terapia Clínica (Venezuela)', 'Acompañamiento Emocional (Internacional)'],
    specialties: ['Terapia cognitivo-conductual', 'Ansiedad y depresión', 'Terapia de pareja'],
    statement: 'Licenciada para ejercer psicología clínica en Venezuela',
    image: null,
  },
  {
    name: 'Lic. Carlos Rodríguez',
    title: 'Psicólogo Clínico',
    license: 'Venezuela',
    colegiatura: 'FPV-67890',
    services: ['Terapia Clínica (Venezuela)', 'Acompañamiento Emocional (Internacional)'],
    specialties: ['Psicología positiva', 'Manejo de estrés', 'Desarrollo personal'],
    statement: 'Licenciado para ejercer psicología clínica en Venezuela',
    image: null,
  },
  {
    name: 'Dra. Ana Martínez',
    title: 'Psicóloga Clínica',
    license: 'Venezuela',
    colegiatura: 'FPV-11223',
    services: ['Terapia Clínica (Venezuela)', 'Acompañamiento Emocional (Internacional)'],
    specialties: ['Trauma y duelo', 'Terapia sistémica', 'Relaciones familiares'],
    statement: 'Licenciada para ejercer psicología clínica en Venezuela',
    image: null,
  },
];

export default function Equipo() {
  return (
    <div>
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nuestro Equipo</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Profesionales licenciados comprometidos con tu bienestar emocional.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map(member => (
            <div key={member.colegiatura} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
              {/* Avatar placeholder */}
              <div className="bg-gradient-to-br from-verde-500 to-verde-700 h-48 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl text-white font-bold">{member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-verde-500 font-medium text-sm mb-4">{member.title}</p>

                {/* License info */}
                <div className="bg-verde-50 border border-verde-200 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-500 text-xs block">País de licencia</span>
                      <span className="font-semibold">{member.license}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs block">Colegiatura</span>
                      <span className="font-semibold">{member.colegiatura}</span>
                    </div>
                  </div>
                  <p className="text-xs text-verde-700 mt-2 font-medium">{member.statement}</p>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Servicios que ofrece:</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {member.services.map(s => (
                      <span key={s} className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Especialidades:</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {member.specialties.map(s => (
                      <span key={s} className="bg-verde-50 text-verde-700 text-xs px-2.5 py-1 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
          <p className="text-sm text-gray-500">
            Todos nuestros profesionales son psicólogos con licencia vigente en Venezuela, verificable a través de la Federación de Psicólogos de Venezuela (FPV).
            Los nombres y números de colegiatura mostrados son ejemplos y serán actualizados con la información real de cada profesional.
          </p>
        </div>
      </section>
    </div>
  );
}
