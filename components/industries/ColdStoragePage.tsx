import React from 'react';
import { Box, AlertTriangle, ShieldCheck, Activity, Search, Crosshair, ClipboardCheck, HardHat, FileText, Phone, ChevronRight, ThermometerSnowflake } from 'lucide-react';
import { Button } from '../Button';
import { Page } from '../../App';

interface ColdStoragePageProps {
  onNavigate: (page: Page) => void;
}

export const ColdStoragePage: React.FC<ColdStoragePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F9F8] font-sans selection:bg-[#A7D7C5] selection:text-[#265A4A]">
      <section className="relative pt-40 pb-24 bg-[#0B1110] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1110] via-[#0B1110]/95 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 text-[#A7D7C5] mb-6">
                <Box className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Industry Solutions</span>
             </div>
             <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
                Cold Storage <br/>
                <span className="text-[#A7D7C5]">Mechanical Restoration</span>
             </h1>
             <p className="text-[#D7DDDA] text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#265A4A] pl-8 opacity-90 max-w-2xl">
                Technical mechanical services for refrigerated facilities and cold storage warehouses focused on refrigeration efficiency, component hygiene, and moisture management.
             </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold text-[#265A4A] mb-8">Cold Storage Realities</h2>
              <div className="space-y-6 text-[#5E7A86] text-lg leading-relaxed font-light">
                <p>Cold storage facilities operate under extreme thermal differentials that create specialized mechanical challenges including moisture migration, ice buildup, and biological risk in defrost systems. Maintaining component cleanliness is essential for refrigeration performance.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <ThermometerSnowflake className="w-4 h-4 text-[#A7D7C5]" />
                       Thermal Recovery
                    </h4>
                    <p className="text-sm">Restoring fouled refrigeration coils to ensure maximum heat transfer and minimum compressor load.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <Activity className="w-4 h-4 text-[#A7D7C5]" />
                       Defrost Hygiene
                    </h4>
                    <p className="text-sm">Managing biological growth and particulate buildup in drain pans and evaporator sections.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <AlertTriangle className="w-4 h-4 text-[#A7D7C5]" />
                       Moisture Control
                    </h4>
                    <p className="text-sm">Addressing airflow and mechanical conditions that lead to excessive condensation and ice accumulation.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <ShieldCheck className="w-4 h-4 text-[#A7D7C5]" />
                       FSMA Compliance
                    </h4>
                    <p className="text-sm">Mechanical hygiene documentation supporting food safety standards and facility audits.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F7F9F8] p-10 border border-[#D7DDDA] rounded-sm">
               <h4 className="text-[#265A4A] font-bold text-xs uppercase tracking-[0.2em] mb-8">Cold Storage Stewardship</h4>
               <ul className="space-y-6">
                 {[{ title: "Specialized Descaling", desc: "Removing thermal-insulating mineral scale from refrigeration components." },
                   { title: "Defrost Pan Hygiene", desc: "Biocidal neutralization and mechanical cleaning of condensate systems." },
                   { title: "Documented Temperature Recovery", desc: "Verified performance improvements in refrigeration load handling." }
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

      <section className="py-24 bg-[#0B1110] text-center">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Request a Cold Storage Assessment</h2>
           <p className="text-[#D7DDDA] text-lg mb-12 font-light">Audit your facility’s refrigeration and air handling infrastructure for hygiene and thermal performance.</p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button size="lg" className="px-12" onClick={() => onNavigate('contact')}>Request Site Visit</Button>
              <div className="text-left"><span className="text-[10px] text-[#A7D7C5] uppercase font-bold mb-1 block tracking-widest">Technical Desk</span><span className="text-xl font-bold text-white">(570) 900-5827</span></div>
           </div>
        </div>
      </section>
    </div>
  );
};