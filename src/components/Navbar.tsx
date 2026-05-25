import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Navbar({ onScrollTo }: NavbarProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioPlay, setAudioPlay] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Creates an ambient, ultra-low frequency soothing synth drone representing the quiet ambient hum of a high-end espresso bar
  const toggleAmbientSound = () => {
    if (!audioPlay) {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioContextRef.current = ctx;

        const gainNode = ctx.createGain();
        // Super soft, ambient volume
        gainNode.gain.setValueAtTime(0.0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 3); // soft fade in
        gainNodeRef.current = gainNode;

        // Low warm frequency (like coffee roaster hum)
        const osc1 = ctx.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(65.41, ctx.currentTime); // C2 frequency
        osc1Ref.current = osc1;

        // Subtle harmonics (like soft electrical warm drone or vinyl low mechanical frequency)
        const osc2 = ctx.createOscillator();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(98.0, ctx.currentTime); // G2 fifth harmonic
        osc2Ref.current = osc2;

        // Low-pass filter to make it extremely soft, warm, deep, non-harsh
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(110, ctx.currentTime);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc1.start();
        osc2.start();
        setAudioPlay(true);
      } catch (err) {
        console.warn('Audio Context failed to initiallize', err);
      }
    } else {
      // Fade out and stop safely
      if (gainNodeRef.current && audioContextRef.current) {
        const ctx = audioContextRef.current;
        gainNodeRef.current.gain.linearRampToValueAtTime(0.0, ctx.currentTime + 0.5);
        setTimeout(() => {
          try {
            osc1Ref.current?.stop();
            osc2Ref.current?.stop();
            audioContextRef.current?.close();
          } catch(e){}
          osc1Ref.current = null;
          osc2Ref.current = null;
          gainNodeRef.current = null;
          audioContextRef.current = null;
          setAudioPlay(false);
        }, 600);
      }
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup synth sound if component unmounts
      if (osc1Ref.current) {
        try {
          osc1Ref.current.stop();
          osc2Ref.current.stop();
          audioContextRef.current?.close();
        } catch(e){}
      }
    };
  }, []);

  const navLinks = [
    { label: '01 / ФИЛОСОФИЯ', id: 'philosophy' },
    { label: '02 / НАПИТКИ', id: 'drinks' },
    { label: '03 / ГАЛЕРЕИ', id: 'galleries' },
    { label: '04 / СЕНСОРНЫЙ БАР', id: 'reserve' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrollY > 50
          ? 'bg-matte-black/85 backdrop-blur-md py-4 border-b border-white/5'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left Side: Editorial Branding */}
        <div className="flex flex-col">
          <button
            onClick={() => onScrollTo('hero')}
            className="text-left font-display font-medium text-lg md:text-xl tracking-[0.25em] text-white hover:text-gold-accent transition-colors duration-300"
          >
            NOIR ATELIER
          </button>
          <span className="hidden md:inline font-sans text-[8px] tracking-[0.4em] text-warm-beige/60 mt-0.5">
            МОСКВА · ТОКИО · ГЁТЕБОРГ
          </span>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onScrollTo(link.id)}
              className="text-xs tracking-[0.18em] font-sans text-soft-cream/75 hover:text-gold-accent transition-all duration-500 relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[10px] bg-gold-accent/10 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* Right Side: Interactive Audio Drone & Booking CTA */}
        <div className="flex items-center space-x-6">
          {/* Atelier Soundscape System */}
          <button
            onClick={toggleAmbientSound}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border transition-all duration-500 class-sound-button ${
              audioPlay
                ? 'border-gold-accent text-gold-accent bg-gold-accent/5'
                : 'border-white/10 text-soft-cream/60 hover:text-soft-cream hover:border-white/20'
            }`}
            title="Включить эмбиент-сопровождение"
          >
            {audioPlay ? (
              <>
                <Volume2 className="h-3.5 w-3.5 animate-pulse" />
                <span className="font-mono text-[9px] tracking-wider uppercase">ЗВУК ВКЛ</span>
              </>
            ) : (
              <>
                <VolumeX className="h-3.5 w-3.5" />
                <span className="font-mono text-[9px] tracking-wider uppercase">ГУЛ БАРА</span>
              </>
            )}
          </button>

          {/* Reserve / Sensory Seat Counter */}
          <button
            onClick={() => onScrollTo('reserve')}
            className="hidden sm:inline-block border border-gold-accent/80 text-[10px] tracking-[0.25em] text-gold-accent font-sans bg-gold-accent/5 hover:bg-gold-accent hover:text-matte-black transition-all duration-500 py-2.5 px-6 rounded-none font-medium"
          >
            КУРСЫ БАРИСТА
          </button>

          {/* Toggle Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-soft-cream hover:text-gold-accent transition-colors duration-300"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-matte-black/98 backdrop-blur-lg z-40 lg:hidden flex flex-col justify-between p-8 border-t border-white/5 animate-fade-in">
          <div className="flex flex-col space-y-8 mt-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onScrollTo(link.id);
                  setMobileMenuOpen(false);
                }}
                className="text-left font-serif text-3xl italic text-soft-cream hover:text-gold-accent transition-all duration-300 border-b border-white/5 pb-4"
              >
                {link.label.split('/ ')[1]}
              </button>
            ))}
          </div>

          <div className="flex flex-col space-y-4 mb-12">
            <span className="font-mono text-[9px] tracking-widest text-[#CBBCAE]/50">ATELIER CORE V2 // РОССИЯ</span>
            <div className="flex items-center space-x-2 text-xs text-soft-cream/70">
              <Globe className="h-3 w-3 text-gold-accent" />
              <span>Доступны Патриаршие и Китай-Город</span>
            </div>
            <button
              onClick={() => {
                onScrollTo('reserve');
                setMobileMenuOpen(false);
              }}
              className="w-full text-center border border-gold-accent text-gold-accent py-4 text-xs tracking-widest uppercase hover:bg-gold-accent hover:text-matte-black transition-all duration-500"
            >
              ЗАБРОНИРОВАТЬ СЕНСОРНЫЙ БАР
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
