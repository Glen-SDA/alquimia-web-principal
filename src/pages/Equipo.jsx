import { useState } from 'react';

const BOOKING_URL = 'https://alquimia-mental-reservas-1.onrender.com/booking';

const team = [
  {
    name: 'Lisandra Pozo Vásquez',
    title: 'Psicóloga Clínica | Máster en Coaching y PNL | Especialista en Psiconeuroinmunología',
    license: 'Venezuela',
    colegiatura: 'FPV V-015028',
    services: ['Terapia Clínica (Venezuela)', 'Acompañamiento Emocional (Internacional)'],
    specialties: ['Ansiedad', 'Duelo Migratorio', 'Conflictos de Familia', 'Cáncer'],
    bio: 'Lisandra Pozo Vásquez es Psicóloga Clínica, Máster en Coaching y PNL, y Especialista en Psiconeuroinmunología, con 28 años de experiencia profesional acompañando procesos de transformación personal. Atiende a niños a partir de los 8 años, adolescentes y adultos en el abordaje de depresión, ansiedad, duelos —incluido el duelo migratorio—, conflictos de pareja y familia, así como trastornos de la conducta alimentaria y procesos asociados al cáncer. Su enfoque integrativo incorpora herramientas como la biodescodificación emocional y el trabajo de corte y reprogramación de programas ancestrales, promoviendo bienestar profundo y equilibrio emocional.',
    statement: 'Licenciada para ejercer psicología clínica en Venezuela',
    image: '/Lisandra.jpg',
    thumbnail: '/Lisandra_2.jpg',
  },
  {
    name: 'José Manuel Ferrer Caridad',
    title: 'Psicólogo Clínico | Psicofisiólogo Forense | Coach Organizacional',
    license: 'Venezuela',
    colegiatura: 'FPV 4829',
    services: ['Terapia Clínica (Venezuela)', 'Acompañamiento Emocional (Internacional)'],
    specialties: ['Depresión', 'Estrés', 'Orientación vocacional', 'Selección y reclutamiento'],
    bio: 'José Manuel Ferrer Caridad es Psicólogo Clínico, Psicofisiólogo Forense y Coach Organizacional con más de 25 años de experiencia profesional en el ámbito clínico, forense y corporativo. Atiende a adolescentes y adultos en evaluación, diagnóstico y tratamiento de ansiedad, depresión y estrés, además de brindar orientación vocacional y acompañamiento en la construcción de proyectos de vida. Su trayectoria incluye la elaboración de perfiles psicológicos, investigación criminal, procesos de selección y reclutamiento, así como el diseño y facilitación de cursos y talleres especializados.',
    statement: 'Licenciado para ejercer psicología clínica en Venezuela',
    image: '/Jose.jpg',
    thumbnail: '/Jose_2.jpg',
  },
  {
    name: 'Vicky Boscán',
    title: 'Psicóloga Clínica | Coach Organizacional | Especialista en Sexología y Psiconeuroinmunología Lingüística',
    license: 'Venezuela',
    colegiatura: 'FPV V-015069',
    services: ['Terapia Clínica (Venezuela)', 'Acompañamiento Emocional (Internacional)'],
    specialties: ['Sexología y Terapia de Parejas', 'Bienestar, equilibrio y Calidad de vida', 'Éxito y Autorrealización', 'Adicciones Modernas'],
    bio: 'Vicky Boscán es Psicóloga Clínica y Coach Organizacional con 25 años de experiencia profesional, especializada en Sexología y Psiconeuroinmunología Lingüística, así como en el desarrollo de competencias personales y profesionales. Acompaña a niños, adolescentes y adultos en el abordaje de trastornos del neurodesarrollo, ansiedad, depresión, trastornos de la personalidad, manejo de emociones, adicciones modernas y relación con la alimentación, promoviendo autoestima y el diseño de un proyecto de vida sólido. Su enfoque integral también incluye terapia de pareja, rehabilitación en enfermedades psicosomáticas y fortalecimiento del bienestar, el equilibrio, la calidad de vida, el éxito y la autorrealización.',
    statement: 'Licenciada para ejercer psicología clínica en Venezuela',
    image: '/Vicky.jpg',
    thumbnail: '/Vicky_2.jpg',
  },
];

export default function Equipo() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div>
      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-3xl w-full">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300 transition"
              aria-label="Cerrar"
            >
              &times;
            </button>
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.name}
              className="w-full rounded-xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 font-semibold text-lg">{selectedPhoto.name}</p>
          </div>
        </div>
      )}

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
              {/* Foto del profesional - thumbnail con clic para ver completa */}
              <div
                className="bg-gradient-to-br from-verde-500 to-verde-700 h-56 flex items-center justify-center overflow-hidden cursor-pointer group relative"
                onClick={() => setSelectedPhoto(member)}
              >
                {member.thumbnail ? (
                  <>
                    <img src={member.thumbnail} alt={member.name} className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition text-sm font-semibold bg-black/50 px-3 py-1.5 rounded-full">Ver foto</span>
                    </div>
                  </>
                ) : (
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-4xl text-white font-bold">{member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-verde-500 font-medium text-sm mb-3">{member.title}</p>

                {/* Biografía */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

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
                <div className="mb-4">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Especialidades:</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {member.specialties.map(s => (
                      <span key={s} className="bg-verde-50 text-verde-700 text-xs px-2.5 py-1 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>

                <a href={BOOKING_URL} className="block w-full text-center bg-verde-500 hover:bg-verde-600 text-white py-2.5 rounded-lg font-semibold text-sm transition">
                  Reservar con {member.name.split(' ')[0]}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
          <p className="text-sm text-gray-500">
            Todos nuestros profesionales son psicólogos con licencia vigente en Venezuela, verificable a través de la Federación de Psicólogos de Venezuela (FPV).
          </p>
        </div>
      </section>
    </div>
  );
}
