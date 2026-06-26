import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-40">
      {/* Top Header */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-12 invert-safe" />
        </div>
        <nav className="hidden md:flex space-x-6 items-center text-sm font-semibold text-gray-700">
          <a href="#" className="hover:text-blue-700">Personas</a>
          <a href="#" className="hover:text-blue-700">Empresas</a>
          <a href="#" className="hover:text-blue-700">Proveedores</a>
          <a href="#" className="hover:text-blue-700">Conócenos</a>
          <a href="#" className="hover:text-blue-700">Sostenibilidad</a>
          <a href="#" className="hover:text-blue-700">Atención en línea</a>
          <button className="text-gray-500 hover:text-blue-700">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <a href="#" className="bg-[#000066] text-white px-4 py-2 rounded-full hover:bg-[#000088] transition-colors">
            Comprar SOAT
          </a>
        </nav>
      </div>

      {/* Secondary Nav below header (breadcrumb/secondary menu) */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex items-center text-sm text-gray-600">
           <a href="#" className="hover:text-blue-700 flex items-center">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Inicio
           </a>
           <span className="mx-2">&gt;</span>
           <a href="#" className="hover:text-blue-700">Personas</a>
           <span className="mx-2">&gt;</span>
           <span className="font-semibold text-gray-800">Seguro Obligatorio - SOAT</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
