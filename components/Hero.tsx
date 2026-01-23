import React from 'react';
import { Button } from './Button';
import { ArrowRight, Phone, ChevronDown } from 'lucide-react';

interface HeroProps {
  onNavigate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full h-[85vh] min-h-[700px] max-h-[860px] flex flex-col items-center justify-center font-sans overflow-hidden bg-[#0B1110]">
      
      {/* Background System */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Modern Commercial Facility Facade"
          className="w-full h-full object-cover opacity-30"
        />
        
        {/* Overlays - Darkened for Maximum Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1110]/80 via-[#0B1110]/50 to-[#0B1110]"></div>
        
        {/* Subtle grid texture */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ 
            backgroundImage: `linear-gradient(#A7D7C5 1px, transparent 1px), linear-gradient(90deg, #A7D7C5 1px, transparent 1px)`, 
            backgroundSize: '60px 60px' 
          }}
        ></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        
         {/* Top Label */}
         <div className="mb-10 flex items-center gap-3 animate-fade-in-up opacity-0" style={{ animationDelay: '0ms' }}>
            <div className="w-2 h-2 rounded-full bg-[#A7D7C5] animate-pulse"></div>
            <span className="text-white font-bold text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-80">Ready for Deployment</span>
         </div>

         {/* Headline */}
         <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black leading-[0.9] tracking-tighter text-white mb-10 animate-fade-in-up opacity-0 uppercase drop-shadow-2xl" style={{ animationDelay: '100ms' }}>
           Restoring the <br/>
           <span className="text-[#A7D7C5]">Infrastructure</span> <br/>
           of Clean Air Systems.
         </h1>
         
         {/* Subhead */}
         <p className="text-lg md:text-2xl text-[#D7DDDA] max-w-3xl leading-relaxed font-light mb-14 opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
           Institutional HVAC restoration for healthcare, education, and government facilities where indoor environment is mission-critical.
         </p>

         {/* Buttons */}
         <div className="flex flex-col sm:flex-row items-center gap-5 animate-fade-in-up opacity-0 w-full justify-center" style={{ animationDelay: '300ms' }}>
           <Button 
              size="lg" 
              animated={true}
              className="font-bold tracking-widest text-xs md:text-sm py-6 px-10 rounded-sm min-w-[260px] shadow-2xl bg-[#265A4A] text-white hover:!bg-white hover:!text-[#265A4A] border border-[#265A4A] transition-colors duration-300"
              onClick={onNavigate}
           >
             REQUEST SITE VISIT
             <ArrowRight className="w-4 h-4 ml-3" />
           </Button>
           
           <a 
             href="tel:5709005827"
             className="flex items-center justify-center gap-3 px-10 py-6 bg-[#1A1F1E] border border-[#ffffff]/10 text-white font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-[#252b2a] hover:border-[#ffffff]/20 transition-all rounded-sm min-w-[260px] shadow-xl backdrop-blur-sm"
           >
             Call BAM Now
             <Phone className="w-4 h-4 text-[#A7D7C5]" />
           </a>
         </div>
      </div>

      {/* Bottom Indicator */}
      <div className="absolute bottom-8 inset-x-0 z-20">
        <div 
          className="hero-explore w-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-3 animate-bounce opacity-40 hover:opacity-100 transition-opacity cursor-pointer text-center"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
           <span className="text-[9px] text-white uppercase tracking-[0.3em] whitespace-nowrap">Explore Capabilities</span>
           <ChevronDown className="w-4 h-4 text-[#A7D7C5]" />
        </div>
      </div>
      <style>{`
        @media (max-height: 860px) {
          .hero-explore {
            display: none;
          }
        }
      `}</style>

    </section>
  );
};