import React from 'react';
import RestoreImage from '../assets/restore-coil.png';
import DocumentImage from '../assets/document-report.png';
import DiagnoseImage from '../assets/diagnose-unit.png';
import VerifyImage from '../assets/verify-unit.png';

const steps = [
  {
    step: "01",
    title: "Diagnose",
    description: "Technicians perform airflow testing, coil inspection, static pressure checks, and IAQ assessments.",
    image: DiagnoseImage,
    alt: "Technician inspecting HVAC unit interior"
  },
  {
    step: "02",
    title: "Document",
    description: "We provide detailed before-photos, findings, compliance notes, and transparent reporting.",
    image: DocumentImage,
    alt: "Technician documenting coil before/after with checklist"
  },
  {
    step: "03",
    title: "Restore",
    description: "Certified technicians restore coils, cooling towers, ducts, and mechanical components.",
    image: RestoreImage,
    alt: "Technician cleaning coil surface with brush and hose"
  },
  {
    step: "04",
    title: "Verify",
    description: "After-photos, airflow recovery, and a full compliance closeout package.",
    image: VerifyImage,
    alt: "Verified HVAC unit with panels removed for inspection"
  }
];

export const TheBAMMethod: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      {/* Background: Very subtle institutional grid (2-3% opacity) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ 
          backgroundImage: `linear-gradient(#5E7A86 1px, transparent 1px), linear-gradient(90deg, #5E7A86 1px, transparent 1px)`, 
          backgroundSize: '48px 48px'
        }}
      ></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Section */}
        <div className="text-center mb-20 md:mb-24">
          <span className="block text-[#A7D7C5] font-bold text-xs md:text-sm tracking-[0.08em] uppercase mb-4">
            The BAM Method
          </span>
          <h2 className="text-[#265A4A] text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight leading-tight max-w-3xl mx-auto">
            Human-Led Service. Compliance-Driven Process.
          </h2>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-10 gap-y-12">
          {steps.map((item, index) => (
            <div key={index} className="flex flex-col group h-full cursor-default">
              {/* Photo Block */}
              <div className="relative w-full h-[220px] mb-6 rounded-lg overflow-hidden bg-[#F7F9F8] transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_8px_30px_rgba(38,90,74,0.15)] border border-[#D7DDDA]/50">
                {/* Image */}
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[0.2]"
                />
                
                {/* Muted Green/Grey Overlay for Institutional Tone */}
                <div className="absolute inset-0 bg-[#265A4A] mix-blend-multiply opacity-30 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Gradient Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform translate-y-full group-hover:translate-y-[-100%] transition-transform"></div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow px-1">
                {/* Step Number Tag */}
                <div className="mb-3">
                   <span className="inline-block text-[#A7D7C5] font-bold text-sm tracking-wider">
                     {item.step}
                   </span>
                </div>

                {/* Title */}
                <h3 className="text-[#265A4A] text-xl font-bold mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#5E7A86] text-sm md:text-base leading-relaxed font-normal opacity-90">
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