import { motion } from 'motion/react';
import { ArrowDown, Flame, Sparkles, MapPin } from 'lucide-react';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-matte-black overflow-hidden flex flex-col justify-between pt-24"
    >
      {/* Absolute Backdrop Layer: Atmospheric Espresso with Deep Dark Warm Shading */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/noir_hero_espresso_1779691247663.png"
          alt="Atmospheric Espresso Extraction"
          className="w-full h-full object-cover object-center opacity-40 scale-105 select-none"
          referrerPolicy="no-referrer"
        />
        {/* Soft Chiaroscuro/Vignette gradients around boundaries */}
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/40 to-matte-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-transparent to-matte-black/90" />
        
        {/* Subtle glowing orb representing warm ambient spotlight */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gold-accent/5 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Floating Meta Details / Grid Border lines */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:flex max-w-7xl mx-auto px-12 justify-between">
        <div className="w-[1px] h-full bg-white/5" />
        <div className="w-[1px] h-full bg-white/5" />
        <div className="w-[1px] h-full bg-white/5" />
      </div>

      {/* Hero Content - Centered but off-balance for modern editorial elegance */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex flex-col justify-center py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Typography Column */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="inline-flex items-center space-x-3 border border-white/5 bg-white/[0.02] backdrop-blur-md px-4 py-1.5 rounded-none"
            >
              <Sparkles className="h-3 w-3 text-gold-accent animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-warm-beige">
                СПЕЦИАЛЬНАЯ ОБЖАРКА И ЭСПРЕССО-КОФЕЙНЯ
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="font-display font-light text-sm md:text-base tracking-[0.4em] uppercase text-warm-beige"
              >
                NOIR ATELIER // МОСКВА
              </motion.h2>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight leading-[1.05] text-soft-cream"
              >
                Создано для <br />
                <span className="font-serif italic text-gold-accent/90">медленного утра.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="max-w-md font-sans text-xs md:text-sm text-warm-beige/80 leading-relaxed font-light"
            >
              Слияние японского изящества ваби-саби и скандинавской точности медленного заваривания. 
              В самом сердце исторических и наиболее атмосферных кварталов Москвы.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="pt-6 flex flex-wrap gap-4"
            >
              <button
                onClick={() => onScrollTo('drinks')}
                className="group relative bg-[#3D2B1F] border border-gold-accent/50 text-soft-cream py-4 px-8 text-xs tracking-[0.2em] uppercase font-sans overflow-hidden transition-all duration-500 rounded-none hover:border-gold-accent flex items-center space-x-2"
              >
                <span className="relative z-10">КАРТА НАПИТКОВ</span>
                <span className="absolute bottom-0 left-0 w-full h-[0px] bg-gold-accent group-hover:h-[2px] transition-all duration-300" />
              </button>
              
              <button
                onClick={() => onScrollTo('reserve')}
                className="border border-white/10 text-white/85 py-4 px-8 text-xs tracking-[0.2em] font-sans hover:bg-white/[0.02] hover:border-white/35 transition-all duration-500 rounded-none"
              >
                ЗАПИСАТЬСЯ В БАР
              </button>
            </motion.div>
          </div>

          {/* Right Column: Mini Interactive Daily Caliber Billboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="lg:col-span-4 bg-black/40 border border-white/5 p-6 backdrop-blur-md space-y-6 rounded-none relative overflow-hidden"
          >
            {/* Visual glow on the frame */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-accent/5 blur-2xl rounded-full" />
            
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="font-mono text-[9px] text-warm-beige/60 tracking-widest uppercase">СЕГОДНЯ В КОФЕМОЛКЕ</span>
              <div className="flex items-center space-x-1">
                <Flame className="h-3 w-3 text-gold-accent animate-pulse" />
                <span className="font-mono text-[9px] text-gold-accent tracking-widest">SCA 89.2</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-serif italic text-2xl text-soft-cream">Panama Geisha Deborah</span>
              <p className="font-sans text-[11px] text-warm-beige/70 font-light leading-relaxed">
                Доставлено с высокогорных плантаций вулкана Бару. Углекислотная мацерация раскрывает ноты белого гибискуса, карамболы и лавандового сиропа.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 text-[10px] font-mono tracking-wider border-t border-white/5">
              <div>
                <span className="block text-white/40 uppercase text-[8px] mb-0.5">ОБЖАРКА</span>
                <span className="text-warm-beige">Скандинавский фильтр</span>
              </div>
              <div>
                <span className="block text-white/40 uppercase text-[8px] mb-0.5">ТЕРРУАР</span>
                <span className="text-warm-beige">Вулканический базальт</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-[9px] font-mono uppercase bg-white/[0.02] p-2 border border-white/5 justify-center">
              <MapPin className="h-3 w-3 text-gold-accent" />
              <span className="text-soft-cream">Доступно на Патриарших</span>
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Hero Footer Actions / Scrolling hint */}
      <div className="relative z-20 border-t border-white/5 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] font-mono tracking-[0.2em] text-[#CBBCAE]/65 uppercase">
          <div className="flex gap-6">
            <span>ПАТРИАРШИЕ: ОТКРЫТО</span>
            <span className="text-white/25">|</span>
            <span>КИТАЙ-ГОРОД VINYL: ОТКРЫТО</span>
          </div>
          
          <button
            onClick={() => onScrollTo('philosophy')}
            className="flex items-center space-x-2 text-gold-accent/90 hover:text-white transition-colors duration-300 group"
          >
            <span>РЕСУРСЫ И РИТУАЛЫ</span>
            <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
