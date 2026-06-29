import { MapPin, Phone, Clock, Building2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contacto() {
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
                Contáctanos
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed">
                Estamos listos para resolver tus dudas y ayudarte en tu proceso de matrícula.
              </p>
            </div>
          </section>

          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto -mt-8 relative z-20">
              
              {/* Info Column */}
              <div className="w-full lg:w-2/5 space-y-8">
                <div className="transition-all ease-out opacity-100 translate-y-0 translate-x-0" style={{ transitionDuration: '700ms', transitionDelay: '0ms' }}>
                  <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
                    <div className="bg-brand-darkblue p-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                      <div className="relative z-10">
                        <h3 className="text-xl font-black text-white uppercase tracking-widest font-display flex items-center gap-2">
                          <Building2 size={20} className="text-brand-cyan" /> Sede Central
                        </h3>
                        <p className="text-blue-200 text-sm mt-1 font-medium">Lima Centro</p>
                      </div>
                    </div>
                    <div className="p-8 space-y-8">
                      <div className="flex items-start gap-5 group">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0">
                          <MapPin size={24} />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Visítanos</span>
                          <p className="font-bold text-slate-800 text-lg leading-tight">Av. Uruguay 351</p>
                          <p className="text-slate-600 font-medium">Cercado de Lima, Lima</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-5 group">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-magenta to-pink-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0">
                          <Phone size={24} />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Llámanos</span>
                          <p className="font-bold text-slate-800 text-lg leading-tight">+51 919 676 084</p>
                          <p className="text-slate-600 text-sm">Consultas académicas</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-5 group">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-yellow to-orange-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0">
                          <Clock size={24} />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Horario de Atención</span>
                          <p className="font-bold text-slate-800 text-lg leading-tight">Lunes a Sábado</p>
                          <p className="text-slate-600 font-medium">8:00 am - 4:00 pm</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="transition-all ease-out opacity-100 translate-y-0 translate-x-0" style={{ transitionDuration: '700ms', transitionDelay: '200ms' }}>
                  <div className="bg-white p-3 rounded-[2rem] shadow-lg border border-gray-100">
                    <div className="bg-slate-200 h-64 rounded-[1.5rem] w-full border border-gray-200 overflow-hidden relative">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        scrolling="no" 
                        marginHeight={0} 
                        marginWidth={0} 
                        src="https://maps.google.com/maps?q=Av.%20Uruguay%20351,%20Cercado%20de%20Lima,%20Lima&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                        title="Mapa Sede" 
                        className="w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Column */}
              <div className="w-full lg:w-3/5">
                <div className="transition-all ease-out opacity-100 translate-y-0 translate-x-0" style={{ transitionDuration: '700ms', transitionDelay: '100ms' }}>
                  <form className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue to-brand-cyan"></div>
                    <h3 className="text-3xl font-black text-slate-800 mb-8 font-display">Envíanos un mensaje</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Nombres *</label>
                        <input 
                          required 
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan transition outline-none bg-slate-50 focus:bg-white font-medium" 
                          placeholder="Juan Pérez" 
                          type="text" 
                          name="name" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Celular *</label>
                        <input 
                          required 
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan transition outline-none bg-slate-50 focus:bg-white font-medium" 
                          placeholder="919 676 084" 
                          type="tel" 
                          name="phone" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Correo Electrónico</label>
                      <input 
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan transition outline-none bg-slate-50 focus:bg-white font-medium" 
                        placeholder="juan@ejemplo.com" 
                        type="email" 
                        name="email" 
                      />
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Ciclo de Interés</label>
                      <select 
                        name="cycle" 
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan transition outline-none bg-slate-50 focus:bg-white font-medium cursor-pointer"
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="Anual San Marcos">Anual San Marcos</option>
                        <option value="Semestral San Marcos">Semestral San Marcos</option>
                        <option value="Repaso San Marcos">Repaso San Marcos</option>
                        <option value="Escolar Pre 4to y 5to sec. San Marcos">Escolar Pre 4to y 5to sec. San Marcos</option>
                        <option value="Escolar Nivelación 1ro, 2do y 3ro sec. San Marcos">Escolar Nivelación 1ro, 2do y 3ro sec. San Marcos</option>
                        <option value="Anual Villarreal">Anual Villarreal</option>
                        <option value="Semestral Villarreal">Semestral Villarreal</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2 mb-8">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Mensaje *</label>
                      <textarea 
                        name="message" 
                        required 
                        rows={4} 
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan transition outline-none bg-slate-50 focus:bg-white resize-none font-medium" 
                        placeholder="¿En qué podemos ayudarte?"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-brand-gradient text-white font-black uppercase tracking-widest py-5 rounded-xl hover:shadow-lg hover:shadow-brand-blue/30 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                    >
                      Enviar Mensaje
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
