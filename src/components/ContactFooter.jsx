import React from 'react';
import {
  PhoneCall,
  RotateCw,
  MessageCircle,
  MapPin
} from 'lucide-react';

const ContactFooter = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="bg-[#f5f6f8] py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#23262f] mb-4">¿Necesitas ayuda?</h2>
            <p className="text-lg text-gray-600">Conoce aquí nuestros canales de atención</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 flex items-start gap-6 shadow-sm">
              <div className="text-[#0e1654]">
                <PhoneCall size={40} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0e1654] mb-3">Líneas de atención</h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <p>+57 (601) 423 5757 | Nal: +57 01-8000-512620</p>
                  <p>Línea exclusiva de salud: +57 601 4235750 | Nal: +57 01-8000-515750</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 flex items-start gap-6 shadow-sm">
              <div className="text-[#0e1654]">
                <RotateCw size={40} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0e1654] mb-3">#247</h3>
                <p className="text-sm text-gray-700">
                  Marca desde tu celular opción 1-1 si requieres una asistencia o tienes una urgencia, estaremos disponibles las 24 horas.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 flex items-start gap-6 shadow-sm">
              <div className="text-[#0e1654]">
                <MessageCircle size={40} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0e1654] mb-3">Chat AXA COLPATRIA</h3>
                <p className="text-sm text-gray-700">
                  Chatea con nosotros. Lunes a viernes 7:00 a.m. a 8:00 p.m. Sábados 8:00 a.m. a 2:00 p.m.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-8 flex items-start gap-6 shadow-sm">
              <div className="text-[#0e1654]">
                <MapPin size={40} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0e1654] mb-3">Red de oficinas</h3>
                <p className="text-sm text-gray-700">
                  Conoce nuestra red de oficinas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#4C7BB8] text-white pt-12 pb-6 px-4 md:px-8 border-t border-[#4C7BB8]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 relative">

          {/* Vertical Logo Placeholder */}
          <div className="hidden md:flex flex-col items-center justify-start w-16 border-r border-white/20 pr-4 mr-4">
             <div className="h-64 w-8 bg-white/20 border border-white/40 flex items-center justify-center text-xs text-center transform -rotate-180" style={{ writingMode: 'vertical-rl' }}>
               VIGILADO SUPERINTENDENCIA FINANCIERA (Placeholder)
             </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {/* Column 1 */}
              <div>
                <h4 className="font-semibold text-lg mb-4">AXA COLPATRIA y tú</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li><a href="#" className="hover:underline">Sistema de atención al consumidor financiero</a></li>
                  <li><a href="#" className="hover:underline">Red de oficinas</a></li>
                  <li><a href="#" className="hover:underline">Defensoría del consumidor</a></li>
                  <li><a href="#" className="hover:underline">Derechos y deberes</a></li>
                  <li><a href="#" className="hover:underline">Política de seguridad</a></li>
                  <li><a href="#" className="hover:underline">Términos y condiciones de uso</a></li>
                  <li><a href="#" className="hover:underline">Protección de datos</a></li>
                  <li><a href="#" className="hover:underline">Derechos de autor y uso de contenidos</a></li>
                  <li><a href="#" className="hover:underline">Otras políticas</a></li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Nuestros productos</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li><a href="#" className="hover:underline">Personas</a></li>
                  <li><a href="#" className="hover:underline">Empresas</a></li>
                  <li><a href="#" className="hover:underline">Finanseguro</a></li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Enlaces de interés</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li><a href="#" className="hover:underline">APP AXA COLPATRIA</a></li>
                  <li><a href="#" className="hover:underline">APP PIC AXA COLPATRIA</a></li>
                  <li><a href="#" className="hover:underline">Blog</a></li>
                  <li><a href="#" className="hover:underline">Estados financieros</a></li>
                  <li><a href="#" className="hover:underline">Reportes</a></li>
                  <li><a href="#" className="hover:underline">Consulta asesor - SUCIS</a></li>
                  <li><a href="#" className="hover:underline">Mapa del sitio</a></li>
                </ul>
              </div>

              {/* Column 4 */}
              <div>
                <h4 className="font-semibold text-lg mb-4">AXA COLPATRIA en Colombia</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li><a href="#" className="hover:underline">Quiénes somos</a></li>
                  <li><a href="#" className="hover:underline">Contáctanos</a></li>
                  <li><a href="#" className="hover:underline">Job Site</a></li>
                  <li><a href="#" className="hover:underline">Haz match con nosotros</a></li>
                </ul>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/20 pt-8 pb-4">

              {/* Horizontal Logo Placeholder */}
              <div className="mb-6 md:mb-0">
                <div className="w-48 h-12 bg-white/20 border border-white/40 flex items-center justify-center text-sm">
                   VIGILADO SUPERSALUD (Placeholder)
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4 mb-6 md:mb-0">
                <span className="font-semibold tracking-wide">SÍGUENOS</span>
                <a href="#" className="hover:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="hover:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                </a>
                <a href="#" className="hover:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
                <a href="#" className="hover:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="hover:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>

            <div className="text-right text-sm text-white/80 mt-4 md:mt-0 pb-4">
                Copyright AXA COLPATRIA 2026 ©
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
