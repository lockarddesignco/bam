import React from 'react';
import { Factory, AlertTriangle, ShieldCheck, Activity, Search, Crosshair, ClipboardCheck, HardHat, FileText, Phone, ChevronRight, Zap, Settings } from 'lucide-react';
import { Button } from '../Button';
import { Page } from '../../App';

interface IndustrialPageProps {
  onNavigate: (page: Page) => void;
}

export const IndustrialPage: React.FC<IndustrialPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F9F8] font-sans selection:bg-[#A7D7C5] selection:text-[#265A4A]">
      <section className="relative pt-40 pb-24 bg-[#0B1110] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1110] via-[#0B1110]/95 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 text-[#A7D7C5] mb-6">
                <Factory className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Industry Solutions</span>
             </div>
             <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
                Industrial & Manufacturing <br/>
                <span className="text-[#A7D7C5]">HVAC Restoration</span>
             </h1>
             <p className="text-[#D7DDDA] text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#265A4A] pl-8 opacity-90 max-w-2xl">
                Specialized mechanical services for high-demand industrial environments where static pressure, heat load, and process-critical airflow define the operational reality.
             </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold text-[#265A4A] mb-8">Industrial Mechanical Realities</h2>
              <div className="space-y-6 text-[#5E7A86] text-lg leading-relaxed font-light">
                <p>Industrial HVAC systems are subject to heavy particulate loads, chemical exposure, and constant 24/7 runtimes. System degradation in these environments directly impacts energy consumption and process stability.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <Settings className="w-4 h-4 text-[#A7D7C5]" />
                       High Particulate
                    </h4>
                    <p className="text-sm">Managing the accumulation of manufacturing byproducts within coils and air-handling infrastructure.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <Zap className="w-4 h-4 text-[#A7D7C5]" />
                       Static Pressure Penalty
                    </h4>
                    <p className="text-sm">Restoring fouled coils to reduce fan amp-draw and energy overhead on large-scale industrial arrays.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <Activity className="w-4 h-4 text-[#A7D7C5]" />
                       Thermal Capacity
                    </h4>
                    <p className="text-sm">Recovering heat rejection in cooling towers and process chillers to maintain tight manufacturing tolerances.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <AlertTriangle className="w-4 h-4 text-[#A7D7C5]" />
                       Hazard Coordination
                    </h4>
                    <p className="text-sm">Work performed by technicians trained in industrial safety, including LOTO and high-access protocols.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F7F9F8] p-10 border border-[#D7DDDA] rounded-sm">
               <h4 className="text-[#265A4A] font-bold text-xs uppercase tracking-[0.2em] mb-8">Industrial Service Standard</h4>
               <p className="text-[#5E7A86] text-sm leading-relaxed mb-8 italic border-l-2 border-[#A7D7C5] pl-6">"Our focus is on maximizing mechanical efficiency and process uptime through verified restoration."</p>
               <ul className="space-y-6">
                 {[{ title: "Heavy-Duty Extraction", desc: "Specialized equipment for industrial-scale duct and coil cleaning." },
                   { title: "LOTO Safety Compliance", desc: "Strict adherence to facility-specific lockout/tagout mandates." },
                   { title: "Performance Benchmarking", desc: "Before/after air velocity and temperature differential metrics." }
                 ].map((item, i) => (
                   <li key={i} className="flex gap-4">
                     <ShieldCheck className="w-5 h-5 text-[#265A4A] shrink-0" />
                     <p className="text-[#5E7A86] text-sm"><span className="font-bold text-[#265A4A]">{item.title}:</span> {item.desc}</p>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F2F6F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-3xl font-bold text-[#265A4A] mb-12">Supporting Production Continuity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm">
               <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Production-Aligned Scheduling</h4>
               <p className="text-sm text-[#5E7A86] leading-relaxed">Coordinating mechanical restoration around planned outages and production maintenance windows.</p>
            </div>
            <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm">
               <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Chemical Compatibility</h4>
               <p className="text-sm text-[#5E7A86] leading-relaxed">Ensuring restoration agents are compatible with the specific environmental and process demands of the site.</p>
            </div>
            <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm">
               <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">OSHA 30 Field Leads</h4>
               <p className="text-sm text-[#5E7A86] leading-relaxed">Qualified site supervision for high-stakes work in active industrial manufacturing zones.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B1110] text-center">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Request an Industrial Site Assessment</h2>
           <p className="text-[#D7DDDA] text-lg mb-12 font-light">Schedule a condition audit for your industrial mechanical infrastructure and cooling systems.</p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button size="lg" className="px-12" onClick={() => onNavigate('contact')}>Request Site Visit</Button>
              <div className="text-left"><span className="text-[10px] text-[#A7D7C5] uppercase font-bold mb-1 block tracking-widest">Industrial Field Line</span><span className="text-xl font-bold text-white">(570) 900-5827</span></div>
           </div>
        </div>
      </section>
    </div>
  );
};