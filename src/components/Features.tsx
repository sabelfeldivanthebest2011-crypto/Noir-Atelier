import { FEATURES } from '../data';
import { Sparkles, Disc, Waves, ShieldAlert, Award, Compass, Gem } from 'lucide-react';

export default function Features() {
  const iconMap: Record<string, any> = {
    'ceramic-artistry': Gem,
    'scientific-extraction': Compass,
    'audiophile-sound': Disc
  };

  return (
    <section id="features" className="py-24 md:py-32 bg-[#080808] border-b border-white/5 relative">
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gold-accent/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Subtitle */}
        <div className="max-w-xl space-y-4 mb-20 text-left">
          <span className="font-mono text-xs text-gold-accent tracking-[0.3em] block uppercase">
            / БАЗОВЫЕ СПЕЦИФИКАЦИИ
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-soft-cream leading-tight">
            Создано для <br />
            <span className="italic">сенсорной чистоты.</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-warm-beige/75 font-light leading-relaxed">
            Каждое тактильное прикосновение, акустический резонанс и термодинамический показатель выверены до мельчайших деталей. Мы бережно охраняем атмосферу вашей тишины и покоя.
          </p>
        </div>

        {/* Bento Grid Offset Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {FEATURES.map((feat, idx) => {
            const Icon = iconMap[feat.id] || Sparkles;
            return (
              <div
                key={feat.id}
                className="bg-brand-gray/30 border border-white/5 p-8 flex flex-col justify-between transition-all duration-500 hover:border-gold-accent/20 group relative rounded-none hover:-translate-y-1"
              >
                {/* Micro corner details */}
                <div className="absolute top-4 right-4 text-[9px] font-mono text-white/5 tracking-wider font-light group-hover:text-white/20 transition-all">
                  NAX_{120 + idx}
                </div>

                <div className="space-y-6">
                  {/* Elegant Icon Box with subtle shadow */}
                  <div className="inline-flex p-3 bg-white/[0.01] border border-white/10 text-gold-accent">
                    <Icon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
                  </div>

                  <div className="space-y-2">
                    <span className="block font-mono text-[9px] text-warm-beige/50 tracking-[0.2em] uppercase">
                      {feat.subtitle}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif font-light text-soft-cream">
                      {feat.title}
                    </h3>
                  </div>
                </div>

                <p className="font-sans text-xs md:text-sm text-warm-beige/70 leading-relaxed font-light mt-8">
                  {feat.description}
                </p>
                
                {/* Thin gold accent on bottom border hover */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gold-accent to-transparent group-hover:w-full transition-all duration-700" />
              </div>
            );
          })}
        </div>

        {/* Large Cinematic Callout Quote Grid */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 border-t border-b border-white/5">
          <div className="lg:col-span-8">
            <p className="font-serif font-light text-2xl md:text-3xl text-soft-cream leading-relaxed italic">
              «Наш кофе — это череда незаметных микро-решений. Мы выбираем светлую скандинавскую обжарку, чтобы сберечь подлинную чистоту и богатство вкуса. Мы ставим виниловые пластинки, потому что аналоговый тракт заставляет музыку звучать иначе — мягче и объемнее».
            </p>
          </div>
          <div className="lg:col-span-4 space-y-2 text-left">
            <div className="h-[1px] w-12 bg-gold-accent/60 mb-4" />
            <span className="block font-sans text-xs tracking-widest text-white uppercase font-medium">Бариста Noir Atelier</span>
            <span className="block font-mono text-[9px] text-warm-beige/50 tracking-wider">ЛАБОРАТОРИЯ МОСКВА - ТОКИО</span>
          </div>
        </div>

      </div>
    </section>
  );
}
