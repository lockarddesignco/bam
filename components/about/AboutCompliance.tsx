import React from 'react';
import { Shield, BookOpen, Scale } from 'lucide-react';

export const AboutCompliance: React.FC = () => {
  return (
    <div className="p-10 md:p-16 animate-in fade-in duration-500">
      <h1 className="text-3xl md:text-4xl font-bold text-[#265A4A] mb-8 tracking-tight">Standards, Certifications & Compliance</h1>
      
      <div className="prose prose-slate max-w-none text-[#5E7A86] space-y-10 font-light leading-relaxed">
        <p className="text-lg">
          Compliance is the structural framework of our service delivery. BAM operates in strict alignment with national mechanical standards and facility-specific regulatory requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="p-8 border border-[#D7DDDA] bg-[#F7F9F8] space-y-4">
              <Shield className="w-10 h-10 text-[#265A4A]" />
              <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest">NADCA Standards (ACR)</h4>
              <p className="text-xs leading-relaxed">We perform air system cleaning and restoration according to NADCA’s ACR Standard. This ensures source removal of contaminants and verification of cleanliness using established industrial protocols.</p>
           </div>
           <div className="p-8 border border-[#D7DDDA] bg-[#F7F9F8] space-y-4">
              <BookOpen className="w-10 h-10 text-[#265A4A]" />
              <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest">ASHRAE Alignment</h4>
              <p className="text-xs leading-relaxed">Our work supports facility compliance with ASHRAE 62.1 (Ventilation) and ASHRAE 188 (Legionellosis Risk Management) through rigorous mechanical hygiene and decontamination.</p>
           </div>
        </div>

        <section>
          <h3 className="text-xl font-bold text-[#265A4A] mb-4">Inspection-Ready Documentation</h3>
          <p>
            Documentation is provided as a core deliverable. We understand that our work must stand up to scrutiny from internal audits and external regulatory bodies, including JCAHO, State Health Boards, and EPA inspectors. Our reports are built to provide the technical evidence these entities require.
          </p>
        </section>

        <section className="bg-[#0B1110] text-white p-10 rounded-sm">
           <h3 className="text-[#A7D7C5] text-lg font-bold mb-6">Certification Portfolio</h3>
           <div className="grid grid-cols-2 gap-y-4 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#A7D7C5]" />
                <span>NADCA Certified Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#A7D7C5]" />
                <span>EPA Universal Certification</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#A7D7C5]" />
                <span>OSHA 30 Leadership</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#A7D7C5]" />
                <span>ASHE Member</span>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};