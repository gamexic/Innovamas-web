import { useState } from 'react';
import { 
  Funnel, 
  Calculator, 
  Atom, 
  CirclePlay, 
  BookOpen, 
  ArrowRight,
  ExternalLink,
  Laptop,
  Trophy,
  Zap,
  Clock,
  CircleCheckBig,
  FileText
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Recursos() {
  const [filter, setFilter] = useState('Todos');

  const videos = [
    {
      id: 1,
      category: 'Matemáticas',
      subject: 'Raz. Matemático',
      topic: 'Planteo de Ecuaciones',
      teacher: 'Plana de Matemáticas',
      url: 'https://www.instagram.com/reel/Csq5lu0MV1C/?igsh=eG92N2UwbGxjNGlp',
      color: 'bg-orange-500'
    },
    {
      id: 2,
      category: 'Matemáticas',
      subject: 'Raz. Matemático',
      topic: 'Cronometría y Relojes',
      teacher: 'Plana de Matemáticas',
      url: 'https://www.instagram.com/reel/CwVdyqbM-D3/?igsh=MTh6b2gzcW43NGptOA==',
      color: 'bg-amber-500'
    },
    {
      id: 3,
      category: 'Matemáticas',
      subject: 'Álgebra',
      topic: 'Productos Notables',
      teacher: 'Plana de Matemáticas',
      url: 'https://www.instagram.com/reel/Cva5vm6AxNk/?igsh=Ymg3ZDB2dGx3ajVj',
      color: 'bg-blue-600'
    },
    {
      id: 4,
      category: 'Matemáticas',
      subject: 'Álgebra',
      topic: 'Funciones y Gráficas',
      teacher: 'Plana de Matemáticas',
      url: 'https://www.instagram.com/reel/CzAicbaM5Uo/?igsh=amt4NHNvNXc1bDB6',
      color: 'bg-blue-500'
    },
    {
      id: 5,
      category: 'Ciencias',
      subject: 'Física',
      topic: 'Cinemática (MRUV)',
      teacher: 'Plana de Ciencias',
      url: 'https://www.instagram.com/reel/CvlgeZxACOI/?igsh=MWcwbDI3eGY2NnNuZA==',
      color: 'bg-emerald-500'
    },
    {
      id: 6,
      category: 'Ciencias',
      subject: 'Química',
      topic: 'Estequiometría',
      teacher: 'Plana de Ciencias',
      url: 'https://www.instagram.com/reel/Cv2yU1OgyN7/?igsh=eDgzejZnMXBoM2F5',
      color: 'bg-teal-500'
    }
  ];

  const filteredVideos = filter === 'Todos' ? videos : videos.filter(v => v.category === filter);

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800">
      <Header variant="nosotros" />
      
      <main className="flex-grow">
        <div className="bg-slate-50 min-h-screen pb-20">
          
          {/* Hero Section */}
          <section className="relative bg-brand-gradient py-20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-blue opacity-10 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="text-5xl md:text-7xl font-black text-white font-display italic tracking-tighter drop-shadow-md mb-4">
                Clases Gratuitas
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed">
                Descubre nuestra metodología. Accede a nuestras clases modelo exclusivas alojadas en Instagram.
              </p>
            </div>
          </section>

          {/* Videoteca Section */}
          <section className="container mx-auto px-4 py-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-slate-800 font-display uppercase tracking-tight mb-4">
                Videoteca <span className="text-brand-cyan">Académica</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto mb-8 text-lg font-medium">
                Esto es un poco de lo que puedes obtener al acceder. Hemos seleccionado estas clases modelo de nuestros ciclos para que puedas repasar desde donde estés.
              </p>
              
              {/* Filters */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <button 
                  onClick={() => setFilter('Todos')}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-1 shadow-md ${filter === 'Todos' ? 'bg-brand-darkblue text-white ring-4 ring-brand-blue/20' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
                >
                  <Funnel size={16} /> Todos
                </button>
                <button 
                  onClick={() => setFilter('Matemáticas')}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-1 shadow-md ${filter === 'Matemáticas' ? 'bg-brand-darkblue text-white ring-4 ring-brand-blue/20' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
                >
                  <Calculator size={16} /> Matemáticas
                </button>
                <button 
                  onClick={() => setFilter('Ciencias')}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-1 shadow-md ${filter === 'Ciencias' ? 'bg-brand-darkblue text-white ring-4 ring-brand-blue/20' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
                >
                  <Atom size={16} /> Ciencias
                </button>
              </div>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredVideos.map((video, idx) => (
                <div key={video.id} className="transition-all ease-out opacity-100 translate-y-0 translate-x-0" style={{ transitionDuration: '700ms', transitionDelay: `${idx * 50}ms` }}>
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="group block h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 relative">
                    <div className={`h-28 ${video.color} relative overflow-hidden flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="absolute -bottom-6 -right-6 text-white opacity-20 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                        <CirclePlay size={100} strokeWidth={2} />
                      </div>
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full mb-1 group-hover:scale-110 transition-transform">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                        </div>
                        <span className="text-white text-xs font-bold uppercase tracking-widest mt-1">Ver en Instagram</span>
                      </div>
                    </div>
                    <div className="p-6 relative">
                      <div className="absolute top-0 right-6 transform -translate-y-1/2">
                        <span className="bg-slate-800 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">{video.category}</span>
                      </div>
                      <h3 className="text-2xl font-black text-slate-800 mb-1 group-hover:text-brand-blue transition-colors">{video.subject}</h3>
                      <p className="text-sm font-medium text-brand-magenta mb-4">{video.topic}</p>
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider border-t border-slate-100 pt-4">
                        <BookOpen size={14} /> {video.teacher}
                      </div>
                      <div className="mt-4 flex items-center text-sm font-bold text-brand-darkblue opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Reproducir Clase <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Banner Section */}
          <section className="container mx-auto px-4 my-20">
            <div className="transition-all ease-out opacity-100 translate-y-0 translate-x-0" style={{ transitionDuration: '700ms', transitionDelay: '0ms' }}>
              <div className="bg-gradient-to-br from-brand-darkblue to-brand-blue rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 opacity-10 transform rotate-12 translate-x-20 -translate-y-10">
                  <Laptop size={350} strokeWidth={2} />
                </div>
                <div className="absolute bottom-0 left-0 opacity-10 transform -rotate-12 -translate-x-10 translate-y-10">
                  <Trophy size={200} strokeWidth={2} />
                </div>
                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 px-4 py-1.5 rounded-full font-bold uppercase text-xs tracking-widest backdrop-blur-sm">
                      <Zap size={14} /> Metodología Integral
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black font-display leading-tight">
                      Mucho más que <br /><span className="text-brand-yellow">Clases en Vivo</span>
                    </h2>
                    <p className="text-blue-100 text-lg leading-relaxed font-medium">
                      Al matricularte en Innovamas, disfrutas de un <strong>Sistema de Preparación Completo</strong>. Te brindamos todas las herramientas necesarias para potenciar tu estudio y garantizar tu aprendizaje dentro y fuera del aula.
                    </p>
                    <a href="#/ciclos" className="inline-flex items-center gap-3 bg-white text-brand-darkblue px-8 py-4 rounded-xl font-black uppercase hover:bg-brand-yellow hover:text-brand-darkblue transition-all shadow-lg mt-4 transform hover:scale-105">
                      Ver Ciclos Disponibles <ArrowRight size={20} />
                    </a>
                  </div>
                  
                  <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-start gap-4 hover:bg-white/20 transition-all duration-300 group hover:-translate-y-1">
                      <div className="bg-brand-magenta p-3 rounded-xl shrink-0 text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Trophy size={24} />
                      </div>
                      <div>
                        <h4 className="font-black text-white text-sm uppercase tracking-wide mb-1">Simulacros</h4>
                        <p className="text-blue-100 text-xs font-medium leading-snug">Evaluaciones constantes tipo examen de admisión.</p>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-start gap-4 hover:bg-white/20 transition-all duration-300 group hover:-translate-y-1">
                      <div className="bg-brand-cyan p-3 rounded-xl shrink-0 text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Clock size={24} />
                      </div>
                      <div>
                        <h4 className="font-black text-white text-sm uppercase tracking-wide mb-1">Clases Grabadas</h4>
                        <p className="text-blue-100 text-xs font-medium leading-snug">Acceso a las grabaciones para repasar cuando quieras.</p>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-start gap-4 hover:bg-white/20 transition-all duration-300 group hover:-translate-y-1">
                      <div className="bg-brand-yellow p-3 rounded-xl shrink-0 text-white shadow-lg group-hover:scale-110 transition-transform">
                        <CircleCheckBig size={24} />
                      </div>
                      <div>
                        <h4 className="font-black text-white text-sm uppercase tracking-wide mb-1">Seguimiento</h4>
                        <p className="text-blue-100 text-xs font-medium leading-snug">Tutores que monitorean tu avance académico.</p>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-start gap-4 hover:bg-white/20 transition-all duration-300 group hover:-translate-y-1">
                      <div className="bg-brand-blue p-3 rounded-xl shrink-0 text-white shadow-lg group-hover:scale-110 transition-transform">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h4 className="font-black text-white text-sm uppercase tracking-wide mb-1">Material PDF</h4>
                        <p className="text-blue-100 text-xs font-medium leading-snug">Descarga diapositivas, boletines y prácticas.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="transition-all ease-out opacity-100 translate-y-0 translate-x-0" style={{ transitionDuration: '700ms', transitionDelay: '200ms' }}>
            <div className="container mx-auto px-4 text-center mb-12">
              <h3 className="text-2xl font-bold text-slate-700 mb-6">¿Quieres acceso a todas las clases completas?</h3>
              <a href="#/contacto" className="inline-flex items-center gap-3 bg-brand-magenta hover:bg-pink-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-wide shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Matricularme Ahora <ExternalLink size={20} />
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
