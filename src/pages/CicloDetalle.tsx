import { useLocation, Link } from 'react-router-dom';
import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, Target, Layers, Calendar, MapPin, Hourglass, UserCheck, 
  ClipboardCheck, BookOpen, Zap, CirclePlay, Clock, Brain, Compass, Award, ChartColumn, 
  Sun, Sunset, Star, Check, Wifi
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Mock data - in a real app, this would come from a CMS or API
const CICLOS_DATA = {
  'sm-anual': {
    university: 'San Marcos',
    name: 'Anual Escala San Marcos',
    subtitle: 'CICLO ACADÉMICO',
    color: '#D32F2F',
    bgColor: 'bg-[#D32F2F]',
    bannerImg: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1773013258/ANUAL-SM-NUEVOIN.jpg_k414pb.webp',
    description: 'Estudiantes que inician o tienen poca experiencia preuniversitaria. El objetivo es reforzar los temas mas frecuentes del prospecto de admisión y así llegar preparado al próximo exámen de admisión.',
    methodology: '50% Práctico + 50% Teoría',
    startDate: '09 y 16 de Marzo',
    endDate: '23 de Diciembre',
    duration: '42 semanas',
    modalidad: 'Presencial / Virtual',
    horarios: {
      presencial: [
        { turno: 'Mañana', hora: '8:00 a.m. a 2:00 p.m.', icon: <Sun />, color: 'orange' }
      ],
      virtual: [
        { turno: 'Mañana', hora: '8:00 a.m. a 2:00 p.m.', icon: <Sun />, color: 'orange' },
        { turno: 'Tarde', hora: '4:00 p.m. a 9:30 p.m.', icon: <Sunset />, color: 'rose' }
      ]
    },
    investment: {
      presencial: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1772219888/WhatsApp_Image_2026-02-27_at_13.35.28_qyqteq.webp',
      virtual: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1772219887/WhatsApp_Image_2026-02-27_at_13.35.28_1_iah8jg.webp',
    },
  },
  'unfv-anual': {
    university: 'Villarreal',
    name: 'Anual Escala Villarreal',
    subtitle: 'CICLO ACADÉMICO',
    color: '#EF6C00',
    bgColor: 'bg-[#EF6C00]',
    bannerImg: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1773013258/ANUAL-VILLA-NUEVO-INN.jpg_ua612z.webp',
    description: 'Estudiantes que inician o tienen poca experiencia preuniversitaria. El objetivo es reforzar los temas mas frecuentes del prospecto de admisión y así llegar preparado al próximo exámen de admisión.',
    methodology: '50% Práctico + 50% Teoría',
    startDate: '09 y 16 de Marzo',
    endDate: '23 de Diciembre',
    duration: '42 semanas',
    modalidad: 'Presencial / Virtual',
    horarios: {
      presencial: [
        { turno: 'Mañana', hora: '8:00 a.m. a 2:00 p.m.', icon: <Sun />, color: 'orange' }
      ],
      virtual: [
        { turno: 'Mañana', hora: '8:00 a.m. a 2:00 p.m.', icon: <Sun />, color: 'orange' },
        { turno: 'Tarde', hora: '4:00 p.m. a 9:30 p.m.', icon: <Sunset />, color: 'rose' }
      ]
    },
    investment: {
      presencial: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1772220278/WhatsApp_Image_2026-02-27_at_13.34.51_axqxma.webp',
      virtual: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1772220282/WhatsApp_Image_2026-02-27_at_13.34.51_1_ttiopp.webp',
    },
  },
  'sm-semestral': {
    university: 'San Marcos',
    name: 'Semestral San Marcos',
    subtitle: 'CICLO ACADÉMICO',
    color: '#D32F2F',
    bgColor: 'bg-[#D32F2F]',
    bannerImg: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1773013258/SM-SEMESTRAL-uevoNN.jpg_sp8hsn.webp',
    description: 'Estudiantes que desean fortalecer sus conocimientos académicos y prepararse de manera adecuada para el proceso de admisión universitaria. A lo largo del ciclo, los estudiantes podrán reforzar las principales áreas de estudio y desarrollar habilidades que les permitan mejorar su rendimiento y afrontar con mayor confianza el examen de admisión.',
    methodology: 'NIVELACIÓN Y BASE',
    startDate: '09 y 16 de Marzo',
    endDate: '29 de Agosto',
    duration: '25 semanas',
    modalidad: 'Presencial / Virtual',
    horarios: {
      presencial: [
        { turno: 'Mañana', hora: '8:00 a.m. a 2:00 p.m.', icon: <Sun />, color: 'orange' }
      ],
      virtual: [
        { turno: 'Mañana', hora: '8:00 a.m. a 2:00 p.m.', icon: <Sun />, color: 'orange' },
        { turno: 'Tarde', hora: '4:00 p.m. a 9:30 p.m.', icon: <Sunset />, color: 'rose' }
      ]
    },
    investment: {
      presencial: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1772219920/WhatsApp_Image_2026-02-27_at_13.35.39_sosuda.webp',
      virtual: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1772219920/WhatsApp_Image_2026-02-27_at_13.35.39_1_dhdp1l.webp',
    },
  },
  'sm-escolar-sabatino': {
    university: 'San Marcos',
    name: 'Escolar Sabatino',
    subtitle: 'CICLO ACADÉMICO',
    color: '#D32F2F',
    bgColor: 'bg-[#D32F2F]',
    bannerImg: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1773013258/SM-ESCOLAR.jpg_igvzdv.webp',
    description: 'Estudiantes de secundaria, con el objetivo de reforzar lo aprendido y obtengan un buen nivel académico para el desarrollo del año escolar.',
    methodology: 'BASE PRE-UNIVERSITARIA',
    startDate: '04 de Abril',
    endDate: '23 de Diciembre',
    duration: '38 semanas',
    modalidad: 'Presencial / Virtual',
    dias: 'Sábado',
    horarios: {
      presencial: [
        { turno: 'Mañana', hora: '8:00 a.m. a 2:00 p.m.', icon: <Sun />, color: 'orange' }
      ],
      virtual: [
        { turno: 'Mañana', hora: '8:00 a.m. a 2:00 p.m.', icon: <Sun />, color: 'orange' }
      ]
    },
    investment: {
      presencial: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1772220107/WhatsApp_Image_2026-02-27_at_13.35.50_2_bghjat.webp',
      virtual: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1772220107/WhatsApp_Image_2026-02-27_at_13.35.50_2_bghjat.webp',
    },
  },
  'sm-escolar-interdiario': {
    university: 'San Marcos',
    name: 'Escolar Interdiario',
    subtitle: 'CICLO ACADÉMICO',
    color: '#D32F2F',
    bgColor: 'bg-[#D32F2F]',
    bannerImg: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1773013258/SM-ESCOLAR.jpg_igvzdv.webp',
    description: 'Estudiantes de secundaria, con el objetivo de reforzar lo aprendido y obtengan un buen nivel académico para el desarrollo del año escolar.',
    methodology: 'BASE PRE-UNIVERSITARIA',
    startDate: '06 de Abril',
    endDate: '23 de Diciembre',
    duration: '38 semanas',
    modalidad: 'Presencial / Virtual',
    dias: 'Lunes, Miércoles y Viernes',
    horarios: {
      presencial: [
        { turno: 'Mañana', hora: '8:00 a.m. a 2:00 p.m.', icon: <Sun />, color: 'orange' }
      ],
      virtual: [
        { turno: 'Mañana', hora: '8:00 a.m. a 2:00 p.m.', icon: <Sun />, color: 'orange' },
        { turno: 'Tarde', hora: '4:00 p.m. a 9:30 p.m.', icon: <Sunset />, color: 'rose' }
      ]
    },
    investment: {
      presencial: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1772220106/WhatsApp_Image_2026-02-27_at_13.35.50_3_o1jjug.webp',
      virtual: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1772220106/WhatsApp_Image_2026-02-27_at_13.35.50_3_o1jjug.webp',
    },
  },
  'unfv-semestral': {
    university: 'Villarreal',
    name: 'Semestral Villarreal',
    subtitle: 'CICLO ACADÉMICO',
    color: '#EF6C00',
    bgColor: 'bg-[#EF6C00]',
    bannerImg: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1773013258/SEMESTRAL-VILLA-NUEVOIII.jpg_oxvndn.webp',
    description: 'Estudiantes que desean fortalecer sus conocimientos académicos y prepararse de manera adecuada para el proceso de admisión universitaria. A lo largo del ciclo, los estudiantes podrán reforzar las principales áreas de estudio y desarrollar habilidades que les permitan mejorar su rendimiento y afrontar con mayor confianza el examen de admisión.',
    methodology: 'NIVELACIÓN Y BASE',
    startDate: '09 y 16 de Marzo',
    endDate: '2 de Agosto',
    duration: '25 semanas',
    modalidad: 'Presencial / Virtual',
    horarios: {
      presencial: [
        { turno: 'Mañana', hora: '8:00 a.m. a 2:00 p.m.', icon: <Sun />, color: 'orange' }
      ],
      virtual: [
        { turno: 'Mañana', hora: '8:00 a.m. a 2:00 p.m.', icon: <Sun />, color: 'orange' },
        { turno: 'Tarde', hora: '4:00 p.m. a 9:30 p.m.', icon: <Sunset />, color: 'rose' }
      ]
    },
    investment: {
      presencial: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1772220336/WhatsApp_Image_2026-02-27_at_13.35.03_jwensv.webp',
      virtual: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1772220339/WhatsApp_Image_2026-02-27_at_13.35.04_jmpsoz.webp',
    },
  },
  'unfv-repaso': {
    university: 'Villarreal',
    name: 'Repaso Intensivo Villarreal',
    subtitle: 'CICLO ACADÉMICO',
    color: '#EF6C00',
    bgColor: 'bg-[#EF6C00]',
    bannerImg: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1773013258/REPASO-VILLA-NUEVO-IN.jpg_xx1adf.webp',
    description: 'Estudiantes con base teórica que buscan perfeccionar su técnica de examen y velocidad de resolución.',
    methodology: '100% PRÁCTICA DECO',
    startDate: '09 y 16 de Marzo',
    endDate: '28 de Marzo',
    duration: '4 semanas',
    modalidad: 'Presencial / Virtual',
    horarios: {
      presencial: [
        { turno: 'Mañana', hora: '8:00 a.m. a 9:30 p.m.', icon: <Sun />, color: 'orange' }
      ],
      virtual: [
        { turno: 'Mañana', hora: '8:00 a.m. a 9:30 p.m.', icon: <Sun />, color: 'orange' }
      ]
    },
    investment: {
      presencial: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1772220385/WhatsApp_Image_2026-02-27_at_13.35.14_vwbe9g.webp',
      virtual: 'https://res.cloudinary.com/dqgcraerm/image/upload/v1772220385/WhatsApp_Image_2026-02-27_at_13.35.14_1_lugknl.webp',
    },
    benefits: {
      presencial: [
        'Acceso a biblioteca física', 
        'Asesoría personalizada en aula', 
        'Simulacros tipo examen impresos', 
        'Ambiente de estudio exclusivo',
        'Las clases de 4pm-9:30pm son en vivo por zoom'
      ]
    }
  },
  // ... other cycles can be added here
};

