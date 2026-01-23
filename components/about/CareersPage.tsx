import React from 'react';
import { Mail, Briefcase } from 'lucide-react';

export const CareersPage: React.FC = () => {
  return (
    <div className="p-10 md:p-16 animate-in fade-in duration-500">
      <h1 className="text-3xl md:text-4xl font-bold text-[#265A4A] mb-8 tracking-tight">Careers at Building & Air Maintenance</h1>
      
      <div className="prose prose-slate max-w-none text-[#5E7A86] space-y-10 font-light leading-relaxed">
        <p className="text-lg">
          We do not hire temporary labor or general laborers. We develop specialists.
        </p>

        <section>
          <h3 className="text-xl font-bold text-[#265A4A] mb-4">The BAM Technician Standard</h3>
          <p>
            Technicians at BAM are trained mechanical craftsmen. The nature of restoration work—cleaning cooling towers, restoring AHU coils, and decontaminating ductwork—requires a high degree of precision and an eye for technical detail. Our team members are expected to be stewards of the facility environments they enter.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-[#265A4A] mb-4">Training & Development</h3>
          <p>
            Ongoing training is a mandatory component of employment at BAM. This includes:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <li className="p-4 border border-[#D7DDDA] text-xs font-bold text-[#265A4A] uppercase tracking-widest">OSHA 10/30 Safety Training</li>
            <li className="p-4 border border-[#D7DDDA] text-xs font-bold text-[#265A4A] uppercase tracking-widest">NADCA Technician Certification</li>
            <li className="p-4 border border-[#D7DDDA] text-xs font-bold text-[#265A4A] uppercase tracking-widest">ICRA / PCRA Protocols</li>
            <li className="p-4 border border-[#D7DDDA] text-xs font-bold text-[#265A4A] uppercase tracking-widest">Advanced Mechanical Restoration</li>
          </ul>
        </section>

        <div className="p-10 bg-[#F2F6F5] border-2 border-dashed border-[#D7DDDA] text-center">
           <Briefcase className="w-12 h-12 text-[#265A4A] mx-auto mb-6 opacity-40" />
           <h3 className="text-[#265A4A] text-xl font-bold mb-4">Submit a Professional Inquiry</h3>
           <p className="text-sm leading-relaxed mb-8 max-w-md mx-auto">We are always evaluating experienced mechanical technicians and project leads for our Mid-Atlantic field teams.</p>
           <a href="mailto:info@buildingandair.com" className="inline-flex items-center gap-2 px-8 py-3 bg-[#265A4A] text-white font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-[#1e483b] transition-all">
             <Mail className="w-4 h-4" />
             Email Career Inquiry
           </a>
        </div>
      </div>
    </div>
  );
};