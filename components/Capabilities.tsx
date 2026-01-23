import React from 'react';
import { Fan, Wind, Activity, ShieldCheck, ClipboardList, Droplets, ArrowRight, Layers, Sun, Flame } from 'lucide-react';
import { Button } from './Button';
import type { Page } from '../App';

const services = [
  {
    title: "Cooling Tower Restoration",
    description: "Extend cooling tower life, restore thermal capacity, and eliminate fouling for safer, more efficient operation.",
    icon: Droplets,
    page: 'cooling-tower' as Page,
  },
  {
    title: "AHU & Coil Restoration",
    description: "Deep coil restoration to restore airflow, reduce static pressure, and recover lost heat-transfer efficiency.",
    icon: Fan,
    page: 'ahu' as Page,
  },
  {
    title: "NADCA-Aligned Duct Cleaning",
    description: "Hospital-grade HVAC hygiene using NADCA’s ACR Standard for compliant air system cleaning and restoration.",
    icon: Wind,
    page: 'ducts' as Page,
  },
  {
    title: "Commercial Indoor Air Quality",
    description: "Testing, reporting, and continuous monitoring to maintain compliant indoor environments in critical facilities.",
    icon: Activity,
    page: 'iaq' as Page,
  },
  {
    title: "Mold Remediation (Commercial)",
    description: "Safe, compliant remediation for healthcare, education, and industrial environments with documented clearance.",
    icon: ShieldCheck,
    page: 'mold' as Page,
  },
  {
    title: "Preventive Maintenance Programs",
    description: "Institutional PM designed to maximize uptime, extend equipment life, and ensure compliance readiness.",
    icon: ClipboardList,
    page: 'pm' as Page,
  },
  {
    title: "HEPA & Filter Management",
    description: "Turnkey replacement and DOP testing for high-efficiency filtration in critical care and containment zones.",
    icon: Layers,
    page: 'hepa' as Page,
  },
  {
    title: "UV-C & Air Purification",
    description: "Installation of UV-C arrays and bipolar ionization to neutralize pathogens within airstreams and coils.",
    icon: Sun,
    page: 'uvc' as Page,
  },
  {
    title: "Fire Damper Compliance",
    description: "NFPA-compliant inspection and repair of fire and smoke dampers to ensure life-safety readiness.",
    icon: Flame,
    page: 'dampers' as Page,
  }
];

interface CapabilitiesProps {
  onNavigate?: (page: Page) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="relative py-24 bg-[#F7F9F8]">
      
      {/* Background Grid Overlay (Faint) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(#5E7A86 1px, transparent 1px), linear-gradient(90deg, #5E7A86 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Title */}
        <div className="text-center mb-20">
           <h2 className="text-4xl md:text-6xl font-black text-[#265A4A] tracking-tighter uppercase leading-[0.9] mb-6">
             Specialized HVAC Services <br/>for Mission-Critical Facilities
           </h2>
           <div className="w-24 h-1.5 bg-[#265A4A] mx-auto opacity-20"></div>
        </div>

        {/* Service Grid - 1 Col Mobile, 2 Col Tablet, 3 Col Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-[#D7DDDA] rounded-sm p-8 transition-all duration-300 group h-full flex flex-col cursor-pointer hover:border-[#265A4A] hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
              onClick={() => onNavigate?.(service.page)}
            >
              <div className="mb-6 text-[#265A4A] group-hover:text-[#1e483b] transition-colors flex justify-start">
                <service.icon 
                  strokeWidth={1.5} 
                  className="w-10 h-10 transform transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <h3 className="text-xl font-bold text-[#265A4A] mb-3 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm text-[#5E7A86] leading-relaxed flex-grow">
                {service.description}
              </p>
              
              {/* Learn More Link */}
              <div className="mt-8 flex items-center text-[#265A4A] font-bold text-xs uppercase tracking-widest" onClick={(e) => { e.stopPropagation(); onNavigate?.(service.page); }}>
                <span className="border-b border-transparent group-hover:border-[#A7D7C5] transition-all">Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Band */}
        <div className="mt-16 w-full flex flex-col sm:flex-row items-center justify-center gap-6 pt-16 border-t border-[#D7DDDA]/50">
           <Button variant="primary" size="lg" className="shadow-lg shadow-[#265A4A]/10" onClick={() => onNavigate?.('contact')}>
             Request a Site Visit
           </Button>
           <Button variant="outline" size="lg" onClick={() => onNavigate?.('services')}>
             View All Services
           </Button>
        </div>

      </div>
    </section>
  );
};