import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

const results = [
  {
    facility: "Healthcare Facility",
    metric: "32% Heat-Transfer Recovery",
    description: "Restored coil performance and reduced static-pressure penalty in a surgical-suite AHU.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    alt: "Medical facility corridor"
  },
  {
    facility: "K–12 School District",
    metric: "IAQ & Ventilation Compliance Achieved",
    description: "Coil and duct restoration improved airflow and supported ASHRAE-aligned ventilation in multiple buildings.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    alt: "Clean school hallway"
  },
  {
    facility: "Government Building",
    metric: "5–10 Years Extended Tower Life",
    description: "Recovered cooling-tower capacity, reduced biofouling, and avoided major capital replacement.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    alt: "Industrial facility interior"
  }
];

export const Results: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-[#F7F9F8] border-b border-[#D7DDDA]">
      
      {/* Optional: subtle grid overlay at 3% opacity */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#5E7A86 1px, transparent 1px), linear-gradient(90deg, #5E7A86 1px, transparent 1px)`, 
          backgroundSize: '48px 48px'
        }}
      ></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#265A4A] mb-4 tracking-tighter uppercase leading-[0.9]">
            Verified Results in <br/>Mission-Critical Facilities
          </h2>
          <p className="text-[#5E7A86] text-lg font-normal opacity-90 max-w-3xl mx-auto">
            Documented improvements across healthcare, education, government, and industrial environments.
          </p>
        </div>

        {/* Proof Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {results.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-white border border-[#D7DDDA] rounded-lg overflow-hidden transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] group"
            >
              {/* Muted Photographic Header Block */}
              <div className="relative h-[200px] w-full overflow-hidden bg-[#D7DDDA]">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover filter grayscale opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                {/* Soft green/grey overlay to unify tone */}
                <div className="absolute inset-0 bg-[#5E7A86] mix-blend-multiply opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"></div>
                
                {/* Document Icon Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-md shadow-sm">
                   <FileText className="w-4 h-4 text-[#265A4A]" />
                </div>
              </div>

              {/* Content Body */}
              <div className="flex flex-col flex-grow p-6 md:p-8">
                {/* Facility Type Tag */}
                <div className="mb-3">
                  <span className="text-[#5E7A86] text-xs font-bold uppercase tracking-widest border-b border-[#A7D7C5] pb-1">
                    {item.facility}
                  </span>
                </div>

                {/* Primary Metric (Hero Text) */}
                <h3 className="text-[#265A4A] text-2xl font-bold mb-3 leading-tight">
                  {item.metric}
                </h3>

                {/* Description */}
                <p className="text-[#5E7A86] text-sm leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>

                {/* Link */}
                <div className="mt-auto pt-4 border-t border-[#F7F9F8]">
                  <a href="#" className="inline-flex items-center text-[#265A4A] text-sm font-bold group-hover:text-[#1e483b] transition-colors">
                    <span className="hover:underline decoration-[#A7D7C5] underline-offset-4 decoration-2">View Report</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};