import { Link } from 'react-router-dom';

const LEGAL_NOTICE = "Alquimia Mental Online LLC es una empresa registrada en el Estado de Florida, Estados Unidos. Los servicios de terapia psicológica clínica se ofrecen exclusivamente a personas ubicadas físicamente en Venezuela y son prestados por profesionales con licencia vigente en Venezuela. Los servicios ofrecidos fuera de Venezuela corresponden a coaching de vida, y no constituyen psicoterapia, diagnóstico ni tratamiento de trastornos mentales.";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Legal Notice */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="bg-gray-800/50 rounded-xl p-6">
            <h3 className="text-white text-sm font-semibold mb-3">Aviso Legal</h3>
            <p className="text-xs leading-relaxed text-gray-400">{LEGAL_NOTICE}</p>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Alquimia Mental Online" className="h-10 w-auto" />
              <span className="text-white font-bold">Alquimia Mental Online</span>
            </div>
            <p className="text-sm">Bienestar emocional profesional para hispanohablantes.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/servicios#terapia" className="hover:text-verde-400 transition">Terapia Clínica (Venezuela)</Link></li>
              <li><Link to="/servicios#coaching" className="hover:text-verde-400 transition">Coaching de Vida</Link></li>
              <li><Link to="/grupos-terapeuticos" className="hover:text-verde-400 transition">Grupos Terapéuticos</Link></li>
              <li><Link to="/como-funciona" className="hover:text-verde-400 transition">Cómo Funciona</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/equipo" className="hover:text-verde-400 transition">Nuestro Equipo</Link></li>
              <li><Link to="/blog" className="hover:text-verde-400 transition">Blog Psicoeducativo</Link></li>
              <li><Link to="/contacto" className="hover:text-verde-400 transition">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/consentimiento" className="hover:text-verde-400 transition">Consentimiento Informado</Link></li>
              <li><Link to="/terminos" className="hover:text-verde-400 transition">Términos y Condiciones</Link></li>
              <li><Link to="/privacidad" className="hover:text-verde-400 transition">Política de Privacidad</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">Alquimia Mental Online LLC &copy; {new Date().getFullYear()} - Todos los derechos reservados</p>
          <p className="text-xs">Registrada en el Estado de Florida, EE.UU.</p>
        </div>
      </div>

      {/* Crisis Banner */}
      <div className="bg-red-900/30 border-t border-red-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-center">
          <p className="text-xs text-red-300">
            <strong>Si se encuentra en crisis o riesgo inmediato:</strong> Este servicio no atiende emergencias. Contacte servicios locales de emergencia o líneas de crisis de su país.
          </p>
        </div>
      </div>
    </footer>
  );
}
