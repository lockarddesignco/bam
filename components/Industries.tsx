import React from 'react';
import { Stethoscope, GraduationCap, Landmark, Factory, Building, HeartHandshake, ShoppingBag, Box, ArrowRight, Building2 } from 'lucide-react';
import { Button } from './Button';
import { Page } from '../App';

interface IndustriesProps {
  onNavigate: (page: Page) => void;
}

const industries = [
  {
    title: "Healthcare Facilities",
    description: "Hospitals, surgical suites, and critical-care environments requiring strict ICRA and IAQ performance.",
    icon: Stethoscope,
    page: 'healthcare' as Page
  },
  {
    title: "Education — K–12",
    description: "District schools and classrooms requiring summer maintenance coordination and ASHRAE alignment.",
    icon: GraduationCap,
    page: 'k12' as Page
  },
  {
    title: "Higher Education",
    description: "University campuses, research labs, and dormitories requiring year-round system performance.",
    icon: Building2,
    page: 'higher-ed' as Page
  },
  {
    title: "Government & Municipal",
    description: "Secure sites and public buildings with strict procurement, safety, and background-clearance requirements.",
    icon: Landmark,
    page: 'government' as Page
  },
  {
    title: "Industrial & Manufacturing",
    description: "Production floors and warehouses requiring high-static pressure restoration and process uptime.",
    icon: Factory,
    page: 'industrial' as Page
  },
  {
    title: "Commercial Properties",
    description: "Office portfolios and managed buildings focused on tenant air hygiene and energy recovery ROI.",
    icon: Building,
    page: 'commercial' as Page
  },
  {
    title: "Senior Care / Assisted Living",
    description: "Residential care environments requiring 24/7 reliability and specialized air hygiene for vulnerable populations.",
    icon: HeartHandshake,
    page: 'senior-care' as Page
  },
  {
    title: "Retail & Chain Stores",
    description: "Regional multi-site portfolios requiring consistent technical standards and night-work coordination.",
    icon: ShoppingBag,
    page: 'retail' as Page
  },
  {
    title: "Cold Storage",
    description: "Technical restoration of refrigeration components, evaporator coils, and specialized moisture management.",
    icon: Box,
    page: 'cold-storage' as Page
  }
];

export const Industries: React.FC<IndustriesProps> = ({ onNavigate }) => {
  return (
    <section id="industries" className="relative py-24 bg-[#F7F9F8]">
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(#5E7A86 1px, transparent 1px), linear-gradient(90deg, #5E7A86 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-[#265A4A] mb-4 tracking-tighter uppercase leading-[0.9]">Industries We Serve</h2>
          <p className="text-lg md:text-xl text-[#5E7A86] font-light opacity-90">Trusted in mission-critical environments across the Mid-Atlantic.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, index) => (
            <div 
              key={index} 
              onClick={() => onNavigate(item.page)}
              className="group flex flex-col bg-white border border-[#D7DDDA] rounded-sm p-8 transition-all duration-300 hover:border-[#265A4A] hover:shadow-[0_8px_24px_rgba(38,90,74,0.08)] cursor-pointer h-full"
            >
              <div className="mb-6 self-start">
                <item.icon className="w-8 h-8 text-[#265A4A] transform transition-transform duration-300 group-hover:scale-[1.06]" strokeWidth={1.2} />
              </div>
              <h3 className="text-lg font-bold text-[#265A4A] mb-3 transition-colors duration-300 group-hover:text-[#1e483b] leading-tight">{item.title}</h3>
              <p className="text-[#5E7A86] text-sm leading-relaxed mb-6 flex-grow">{item.description}</p>
              <div className="mt-auto flex items-center text-[#265A4A] font-semibold text-xs opacity-90 group-hover:opacity-100 transition-all duration-300">
                <span className="border-b-2 border-transparent group-hover:border-[#A7D7C5] transition-all duration-300 pb-0.5 uppercase tracking-widest">Learn More</span>
                <ArrowRight className="w-3 h-3 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 w-full flex flex-col sm:flex-row items-center justify-center gap-6 pt-12 border-t border-[#D7DDDA]/50">
           <Button variant="primary" size="lg" className="rounded-sm shadow-md font-bold min-w-[220px]" onClick={() => onNavigate('contact')}>Request Assessment</Button>
           <Button variant="outline" size="lg" className="rounded-sm font-bold min-w-[220px]" onClick={() => onNavigate('services')}>View All Services</Button>
        </div>
      </div>
    </section>
  );
};