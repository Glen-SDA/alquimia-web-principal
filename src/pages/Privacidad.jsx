export default function Privacidad() {
  return (
    <div>
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Política de Privacidad</h1>
          <p className="text-gray-300">Última actualización: Febrero 2026</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-verde-50 border border-verde-200 rounded-xl p-6 mb-8">
          <p className="text-sm text-verde-800 font-medium">
            Alquimia Mental Online LLC se compromete a proteger la privacidad de sus usuarios. Esta política describe cómo recopilamos, usamos y protegemos su información personal, siguiendo protocolos alineados con HIPAA.
          </p>
        </div>

        <div className="space-y-8 text-sm text-gray-600">

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Datos que Recopilamos</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Información personal:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Nombre completo</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono (opcional)</li>
                  <li>País y ciudad de residencia</li>
                  <li>Edad o fecha de nacimiento</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Información del servicio:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Historial de sesiones (fechas y duración)</li>
                  <li>Notas clínicas (solo terapia clínica, acceso restringido al profesional tratante)</li>
                  <li>Formularios de consentimiento firmados</li>
                  <li>Preferencias de servicio</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Datos técnicos:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Dirección IP</li>
                  <li>Tipo de navegador y dispositivo</li>
                  <li>Datos de uso de la plataforma</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Uso de la Información</h2>
            <p className="mb-2">Utilizamos la información recopilada para:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Prestar y mejorar nuestros servicios</li>
              <li>Comunicarnos con el usuario sobre sus sesiones y servicios</li>
              <li>Verificar la ubicación del usuario para determinar el tipo de servicio disponible</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
              <li>Proteger la seguridad del usuario y la integridad de la plataforma</li>
            </ul>
            <p className="mt-3 font-medium text-gray-800">NO vendemos, alquilamos ni compartimos información personal con terceros para fines de marketing.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Protección de Datos</h2>
            <p className="mb-2">Implementamos medidas de seguridad alineadas con los estándares HIPAA, incluyendo:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cifrado de datos en tránsito (SSL/TLS) y en reposo</li>
              <li>Acceso restringido a la información personal y clínica</li>
              <li>Autenticación segura para acceso a la plataforma</li>
              <li>Copias de seguridad regulares y cifradas</li>
              <li>Capacitación del personal en protección de datos</li>
              <li>Auditorías periódicas de seguridad</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Transferencia Internacional de Datos</h2>
            <p>Dado que operamos desde Estados Unidos y prestamos servicios a usuarios en Venezuela y otros países, los datos personales pueden ser transferidos y almacenados en servidores ubicados en Estados Unidos. Al utilizar nuestros servicios, el usuario consiente esta transferencia. Nos comprometemos a mantener el mismo nivel de protección independientemente de la ubicación del almacenamiento.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cookies</h2>
            <p className="mb-2">Utilizamos cookies para:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento de la plataforma (sesión, autenticación)</li>
              <li><strong>Cookies analíticas:</strong> Para comprender el uso de la plataforma y mejorar la experiencia (pueden desactivarse)</li>
            </ul>
            <p className="mt-2">No utilizamos cookies de publicidad ni de seguimiento de terceros.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Derechos del Usuario</h2>
            <p className="mb-2">Usted tiene derecho a:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Acceso:</strong> Solicitar una copia de los datos personales que tenemos sobre usted</li>
              <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos</li>
              <li><strong>Eliminación:</strong> Solicitar la eliminación de sus datos personales (sujeto a obligaciones legales de retención)</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado</li>
              <li><strong>Oposición:</strong> Oponerse al procesamiento de sus datos para ciertos fines</li>
              <li><strong>Restricción:</strong> Solicitar la limitación del procesamiento de sus datos</li>
            </ul>
            <p className="mt-3">Para ejercer estos derechos, contacte: <span className="text-verde-500 font-medium">privacidad@alquimiamental.online</span></p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Retención de Datos</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Datos de cuenta: mientras la cuenta esté activa y hasta 3 años después de la inactividad</li>
              <li>Notas clínicas (Venezuela): según la normativa venezolana aplicable (mínimo 5 años)</li>
              <li>Registros de consentimiento: 7 años después de la última interacción</li>
              <li>Datos técnicos: máximo 12 meses</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Menores de Edad</h2>
            <p>Nuestros servicios están dirigidos a personas mayores de 18 años. No recopilamos intencionalmente datos de menores. Si un menor requiere servicios, debe contar con la autorización y participación de un representante legal.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Cambios a esta Política</h2>
            <p>Nos reservamos el derecho de actualizar esta política. Los cambios significativos serán notificados por correo electrónico a los usuarios activos con al menos 30 días de anticipación.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contacto</h2>
            <p>Para consultas sobre privacidad:</p>
            <ul className="mt-2 space-y-1">
              <li><strong>Email:</strong> <span className="text-verde-500">privacidad@alquimiamental.online</span></li>
              <li><strong>Empresa:</strong> Alquimia Mental Online LLC</li>
              <li><strong>Jurisdicción:</strong> Estado de Florida, EE.UU.</li>
            </ul>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-xs text-gray-400 text-center">
            <p>Alquimia Mental Online LLC - Registrada en el Estado de Florida, EE.UU.</p>
            <p>Última actualización: Febrero 2026</p>
          </div>
        </div>
      </section>
    </div>
  );
}
