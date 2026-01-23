import React from 'react';
import { GraduationCap, AlertTriangle, ShieldCheck, Activity, Search, Crosshair, ClipboardCheck, HardHat, FileText, Phone, ChevronRight, Calendar } from 'lucide-react';
import { Button } from '../Button';
import { Page } from '../../App';

interface K12PageProps {
  onNavigate: (page: Page) => void;
}

export const K12Page: React.FC<K12PageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F9F8] font-sans selection:bg-[#A7D7C5] selection:text-[#265A4A]">
      <section className="relative pt-40 pb-24 bg-[#0B1110] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1110] via-[#0B1110]/95 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 text-[#A7D7C5] mb-6">
                <GraduationCap className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Industry Solutions</span>
             </div>
             <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
                K–12 District HVAC <br/>
                <span className="text-[#A7D7C5]">Restoration & Hygiene</span>
             </h1>
             <p className="text-[#D7DDDA] text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#265A4A] pl-8 opacity-90 max-w-2xl">
                Specialized mechanical restoration for school districts facing compressed summer schedules, aging unit ventilators, and strict classroom IAQ requirements.
             </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold text-[#265A4A] mb-8">School District Challenges</h2>
              <div className="space-y-6 text-[#5E7A86] text-lg leading-relaxed font-light">
                <p>K-12 facilities face a unique convergence of challenges: high occupant density in classrooms, aging mechanical infrastructure, and maintenance windows strictly limited to summer and holiday breaks.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <Calendar className="w-4 h-4 text-[#A7D7C5]" />
                       Summer Compression
                    </h4>
                    <p className="text-sm">Major mechanical restoration must be executed rapidly during the summer window with zero tolerance for schedule slippage.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <Activity className="w-4 h-4 text-[#A7D7C5]" />
                       Classroom Density
                    </h4>
                    <p className="text-sm">Unit ventilators and air handlers must maintain precise CO2 and particulate control for high-density learning spaces.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <ShieldCheck className="w-4 h-4 text-[#A7D7C5]" />
                       Student Safety
                    </h4>
                    <p className="text-sm">Use of specialized low-VOC, non-corrosive restoration agents safe for educational environments.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <FileText className="w-4 h-4 text-[#A7D7C5]" />
                       Board Accountability
                    </h4>
                    <p className="text-sm">Documentation and ROI analysis provided to support facilities directors in school board presentations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F7F9F8] p-10 border border-[#D7DDDA] rounded-sm">
               <h4 className="text-[#265A4A] font-bold text-xs uppercase tracking-[0.2em] mb-8">District Stewardship</h4>
               <p className="text-[#5E7A86] text-sm leading-relaxed mb-8 italic border-l-2 border-[#A7D7C5] pl-6">"Our objective is to maximize the lifespan of existing district assets, deferring bond-level capital replacement projects."</p>
               <ul className="space-y-6">
                 {[{ title: "Multi-School Coordination", desc: "Phased project management across elementary, middle, and high school sites." },
                   { title: "Energy Recovery", desc: "Reducing district-wide utility spend by restoring coil heat transfer efficiency." },
                   { title: "Equipment Life Extension", desc: "Adding 5-10 years of service life to rooftop units and chillers." }
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
            <h2 className="text-3xl font-bold text-[#265A4A] mb-4">Supporting District Operations</h2>
            <p className="text-[#5E7A86] max-w-2xl mx-auto">We operate as a force multiplier for district facilities teams during critical maintenance periods.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm">
               <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Summer Surge Capacity</h4>
               <p className="text-sm text-[#5E7A86] leading-relaxed">We scale our field teams to meet aggressive August deadlines, ensuring all systems are online for the first day of school.</p>
            </div>
            <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm">
               <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Compliance Reporting</h4>
               <p className="text-sm text-[#5E7A86] leading-relaxed">Technical closeout packages providing proof of ventilation standards and hygiene for district records.</p>
            </div>
            <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm">
               <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Unit Ventilator Focus</h4>
               <p className="text-sm text-[#5E7A86] leading-relaxed">Specialized cleaning protocols for the specific challenges of classroom unit ventilators and cabinets.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B1110] text-center">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Request a District Assessment</h2>
           <p className="text-[#D7DDDA] text-lg mb-12 font-light">Contact our technical field teams to schedule a condition audit for your school facilities.</p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button size="lg" className="px-12" onClick={() => onNavigate('contact')}>Request Site Visit</Button>
              <div className="text-left"><span className="text-[10px] text-[#A7D7C5] uppercase font-bold mb-1 block tracking-widest">Technical Support</span><span className="text-xl font-bold text-white">(570) 900-5827</span></div>
           </div>
        </div>
      </section>
    </div>
  );
};