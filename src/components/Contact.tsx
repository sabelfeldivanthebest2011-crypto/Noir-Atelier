import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Compass, Phone, Mail, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import { LOCATIONS } from '../data';

export default function Contact() {
  const [activeVenue, setActiveVenue] = useState(LOCATIONS[0]);

  return (
    <section id="reserve" className="py-24 md:py-32 bg-[#080808] border-b border-white/5 relative">
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gold-accent/5 rounded-full blur-[130px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div className="space-y-4">
            <span className="font-mono text-xs text-gold-accent tracking-[0.3em] uppercase block">
              / НА ПУТИ К НАМ
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-soft-cream">
              Координаты.
            </h2>
          </div>
          <p className="max-w-xs font-sans text-xs text-warm-beige/70 leading-relaxed font-light">
            Найдите нас в тихих московских переулках. Мы встретим вас уютной атмосферой под мягким теплым светом.
          </p>
        </div>

        {/* Master layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Location Details switcher and direct contacts */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            
            {/* Swapping cards */}
            <div className="space-y-6">
              <span className="font-mono text-[9px] text-[#CBBCAE]/50 tracking-widest block uppercase">
                АКТИВНЫЙ ФИЛИАЛ КОФЕЙНИ
              </span>

              <div className="flex gap-4 border-b border-white/5 pb-4">
                {LOCATIONS.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setActiveVenue(loc)}
                    className={`font-sans text-sm tracking-wider pb-2 relative transition-all duration-300 ${
                      activeVenue.id === loc.id
                        ? 'text-gold-accent font-medium font-serif italic'
                        : 'text-soft-cream/40 hover:text-soft-cream'
                    }`}
                  >
                    {loc.name.split(' ')[0]}
                    {activeVenue.id === loc.id && (
                      <motion.div
                        layoutId="activeMapTab"
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-accent"
                      />
                    )}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVenue.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gold-accent shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-white/30 uppercase tracking-widest block">АДРЕС</span>
                      <p className="text-sm text-soft-cream font-sans font-light">
                        {activeVenue.address}, Москва, Россия
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-gold-accent shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-white/30 uppercase tracking-widest block">РЕЖИМ РАБОТЫ</span>
                      <p className="text-sm text-soft-cream font-sans font-light">
                        {activeVenue.hours}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Compass className="h-5 w-5 text-gold-accent shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-white/30 uppercase tracking-widest block">МЕТРО РЯДОМ</span>
                      <p className="text-sm text-soft-cream font-sans font-light">
                        станция {activeVenue.metro}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Direct Digital Communications Desk */}
            <div className="bg-brand-gray/30 p-6 border border-white/5 space-y-4 mt-8 lg:mt-0">
              <span className="font-mono text-[9px] text-gold-accent tracking-widest block">
                / ПО ВСЕМ ВОПРОСАМ
              </span>

              <div className="space-y-3 font-sans text-xs font-light">
                <a
                  href="tel:+74959990000"
                  className="flex items-center space-x-3 text-[#CBBCAE]/80 hover:text-gold-accent transition-colors duration-300 py-1"
                >
                  <Phone className="h-4 w-4 text-white/20" />
                  <span>+7 (495) 999-00-00</span>
                </a>
                
                <a
                  href="mailto:contact@noiratelier.coffee"
                  className="flex items-center space-x-3 text-[#CBBCAE]/80 hover:text-gold-accent transition-colors duration-300 py-1"
                >
                  <Mail className="h-4 w-4 text-white/20" />
                  <span>contact@noiratelier.coffee</span>
                </a>
              </div>

              <div className="pt-2 border-t border-white/5 text-[9px] font-mono text-[#CBBCAE]/30 text-left">
                NOIR ATELIER SPEC® // EST. 2026 МОСКВА РОССИЯ
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Vector Blueprint Grid map representation */}
          <div className="lg:col-span-7 bg-brand-gray/30 border border-white/5 p-8 relative min-h-[350px] flex flex-col justify-between overflow-hidden">
            
            {/* Elegant grid drawing background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:32px_32px] opacity-25" />
            
            <div className="relative z-10 space-y-1">
              <span className="font-mono text-[8px] text-gold-accent tracking-widest uppercase">
                КООРДИНАТНАЯ КАРТА v1.0
              </span>
              <h4 className="font-serif italic text-lg text-soft-cream">Сенсорное Пространство</h4>
            </div>

            {/* Simulated premium compass visual layout for mapping Moscow */}
            <div className="relative z-10 w-full h-48 border border-white/5 flex items-center justify-center bg-black/40 my-6">
              <div className="relative w-40 h-40 rounded-full border border-white/5 flex items-center justify-center">
                {/* Orbital compass lines */}
                <div className="absolute w-36 h-36 rounded-full border border-gold-accent/10 border-dashed animate-spin" style={{ animationDuration: '40s' }} />
                <div className="absolute w-20 h-20 rounded-full border border-white/10" />
                
                {/* Center pointer */}
                <div className="absolute h-[1px] w-28 bg-gradient-to-r from-transparent via-gold-accent/50 to-transparent rotate-45 transform" />
                <div className="absolute h-2 w-2 rounded-full bg-gold-accent" />

                {/* Simulated markers inside the coordinate grids */}
                <span className="absolute top-2 left-10 font-mono text-[8px] text-gold-accent font-bold animate-pulse">PAT_12®</span>
                <span className="absolute bottom-6 right-6 font-mono text-[8px] text-[#CBBCAE]/85">S_K_02</span>

                {/* Real-time coordinates */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[8px] text-white/30 uppercase tracking-widest text-center">
                  {activeVenue.id === 'patriarch-ponds' ? '55.7641° N, 37.5962° E' : '55.7538° N, 37.6416° E'}
                </div>
              </div>
            </div>

            {/* External routing trigger actions */}
            <div className="relative z-10 flex flex-wrap justify-between items-center gap-4 text-xs font-mono">
              <span className="text-[#CBBCAE]/45">НАВИГАЦИЯ, МОСКВА</span>
              <div className="flex gap-4">
                <a
                  href={`https://yandex.ru/maps/?text=${encodeURIComponent(activeVenue.address + ' Москва coffee')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-accent font-sans hover:underline flex items-center space-x-1"
                >
                  <span>Яндекс Карты →</span>
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeVenue.name + ' Noir Atelier Moscow')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <span>Google Карты</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
