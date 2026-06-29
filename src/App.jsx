import React from 'react';
import { HashRouter } from 'react-router-dom';
import Hero from './components/Hero';
import DashboardMockup from './components/DashboardMockup';
import Profiles from './components/Profiles';
import ClientPanel from './components/ClientPanel';
import Pricing from './components/Pricing';

function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-obsidian/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-cyan-neon rounded-full shadow-[0_0_15px_rgba(0,243,255,0.8)]"></div>
          <span className="text-2xl font-bold tracking-tighter text-white">Tax<span className="text-cyan-neon">AI</span></span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#hero" className="text-sm font-medium text-gray-300 hover:text-cyan-neon transition-colors">Inicio</a>
          <a href="#dashboard" className="text-sm font-medium text-gray-300 hover:text-cyan-neon transition-colors">Simulación</a>
          <a href="#profiles" className="text-sm font-medium text-gray-300 hover:text-cyan-neon transition-colors">Perfiles</a>
          <a href="#simulator" className="text-sm font-medium text-gray-300 hover:text-cyan-neon transition-colors">Panel Cliente</a>
          <a href="#pricing" className="text-sm font-medium text-gray-300 hover:text-gold transition-colors">Tokens</a>
        </nav>
        <a href="#pricing" className="md:hidden px-4 py-2 bg-gold text-obsidian font-bold rounded-full text-sm">
          Comprar
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-obsidian border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-6 h-6 bg-cyan-neon rounded-full"></div>
          <span className="text-xl font-bold text-white">Tax<span className="text-cyan-neon">AI</span></span>
        </div>
        <p className="text-gray-500 mb-6">El motor tributario inteligente que optimiza tu tiempo y tus impuestos.</p>
        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} TaxAI Inc. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-obsidian text-white font-sans selection:bg-cyan-neon selection:text-obsidian">
        <Header />

        <main>
          <Hero />
          <DashboardMockup />
          <Profiles />
          <ClientPanel />
          <Pricing />
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
