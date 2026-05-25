import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DRINKS } from '../data';
import { Drink } from '../types';
import { Coffee, GitCommit, Settings, Droplet, ArrowUpRight } from 'lucide-react';

export default function DrinksMenu() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'espresso' | 'slow-brew' | 'cold-infusion'>('all');
  const [focusedDrink, setFocusedDrink] = useState<Drink>(DRINKS[0]);

  const categories = [
    { id: 'all', label: 'ВСЕ НАПИТКИ' },
    { id: 'espresso', label: 'ЭСПРЕССО КРАФТ' },
    { id: 'slow-brew', label: 'МЕДЛЕННЫЙ БАР' },
    { id: 'cold-infusion', label: 'ХОЛОДНОЕ НАСТОЯНИЕ' }
  ];

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'espresso': return 'ЭСПРЕССО';
      case 'slow-brew': return 'ФИЛЬТР / МЕДЛЕННЫЙ БАР';
      case 'cold-infusion': return 'ХОЛОДНЫЕ НАПИТКИ';
      default: return cat.toUpperCase();
    }
  };

  const filteredDrinks = selectedCategory === 'all'
    ? DRINKS
    : DRINKS.filter(d => d.category === selectedCategory);

  return (
    <section id="drinks" className="py-24 md:py-32 bg-[#080808] relative border-b border-white/5">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-espresso/35 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title Editorial */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div className="space-y-4">
            <span className="font-mono text-xs text-gold-accent tracking-[0.3em] uppercase block">
              / ТЕКУЩИЙ РЕПЕРТУАР
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-soft-cream">
              Авторские <span className="italic">экстракции.</span>
            </h2>
          </div>
          <p className="max-w-xs font-sans text-xs text-warm-beige/70 leading-relaxed font-light">
            Каждая позиция отличается индивидуальными химическими свойствами кофейного зерна. Напитки приготовлены по строгим спецификациям и разлиты в авторскую керамику.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-white/5 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id as any);
                const firstOfCat = DRINKS.find(d => cat.id === 'all' || d.category === cat.id);
                if (firstOfCat) setFocusedDrink(firstOfCat);
              }}
              className={`text-[10px] tracking-[0.2em] font-sans px-5 py-2.5 transition-all duration-300 relative ${
                selectedCategory === cat.id
                  ? 'text-gold-accent border border-gold-accent/40 bg-gold-accent/5'
                  : 'text-soft-cream/50 hover:text-soft-cream border border-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Grid: Left is Drink Cards List, Right is the Interactive Tech Spec Sheet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Grid list of filtered drinks */}
          <div className="lg:col-span-6 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredDrinks.map((drink) => (
                <motion.button
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  key={drink.id}
                  onClick={() => setFocusedDrink(drink)}
                  className={`w-full text-left p-6 border transition-all duration-300 group flex items-start justify-between gap-6 ${
                    focusedDrink.id === drink.id
                      ? 'bg-brand-gray/50 border-gold-accent/40 shadow-xl'
                      : 'bg-transparent border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="space-y-2 max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <span className="font-serif text-lg md:text-xl text-soft-cream group-hover:text-gold-accent transition-colors duration-300">
                        {drink.name}
                      </span>
                      {drink.jpName && (
                        <span className="font-sans text-[10px] text-warm-beige/40 tracking-wider">
                          {drink.jpName}
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-xs text-warm-beige/70 line-clamp-2 font-light leading-relaxed">
                      {drink.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-end justify-between h-full space-y-6">
                    <span className="font-serif text-gold-accent font-medium text-sm">
                      {drink.price}
                    </span>
                    <ArrowUpRight className={`h-4 w-4 text-white/25 transition-all duration-300 ${
                      focusedDrink.id === drink.id ? 'text-gold-accent rotate-45' : 'group-hover:text-white/80'
                    }`} />
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          {/* Right Column: Premium Spec Visualizer for the Selected Coffee */}
          <div className="lg:col-span-6 bg-brand-gray/50 border border-white/5 p-8 backdrop-blur-md relative overflow-hidden space-y-8">
            {/* Soft decorative golden line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold-accent/60 to-transparent" />

            {/* Spec Sheet Header */}
            <div className="flex justify-between items-start border-b border-white/5 pb-6">
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-warm-beige/50 tracking-widest uppercase">
                  BATCH NO. {focusedDrink.id.toUpperCase().slice(0, 8)} // ФОРМУЛА КОФЕЙНИ
                </span>
                <h3 className="text-3xl font-serif font-light text-soft-cream">
                  {focusedDrink.name}
                </h3>
              </div>
              <div className="px-3 py-1.5 border border-white/10 text-[9px] font-mono tracking-widest text-[#CBBCAE]">
                {getCategoryLabel(focusedDrink.category)}
              </div>
            </div>

            {/* Drink Image Showcase with Luxury Circular Shadow */}
            <div className="aspect-[16:10] w-full overflow-hidden relative border border-white/5">
              <img
                src={focusedDrink.image}
                alt={focusedDrink.name}
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700 ease-out hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>

            <p className="font-sans text-xs md:text-sm text-warm-beige/85 leading-relaxed font-light italic">
              "{focusedDrink.description}"
            </p>

            {/* Origin & Extraction Parameters Data Sheet */}
            <div className="space-y-4">
              <span className="font-mono text-[9px] text-gold-accent tracking-widest block uppercase">
                / ХАРАКТЕРИСТИКИ ЗЕРНА И КАЛИБРОВКА
              </span>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 border-t border-white/5 pt-4 text-xs font-sans">
                <div>
                  <span className="block text-[8px] font-mono uppercase text-white/30 tracking-widest mb-1">
                    ПРОИСХОЖДЕНИЕ COFFEE LUTE
                  </span>
                  <span className="text-soft-cream font-light">{focusedDrink.origin}</span>
                </div>
                {focusedDrink.elevation && (
                  <div>
                    <span className="block text-[8px] font-mono uppercase text-white/30 tracking-widest mb-1">
                      ВЫСОТА ПРОИЗРАСТАНИЯ
                    </span>
                    <span className="text-soft-cream font-light">{focusedDrink.elevation}</span>
                  </div>
                )}
                {focusedDrink.process && (
                  <div>
                    <span className="block text-[8px] font-mono uppercase text-white/30 tracking-widest mb-1">
                      ОБРАБОТКА МИКРО-ЛОТА
                    </span>
                    <span className="text-soft-cream font-light">{focusedDrink.process}</span>
                  </div>
                )}
                <div>
                  <span className="block text-[8px] font-mono uppercase text-white/30 tracking-widest mb-1">
                    ТЕМПЕРАТУРА ПОДАЧИ
                  </span>
                  <span className="text-soft-cream font-light">{focusedDrink.temperature}</span>
                </div>
                {focusedDrink.extractionTime && (
                  <div>
                    <span className="block text-[8px] font-mono uppercase text-white/30 tracking-widest mb-1">
                      ПАРАМЕТРЫ ЭКСТРАКЦИИ
                    </span>
                    <span className="text-soft-cream font-mono text-[11px] font-light flex items-center space-x-1">
                      <Settings className="h-3 w-3 text-gold-accent mr-1 animate-spin" style={{ animationDuration: '4s' }} />
                      <span>{focusedDrink.extractionTime} при {focusedDrink.waterTemp || '92°C'}</span>
                    </span>
                  </div>
                )}
                <div>
                  <span className="block text-[8px] font-mono uppercase text-white/30 tracking-widest mb-1">
                    КЛАССИФИКАЦИЯ
                  </span>
                  <span className="text-gold-accent font-mono text-[10px] tracking-wide">GRAND SPECIALTY (87.5+ SCA)</span>
                </div>
              </div>
            </div>

            {/* Dynamic Symmetrical Taste Profiles badges */}
            <div className="pt-4 border-t border-white/5 space-y-3">
              <span className="font-mono text-[9px] text-warm-beige/50 tracking-widest block uppercase">
                СЕНСОРНЫЙ ПРОФИЛЬ НАПИТКА
              </span>
              <div className="flex flex-wrap gap-2">
                {focusedDrink.notes.map((note, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] tracking-widest uppercase font-mono bg-white/[0.02] border border-white/10 text-warm-beige py-1 px-3 rounded-none flex items-center space-x-1.5"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold-accent animate-pulse" />
                    <span>{note}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
