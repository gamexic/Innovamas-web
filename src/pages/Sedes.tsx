import { MapPin, Phone, Globe, ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Sedes() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Header variant="nosotros" />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-teal-400 pt-20 pb-32 px-4 text-center text-white">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold italic mb-6 tracking-tight drop-shadow-md">
              Nuestras Sedes
            </h1>
            <p className="text-lg md:text-xl mb-8 font-medium opacity-90 max-w-2xl mx-auto">
              Encuentra la sede más cercana a ti. Presencial en Lima y Virtual para todo el Perú.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-sm md:text-base font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                Presencial en Lima Metropolitana
              </div>
              <div className="hidden md:block w-px h-6 bg-white/50"></div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                Virtual en todo el Perú
              </div>
            </div>
          </div>
        </section>

        {/* Sede Card Section */}
        <section className="container mx-auto px-4 -mt-16 mb-20 relative z-10 space-y-8">
          {/* Centro de Lima */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
            
            {/* Image */}
            <div className="lg:w-1/3 relative h-64 lg:h-auto">
              <img 
                src="https://res.cloudinary.com/dqgcraerm/image/upload/v1764604912/Captura_de_pantalla_2025-12-01_110108_luhzze.webp"
                alt="Sede Centro de Lima" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-teal-400 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Sede Oficial
              </div>
            </div>

            {/* Info */}
            <div className="lg:w-1/3 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-8">
                Centro de Lima
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-slate-600">
                  <MapPin className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-lg">Avenida Uruguay 351, Lima, Perú</span>
                </div>
                
                <div className="flex items-center gap-4 text-slate-800 font-bold">
                  <Phone className="w-6 h-6 text-teal-500 shrink-0" />
                  <span className="text-lg">919 676 084</span>
                </div>
                
                <div className="flex items-center gap-4 text-slate-500">
                  <Globe className="w-6 h-6 shrink-0" />
                  <span className="text-lg">innovamascorp.com</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:w-1/3 h-64 lg:h-auto bg-gray-200 relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.766144579138!2d-77.03960002414704!3d-12.059600043431668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c74102927d%3A0x62916c4918e55e09!2sAv.%20Uruguay%20351%2C%20Lima%2015001!5e0!3m2!1sen!2spe!4v1700000000000!5m2!1sen!2spe" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
              <a href="https://maps.google.com/?q=Av.+Uruguay+351,+Lima" target="_blank" rel="noopener noreferrer" className="absolute bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 shadow-lg transition-colors z-10">
                <ExternalLink size={18} />
                Ver en Maps
              </a>
            </div>

          </div>

          {/* Comas */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
            
            {/* Image */}
            <div className="lg:w-1/3 relative h-64 lg:h-auto">
              <img 
                src="https://res.cloudinary.com/dqgcraerm/image/upload/v1765854776/Gemini_Generated_Image_hf5hj9hf5hj9hf5h_omdr1m.jpg"
                alt="Sede Comas" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-teal-400 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Sede Oficial
              </div>
            </div>

            {/* Info */}
            <div className="lg:w-1/3 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-8">
                Comas
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-slate-600">
                  <MapPin className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-lg">Av. Túpac Amaru 390, Comas</span>
                </div>
                
                <div className="flex items-center gap-4 text-slate-800 font-bold">
                  <Phone className="w-6 h-6 text-teal-500 shrink-0" />
                  <span className="text-lg">919 676 084</span>
                </div>
                
                <div className="flex items-center gap-4 text-slate-500">
                  <Globe className="w-6 h-6 shrink-0" />
                  <span className="text-lg">innovamascorp.com</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:w-1/3 h-64 lg:h-auto bg-gray-200 relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.287790240836!2d-77.04573162414896!3d-11.95454694340578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d01111111111%3A0x1111111111111111!2sAv.%20T%C3%BApac%20Amaru%20390%2C%20Comas%2015328!5e0!3m2!1sen!2spe!4v1700000000000!5m2!1sen!2spe" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
              <a href="https://maps.google.com/?q=Av.+Túpac+Amaru+390,+Comas" target="_blank" rel="noopener noreferrer" className="absolute bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 shadow-lg transition-colors z-10">
                <ExternalLink size={18} />
                Ver en Maps
              </a>
            </div>

          </div>

          {/* San Juan de Lurigancho */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
            
            {/* Image */}
            <div className="lg:w-1/3 relative h-64 lg:h-auto">
              <img 
                src="https://res.cloudinary.com/dqgcraerm/image/upload/v1765854367/FyA-7-1024x565_aakekd.webp"
                alt="Sede San Juan de Lurigancho" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-teal-400 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Sede Oficial
              </div>
            </div>

            {/* Info */}
            <div className="lg:w-1/3 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-8">
                San Juan de Lurigancho
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-slate-600">
                  <MapPin className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-lg">IE FE Y ALEGRIA N°5</span>
                </div>
                
                <div className="flex items-center gap-4 text-slate-800 font-bold">
                  <Phone className="w-6 h-6 text-teal-500 shrink-0" />
                  <span className="text-lg">919 676 084</span>
                </div>
                
                <div className="flex items-center gap-4 text-slate-500">
                  <Globe className="w-6 h-6 shrink-0" />
                  <span className="text-lg">innovamascorp.com</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:w-1/3 h-64 lg:h-auto bg-gray-200 relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.123456789!2d-77.0123456789!3d-12.0123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sIE%20FE%20Y%20ALEGRIA%20N%C2%B05!5e0!3m2!1sen!2spe!4v1700000000000!5m2!1sen!2spe" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
              <a href="https://maps.google.com/?q=IE+FE+Y+ALEGRIA+N°5,+San+Juan+de+Lurigancho" target="_blank" rel="noopener noreferrer" className="absolute bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 shadow-lg transition-colors z-10">
                <ExternalLink size={18} />
                Ver en Maps
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
