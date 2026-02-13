import { useState } from 'react';

export default function Consentimiento() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div>
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Consentimiento Informado</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Lea este documento completamente antes de solicitar cualquier servicio.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-gray max-w-none">

          <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 mb-8">
            <p className="text-sm text-verde-800 font-medium">
              Alquimia Mental Online LLC requiere que todos los usuarios lean y acepten este consentimiento informado antes de acceder a cualquier servicio.
            </p>
          </div>

          <div className="space-y-8">
            {/* 1 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Alcance de los Servicios</h2>
              <div className="text-gray-600 space-y-3 text-sm">
                <p><strong>Terapia Psicológica Clínica (Venezuela):</strong> Este servicio es prestado exclusivamente a personas ubicadas físicamente en Venezuela por profesionales con licencia vigente en dicho país. Incluye evaluación, diagnóstico y tratamiento psicológico dentro del marco regulatorio venezolano.</p>
                <p><strong>Acompañamiento Emocional (Internacional):</strong> Este servicio consiste en orientación psicoeducativa y apoyo emocional. NO constituye psicoterapia, diagnóstico ni tratamiento de trastornos mentales. Está disponible para hispanohablantes en EE.UU. y otros países.</p>
              </div>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Limitaciones del Servicio</h2>
              <ul className="text-gray-600 space-y-2 text-sm list-disc pl-5">
                <li>Los servicios se ofrecen mediante plataformas de telecomunicación (videollamada) y están sujetos a limitaciones tecnológicas.</li>
                <li>El acompañamiento emocional NO sustituye atención psiquiátrica, psicológica clínica ni tratamiento farmacológico.</li>
                <li>Los resultados del proceso dependen de múltiples factores, incluyendo la participación activa del usuario.</li>
                <li>El profesional puede referir al usuario a otros especialistas si lo considera necesario.</li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Confidencialidad</h2>
              <div className="text-gray-600 space-y-3 text-sm">
                <p>Toda la información compartida durante las sesiones es estrictamente confidencial. Los profesionales se adhieren a los códigos éticos de su jurisdicción.</p>
                <p><strong>Excepciones a la confidencialidad:</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Riesgo inminente de daño para el usuario o terceros</li>
                  <li>Sospecha de abuso o negligencia de menores o personas vulnerables</li>
                  <li>Orden judicial que lo requiera</li>
                  <li>Cuando el usuario otorgue autorización expresa por escrito</li>
                </ul>
              </div>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Protocolo en Crisis</h2>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <p className="text-sm text-red-800 font-medium">
                  Este servicio NO está diseñado para atender emergencias. Si usted se encuentra en crisis, con pensamientos suicidas o en riesgo inmediato, contacte los servicios locales de emergencia de su país:
                </p>
                <ul className="text-sm text-red-700 mt-3 space-y-1">
                  <li><strong>Venezuela:</strong> 0800-SALUD (72583)</li>
                  <li><strong>EE.UU.:</strong> 988 (Suicide & Crisis Lifeline) o 911</li>
                  <li><strong>Internacional:</strong> Contacte el número de emergencias local</li>
                </ul>
              </div>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Política de Cancelación</h2>
              <div className="text-gray-600 space-y-2 text-sm">
                <p>Las sesiones pueden cancelarse o reprogramarse con un mínimo de <strong>24 horas de anticipación</strong> sin cargo alguno.</p>
                <p>Cancelaciones con menos de 24 horas de anticipación o inasistencias sin aviso podrán generar un cargo equivalente al 50% del valor de la sesión.</p>
                <p>Alquimia Mental Online LLC se reserva el derecho de cancelar o reprogramar sesiones por causas de fuerza mayor, en cuyo caso se ofrecerá una reprogramación sin costo.</p>
              </div>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Jurisdicción Legal</h2>
              <div className="text-gray-600 space-y-2 text-sm">
                <p><strong>Plataforma:</strong> Alquimia Mental Online LLC está registrada en el Estado de Florida, Estados Unidos. Cualquier disputa relacionada con la plataforma se regirá por las leyes del Estado de Florida.</p>
                <p><strong>Terapia Clínica:</strong> Los servicios de terapia clínica para pacientes en Venezuela se rigen adicionalmente por la Ley de Ejercicio de la Psicología de Venezuela y los códigos éticos aplicables.</p>
              </div>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Grabación de Sesiones</h2>
              <p className="text-gray-600 text-sm">Queda estrictamente prohibida la grabación de las sesiones (audio, video o captura de pantalla) sin el consentimiento previo y por escrito de ambas partes. La violación de esta política puede resultar en la terminación inmediata del servicio.</p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Aceptación</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="text-sm text-gray-600 mb-4">Al marcar la casilla a continuación, declaro que:</p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6 list-disc pl-5">
                  <li>He leído y comprendido completamente este consentimiento informado</li>
                  <li>Entiendo el alcance y las limitaciones del servicio que estoy solicitando</li>
                  <li>Acepto las condiciones descritas en este documento</li>
                  <li>Proporcionaré información veraz sobre mi ubicación y condición</li>
                </ul>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={accepted} onChange={e => setAccepted(e.target.checked)} className="mt-1 w-5 h-5 accent-verde-500" />
                  <span className="text-sm font-medium text-gray-800">Acepto el consentimiento informado de Alquimia Mental Online LLC</span>
                </label>
                <div className="mt-4">
                  <button disabled={!accepted} className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition ${accepted ? 'bg-verde-500 hover:bg-verde-600 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
                    Continuar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-xs text-gray-400 text-center">
            <p>Última actualización: Febrero 2026</p>
            <p>Alquimia Mental Online LLC - Florida, EE.UU.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
