import { useState } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronDown 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Ciclos() {
  const [isEscolarOpen, setIsEscolarOpen] = useState(false);

  return (
    <>
      <Header variant="nosotros" />
      <main className="flex-grow">
        <div className="bg-slate-50 min-h-screen pb-20">
          {/* Hero Section */}
          <section className="relative bg-brand-gradient py-20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-blue opacity-10 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="text-5xl md:text-7xl font-black text-white font-display italic tracking-tighter drop-shadow-md mb-4">Nuestros Ciclos</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed">Elige tu camino hacia la universidad. Preparación exclusiva y especializada.</p>
            </div>
          </section>

          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* San Marcos Column */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full">
                <div className="bg-[#D32F2F] text-white p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <h2 className="text-3xl font-black font-display italic tracking-tighter">SAN MARCOS</h2>
                    <ArrowRight className="opacity-80" />
                  </div>
                </div>
                <div className="p-8 flex-grow space-y-4">
                  {[
                    { id: 'sm-anual', title: 'Anual Escala San Marcos', tag: 'Recomendado' },
                    { id: 'sm-semestral', title: 'Semestral San Marcos', tag: 'Popular' },
                  ].map((ciclo) => (
                    <a 
                      key={ciclo.id}
                      href={`#/ciclo-detalle?id=${ciclo.id}`} 
                      className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-red-50 border border-transparent hover:border-red-200 transition-all duration-300 group"
                    >
                      <div>
                        <h3 className="font-bold text-slate-700 group-hover:text-[#D32F2F] text-lg leading-tight mb-1">{ciclo.title}</h3>
                        <p className="text-xs text-slate-400 font-medium uppercase">Presencial / Virtual</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="bg-brand-darkblue text-white text-[10px] font-black px-2 py-1 rounded uppercase">{ciclo.tag}</span>
                        <ChevronRight size={20} className="text-slate-300 group-hover:text-[#D32F2F]" />
                      </div>
                    </a>
                  ))}

                  {/* Escolar San Marcos Accordion */}
                  <div className="rounded-xl overflow-hidden bg-slate-50 border border-transparent transition-all duration-300">
                    <button 
                      onClick={() => setIsEscolarOpen(!isEscolarOpen)}
                      className="w-full flex items-center justify-between p-4 hover:bg-red-50 hover:border-red-200 transition-all group text-left"
                    >
                      <div>
                        <h3 className="font-bold text-slate-700 group-hover:text-[#D32F2F] text-lg leading-tight mb-1">Escolar San Marcos</h3>
                        <p className="text-xs text-slate-400 font-medium uppercase">Sabatino e Interdiario</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="bg-brand-darkblue text-white text-[10px] font-black px-2 py-1 rounded uppercase">Nuevo</span>
                        <ChevronDown 
                          size={20} 
                          className={`text-slate-300 group-hover:text-[#D32F2F] transition-transform duration-300 ${isEscolarOpen ? 'rotate-180' : ''}`} 
                        />
                      </div>
                    </button>
                    <AnimatePresence>
                      {isEscolarOpen && (
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="bg-slate-50/50">
                            {[
                              { id: 'sm-escolar-sabatino', title: 'Escolar Sabatino' },
                              { id: 'sm-escolar-interdiario', title: 'Escolar Interdiario' }
                            ].map((sub) => (
                              <a 
                                key={sub.id}
                                href={`#/ciclo-detalle?id=${sub.id}`}
                                className="flex items-center justify-between p-4 hover:bg-red-50 transition-all duration-200 group/child border-t border-gray-100 last:border-0"
                              >
                                <div>
                                  <h3 className="font-bold text-slate-700 group-hover/child:text-[#D32F2F] text-lg leading-tight mb-1">{sub.title}</h3>
                                  <p className="text-xs text-slate-400 font-medium uppercase">Presencial / Virtual</p>
                                </div>
                                <div className="flex items-center gap-3">
                                  <ChevronRight size={20} className="text-slate-300 group-hover/child:text-[#D32F2F]" />
                                </div>
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Villarreal Column */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full">
                <div className="bg-[#EF6C00] text-white p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <h2 className="text-3xl font-black font-display italic tracking-tighter">VILLARREAL</h2>
                    <ArrowRight className="opacity-80" />
                  </div>
                </div>
                <div className="p-8 flex-grow space-y-4">
                  {[
                    { id: 'unfv-anual', title: 'Anual Escala Villarreal', tag: 'Recomendado' },
                    { id: 'unfv-semestral', title: 'Semestral Villarreal', tag: 'Popular' },
                    { id: 'unfv-repaso', title: 'Repaso Intensivo Villarreal', tag: 'Intensivo' }
                  ].map((ciclo) => (
                    <a 
                      key={ciclo.id}
                      href={`#/ciclo-detalle?id=${ciclo.id}`}
                      className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-orange-50 border border-transparent hover:border-orange-200 transition-all duration-300 group"
                    >
                      <div>
                        <h3 className="font-bold text-slate-700 group-hover:text-[#EF6C00] text-lg leading-tight mb-1">{ciclo.title}</h3>
                        <p className="text-xs text-slate-400 font-medium uppercase">Presencial / Virtual</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="bg-slate-800 text-white text-[10px] font-black px-2 py-1 rounded uppercase">{ciclo.tag}</span>
                        <ChevronRight size={20} className="text-slate-300 group-hover:text-[#EF6C00]" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
