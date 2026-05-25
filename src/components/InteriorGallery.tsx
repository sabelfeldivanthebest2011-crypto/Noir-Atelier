import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOCATIONS } from '../data';
import { LocationInfo } from '../types';
import { MapPin, Clock, Calendar, CheckCircle, Smartphone, User, Sparkles, ChevronRight } from 'lucide-react';

export default function InteriorGallery() {
  const [selectedBranch, setSelectedBranch] = useState<LocationInfo>(LOCATIONS[0]);
  const [bookingTime, setBookingTime] = useState<string | null>(null);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [isFinalized, setIsFinalized] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName.trim() && clientPhone.trim() && bookingTime) {
      setIsFinalized(true);
    }
  };

  const resetBookingState = () => {
    setBookingTime(null);
    setClientName('');
    setClientPhone('');
    setIsFinalized(false);
  };

  return (
    <section id="galleries" className="py-24 md:py-32 bg-[#0C0C0C] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div className="space-y-4">
            <span className="font-mono text-xs text-gold-accent tracking-[0.3em] uppercase block">
              / ГОРОДСКИЕ УБЕЖИЩА
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-soft-cream">
              Московские <span className="italic">филиалы.</span>
            </h2>
          </div>
          <p className="max-w-xs font-sans text-xs text-warm-beige/70 leading-relaxed font-light">
            Архитектурные убежища в самом сердце столицы. Эстетика дикого камня, теплого лампового звука винила и редких специальных лотов.
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => {
                setSelectedBranch(loc);
                resetBookingState();
              }}
              className={`text-left p-8 border transition-all duration-300 relative group overflow-hidden ${
                selectedBranch.id === loc.id
                  ? 'bg-brand-gray/60 border-gold-accent/40 shadow-xl'
                  : 'bg-transparent border-white/5 hover:border-white/15'
              }`}
            >
              {/* Active branch line accent */}
              {selectedBranch.id === loc.id && (
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gold-accent" />
              )}
              
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-gold-accent tracking-widest block">
                    {loc.ambientText}
                  </span>
                  <h3 className="text-2xl font-serif font-light text-soft-cream">
                    {loc.name}
                  </h3>
                </div>
                <span className="font-sans text-[11px] text-warm-beige/30 group-hover:text-warm-beige/80 transition-colors duration-300">
                  {loc.ruName}
                </span>
              </div>
              <p className="font-sans text-xs text-warm-beige/65 leading-relaxed font-light mb-4">
                {loc.address}
              </p>
              <div className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-widest text-[#CBBCAE]/50 group-hover:text-gold-accent transition-colors duration-300">
                <span>ПОСМОТРЕТЬ ИНТЕРЬЕР</span>
                <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>

        {/* Dynamic Display Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Atmosphere Image with detailed cards nested */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[16:9] md:aspect-[16:10] w-full overflow-hidden border border-white/5">
              <img
                src="/src/assets/images/noir_interior_1779691268035.png"
                alt={selectedBranch.name}
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
              
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap justify-between items-end gap-4">
                <div className="space-y-1.5">
                  <span className="font-mono text-[8px] tracking-[0.3em] text-[#CBBCAE]/60 uppercase">
                    СПЕЦИФИКАЦИЯ ПРОСТРАНСТВА // REZ_SPEC
                  </span>
                  <p className="font-serif text-lg italic text-soft-cream">
                    «В поисках пространственного резонанса».
                  </p>
                </div>
                <div className="flex space-x-1.5 font-mono text-[9px] text-[#CBBCAE] border border-white/10 bg-black/40 backdrop-blur-md px-3 py-1.5 uppercase">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping self-center mr-1" />
                  <span>КОФЕЙНЯ ОТКРЫТА ДО {selectedBranch.hours.split(" — ")[1]}</span>
                </div>
              </div>
            </div>

            {/* Micro Details on selected branch */}
            <div className="bg-brand-gray/30 p-8 border border-white/5 space-y-6">
              <h4 className="font-mono text-[10px] text-gold-accent tracking-widest uppercase">
                / ДИЗАЙН И АКУСТИЧЕСКАЯ СРЕДА
              </h4>
              <p className="font-sans text-xs md:text-sm text-warm-beige/85 leading-relaxed font-light">
                {selectedBranch.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/5 text-[10px] font-mono tracking-wider">
                <div>
                  <span className="block text-white/30 text-[8px] uppercase mb-1">МЕТРО</span>
                  <span className="text-soft-cream">{selectedBranch.metro}</span>
                </div>
                <div>
                  <span className="block text-white/30 text-[8px] uppercase mb-1">РАБОТА</span>
                  <span className="text-soft-cream">{selectedBranch.hours.replace('Ежедневно, ', '')}</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-white/30 text-[8px] uppercase mb-1">ДЕТАЛИ ПРОСТРАНСТВА</span>
                  <span className="text-gold-accent text-[9px] uppercase leading-relaxed block truncate">
                    {selectedBranch.features.join(' · ')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Private Tasting Counter Reservation Interface */}
          <div className="lg:col-span-5 bg-brand-gray/60 border border-white/5 p-8 backdrop-blur-md space-y-8 relative">
            <span className="absolute top-4 right-4 font-mono text-[8px] text-white/10 tracking-widest">
              СИСТЕМА РЕЗЕРВИРОВАНИЯ // V2
            </span>

            <div className="space-y-2">
              <span className="font-mono text-[9px] text-gold-accent tracking-widest block uppercase">
                04_ЗАБРОНИРОВАТЬ_СТОЛ_БАРИСТА
              </span>
              <h3 className="text-2xl font-serif font-light text-soft-cream">
                За столом бариста
              </h3>
              <p className="font-sans text-xs text-warm-beige/70 font-light leading-relaxed">
                Курс для начинающих бариста: 90 минут. Узнайте основы приготовления кофе на наших стойках.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!bookingTime ? (
                /* Step 1: Select Time Slot */
                <motion.div
                  key="step-time"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <label className="font-mono text-[9px] text-[#CBBCAE]/50 tracking-wider block uppercase">
                    ВЫБЕРИТЕ СВОБОДНЫЙ СЕАНС
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedBranch.baristaTableSlots.map((time, idx) => (
                      <button
                        key={time}
                        onClick={() => setBookingTime(time)}
                        className="py-3.5 px-4 text-center border border-white/5 bg-white/[0.01] hover:border-gold-accent/40 text-xs text-soft-cream font-mono transition-all duration-300 hover:bg-gold-accent/5 rounded-none flex flex-col items-center justify-center space-y-1"
                      >
                        <Clock className="h-3.5 w-3.5 text-gold-accent/60 mb-1" />
                        <span>{time}</span>
                        <span className="text-[8px] text-gold-accent font-sans tracking-wide">
                          {idx === 0 ? 'Последний слот' : 'Доступно'}
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2 text-[9px] font-mono text-[#CBBCAE]/40 justify-center pt-2">
                    <Smartphone className="h-3 w-3" />
                    <span>Учитывается московское местное время</span>
                  </div>
                </motion.div>
              ) : !isFinalized ? (
                /* Step 2: Client Intake Details Form */
                <motion.form
                  key="step-form"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleBooking}
                  className="space-y-5"
                >
                  <div className="flex justify-between items-center text-xs font-mono border-b border-white/5 pb-2">
                    <span className="text-white/40">ВЫБРАННОЕ ВРЕМЯ:</span>
                    <span className="text-gold-accent">{bookingTime}</span>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[9px] text-[#CBBCAE]/50 tracking-widest uppercase block mb-1">
                      ИМЯ И ФАМИЛИЯ
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 h-4 w-4 text-white/20" />
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Иван Сабельфельд"
                        className="w-full bg-black/40 border border-white/10 text-xs py-3.5 pl-10 pr-4 text-soft-cream font-sans placeholder-white/25 focus:border-gold-accent/60 outline-none rounded-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[9px] text-[#CBBCAE]/50 tracking-widest uppercase block mb-1">
                      НОМЕР ТЕЛЕФОНА / TELEGRAM
                    </label>
                    <div className="relative">
                      <Smartphone className="absolute left-3.5 top-3.5 h-4 w-4 text-white/20" />
                      <input
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="+7 (999) 000-00-00"
                        className="w-full bg-black/40 border border-white/10 text-xs py-3.5 pl-10 pr-4 text-soft-cream font-sans placeholder-white/25 focus:border-gold-accent/60 outline-none rounded-none"
                      />
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-[#CBBCAE]/40 leading-relaxed pt-2">
                    *Сессия включает в себя эфиопскую углекислотную мацерацию и киотскую гейшу. Предоплата не требуется.
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setBookingTime(null)}
                      className="border border-white/10 text-[#CBBCAE]/60 py-3.5 text-xs text-center tracking-widest uppercase font-mono hover:text-white transition-colors rounded-none"
                    >
                      НАЗАД
                    </button>
                    <button
                      type="submit"
                      className="bg-gold-accent text-matte-black py-3.5 text-xs text-center tracking-widest uppercase font-mono hover:bg-white transition-all duration-300 rounded-none font-medium"
                    >
                      ПОДТВЕРДИТЬ
                    </button>
                  </div>
                </motion.form>
              ) : (
                /* Step 3: Elite Receipt / Passbook */
                <motion.div
                  key="step-vouch"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 border border-gold-accent/25 bg-gold-accent/[0.02] p-6 text-center"
                >
                  <CheckCircle className="h-10 w-10 text-gold-accent mx-auto animate-bounce" />
                  
                  <div className="space-y-1">
                    <span className="font-mono text-[8px] text-[#CBBCAE]/40 tracking-widest block">
                      РЕЗЕРВИРОВАНИЕ ВЕРИФИЦИРОВАНО // R-9210
                    </span>
                    <h4 className="font-serif italic text-xl text-soft-cream">Трансляция подтверждена</h4>
                  </div>

                  {/* Aesthetic Receipt table */}
                  <div className="border-t border-b border-white/5 py-4 my-2 text-left space-y-2 font-mono text-[10px] text-[#CBBCAE]/80">
                    <div className="flex justify-between">
                      <span>ГОСТЬ:</span>
                      <span className="text-white font-sans">{clientName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ФИЛИАЛ:</span>
                      <span className="text-white font-sans">{selectedBranch.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ВРЕМЯ СЕАНСА:</span>
                      <span className="text-gold-accent font-bold">{bookingTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ОПЛАТА:</span>
                      <span className="text-soft-cream">КОМПЛИМЕНТАРНО</span>
                    </div>
                  </div>

                  {/* Synthetic QR Code representation inside a box */}
                  <div className="mx-auto w-32 h-32 bg-white flex items-center justify-center p-2 rounded-none shadow-md">
                    <div className="w-full h-full bg-transparent border-4 border-matte-black flex flex-wrap p-1 relative">
                      {/* Inner QR pixels block style representer */}
                      <div className="w-1/2 h-1/2 border-r-2 border-b-2 border-dashed border-black bg-black/80" />
                      <div className="w-1/2 h-1/2 border-l-2 border-b-2 border-dashed border-black bg-black/20" />
                      <div className="w-1/2 h-1/2 border-r-2 border-t-2 border-dashed border-black bg-black/40" />
                      <div className="w-1/2 h-1/2 border-l-2 border-t-2 border-dashed border-black bg-black/90" />
                      <div className="absolute inset-4 bg-white border border-matte-black flex items-center justify-center font-mono text-[7px] text-black tracking-tight font-bold">
                        N_A
                      </div>
                    </div>
                  </div>

                  <p className="font-sans text-[10px] text-warm-beige/60 font-light leading-relaxed">
                    SMS-код с подтверждением доставлен. Пожалуйста, покажите это виртуальное письмо шеф-бариста при входе.
                  </p>

                  <button
                    onClick={resetBookingState}
                    className="w-full text-center border border-white/10 text-xs py-3 text-soft-cream/70 hover:text-white hover:border-white/30 transition-colors uppercase font-mono tracking-wider"
                  >
                    ЗАБРОНИРОВАТЬ ДРУГОЙ СЕАНС
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>

      </div>
    </section>
  );
}
