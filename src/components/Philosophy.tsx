import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Compass, Eye, Sprout } from 'lucide-react';

export default function Philosophy() {
  const [activeConcept, setActiveConcept] = useState<'wabi-sabi' | 'nordic-hygge' | 'noir-synthesis'>('noir-synthesis');

  const concepts = [
    {
      id: 'noir-synthesis',
      label: '01 / СИНТЕЗ КУЛЬТУР',
      title: 'Японское ваби-саби встречает скандинавское хюгге',
      tagline: 'Философия осознанного кофе.',
      description: 'В Noir Atelier мы отказываемся от спешки мегаполиса. Мы создаем пространства, служащие тихой гаванью, где течение времени замедляется. Наш инвентарь откалиброван с нордической строгостью термодинамики, а напитки подаются в посуде из необработанной глины префектуры Сига (Япония). Наш продукт — глубоко осознанный и неторопливый ритуал.',
      details: [
        { icon: Sprout, text: 'Редкие микро-лоты 86+ SCA напрямую от сертифицированных фермеров' },
        { icon: Compass, text: 'Акустические виниловые зоны, спроектированные для погружения в себя' }
      ]
    },
    {
      id: 'wabi-sabi',
      label: '02 / ЭСТЕТИКА ВАБИ-САБИ',
      title: 'Красота в несовершенстве камня',
      tagline: 'Гармония асимметрии и природы вещей.',
      description: 'Японская философия ваби-саби направляет выбор нашей посуды и дизайн пространств. Мы находим совершенство в необработанных текстурах, шероховатых глыбах гранита и старинных чайниках со следами времени. Момент экстракции кофе мимолетен — мы ценим его чистоту прямо здесь и сейчас.',
      details: [
        { icon: Eye, text: 'Керамические чашки ручной работы, отражающие текстуру натуральной глины' },
        { icon: ShieldCheck, text: 'Минималистичные тихие стойки с полностью скрытым оборудованием Modbar' }
      ]
    },
    {
      id: 'nordic-hygge',
      label: '03 / СЕВЕРНЫЙ СТАНДАРТ',
      title: 'Термодинамический нордический калибр',
      tagline: 'Предельная точность тепловых процессов.',
      description: 'Наши кофейные станции оборудованы лабораторными термодатчиками. Вода полностью деминерализуется и реконструируется с идеально выверенными пропорциями магния и кальция для бережной экстракции органических кислот. Мы обжариваем зерна в ультрасветлом скандинавском стиле для раскрытия искристых цветочных нот без горечи кофеина.',
      details: [
        { icon: Compass, text: 'Профиль воды обратного осмоса, настроенный строго на 92.2°C' },
        { icon: Sprout, text: 'Экстракция роторными испарителями и шкафы окуривания зерна' }
      ]
    }
  ];

  const currentConcept = concepts.find((c) => c.id === activeConcept) || concepts[0];

  return (
    <section id="philosophy" className="py-24 md:py-32 bg-[#0C0C0C] relative overflow-hidden border-b border-white/5">
      {/* Visual background atmospheric elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Vertical Menu Selectors & Large Header */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="font-mono text-xs text-gold-accent tracking-[0.3em] block uppercase">
                / ФИЛОСОФИЯ
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-soft-cream leading-tight">
                Спокойствие разума, <br />
                осознанная экстракция.
              </h2>
            </div>

            {/* Selector list with editorial indicators */}
            <div className="flex flex-col space-y-3 pt-6 border-t border-white/5">
              {concepts.map((concept) => (
                <button
                  key={concept.id}
                  onClick={() => setActiveConcept(concept.id as any)}
                  className="group flex justify-between items-center text-left py-4 border-b border-white/5 transition-all duration-300"
                >
                  <span
                    className={`font-sans text-xs tracking-[0.2em] transition-all duration-300 ${
                      activeConcept === concept.id
                        ? 'text-gold-accent font-medium pl-2'
                        : 'text-soft-cream/40 hover:text-soft-cream/85 pl-0'
                    }`}
                  >
                    {concept.label}
                  </span>
                  <div
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                      activeConcept === concept.id ? 'bg-gold-accent scale-125' : 'bg-white/10 group-hover:bg-white/30'
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="pt-8 text-xs font-mono tracking-widest text-[#CBBCAE]/40 uppercase hidden lg:block">
              СПЕЦИФИКАЦИЯ NOIR ATELIER // СИГА x МОСКВА
            </div>
          </div>

          {/* Right Column: Animated Detail Display Section */}
          <div className="lg:col-span-7 bg-brand-gray/40 border border-white/5 p-8 md:p-12 backdrop-blur-sm shadow-2xl relative">
            {/* Design accents for that Awwwards feel */}
            <span className="absolute top-4 right-4 font-mono text-[9px] text-white/10 tracking-widest select-none">
              N_A / COMP_048
            </span>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeConcept}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-gold-accent tracking-widest uppercase">
                    {currentConcept.tagline}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-light text-soft-cream">
                    {currentConcept.title}
                  </h3>
                </div>

                <p className="font-sans text-sm text-warm-beige/85 leading-relaxed font-light">
                  {currentConcept.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                  {currentConcept.details.map((detail, idx) => {
                    const Icon = detail.icon;
                    return (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="p-1 rounded bg-gold-accent/5 border border-gold-accent/15 mt-0.5">
                          <Icon className="h-4 w-4 text-gold-accent" />
                        </div>
                        <span className="font-sans text-xs text-warm-beige/75 font-light leading-relaxed">
                          {detail.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
