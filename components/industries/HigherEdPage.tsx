import React from 'react';
import { GraduationCap, AlertTriangle, ShieldCheck, Activity, Search, Crosshair, ClipboardCheck, HardHat, FileText, Phone, ChevronRight, Microscope } from 'lucide-react';
import { Button } from '../Button';
import { Page } from '../../App';

interface HigherEdPageProps {
  onNavigate: (page: Page) => void;
}

export const HigherEdPage: React.FC<HigherEdPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F9F8] font-sans selection:bg-[#A7D7C5] selection:text-[#265A4A]">
      <section className="relative pt-40 pb-24 bg-[#0B1110] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1110] via-[#0B1110]/95 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 text-[#A7D7C5] mb-6">
                <GraduationCap className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Industry Solutions</span>
             </div>
             <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
                Higher Education <br/>
                <span className="text-[#A7D7C5]">Campus Restoration</span>
             </h1>
             <p className="text-[#D7DDDA] text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#265A4A] pl-8 opacity-90 max-w-2xl">
                Technical mechanical services for universities and research institutions, addressing laboratory exhaust, dormitory IAQ, and central utility plant efficiency.
             </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold text-[#265A4A] mb-8">Campus Mechanical Realities</h2>
              <div className="space-y-6 text-[#5E7A86] text-lg leading-relaxed font-light">
                <p>University campuses operate like small cities, with diverse mechanical needs ranging from critical research environments to high-density student housing. Maintaining these systems requires a restoration strategy that balances energy goals with occupant health.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <Microscope className="w-4 h-4 text-[#A7D7C5]" />
                       Research Continuity
                    </h4>
                    <p className="text-sm">Maintaining precise airflow and exhaust parameters in grant-funded laboratory and research buildings.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <Activity className="w-4 h-4 text-[#A7D7C5]" />
                       Dormitory IAQ
                    </h4>
                    <p className="text-sm">Managing humidity and biological risks in student housing to prevent mold outbreaks and complaints.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <ShieldCheck className="w-4 h-4 text-[#A7D7C5]" />
                       Central Plant
                    </h4>
                    <p className="text-sm">Large-scale cooling tower restoration to support campus-wide chilled water loops and efficiency targets.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <FileText className="w-4 h-4 text-[#A7D7C5]" />
                       Sustainability
                    </h4>
                    <p className="text-sm">Supporting campus carbon reduction goals through documented energy recovery in existing assets.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F7F9F8] p-10 border border-[#D7DDDA] rounded-sm">
               <h4 className="text-[#265A4A] font-bold text-xs uppercase tracking-[0.2em] mb-8">University Stewardship</h4>
               <p className="text-[#5E7A86] text-sm leading-relaxed mb-8 italic border-l-2 border-[#A7D7C5] pl-6">"We work with campus engineering to protect the integrity of research environments and the comfort of student life."</p>
               <ul className="space-y-6">
                 {[{ title: "Lab Exhaust Hygiene", desc: "Cleaning and restoring critical exhaust fans and ductwork." },
                   { title: "Occupied Implementation", desc: "Coordination with campus schedules to minimize disruption." },
                   { title: "Mold Prevention", desc: "Proactive coil and drain pan restoration in residential halls." }
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#265A4A] mb-4">Supporting Campus Infrastructure</h2>
            <p className="text-[#5E7A86] max-w-2xl mx-auto">We provide the specialized labor and technical documentation required for complex university systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm">
               <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Research Protection</h4>
               <p className="text-sm text-[#5E7A86] leading-relaxed">Ensuring HVAC restoration work does not contaminate sensitive experiments or violate BSL protocols.</p>
            </div>
            <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm">
               <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Capital Deferment</h4>
               <p className="text-sm text-[#5E7A86] leading-relaxed">Extending the life of massive central plant assets to avoid disruptive and costly replacement cycles.</p>
            </div>
            <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm">
               <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Safety Leadership</h4>
               <p className="text-sm text-[#5E7A86] leading-relaxed">OSHA 30-trained field leads capable of managing safety in diverse environments, from steam tunnels to cleanrooms.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B1110] text-center">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Request a Campus Assessment</h2>
           <p className="text-[#D7DDDA] text-lg mb-12 font-light">Contact our engineering team to schedule a technical audit of your university infrastructure.</p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button size="lg" className="px-12" onClick={() => onNavigate('contact')}>Request Site Visit</Button>
              <div className="text-left"><span className="text-[10px] text-[#A7D7C5] uppercase font-bold mb-1 block tracking-widest">Campus Support</span><span className="text-xl font-bold text-white">(570) 900-5827</span></div>
           </div>
        </div>
      </section>
    </div>
  );
};