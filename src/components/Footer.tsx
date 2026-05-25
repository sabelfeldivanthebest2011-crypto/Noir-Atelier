import React, { useState } from 'react';
import { ArrowUp, Mail, Sparkles, Check, Send } from 'lucide-react';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const [emailValue, setEmailValue] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValue.trim()) {
      setIsSubscribed(true);
      setEmailValue('');
    }
  };

  return (
    <footer className="bg-matte-black border-t border-white/5 pt-20 pb-12 relative overflow-hidden">
      
      {/* Visual top border fine line detail */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start pb-16 border-b border-white/5">
          
          {/* Column 1: Editorial Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-display font-medium text-xl tracking-[0.25em] text-white">
              N O I R  A T E L I E R
            </span>
            <p className="font-sans text-xs md:text-sm text-warm-beige/70 font-light leading-relaxed max-w-sm">
              Мы проектируем пространства, калибруем оборудование и находим редчайшие специальные лоты. Наша цель — тихое убежище для умиротворенного самопознания, доверительных бесед и акустического уюта.
            </p>
            <div className="flex gap-4 font-mono text-[9px] text-[#CBBCAE]/50 tracking-wider">
              <span>МОСКВА, Б. КОЗИХИНСКИЙ ПЕР. 12</span>
              <span>·</span>
              <span>МОСКВА, УЛИЦА СОЛЯНКА 1/2</span>
            </div>
          </div>

          {/* Column 2: Exclusive Newsletter / Bean Drops */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-[9px] text-gold-accent tracking-widest block uppercase">
                / АНОНСЫ РЕДКИХ МИКРО-ЛОТОВ
              </span>
              <h4 className="font-serif italic text-lg text-soft-cream">Уведомления о релизах</h4>
              <p className="font-sans text-xs text-warm-beige/65 font-light leading-relaxed">
                Вступайте в закрытый реестр. Дважды в месяц мы выпускаем очень маленькие партии обжаренного кофе оценкой 90+ SCA (например, анаэробные сорта из Панамы).
              </p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-white/20" />
                  <input
                    type="email"
                    required
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    placeholder="Введите email для анонсов"
                    className="w-full bg-brand-gray/50 border border-white/10 text-xs py-3 pl-10 pr-4 text-soft-cream font-sans placeholder-white/25 focus:border-gold-accent/60 outline-none rounded-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#3D2B1F] border border-gold-accent/40 text-gold-accent py-3 px-6 text-xs font-mono uppercase tracking-widest hover:bg-gold-accent hover:text-matte-black transition-all duration-300 rounded-none flex items-center justify-center space-x-2 shrink-0"
                >
                  <span>РЕГИСТРАЦИЯ</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            ) : (
              <div className="p-4 border border-gold-accent/35 bg-gold-accent/[0.02] flex items-center space-x-3 text-gold-accent">
                <Check className="h-4 w-4 shrink-0" />
                <span className="font-mono text-[10px] tracking-wider uppercase">
                  РЕЕСТР ЗАПИСАН. ОЖИДАЙТЕ АНОНСОВ.
                </span>
              </div>
            )}
          </div>

          {/* Column 3: Navigation & Social directory */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8 text-xs font-mono">
            
            {/* Nav indices */}
            <div className="space-y-4">
              <span className="text-white/30 text-[9px] tracking-wider block">СОЦСЕТИ</span>
              <ul className="space-y-2 text-[#CBBCAE]/85">
                <li><a href="#" className="hover:text-gold-accent transition-colors">Telegram Desktop</a></li>
                <li><a href="#" className="hover:text-gold-accent transition-colors">Instagram Profile</a></li>
                <li><a href="#" className="hover:text-gold-accent transition-colors">Substack Club</a></li>
                <li><a href="#" className="hover:text-gold-accent transition-colors">Yandex Zen</a></li>
              </ul>
            </div>

            {/* General indices */}
            <div className="space-y-4">
              <span className="text-white/30 text-[9px] tracking-wider block">НАВИГАЦИЯ</span>
              <ul className="space-y-2 text-[#CBBCAE]/85">
                <li><a href="#philosophy" onClick={() => onScrollTo('philosophy')} className="hover:text-gold-accent transition-colors">Философия</a></li>
                <li><a href="#drinks" onClick={() => onScrollTo('drinks')} className="hover:text-gold-accent transition-colors">Напитки</a></li>
                <li><a href="#galleries" onClick={() => onScrollTo('galleries')} className="hover:text-gold-accent transition-colors">Пространства</a></li>
                <li><a href="#reserve" onClick={() => onScrollTo('reserve')} className="hover:text-gold-accent transition-colors">Запись</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Legal and Back to top line */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono tracking-widest text-[#CBBCAE]/40 uppercase">
          
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <span>© 2026 NOIR ATELIER</span>
            <span>·</span>
            <span>КОНФИДЕНЦИАЛЬНОСТЬ</span>
            <span>·</span>
            <span>КОНЦЕПТ HARIO И SYNESSO GROUP</span>
          </div>

          <button
            onClick={() => onScrollTo('hero')}
            className="flex items-center space-x-2 text-soft-cream/60 hover:text-gold-accent transition-colors duration-300"
          >
            <span>ВЕРНУТЬСЯ НАВЕРХ</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
          
        </div>

      </div>
    </footer>
  );
}
