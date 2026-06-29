import { 
  Facebook, 
  Instagram, 
  Phone, 
  Mail, 
  ExternalLink, 
  MapPin, 
  Lock,
  ChevronRight,
  ChevronDown,
  Trophy,
  GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AULA_VIRTUAL_URL } from '../config';

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-darkblue text-white font-sans relative overflow-hidden pt-20 pb-10">
      <div className="absolute inset-0 bg-brand-gradient opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-magenta opacity-20 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="hidden xl:flex absolute bottom-32 left-8 2xl:left-24 flex-col items-center gap-3 animate-float opacity-80 z-10 pointer-events-none">
        <div className="bg-white/10 p-5 rounded-2xl border border-white/20 backdrop-blur-md shadow-2xl transform -rotate-6">
          <Trophy size={48} strokeWidth={1.5} className="text-brand-yellow drop-shadow-lg" />
        </div>
        <div className="text-center">
          <p className="text-white font-black uppercase text-sm tracking-widest drop-shadow-md">Excelencia</p>
          <p className="text-brand-yellow text-xs font-bold tracking-wide">Académica</p>
        </div>
      </div>
      
      <div className="hidden xl:flex absolute bottom-32 right-8 2xl:right-24 flex-col items-center gap-3 animate-float opacity-80 z-10 pointer-events-none" style={{ animationDelay: '2s' }}>
        <div className="bg-white/10 p-5 rounded-2xl border border-white/20 backdrop-blur-md shadow-2xl transform rotate-6">
          <GraduationCap size={48} strokeWidth={1.5} className="text-brand-cyan drop-shadow-lg" />
        </div>
        <div className="text-center">
          <p className="text-white font-black uppercase text-sm tracking-widest drop-shadow-md">Especialistas</p>
          <p className="text-brand-cyan text-xs font-bold tracking-wide">San Marcos / Villa</p>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
          <div className="lg:col-span-5 text-center lg:text-left space-y-8">
            <div className="inline-block transform hover:scale-105 transition-transform duration-500">
              <img src="https://res.cloudinary.com/dqgcraerm/image/upload/v1764606874/BANNER_VILLA_2026_VERANO_5_1_zwbrif.webp" alt="Academia Innovamas" className="h-32 md:h-40 w-auto object-contain drop-shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight leading-tight mb-4">Tu Ingreso es <br /><span className="text-brand-yellow text-shadow-hard">Nuestro Objetivo</span></h2>
              <p className="text-blue-100 text-lg font-medium leading-relaxed opacity-90 max-w-md mx-auto lg:mx-0">Somos especialistas en San Marcos y Villarreal. Únete a la academia que garantiza tu preparación con exigencia y calidad humana.</p>
            </div>
            <div className="flex justify-center lg:justify-start gap-4 pt-4">
              <a href="https://www.facebook.com/innovamasacademia" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-white text-white hover:text-blue-600 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/innovamasacademia" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-white text-white hover:text-pink-600 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20">
                <TikTokIcon />
              </a>
            </div>
            <div className="flex justify-center lg:justify-start pt-2">
              <a
                href={AULA_VIRTUAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-cyan text-brand-darkblue font-black uppercase tracking-wide px-7 py-3 rounded-full shadow-lg hover:bg-white transition-all transform hover:scale-105"
              >
                <GraduationCap size={20} /> Aula Virtual
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan opacity-20 blur-3xl rounded-full pointer-events-none"></div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="bg-brand-yellow text-brand-darkblue p-1 rounded"><Mail size={20} /></span>
                Escríbenos ahora
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <input required placeholder="Nombres Completos" className="w-full px-5 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-blue-200 focus:outline-none focus:bg-black/30 focus:border-brand-yellow transition" type="text" name="name" />
                  </div>
                  <div className="col-span-1">
                    <input required placeholder="Celular o Correo" className="w-full px-5 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-blue-200 focus:outline-none focus:bg-black/30 focus:border-brand-yellow transition" type="text" name="email" />
                  </div>
                  <div className="col-span-1 md:col-span-2 relative">
                    <select name="interest" required className="w-full px-5 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-blue-200 focus:outline-none focus:bg-black/30 focus:border-brand-yellow transition appearance-none cursor-pointer">
                      <option value="" className="text-slate-500 bg-white">¿Qué ciclo te interesa?</option>
                      <optgroup label="San Marcos (UNMSM)" className="text-slate-800 bg-white font-bold">
                        <option value="San Marcos - Anual" className="font-normal">San Marcos - Anual</option>
                        <option value="San Marcos - Verano" className="font-normal">San Marcos - Verano</option>
                        <option value="San Marcos - Repaso" className="font-normal">San Marcos - Repaso</option>
                        <option value="San Marcos - Escolar Pre 4to y 5to sec." className="font-normal">San Marcos - Escolar Pre 4to y 5to sec.</option>
                        <option value="San Marcos - Escolar Nivelación 1ro, 2do y 3ro sec." className="font-normal">San Marcos - Escolar Nivelación 1ro, 2do y 3ro sec.</option>
                      </optgroup>
                      <optgroup label="Villarreal (UNFV)" className="text-slate-800 bg-white font-bold">
                        <option value="Villarreal - Anual" className="font-normal">Villarreal - Anual</option>
                        <option value="Villarreal - Verano" className="font-normal">Villarreal - Verano</option>
                        <option value="Villarreal - Repaso" className="font-normal">Villarreal - Repaso</option>
                      </optgroup>
                    </select>
                    <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none text-white/70">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <textarea name="message" required rows={3} placeholder="¿Tienes alguna consulta adicional?" className="w-full px-5 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-blue-200 focus:outline-none focus:bg-black/30 focus:border-brand-yellow transition resize-none"></textarea>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <button type="submit" className="w-full bg-brand-yellow hover:bg-white text-brand-darkblue font-black text-lg py-3 rounded-xl shadow-lg transition-all transform hover:scale-[1.02] flex justify-center items-center gap-2 uppercase tracking-wide">
                      Solicitar Información <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 my-12"></div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 justify-items-center md:justify-items-start relative">
          <div className="w-full max-w-xs">
            <h4 className="font-black text-xl mb-6 flex items-center gap-2 justify-center md:justify-start">
              <span className="w-8 h-1 bg-brand-cyan rounded-full"></span> Explorar
            </h4>
            <ul className="space-y-3">
              {['Inicio', 'Nosotros', 'Ciclos Académicos', 'Nuestras Sedes', 'Recursos'].map((link, i) => (
                <li key={i} className="flex justify-center md:justify-start">
                  <Link to={link === 'Inicio' ? '/' : link === 'Nosotros' ? '/nosotros' : '#'} className="flex items-center gap-2 text-blue-100 hover:text-white hover:translate-x-2 transition-transform duration-300">
                    <ChevronRight size={14} className="text-brand-yellow" /> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full max-w-xs">
            <h4 className="font-black text-xl mb-6 flex items-center gap-2 justify-center md:justify-start">
              <span className="w-8 h-1 bg-brand-magenta rounded-full"></span> Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 justify-center md:justify-start text-left">
                <div className="bg-white/10 p-2 rounded-lg shrink-0 text-brand-yellow">
                  <MapPin size={20} />
                </div>
                <div>
                  <strong className="block text-white">Sede Principal</strong>
                  <span className="text-blue-100 text-sm">Av. Uruguay 351, Cercado de Lima, Lima</span>
                </div>
              </li>
              <li className="flex items-center gap-4 justify-center md:justify-start text-left">
                <div className="bg-white/10 p-2 rounded-lg shrink-0 text-brand-cyan">
                  <Phone size={20} />
                </div>
                <div>
                  <strong className="block text-white">Teléfono</strong>
                  <span className="text-blue-100 text-sm">919 676 084</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full max-w-xs">
            <h4 className="font-black text-xl mb-6 flex items-center gap-2 justify-center md:justify-start">
              <span className="w-8 h-1 bg-white rounded-full"></span> Horario
            </h4>
            <div className="bg-black/20 rounded-xl p-6 border border-white/5">
              <p className="flex justify-between text-sm mb-2 border-b border-white/10 pb-2">
                <span className="text-blue-100">Lunes - Sábado</span>
                <span className="font-bold">8:00 AM - 4:00 PM</span>
              </p>
              <p className="text-xs text-blue-200 mt-2 italic text-center">¡Te esperamos!</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200/60 font-medium">
          <p className="text-center md:text-left">© 2026 Academia Innovamas. Todos los derechos reservados.</p>
          <div className="flex gap-6 justify-center items-center">
            <Link to="/" className="hover:text-white transition-colors">Términos y Condiciones</Link>
            <Link to="/" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link to="/" className="hover:text-white transition-colors opacity-50 hover:opacity-100" title="Acceso Administrativo">
              <Lock size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
