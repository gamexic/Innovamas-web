import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Award, 
  Layers, 
  Users, 
  ArrowRight, 
  Quote, 
  ChevronLeft,
  ChevronRight,
  CirclePlus
} from 'lucide-react';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HERO_IMAGES = [
  "https://res.cloudinary.com/dqgcraerm/image/upload/v1773013258/REPASO-VILLA-NUEVO-IN.jpg_xx1adf.webp",
  "https://res.cloudinary.com/dqgcraerm/image/upload/v1773013258/ANUAL-SM-NUEVOIN.jpg_k414pb.webp",
  "https://res.cloudinary.com/dqgcraerm/image/upload/v1773013258/ANUAL-VILLA-NUEVO-INN.jpg_ua612z.webp",
  "https://res.cloudinary.com/dqgcraerm/image/upload/v1773013258/SM-SEMESTRAL-uevoNN.jpg_sp8hsn.webp",
  "https://res.cloudinary.com/dqgcraerm/image/upload/v1773013258/SEMESTRAL-VILLA-NUEVOIII.jpg_oxvndn.webp",
  "https://res.cloudinary.com/dqgcraerm/image/upload/v1773013258/SM-ESCOLAR.jpg_igvzdv.webp"
];

const TESTIMONIALS = [
  {
    name: "Alvaro Castañeda",
    career: "ADM. PÚBLICA - UNFV",
    text: "«¡Lograr el 1er Puesto no fue suerte! Fue gracias a la exigencia diaria de Innovamas. Los simulacros tipo admisión fueron claves para medir mi tiempo y asegurar el máximo puntaje.»",
    image: "https://res.cloudinary.com/dqgcraerm/image/upload/v1764645673/Captura_de_pantalla_2025-12-01_222050_zwfl7c.webp",
    color: "from-yellow-500 to-amber-600",
    shadow: "shadow-yellow-200"
  },
  {
    name: "Vanessa Espinoza",
    career: "MEDICINA - UNFV",
    text: "«Ingresar a Medicina requiere mucha disciplina. Agradezco a la academia por los seminarios especializados de Biología y Anatomía que marcaron la diferencia en mi examen.»",
    image: "https://res.cloudinary.com/dqgcraerm/image/upload/v1764645629/Captura_de_pantalla_2025-12-01_221740_aoislb.webp",
    color: "from-brand-cyan to-teal-600",
    shadow: "shadow-teal-200"
  },
  {
    name: "Patrick Guadalupe",
    career: "MEDICINA - UNFV",
    text: "«La metodología es directa y efectiva. Me enseñaron a resolver preguntas complejas de ciencias en menos tiempo, lo cual es vital para asegurar una vacante en Medicina.»",
    image: "https://res.cloudinary.com/dqgcraerm/image/upload/v1764645630/Captura_de_pantalla_2025-12-01_221727_f6tjpo.webp",
    color: "from-brand-blue to-blue-700",
    shadow: "shadow-blue-200"
  },
  {
    name: "Angie Gonzalo",
    career: "MEDICINA - UNFV",
    text: "«El apoyo emocional y académico que recibí fue único. Nunca me dejaron sola en mi proceso y los materiales de estudio siempre estuvieron actualizados con las últimas fijas.»",
    image: "https://res.cloudinary.com/dqgcraerm/image/upload/v1764645630/Captura_de_pantalla_2025-12-01_221707_dohv75.webp",
    color: "from-emerald-500 to-green-600",
    shadow: "shadow-emerald-200"
  },
  {
    name: "Elizabeth Medina",
    career: "MEDICINA - UNFV",
    text: "«Siempre soñé con ser doctora y gracias a Innovamas lo logré. La plana docente es de primer nivel y te exigen al máximo para que el día del examen nada te sorprenda.»",
    image: "https://res.cloudinary.com/dqgcraerm/image/upload/v1764645361/Captura_de_pantalla_2025-12-01_221506_a8qop7.webp",
    color: "from-brand-magenta to-rose-600",
    shadow: "shadow-pink-200"
  },
  {
    name: "Sharon Argomeda",
    career: "MEDICINA - UNMSM",
    text: "«San Marcos exige lo mejor y aquí encontré la preparación perfecta. Los repasos intensivos y el nivel de las preguntas DECO fueron fundamentales para mi ingreso a la Decana.»",
    image: "https://res.cloudinary.com/dqgcraerm/image/upload/v1764645406/Captura_de_pantalla_2025-12-01_221625_nvotnp.webp",
    color: "from-red-600 to-red-800",
    shadow: "shadow-red-200"
  },
  {
    name: "Bruno Bustos",
    career: "INGENIERÍA - UNMSM",
    text: "«Desde el primer día sentí el compromiso de la academia con nuestra preparación. Las clases fueron dinámicas, siempre tuve apoyo para resolver mis dudas.»",
    image: "https://res.cloudinary.com/dqgcraerm/image/upload/v1764645355/Captura_de_pantalla_2025-12-01_100927_st6gao.webp",
    color: "from-orange-500 to-red-500",
    shadow: "shadow-red-200"
  },
  {
    name: "Steicy",
    career: "ODONTOLOGÍA - UNFV",
    text: "«Ingresar a la universidad no es fácil, pero con la academia sentí que tenía una guía clara. Me brindaron un plan de estudio bien estructurado y motivación constante.»",
    image: "https://res.cloudinary.com/dqgcraerm/image/upload/v1764645354/Captura_de_pantalla_2025-12-01_101021_rysb7w.webp",
    color: "from-orange-400 to-orange-600",
    shadow: "shadow-orange-200"
  },
  {
    name: "Ana Lucía",
    career: "ODONTOLOGÍA - UNFV",
    text: "«Estoy muy agradecida con la academia porque me brindó todas las herramientas para lograr mi ingreso. Los materiales son muy completos y los simulacros ayudaron mucho.»",
    image: "https://res.cloudinary.com/dqgcraerm/image/upload/v1764645354/Captura_de_pantalla_2025-12-01_101042_je2nya.webp",
    color: "from-orange-400 to-orange-600",
    shadow: "shadow-orange-200"
  }
];

