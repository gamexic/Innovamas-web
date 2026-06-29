import { useState } from 'react';
import {
  Facebook,
  Instagram,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronRight,
  Menu,
  GraduationCap
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { AULA_VIRTUAL_URL } from '../config';

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

interface HeaderProps {
  variant?: 'home' | 'nosotros';
}

export default function Header({ variant = 'home' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCiclosOpen, setIsCiclosOpen] = useState(false);
  const location = useLocation();

  const isHome = variant === 'home';

  return (
    <header className={`sticky top-0 z-50 w-full shadow-lg font-sans transition-all duration-300 ${isHome ? 'bg-brand-gradient text-white border-b border-white/10' : 'bg-white text-slate-800'}`}>
      {/* Top Bar */}
      <div className={`py-2 px-4 transition-colors duration-300 ${isHome ? 'bg-transparent border-none text-white' : 'bg-brand-gradient text-white'}`}>
        <div className="container mx-auto flex justify-between items-center text-sm md:text-base font-bold">
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline">¡Tu ingreso es nuestro objetivo!</span>
            <div className="flex items-center gap-3 border-l border-white/30 pl-4">
              <a href="https://www.facebook.com/innovamasacademia" target="_blank" rel="noopener noreferrer" className="transition-colors hover:scale-110 transform duration-200 hover:text-brand-yellow">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/innovamasacademia" target="_blank" rel="noopener noreferrer" className="transition-colors hover:scale-110 transform duration-200 hover:text-brand-yellow">
                <Instagram size={18} />
              </a>
              <a href="#" className="transition-colors hover:scale-110 transform duration-200 hover:text-brand-yellow">
                <TikTokIcon />
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-1">
              <Phone size={16} /> <span>919 676 084</span>
            </div>
            <a href="https://wa.me/51919676084" target="_blank" className="flex items-center gap-1 transition hover:text-brand-yellow">
              <MessageCircle size={16} /> <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center h-20 md:h-24">
          <Link to="/" className="flex items-center gap-1.5 md:gap-2 group shrink-0">
            <img src="https://res.cloudinary.com/df1nikb5s/image/upload/v1764537761/BANNER_VILLA_2026_VERANO_3_rlxatv.webp" alt="Innovamas Academia" className={`h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${isHome ? 'drop-shadow-lg' : ''}`} />
          </Link>
          <nav className="hidden lg:flex items-center space-x-2">
            <div className="relative group">
              <Link to="/" className={`flex items-center px-5 py-2 font-bold text-base uppercase tracking-wide transition-all duration-200 rounded-full ${location.pathname === '/' ? (isHome ? 'text-brand-blue bg-white shadow-lg' : 'text-brand-blue bg-blue-50') : (isHome ? 'text-white/90 hover:bg-white/20 hover:text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-blue')}`}>INICIO</Link>
            </div>
            <div className="relative group">
              <Link to="/nosotros" className={`flex items-center px-5 py-2 font-bold text-base uppercase tracking-wide transition-all duration-200 rounded-full ${location.pathname === '/nosotros' ? (isHome ? 'text-brand-blue bg-white shadow-lg' : 'text-brand-blue bg-blue-50') : (isHome ? 'text-white/90 hover:bg-white/20 hover:text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-blue')}`}>NOSOTROS</Link>
            </div>
            <div className="relative group">
              <Link to="/ciclos" className={`flex items-center px-5 py-2 font-bold text-base uppercase tracking-wide transition-all duration-200 rounded-full ${location.pathname === '/ciclos' ? (isHome ? 'text-brand-blue bg-white shadow-lg' : 'text-brand-blue bg-blue-50') : (isHome ? 'text-white/90 hover:bg-white/20 hover:text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-blue')}`}>
                CICLOS <ChevronDown size={16} className="ml-1 mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              {/* Dropdown content remains same as before */}
              <div className="absolute left-0 pt-2 w-64 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-visible py-2">
                  <div className="relative group/submenu">
                    <Link to="/ciclos?u=unmsm" className="flex items-center justify-between px-6 py-3 text-base font-bold text-slate-600 hover:text-brand-blue hover:bg-blue-50 transition-colors">
                      San Marcos <ChevronRight size={16} />
                    </Link>
                    <div className="absolute left-full top-0 w-64 pl-2 opacity-0 translate-x-[-10px] pointer-events-none group-hover/submenu:opacity-100 group-hover/submenu:translate-x-0 group-hover/submenu:pointer-events-auto transition-all duration-300 ease-out">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                        <Link to="/ciclo-detalle?id=sm-anual" className="block px-6 py-3 text-sm font-semibold text-slate-500 hover:text-brand-blue hover:bg-blue-50 transition-colors">Anual Escala</Link>
                        <Link to="/ciclo-detalle?id=sm-semestral" className="block px-6 py-3 text-sm font-semibold text-slate-500 hover:text-brand-blue hover:bg-blue-50 transition-colors">Semestral San Marcos</Link>
                        <div className="relative group/deep">
                          <div className="flex items-center justify-between px-6 py-3 text-sm font-semibold text-slate-500 hover:text-brand-blue hover:bg-blue-50 transition-colors cursor-pointer">
                            Escolar San Marcos <ChevronRight size={14} />
                          </div>
                          <div className="absolute left-full top-0 w-64 pl-2 opacity-0 translate-x-[-10px] pointer-events-none group-hover/deep:opacity-100 group-hover/deep:translate-x-0 group-hover/deep:pointer-events-auto transition-all duration-300 ease-out">
                            <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                              <Link to="/ciclo-detalle?id=sm-escolar-sabatino" className="block px-6 py-3 text-sm font-medium text-slate-500 hover:text-brand-blue hover:bg-blue-50 transition-colors">Escolar Sabatino</Link>
                              <Link to="/ciclo-detalle?id=sm-escolar-interdiario" className="block px-6 py-3 text-sm font-medium text-slate-500 hover:text-brand-blue hover:bg-blue-50 transition-colors">Escolar Interdiario</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group/submenu">
                    <Link to="/ciclos?u=unfv" className="flex items-center justify-between px-6 py-3 text-base font-bold text-slate-600 hover:text-brand-blue hover:bg-blue-50 transition-colors">
                      Villarreal <ChevronRight size={16} />
                    </Link>
                    <div className="absolute left-full top-0 w-64 pl-2 opacity-0 translate-x-[-10px] pointer-events-none group-hover/submenu:opacity-100 group-hover/submenu:translate-x-0 group-hover/submenu:pointer-events-auto transition-all duration-300 ease-out">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                        <Link to="/ciclo-detalle?id=unfv-anual" className="block px-6 py-3 text-sm font-semibold text-slate-500 hover:text-brand-blue hover:bg-blue-50 transition-colors">Anual Escala</Link>
                        <Link to="/ciclo-detalle?id=unfv-semestral" className="block px-6 py-3 text-sm font-semibold text-slate-500 hover:text-brand-blue hover:bg-blue-50 transition-colors">Semestral Villarreal</Link>
                        <Link to="/ciclo-detalle?id=unfv-repaso" className="block px-6 py-3 text-sm font-semibold text-slate-500 hover:text-brand-blue hover:bg-blue-50 transition-colors">Repaso Intensivo Villarreal</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link to="/sedes" className={`flex items-center px-5 py-2 font-bold text-base uppercase tracking-wide transition-all duration-200 rounded-full ${location.pathname === '/sedes' ? (isHome ? 'text-brand-blue bg-white shadow-lg' : 'text-brand-blue bg-blue-50') : (isHome ? 'text-white/90 hover:bg-white/20 hover:text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-blue')}`}>SEDES</Link>
            </div>
            <div className="relative group">
              <Link to="/recursos" className={`flex items-center px-5 py-2 font-bold text-base uppercase tracking-wide transition-all duration-200 rounded-full ${location.pathname === '/recursos' ? (isHome ? 'text-brand-blue bg-white shadow-lg' : 'text-brand-blue bg-blue-50') : (isHome ? 'text-white/90 hover:bg-white/20 hover:text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-blue')}`}>RECURSOS</Link>
            </div>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href={AULA_VIRTUAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-base font-black uppercase tracking-wide shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 ${isHome ? 'bg-brand-darkblue text-white ring-2 ring-white/40 hover:bg-white hover:text-brand-darkblue' : 'bg-brand-blue text-white ring-2 ring-brand-blue/40 hover:bg-brand-darkblue'}`}
            >
              <GraduationCap size={18} /> Aula Virtual
            </a>
            <Link to="/contacto" className={`px-8 py-3 rounded-full text-base font-black uppercase tracking-wide shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 ring-2 ring-brand-magenta/50 ${isHome ? 'bg-white text-brand-magenta hover:bg-brand-magenta hover:text-white' : 'bg-brand-magenta hover:bg-pink-600 text-white'}`}>Matrícula 2025</Link>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <Link to="/contacto" className={`px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-bold uppercase shadow-sm whitespace-nowrap rounded-md ${isHome ? 'bg-white text-brand-magenta' : 'bg-brand-magenta text-white'}`}>Matrícula</Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`focus:outline-none p-1.5 sm:p-2 rounded-md transition-colors ${isHome ? 'text-white bg-white/20 hover:bg-white/30' : 'text-brand-darkblue bg-slate-100 hover:text-brand-blue'}`}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col gap-2 z-50">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 font-bold text-slate-600 hover:text-brand-blue hover:bg-blue-50 rounded-lg transition-colors">INICIO</Link>
          <Link to="/nosotros" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 font-bold text-slate-600 hover:text-brand-blue hover:bg-blue-50 rounded-lg transition-colors">NOSOTROS</Link>
          
          <div className="flex flex-col">
            <div className="flex items-center justify-between font-bold text-slate-600 hover:bg-blue-50 rounded-lg transition-colors w-full">
              <Link 
                to="/ciclos" 
                onClick={() => setIsMenuOpen(false)}
                className="flex-grow px-4 py-3 hover:text-brand-blue"
              >
                CICLOS
              </Link>
              <button 
                onClick={() => setIsCiclosOpen(!isCiclosOpen)}
                className="px-4 py-3 hover:text-brand-blue focus:outline-none"
              >
                <ChevronDown size={16} className={`transition-transform duration-300 ${isCiclosOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isCiclosOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pl-4 pb-2">
                <div className="pl-4 flex flex-col gap-1 border-l-2 border-slate-100 ml-2">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest mt-2 mb-1">San Marcos</span>
                  <Link to="/ciclo-detalle?id=sm-anual" onClick={() => setIsMenuOpen(false)} className="py-2 text-sm font-semibold text-slate-500 hover:text-brand-blue block">Anual Escala</Link>
                  <Link to="/ciclo-detalle?id=sm-semestral" onClick={() => setIsMenuOpen(false)} className="py-2 text-sm font-semibold text-slate-500 hover:text-brand-blue block">Semestral San Marcos</Link>
                  <Link to="/ciclo-detalle?id=sm-escolar-sabatino" onClick={() => setIsMenuOpen(false)} className="py-2 text-sm font-semibold text-slate-500 hover:text-brand-blue block">Escolar Sabatino</Link>
                  <Link to="/ciclo-detalle?id=sm-escolar-interdiario" onClick={() => setIsMenuOpen(false)} className="py-2 text-sm font-semibold text-slate-500 hover:text-brand-blue block">Escolar Interdiario</Link>
                  
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest mt-4 mb-1">Villarreal</span>
                  <Link to="/ciclo-detalle?id=unfv-anual" onClick={() => setIsMenuOpen(false)} className="py-2 text-sm font-semibold text-slate-500 hover:text-brand-blue block">Anual Escala</Link>
                  <Link to="/ciclo-detalle?id=unfv-semestral" onClick={() => setIsMenuOpen(false)} className="py-2 text-sm font-semibold text-slate-500 hover:text-brand-blue block">Semestral Villarreal</Link>
                  <Link to="/ciclo-detalle?id=unfv-repaso" onClick={() => setIsMenuOpen(false)} className="py-2 text-sm font-semibold text-slate-500 hover:text-brand-blue block">Repaso Intensivo</Link>
                </div>
              </div>
            </div>
          </div>

          <Link to="/sedes" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 font-bold text-slate-600 hover:text-brand-blue hover:bg-blue-50 rounded-lg transition-colors">SEDES</Link>
          <Link to="/recursos" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 font-bold text-slate-600 hover:text-brand-blue hover:bg-blue-50 rounded-lg transition-colors">RECURSOS</Link>
          <a
            href={AULA_VIRTUAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3 font-black uppercase tracking-wide text-white bg-brand-blue hover:bg-brand-darkblue rounded-lg shadow-md transition-colors"
          >
            <GraduationCap size={18} /> Aula Virtual
          </a>
        </div>
      )}
    </header>
  );
}
