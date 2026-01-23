import React from 'react';
import { GraduationCap, AlertTriangle, ShieldCheck, Activity, Search, Crosshair, ClipboardCheck, HardHat, FileText, Phone, ChevronRight } from 'lucide-react';
import { Button } from '../Button';
import { Page } from '../../App';

interface EducationPageProps {
  onNavigate: (page: Page) => void;
}

export const EducationPage: React.FC<EducationPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F9F8] font-sans selection:bg-[#A7D7C5] selection:text-[#265A4A]">
      <section className="relative pt-40 pb-24 bg-[#0B1110] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1110] via-[#0B1110]/95 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 text-[#A7D7C5] mb-6">
                <GraduationCap className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Industry Solutions</span>
             </div>
             <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
                Education HVAC <br/>
                <span className="text-[#A7D7C5]">Restoration & IAQ Services</span>
             </h1>
             <p className="text-[#D7DDDA] text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#265A4A] pl-8 opacity-90 max-w-2xl">
                Mechanical restoration and indoor air quality services for K-12 and university campuses focused on student wellness, energy efficiency, and facility longevity.
             </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold text-[#265A4A] mb-8">Educational Facility Challenges</h2>
              <div className="space-y-6 text-[#5E7A86] text-lg leading-relaxed font-light">
                <p>Campus environments present unique mechanical demands, including high-occupancy loads, aging infrastructure, and compressed maintenance windows. Maintaining airflow and hygiene is essential for reducing student absenteeism and protecting mechanical assets.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <AlertTriangle className="w-4 h-4 text-[#A7D7C5]" />
                       Summer Windows
                    </h4>
                    <p className="text-sm">Major mechanical work must be precisely timed for summer or holiday breaks to ensure zero classroom impact.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <Activity className="w-4 h-4 text-[#A7D7C5]" />
                       High Occupancy
                    </h4>
                    <p className="text-sm">High-density classrooms and gyms require optimized air exchange rates and consistent thermal performance.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <ShieldCheck className="w-4 h-4 text-[#A7D7C5]" />
                       IAQ Responsibility
                    </h4>
                    <p className="text-sm">Properly cleaned and restored systems reduce particulate load and biological risks in high-traffic areas.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <FileText className="w-4 h-4 text-[#A7D7C5]" />
                       Budget Scrutiny
                    </h4>
                    <p className="text-sm">School boards and administrators require documented ROI and clear evidence of asset life-extension.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F7F9F8] p-10 border border-[#D7DDDA] rounded-sm">
               <h4 className="text-[#265A4A] font-bold text-xs uppercase tracking-[0.2em] mb-8">Education Stewardship</h4>
               <p className="text-[#5E7A86] text-sm leading-relaxed mb-8 italic border-l-2 border-[#A7D7C5] pl-6">"Our objective is to restore classroom environments to original design standards while protecting the district's capital investments."</p>
               <ul className="space-y-6">
                 {[{ title: "District-Wide Planning", desc: "Multi-site coordination for phased campus restoration." },
                   { title: "Energy Recovery", desc: "Documented reductions in fan load and static pressure penalty." },
                   { title: "Safe Chemicals", desc: "Use of specialized, low-VOC agents appropriate for school settings." }
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
            <h2 className="text-3xl font-bold text-[#265A4A] mb-4">Supporting Campus Operations</h2>
            <p className="text-[#5E7A86] max-w-2xl mx-auto">We provide the technical documentation required for board approval and facility transparency.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm">
               <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Summer Surge Capacity</h4>
               <p className="text-sm text-[#5E7A86] leading-relaxed">We scale our field teams to meet aggressive summer maintenance deadlines across K-12 and university facilities.</p>
            </div>
            <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm">
               <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Board-Ready Reporting</h4>
               <p className="text-sm text-[#5E7A86] leading-relaxed">Technical closeout packages including before/after verification metrics for administrative and board review.</p>
            </div>
            <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm">
               <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Asset Protection</h4>
               <p className="text-sm text-[#5E7A86] leading-relaxed">Prioritizing the restoration of existing AHUs and cooling towers to defer high-cost capital replacement cycles.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-2xl font-bold text-[#265A4A] mb-12 border-b border-[#D7DDDA] pb-6">Campus-Relevant Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {[{ title: "Cooling Tower Restoration", page: 'cooling-tower' },
              { title: "AHU & Coil Restoration", page: 'services' },
              { title: "NADCA-Aligned Duct Cleaning", page: 'services' },
              { title: "IAQ Monitoring & Reporting", page: 'services' },
              { title: "Mold Remediation (Institutional)", page: 'services' },
              { title: "Preventive Maintenance Programs", page: 'services' }
            ].map((service, i) => (
              <button key={i} onClick={() => onNavigate(service.page as Page)} className="flex items-center justify-between p-4 group border-b border-[#D7DDDA] hover:border-[#265A4A] transition-all text-left">
                <span className="font-bold text-[#265A4A] text-sm uppercase tracking-widest group-hover:text-[#1e483b]">{service.title}</span>
                <ChevronRight className="w-4 h-4 text-[#A7D7C5] group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B1110] text-white relative">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-3xl font-bold mb-8">Compliance & Healthy Schools</h2>
                 <div className="space-y-6 text-[#D7DDDA] font-light leading-relaxed">
                    <p>BAM supports institutional compliance with ASHRAE 62.1 standards for acceptable indoor air quality. In university environments, we coordinate with EHS departments to ensure technical work aligns with campus safety mandates.</p>
                    <p>Our reporting provides the necessary documentation for facilities to prove they are meeting recommended air exchange and hygiene standards across classroom and residential buildings.</p>
                 </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="p-6 bg-[#265A4A]/20 border border-[#A7D7C5]/20 text-center"><h4 className="font-bold text-[#A7D7C5] text-xs mb-2">OSHA 30 LEADERSHIP</h4><p className="text-[10px] text-[#D7DDDA]">Safe site presence during campus hours.</p></div>
                 <div className="p-6 bg-[#265A4A]/20 border border-[#A7D7C5]/20 text-center"><h4 className="font-bold text-[#A7D7C5] text-xs mb-2">ASHRAE ALIGNED</h4><p className="text-[10px] text-[#D7DDDA]">Ventilation standards supported via restoration.</p></div>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <h2 className="text-3xl font-bold text-[#265A4A] mb-12">Engagement Process for Education</h2>
           <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[{ step: "01", label: "Intake", icon: Search, detail: "Mapping campus assets and scheduling constraints." },
                { step: "02", label: "Assessment", icon: Crosshair, detail: "On-site audit to baseline mechanical performance." },
                { step: "03", label: "Protocol Plan", icon: ClipboardCheck, detail: "Finalizing work windows and site protection." },
                { step: "04", label: "Execution", icon: HardHat, detail: "Precision work during break windows." },
                { step: "05", label: "Handoff", icon: FileText, detail: "Performance verification and board reporting." }
              ].map((item, i) => (
                <div key={i} className="relative">
                   <div className="w-10 h-10 bg-[#265A4A] text-white flex items-center justify-center font-bold text-sm mb-6 rounded-sm">{item.step}</div>
                   <h4 className="font-bold text-[#265A4A] uppercase tracking-widest text-[11px] mb-3">{item.label}</h4>
                   <p className="text-xs text-[#5E7A86] leading-relaxed">{item.detail}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B1110] text-center">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Request an Educational Facility Assessment</h2>
           <p className="text-[#D7DDDA] text-lg mb-12 font-light">Contact our technical field teams to schedule a condition audit for your campus or district infrastructure.</p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button size="lg" className="px-12" onClick={() => onNavigate('contact')}>Request Site Visit</Button>
              <div className="text-left"><span className="text-[10px] text-[#A7D7C5] uppercase font-bold mb-1 block tracking-widest">Technical Support</span><span className="text-xl font-bold text-white">(570) 900-5827</span></div>
           </div>
        </div>
      </section>
    </div>
  );
};