export default function CicloDetalle() {
  const location = useLocation();
  // Parse query parameters correctly
  const queryParams = new URLSearchParams(location.search);
  const cicloId = queryParams.get('id') || 'sm-anual';
  const ciclo = CICLOS_DATA[cicloId] || CICLOS_DATA['sm-anual'];

  if (!ciclo) {
    return <div>Ciclo no encontrado</div>; // Or a 404 component
  }

  return (
    <>
      <Header variant="nosotros" />
      <main className="bg-[#f8fafc] min-h-screen pb-20 font-sans">
        <div className="animate-fade-in">
          <section className="relative pt-12 md:pt-20 pb-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-50 via-cyan-50 to-transparent rounded-full blur-3xl opacity-60 -z-10 translate-x-1/3 -translate-y-1/4"></div>
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <Link to="/ciclos" className="flex items-center gap-2 text-slate-500 hover:text-brand-blue transition-colors font-bold text-sm uppercase tracking-wider">
                  <ArrowLeft size={18} /> Volver a Ciclos
                </Link>
                <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white ${ciclo.bgColor}`}>
                  {ciclo.university}
                </span>
              </div>

              <div className="w-full max-w-6xl mx-auto mb-12">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative group w-full aspect-[1920/850]">
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
                        <img alt={ciclo.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 object-center" src={ciclo.bannerImg} />
                    </div>
                </motion.div>
              </div>

              <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                <div className="w-full lg:w-1/2 space-y-8 relative z-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 font-display italic tracking-tight leading-none mb-4">
                            <span className="block text-brand-blue text-2xl md:text-3xl font-extrabold not-italic mb-2 tracking-normal opacity-90">{ciclo.subtitle}</span>
                            {ciclo.name}
                        </h1>
                        <div className="h-2 w-32 bg-brand-cyan rounded-full mb-8"></div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-brand-blue mb-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-2 rounded-lg text-brand-blue shrink-0"><Target size={24} /></div>
                                <div>
                                    <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-1">¿Para quién es este ciclo?</h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">{ciclo.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-3 bg-slate-900 text-white px-5 py-2.5 rounded-full font-bold text-sm mb-8 shadow-lg">
                            <Layers size={18} className="text-brand-yellow" />
                            <span>METODOLOGÍA: <span className="text-brand-cyan">{ciclo.methodology}</span></span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            <InfoCard icon={<Calendar />} label="Inicio" value={ciclo.startDate} color="cyan" />
                            <InfoCard icon={<Calendar />} label="Fin" value={ciclo.endDate} color="magenta" />
                            <InfoCard icon={<MapPin />} label="Modalidad" value={ciclo.modalidad} color="blue" isSmall={true} />
                            <InfoCard icon={<Hourglass />} label="Duración" value={ciclo.duration} color="yellow" />
                        </div>
                    </motion.div>
                </div>
                <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px] flex items-center justify-center">
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-cyan rounded-full blur-[80px] opacity-30"></div>
                        <div className="relative w-full h-full max-h-[650px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                            <div className="absolute inset-0 bg-brand-darkblue/10 group-hover:bg-transparent transition-colors z-10"></div>
                            <img alt="Estudiante Innovamas" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://res.cloudinary.com/dqgcraerm/image/upload/v1764649820/Captura_de_pantalla_2025-12-01_232846_megxlf.webp" />
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/90 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-lg border border-white/50 z-20 cursor-pointer hover:scale-105 transition-transform duration-300 group/panel">
                                <div className="flex items-center justify-between gap-2">
                                    <div>
                                        <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Matrícula 2026</p>
                                        <p className="text-brand-darkblue font-black text-lg md:text-xl leading-none group-hover/panel:text-brand-cyan transition-colors">HORARIO DE CLASE</p>
                                    </div>
                                    <div className="bg-brand-magenta text-white p-2 md:p-3 rounded-full shadow-lg group-hover/panel:bg-brand-cyan transition-colors shrink-0">
                                        <Wifi className="md:w-6 md:h-6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
              </div>
            </div>
          </section>
          
          <BenefitsSection />

          <section className="container mx-auto px-4 py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-800 font-display uppercase tracking-tight">Modalidades</h2>
                <div className="w-24 h-2 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-[95%] mx-auto">
                <ModalityCard type="presencial" investmentImg={ciclo.investment.presencial} customHorarios={ciclo.horarios?.presencial} customBenefits={ciclo.benefits?.presencial} customDays={ciclo.dias} />
                <ModalityCard type="virtual" investmentImg={ciclo.investment.virtual} customHorarios={ciclo.horarios?.virtual} customBenefits={ciclo.benefits?.virtual} customDays={ciclo.dias} />
            </div>
          </section>

          <div className="container mx-auto px-4 pb-12 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-bold text-slate-700 mb-6">¿Estás listo para alcanzar tu vacante?</h3>
                <Link to="/contacto" className="inline-flex items-center gap-3 bg-brand-magenta hover:bg-pink-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-wide shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    Solicitar Matrícula <ArrowRight size={20} />
                </Link>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Helper Components
const InfoCard = ({ icon, label, value, color, isSmall = false }) => {
  const colors = {
    cyan: 'border-brand-cyan bg-cyan-100 text-brand-cyan',
    magenta: 'border-brand-magenta bg-pink-100 text-brand-magenta',
    blue: 'border-brand-blue bg-indigo-100 text-brand-blue',
    yellow: 'border-brand-yellow bg-yellow-100 text-yellow-600',
  };

  return (
    <div className={`bg-white p-6 rounded-2xl shadow-lg border-l-8 ${colors[color]} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group`}>
        <div className="flex items-center gap-4 mb-2">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform ${colors[color].split(' ')[1]}`}>
                {icon}
            </div>
            <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">{label}</p>
        </div>
        <p className={`${isSmall ? 'text-xl' : 'text-2xl'} font-black text-slate-800 pl-2`}>{value}</p>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
      { icon: <UserCheck />, title: "Tutor por Aula", text: "Seguimiento personalizado y permanente de tu avance académico." },
      { icon: <ClipboardCheck />, title: "Simulacros Semanales", text: "Evaluaciones tipo examen de admisión para medir tu progreso real." },
      { icon: <BookOpen />, title: "Compendios Académicos", text: "Material teórico y práctico desarrollado exclusivamente para el ciclo." },
      { icon: <Zap />, title: "Evaluaciones Diarias", text: "Pruebas interactivas (Quizizz) para reforzar lo aprendido en cada sesión." },
      { icon: <CirclePlay />, title: "Clases Grabadas", text: "Acceso 24/7 a la videoteca con todas las sesiones del ciclo." },
      { icon: <Clock />, title: "Seminarios Extra", text: "Refuerzo académico en horarios adicionales fuera del turno regular." },
      { icon: <Brain />, title: "Soporte Psicopedagógico", text: "Acompañamiento emocional y estrategias de estudio efectivas." },
      { icon: <Compass />, title: "Test Vocacional", text: "Orientación profesional para asegurar tu elección de carrera." },
      { icon: <Award />, title: "Docentes Expertos", text: "Plana docente con amplia experiencia académica y didáctica." },
      { icon: <ChartColumn />, title: "Informe de Notas", text: "Reporte detallado de asistencia diaria y rendimiento académico." },
  ];
  return (
      <section className="w-full mt-0">
          <div className="container mx-auto px-4">
              <div className="bg-gradient-to-r from-blue-600 to-teal-400 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                  <div className="p-8 md:p-12 lg:p-16 relative z-20">
                      <div className="mb-10 text-center">
                          <h2 className="text-4xl md:text-5xl font-black text-white font-display italic tracking-tight">BENEFICIOS <span className="text-brand-yellow">PREMIUM</span></h2>
                          <div className="w-24 h-1 bg-white mx-auto mt-4 rounded-full opacity-50"></div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                          {benefits.map((b, i) => (
                              <div key={i} className="flex gap-4 group">
                                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300 shadow-lg">
                                      {React.cloneElement(b.icon, { className: 'text-white' })}
                                  </div>
                                  <div>
                                      <h4 className="text-white font-bold text-lg leading-tight group-hover:text-brand-yellow transition-colors mb-1">{b.title}</h4>
                                      <p className="text-blue-100 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">{b.text}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

const ModalityCard = ({ type, investmentImg, customHorarios, customBenefits, customDays }) => {
  const isPresencial = type === 'presencial';
  const details = {
    presencial: {
      title: 'PRESENCIAL',
      subtitle: 'Experiencia completa en campus',
      gradient: 'from-brand-blue to-blue-600',
      icon: <MapPin className="text-white" size={32} />,
      benefits: customBenefits || ['Acceso a biblioteca física', 'Asesoría personalizada en aula', 'Simulacros tipo examen impresos', 'Ambiente de estudio exclusivo'],
      benefitIconColor: 'text-brand-cyan',
      buttonClass: 'bg-brand-darkblue hover:bg-brand-blue',
      horarios: customHorarios || [
        { turno: 'Mañana', hora: '8:00 a.m. a 2:00 p.m.', icon: <Sun />, color: 'orange' },
        { turno: 'Tarde', hora: '3:00 p.m. a 7:30 p.m.', icon: <Sunset />, color: 'rose' },
      ]
    },
    virtual: {
      title: 'VIRTUAL',
      subtitle: 'Clases en vivo HD desde casa',
      gradient: 'from-purple-600 to-brand-magenta',
      icon: <Wifi className="text-white" size={32} />,
      benefits: customBenefits || ['Clases grabadas en Full HD', 'Plataforma disponible 24/7', 'Simulacros virtuales con ranking', 'Material digital descargable'],
      benefitIconColor: 'text-purple-500',
      buttonClass: 'bg-purple-600 hover:bg-purple-700',
      horarios: customHorarios || [
        { turno: 'Mañana', hora: '8:00 a.m. a 2:00 p.m.', icon: <Sun />, color: 'orange' },
        { turno: 'Tarde', hora: '3:00 p.m. a 7:30 p.m.', icon: <Sunset />, color: 'rose' },
      ]
    }
  };

  const data = details[type];

  return (
    <div className="group bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col relative">
      <div className={`bg-gradient-to-r ${data.gradient} p-8 relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div className="relative z-10 flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">{data.icon}</div>
              <div>
                  <h3 className="text-white font-black text-3xl tracking-tight uppercase italic">{data.title}</h3>
                  <p className={`${isPresencial ? 'text-blue-100' : 'text-purple-100'} text-sm font-medium`}>{data.subtitle}</p>
              </div>
          </div>
      </div>
      <div className="p-8 pb-4">
          <div className={`${isPresencial ? 'bg-slate-50/50' : 'bg-purple-50/30'} rounded-2xl p-6 border ${isPresencial ? 'border-slate-100' : 'border-purple-50'}`}>
              <h4 className="flex items-center gap-2 text-slate-800 font-bold uppercase text-sm mb-6 tracking-wider">
                  <Clock className={isPresencial ? 'text-brand-blue' : 'text-purple-600'} size={16} /> Horarios de Clase
              </h4>
              <div className={`mb-4 bg-white px-4 py-2 rounded-lg border ${isPresencial ? 'border-slate-200' : 'border-purple-100'} inline-block`}>
                  <span className={`${isPresencial ? 'text-brand-blue' : 'text-purple-600'} font-black uppercase text-xs tracking-widest`}>Días: {customDays || 'Lunes a Sábado'}</span>
              </div>
              <div className="grid grid-cols-1 gap-4">
                  {data.horarios.map(h => <HorarioCard key={h.turno} {...h} />)}
              </div>
          </div>
      </div>
      <div className="px-8 pb-4">
          <div className="border-t border-slate-100 pt-4">
              <h4 className="flex items-center gap-2 text-slate-800 font-bold uppercase text-sm mb-3 tracking-wider">
                  <Star className="text-brand-yellow fill-brand-yellow" size={16} /> {isPresencial ? 'Beneficios Exclusivos' : 'Beneficios Digitales'}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                          <Check className={data.benefitIconColor} size={16} /> {b}
                      </li>
                  ))}
              </ul>
          </div>
      </div>
      <div className="p-8 pt-2 mt-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 group-hover:scale-[1.01] transition-transform duration-500">
              <img alt={`Inversión ${data.title}`} className="w-full h-auto object-cover" src={investmentImg} />
          </div>
          <Link to="/contacto" className={`mt-6 w-full flex items-center justify-center gap-2 text-white py-4 rounded-xl font-black uppercase tracking-wide transition-colors shadow-lg ${data.buttonClass}`}>
              Matricúlate Ahora <ArrowRight size={18} />
          </Link>
      </div>
    </div>
  );
};

const HorarioCard = ({ turno, hora, icon, color }) => {
  const colors = {
    orange: 'bg-orange-50 border-orange-200 text-orange-700',
    rose: 'bg-rose-50 border-rose-200 text-rose-700'
  };
  const gradient = {
    orange: 'from-orange-400 to-yellow-400',
    rose: 'from-pink-500 to-rose-400'
  }
  return (
    <div className={`relative overflow-hidden p-6 rounded-2xl border-2 ${colors[color]} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group/item`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 relative z-10">
            <div className={`w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br ${gradient[color]} flex items-center justify-center text-white shadow-lg transform group-hover/item:rotate-6 transition-transform duration-300`}>
                {icon}
            </div>
            <div className="flex-grow">
                <h5 className={`font-bold text-sm ${colors[color].split(' ')[2]} uppercase tracking-widest mb-1 opacity-90`}>{turno}</h5>
                <div className="flex items-center gap-3">
                    <span className="font-display font-black text-3xl sm:text-4xl text-slate-800 tracking-tight leading-none">{hora}</span>
                </div>
            </div>
        </div>
        {React.cloneElement(icon, { className: `absolute -right-6 -bottom-6 w-32 h-32 ${colors[color].split(' ')[2]} opacity-5 transform -rotate-12 pointer-events-none` })}
    </div>
  );
};
