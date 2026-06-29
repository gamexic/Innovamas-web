import { 
  Target, 
  Heart, 
  Shield, 
  Users, 
  CircleCheckBig, 
  BookOpen, 
  Presentation, 
  Library 
} from 'lucide-react';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Nosotros() {
  return (
    <>
      <Header variant="nosotros" />
      <main className="flex-grow">
        <div className="pb-20 bg-slate-50">
          {/* Hero Section */}
          <section className="relative bg-brand-gradient py-20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-blue opacity-10 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="text-5xl md:text-7xl font-black text-white font-display italic tracking-tighter drop-shadow-md mb-4">Nosotros</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed">Formando líderes para el futuro del Perú con exigencia y calidad humana.</p>
            </div>
          </section>

          <div className="container mx-auto px-4 py-16 space-y-24">
            {/* History Section */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 md:pl-16 space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <span className="text-brand-cyan font-bold tracking-widest uppercase text-sm">Nuestra Esencia</span>
                    <h2 className="text-4xl font-black text-slate-800 font-display mt-2">Nuestra Historia</h2>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                    <p>La Academia Innovamas nació con el propósito firme de elevar el nivel educativo preuniversitario en Lima. Desde nuestros inicios, hemos mantenido un compromiso inquebrantable con la excelencia académica.</p>
                    <p>Inspirados en la rigurosidad de instituciones como Villareal y San Marcos, desarrollamos una metodología propia que combina teoría profunda con práctica intensiva, permitiendo a miles de estudiantes alcanzar sus sueños.</p>
                  </div>
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="absolute top-4 -right-4 w-full h-full border-4 border-brand-cyan rounded-xl"></div>
                    <img src="https://res.cloudinary.com/dqgcraerm/image/upload/v1764646556/Captura_de_pantalla_2025-12-01_223525_li4jid.webp" alt="Historia Innovamas" className="rounded-xl shadow-2xl relative z-10 transform hover:-translate-y-2 transition duration-500" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Mission/Vision/Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Misión", 
                  icon: <Target size={32} />, 
                  color: "brand-cyan", 
                  bgColor: "bg-cyan-50",
                  text: "Brindar una formación preuniversitaria integral y de alta exigencia académica, potenciando las capacidades intelectuales y personales de nuestros estudiantes para asegurar su ingreso a las mejores universidades del país." 
                },
                { 
                  title: "Visión", 
                  icon: <Heart size={32} />, 
                  color: "brand-magenta", 
                  bgColor: "bg-pink-50",
                  text: "Ser reconocidos como la academia líder en innovación educativa y resultados en Lima, formando no solo ingresantes, sino futuros profesionales comprometidos con el desarrollo de la sociedad." 
                },
                { 
                  title: "Valores", 
                  icon: <Shield size={32} />, 
                  color: "brand-yellow", 
                  bgColor: "bg-yellow-50",
                  list: ["Disciplina y Constancia", "Excelencia Académica", "Innovación Continua", "Integridad"] 
                }
              ].map((card, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 border-${card.color} hover:shadow-xl transition hover:-translate-y-1 duration-300 h-full`}>
                    <div className={`${card.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6 text-${card.color}`}>
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-black text-slate-800 mb-4">{card.title}</h3>
                    {card.text && <p className="text-slate-600 leading-relaxed">{card.text}</p>}
                    {card.list && (
                      <ul className="space-y-3 text-slate-600">
                        {card.list.map((item, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-brand-yellow rounded-full shrink-0"></div> {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-800 uppercase font-display">Beneficios <span className="text-brand-cyan">Académicos</span></h2>
                  <div className="w-24 h-1.5 bg-brand-magenta mx-auto mt-4 rounded-full"></div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {[
                  { 
                    title: "EXPERIENCIA ACADÉMICA", 
                    text: "Más de 10 años de brillante trayectoria académica y cultural formando estudiantes con un alto nivel.",
                    icon: <div className="flex flex-col items-center justify-center leading-none text-brand-cyan group-hover:text-white transition-colors duration-500"><span className="text-5xl font-black tracking-tighter">+10</span><span className="text-[10px] font-bold uppercase tracking-widest mt-1">Años</span></div>
                  },
                  { 
                    title: "DOCENTES CALIFICADOS", 
                    text: "Docentes especializados con una innovadora y amplia experiencia en la enseñanza preuniversitaria.",
                    icon: <Users size={48} strokeWidth={1.5} />
                  },
                  { 
                    title: "ACOMPAÑAMIENTO PSICOPEDAGÓGICO", 
                    text: "Orientación al estudiante en la elección de su carrera, contemplando su disposición y aptitudes.",
                    icon: <CircleCheckBig size={48} strokeWidth={1.5} />
                  },
                  { 
                    title: "MATERIAL DIDÁCTICO", 
                    text: "Otorgamos material de enseñanza virtual compuesto por resumen teórico y práctica dirigida según la programación curricular.",
                    icon: <BookOpen size={48} strokeWidth={1.5} />
                  },
                  { 
                    title: "SEMINARIOS", 
                    text: "Nuestra plana docente desarrolla temas complementarios y de profundización de todos los cursos con los últimos avances.",
                    icon: <Presentation size={48} strokeWidth={1.5} />
                  },
                  { 
                    title: "BIBLIOTECA", 
                    text: "Espacio dedicado a nuestros estudiantes con el objetivo de que puedan complementar sus conocimientos con bibliografía selecta.",
                    icon: <Library size={48} strokeWidth={1.5} />
                  }
                ].map((benefit, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="group flex flex-col items-center text-center cursor-default">
                      <div className="w-40 h-40 rounded-full border-[6px] border-brand-cyan flex items-center justify-center mb-8 bg-white shadow-xl relative overflow-hidden transition-all duration-500 group-hover:bg-brand-cyan group-hover:scale-110 group-hover:shadow-cyan-500/40 group-hover:border-brand-cyan">
                        <div className="text-brand-cyan transition-colors duration-500 transform group-hover:scale-110 group-hover:text-white">
                          {benefit.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-black text-brand-cyan mb-3 uppercase tracking-tight px-4 group-hover:text-brand-blue transition-colors duration-300">{benefit.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed px-6 font-medium group-hover:text-slate-700 transition-colors duration-300">{benefit.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