export default function Home() {
  const [currentHero, setCurrentHero] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Header variant="home" />
      <main className="flex-grow">
        <div className="overflow-hidden">
          {/* Hero Slider */}
          <section className="relative w-full h-[220px] sm:h-[350px] md:h-[480px] lg:h-[calc(100vh-140px)] bg-slate-50 group transition-all duration-300">
            {HERO_IMAGES.map((img, idx) => (
              <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out overflow-hidden ${currentHero === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                <picture className="w-full h-full block">
                  <img src={img} alt={`Banner ${idx + 1}`} className="w-full h-full object-fill md:object-fill object-center" />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/30 pointer-events-none z-20"></div>
              </div>
            ))}
            <div className="absolute inset-0 z-30 flex items-center justify-between px-2 md:px-4 pointer-events-none">
              <button onClick={() => setCurrentHero((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)} className="p-1 md:p-3 rounded-full bg-black/20 hover:bg-brand-darkblue text-white transition-all backdrop-blur-sm border border-white/20 pointer-events-auto hover:scale-110">
                <ChevronLeft className="md:w-8 md:h-8" />
              </button>
              <button onClick={() => setCurrentHero((prev) => (prev + 1) % HERO_IMAGES.length)} className="p-1 md:p-3 rounded-full bg-black/20 hover:bg-brand-darkblue text-white transition-all backdrop-blur-sm border border-white/20 pointer-events-auto hover:scale-110">
                <ChevronRight className="md:w-8 md:h-8" />
              </button>
            </div>
            <div className="absolute bottom-4 md:bottom-8 left-0 right-0 z-30 flex justify-center gap-1.5 md:gap-3">
              {HERO_IMAGES.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentHero(idx)}
                  className={`transition-all duration-300 rounded-full shadow-sm border border-black/10 ${currentHero === idx ? 'w-4 h-1 md:w-10 md:h-3 bg-brand-cyan' : 'w-1 h-1 md:w-3 md:h-3 bg-white/60 hover:bg-white'}`}
                ></button>
              ))}
            </div>
          </section>

          {/* Marquee */}
          <section className="bg-brand-darkblue py-4 overflow-hidden border-t border-white/10 relative z-20">
            <div className="animate-marquee">
              {[1, 2].map((i) => (
                <div key={i} className="flex items-center space-x-12 px-6">
                  <div className="flex items-center gap-3">
                    <Star size={16} className="text-brand-cyan fill-brand-cyan animate-pulse" />
                    <span className="text-white font-black uppercase tracking-[0.2em] text-sm whitespace-nowrap">Nuevos Inicios 2026</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star size={16} className="text-brand-magenta fill-brand-magenta animate-pulse" />
                    <span className="text-white font-black uppercase tracking-[0.2em] text-sm whitespace-nowrap">Vacantes Limitadas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star size={16} className="text-brand-yellow fill-brand-yellow animate-pulse" />
                    <span className="text-white font-black uppercase tracking-[0.2em] text-sm whitespace-nowrap">Inicio de Clases: 05 de Enero</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                <div className="w-full lg:w-7/12 space-y-8 flex flex-col">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="inline-block bg-brand-cyan text-white px-8 py-3 font-black text-xl md:text-3xl uppercase transform skew-x-[-12deg] shadow-lg mb-6">
                      <span className="transform skew-x-[12deg] font-display inline-block">Sobre la Institución</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-brand-darkblue p-6 rounded-2xl text-center shadow-lg transform hover:-translate-y-1 transition-transform flex flex-col justify-center">
                        <div className="text-4xl md:text-5xl font-black text-white mb-2 font-display tracking-tight">+1mil</div>
                        <div className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Ingresantes</div>
                      </div>
                      <div className="bg-white border-2 border-slate-100 p-6 rounded-2xl text-center shadow-md transform hover:-translate-y-1 transition-transform flex flex-col justify-center hover:border-brand-magenta/30">
                        <div className="text-4xl md:text-5xl font-black text-brand-magenta mb-2 font-display tracking-tight">+10</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Años Preparando</div>
                      </div>
                      <div className="bg-white border-2 border-slate-100 p-6 rounded-2xl text-center shadow-md transform hover:-translate-y-1 transition-transform flex flex-col justify-center hover:border-brand-blue/30">
                        <div className="text-4xl md:text-5xl font-black text-brand-blue mb-2 font-display tracking-tight">60</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Docentes Expertos</div>
                      </div>
                      <div className="bg-brand-cyan p-6 rounded-2xl text-center shadow-lg transform hover:-translate-y-1 transition-transform flex flex-col justify-center">
                        <div className="text-4xl md:text-5xl font-black text-white mb-2 font-display tracking-tight">90%</div>
                        <div className="text-xs font-bold text-brand-darkblue uppercase tracking-wider">Ingreso Asegurado</div>
                      </div>
                    </div>
                    <div className="space-y-6 text-slate-600 leading-relaxed text-lg text-justify font-medium">
                      <p>Con una destacada trayectoria académica y cultural formando estudiantes con un alto nivel, somos tu garantía de ingreso seguro a las más importantes universidades del país.</p>
                      <p>La <span className="font-bold text-brand-blue">academia Innovamas</span> te brinda la mejor plana docente, que desarrolla de la manera más dinámica todos los temas del prospecto de admisión, además, tenemos materiales A1 con el contenido más actualizado y preguntas FIJAS, para que practiques al máximo.</p>
                      <p>Los indicadores contundentes de esta exitosa forma de trabajo son nuestros continuos ingresos masivos a la Universidad Nacional Mayor de San Marcos (UNMSM) y otras universidades como la Universidad Nacional Federico Villarreal (UNFV).</p>
                      <p className="border-l-4 border-brand-cyan pl-4 italic text-slate-500">En la actualidad contamos con la modalidad presencial en nuestras sedes y modalidad virtual a través de nuestra moderna plataforma para estudiantes.</p>
                    </div>
                    <div className="pt-4">
                      <a href="/nosotros" className="inline-flex items-center gap-2 text-brand-cyan font-black uppercase tracking-wider hover:text-brand-blue transition-colors group">
                        <div className="rounded-full border-2 border-current p-1 group-hover:bg-brand-cyan group-hover:text-white transition-colors">
                          <CirclePlus size={16} strokeWidth={3} />
                        </div>
                        Leer más sobre nosotros
                      </a>
                    </div>
                  </motion.div>
                </div>
                <div className="w-full lg:w-5/12">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <div className="h-full relative transform transition-transform hover:-translate-y-2 duration-500 group">
                      <div className="absolute -inset-1 bg-gradient-to-br from-brand-blue via-brand-cyan to-brand-yellow rounded-[2.5rem] blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative h-full bg-brand-darkblue rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col ring-1 ring-gray-900/5">
                        <img src="https://res.cloudinary.com/dqgcraerm/image/upload/v1764649822/Captura_de_pantalla_2025-12-01_232823_zktz9d.webp" alt="Graduados celebrando" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-darkblue via-brand-darkblue/40 to-transparent"></div>
                        <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
                          <div className="mb-4">
                            <span className="inline-block py-1 px-3 rounded-full bg-brand-yellow text-brand-darkblue text-xs font-black uppercase tracking-widest shadow-lg border border-white/20">Garantía Total</span>
                          </div>
                          <h3 className="text-4xl lg:text-5xl font-black text-white font-display italic leading-none mb-4 drop-shadow-xl">TU INGRESO <br /><span className="text-brand-cyan text-shadow-hard">ASEGURADO</span></h3>
                          <p className="text-white/90 font-medium text-lg mb-8 drop-shadow-md leading-snug">Somos la academia con mayor porcentaje de ingresantes a San Marcos y Villarreal.</p>
                          <Link to="/ciclos" className="w-full bg-white text-brand-darkblue hover:bg-brand-cyan hover:text-white py-4 rounded-xl font-black uppercase tracking-widest text-center shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 group/btn">
                            VER CICLOS 2026 <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Pillars Section */}
          <section className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
            <div className="container mx-auto px-4 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="w-full bg-brand-gradient py-4 md:py-6 transform skew-x-[-2deg] shadow-lg rounded-lg flex justify-center items-center">
                  <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-display italic tracking-wider transform skew-x-[2deg]">Nuestros Pilares</h2>
                </div>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {[
                  { title: "Excelencia\nAcadémica", icon: <Award size={40} strokeWidth={1.5} />, text: "Formación de alto nivel para alcanzar tus metas universitarias con rigurosidad y disciplina." },
                  { title: "Preparación\nIntegral", icon: <Layers size={40} strokeWidth={1.5} />, text: "Habilidades y conocimientos clave para una transición universitaria exitosa y duradera." },
                  { title: "Educación\nen Equipo", icon: <Users size={40} strokeWidth={1.5} />, text: "Trabajamos junto a los padres para apoyar el crecimiento académico y personal de cada estudiante." }
                ].map((pilar, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: idx * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="group bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center h-full">
                      <div className="mb-8 relative">
                        <div className="w-24 h-24 border-[3px] border-brand-cyan rounded-2xl transform rotate-45 flex items-center justify-center shadow-md group-hover:bg-brand-cyan group-hover:scale-110 transition-all duration-500">
                          <div className="transform -rotate-45 text-brand-cyan group-hover:text-white transition-colors duration-500">
                            {pilar.icon}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-brand-blue mb-4 leading-tight whitespace-pre-line">{pilar.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">{pilar.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Offer Section */}
          <section className="relative py-20 bg-brand-gradient overflow-hidden pb-32">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            <div className="container mx-auto px-4 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex justify-center mb-16"
              >
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-10 py-4 shadow-xl transform hover:scale-105 transition duration-300">
                  <h2 className="text-white font-black text-xl md:text-2xl uppercase tracking-wide drop-shadow-sm text-center">¿QUÉ TE OFRECEMOS?</h2>
                </div>
              </motion.div>
              <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0">
                <div className="space-y-16 text-center lg:text-right order-2 lg:order-1">
                  {[
                    { num: "01.", title: "DOCENTES\nCALIFICADOS" },
                    { num: "02.", title: "ASESORÍA\nPSICO\nPEDAGÓGICA" }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: idx * 0.2 + 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center lg:items-end group cursor-default"
                    >
                      <div className="w-14 h-14 border-[3px] border-white rounded-xl transform rotate-45 mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:bg-white/20 transition-all duration-300 group-hover:rotate-90"></div>
                      <div className="text-white">
                        <h3 className="font-black text-5xl md:text-6xl mb-2 leading-none opacity-80">{item.num}</h3>
                        <h4 className="font-black text-3xl md:text-4xl lg:text-5xl leading-none tracking-tight whitespace-pre-line">{item.title}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="relative h-[400px] md:h-[550px] flex items-end justify-center order-1 lg:order-2 -mt-10 md:mt-0">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="h-full w-full flex justify-center"
                  >
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-white opacity-20 blur-[100px] rounded-full z-0"></div>
                    <img src="https://res.cloudinary.com/dqgcraerm/image/upload/v1764565000/Captura_de_pantalla_2025-11-30_235526-removebg-preview_zwv9qz.png" alt="Estudiantes Innovamas" className="h-full object-cover relative z-10 drop-shadow-2xl transform hover:scale-105 transition duration-700" style={{ maskImage: 'linear-gradient(black 80%, transparent 100%)' }} />
                  </motion.div>
                </div>
                <div className="space-y-16 text-center lg:text-left order-3">
                  {[
                    { num: "03.", title: "MATERIAL\nDIDÁCTICO" },
                    { num: "04.", title: "SIMULACROS\nTIPO EXAMEN" }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: idx * 0.2 + 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center lg:items-start group cursor-default"
                    >
                      <div className="w-14 h-14 border-[3px] border-white rounded-xl transform rotate-45 mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:bg-white/20 transition-all duration-300 group-hover:rotate-90"></div>
                      <div className="text-white">
                        <h3 className="font-black text-5xl md:text-6xl mb-2 leading-none opacity-80">{item.num}</h3>
                        <h4 className="font-black text-3xl md:text-4xl lg:text-5xl leading-none tracking-tight whitespace-pre-line">{item.title}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-24 bg-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="mb-16 text-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <span className="bg-brand-blue text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">Nuestros Cachimbos</span>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-800 font-display mt-4 leading-tight">Historias de <span className="text-brand-magenta italic">Éxito</span></h2>
                  <div className="w-24 h-2 bg-brand-yellow mx-auto mt-4 rounded-full"></div>
                  <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">El esfuerzo y la dedicación siempre tienen recompensa. Conoce los testimonios de quienes confiaron en nuestra academia y hoy son universitarios.</p>
                </motion.div>
              </div>
            </div>
            <div className="w-full relative z-10 overflow-hidden">
              <div className="animate-marquee flex gap-8 py-4 hover:[animation-play-state:paused]">
                {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
                  <div key={idx} className="w-[320px] md:w-[400px] shrink-0">
                    <div className={`relative h-full bg-gradient-to-br ${t.color} p-8 rounded-[2.5rem] shadow-xl ${t.shadow} text-white flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105`}>
                      <div className="absolute top-6 right-6 opacity-20">
                        <Quote size={64} fill="currentColor" stroke="none" />
                      </div>
                      <div className="relative mb-6">
                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white/30 p-1 shadow-lg">
                          <img src={t.image} alt={t.name} className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="absolute bottom-0 -right-2 bg-white text-brand-darkblue p-1.5 rounded-full shadow-md">
                          <Award size={16} />
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black font-display mb-1 tracking-tight">{t.name}</h3>
                      <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">{t.career}</span>
                      <p className="text-white/90 text-sm md:text-base italic leading-relaxed font-medium mb-4 relative z-10">{t.text}</p>
                      <div className="mt-auto pt-6 border-t border-white/20 w-full flex justify-center">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} className="fill-brand-yellow text-brand-yellow" />)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
