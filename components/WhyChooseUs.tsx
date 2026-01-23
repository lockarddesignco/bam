import React from 'react';
import { Building2, ClipboardCheck, Shield, Award } from 'lucide-react';

const reasons = [
  {
    title: "Built for Mission-Critical Environments",
    description: "We operate inside hospitals, government buildings, schools, labs, and industrial sites where uptime, safety, and compliance are non-negotiable.",
    icon: Building2
  },
  {
    title: "Documentation-Driven Workflows",
    description: "Every project includes detailed photo reports, compliance notes, and transparent communication with facility leadership.",
    icon: ClipboardCheck
  },
  {
    title: "Long-Term Asset Protection",
    description: "Our restoration-first approach improves air quality, restores performance, and extends equipment life without unnecessary replacements.",
    icon: Shield
  },
  {
    title: "Trained, Certified, Verified",
    description: "NADCA. EPA Universal. OSHA-30. ASHRAE. Our technicians are trained for high-stakes mechanical environments.",
    icon: Award
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative w-full bg-[#265A4A] py-24 md:py-32 overflow-hidden">
      {/* Technical Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ 
            backgroundImage: `linear-gradient(#A7D7C5 1px, transparent 1px), linear-gradient(90deg, #A7D7C5 1px, transparent 1px)`, 
            backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Vignette Overlay for Focus */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, transparent 0%, #265A4A 90%)' }}
      ></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24 animate-fade-in">
          <div className="inline-block mb-4 px-3 py-1 border border-[#A7D7C5]/30 rounded-full bg-[#265A4A]/50 backdrop-blur-sm">
             <span className="text-[#A7D7C5] text-xs font-bold tracking-[0.2em] uppercase">
               The BAM Standard
             </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-6">
            Why Facilities Choose BAM
          </h2>
          <div className="w-24 h-1 bg-[#A7D7C5] mx-auto rounded-full opacity-60"></div>
        </div>

        {/* 2x2 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-16">
          {reasons.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col sm:flex-row items-start gap-6 md:gap-8 transition-all duration-300 hover:transform hover:translate-x-2"
            >
              {/* Icon Container with Hover Effect */}
              <div className="flex-shrink-0">
                 <div className="w-16 h-16 rounded-xl bg-[#1e483b] border border-[#A7D7C5]/20 flex items-center justify-center group-hover:bg-[#A7D7C5] group-hover:border-[#A7D7C5] transition-all duration-300 shadow-lg shadow-black/10">
                    <item.icon className="w-8 h-8 text-[#A7D7C5] group-hover:text-[#265A4A] transition-colors duration-300" strokeWidth={1.5} />
                 </div>
              </div>
              
              {/* Content */}
              <div className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#A7D7C5] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#D7DDDA] text-base md:text-lg leading-relaxed opacity-90 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};