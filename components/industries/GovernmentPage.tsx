import React from 'react';
import { Landmark, AlertTriangle, ShieldCheck, Activity, Search, Crosshair, ClipboardCheck, HardHat, FileText, Phone, ChevronRight, Lock } from 'lucide-react';
import { Button } from '../Button';
import { Page } from '../../App';

interface GovernmentPageProps {
  onNavigate: (page: Page) => void;
}

export const GovernmentPage: React.FC<GovernmentPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F9F8] font-sans selection:bg-[#A7D7C5] selection:text-[#265A4A]">
      <section className="relative pt-40 pb-24 bg-[#0B1110] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1110] via-[#0B1110]/95 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 text-[#A7D7C5] mb-6">
                <Landmark className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Industry Solutions</span>
             </div>
             <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
                Government & Secure <br/>
                <span className="text-[#A7D7C5]">HVAC Restoration Services</span>
             </h1>
             <p className="text-[#D7DDDA] text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#265A4A] pl-8 opacity-90 max-w-2xl">
                Technical mechanical services for federal, state, and municipal buildings, including secure sites where access control and background-cleared personnel are required.
             </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold text-[#265A4A] mb-8">Government Facility Realities</h2>
              <div className="space-y-6 text-[#5E7A86] text-lg leading-relaxed font-light">
                <p>Public sector facilities operate under strict procurement guidelines and security mandates. From courthouses to correctional facilities, mechanical work must be performed by vetted professionals who understand secure-site protocol.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <Lock className="w-4 h-4 text-[#A7D7C5]" />
                       Access Protocol
                    </h4>
                    <p className="text-sm">Work is performed by background-checked technicians accustomed to secure entry and escort requirements.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <FileText className="w-4 h-4 text-[#A7D7C5]" />
                       Procurement Ready
                    </h4>
                    <p className="text-sm">BAM supports institutional purchasing requirements, including [PA COSTARS] vendor status and formal bidding documentation.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <Activity className="w-4 h-4 text-[#A7D7C5]" />
                       Critical Continuity
                    </h4>
                    <p className="text-sm">Ensuring uptime in facilities that house high-density staff, public records, or mission-critical data systems.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <ShieldCheck className="w-4 h-4 text-[#A7D7C5]" />
                       Regulatory Support
                    </h4>
                    <p className="text-sm">Mechanical hygiene supporting state and federal mandates for building safety and energy stewardship.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F7F9F8] p-10 border border-[#D7DDDA] rounded-sm">
               <h4 className="text-[#265A4A] font-bold text-xs uppercase tracking-[0.2em] mb-8">Governance & Responsibility</h4>
               <p className="text-[#5E7A86] text-sm leading-relaxed mb-8 italic border-l-2 border-[#A7D7C5] pl-6">"We operate as a low-friction vendor for government facility managers, providing technical proof for every dollar spent."</p>
               <ul className="space-y-6">
                 {[{ title: "COSTARS Alignment", desc: "Utilizing streamlined purchasing contracts where available." },
                   { title: "Cleared Technicians", desc: "Experience in secure municipal and federal buildings." },
                   { title: "Transparent Audit Trails", desc: "Full documentation of mechanical condition and correction." }
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
          <h2 className="text-3xl font-bold text-[#265A4A] mb-12">Supporting Public Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm">
               <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Secure Site Operations</h4>
               <p className="text-sm text-[#5E7A86] leading-relaxed">Coordination with security supervisors on tool manifest management and site access timing.</p>
            </div>
            <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm">
               <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Energy Stewardship</h4>
               <p className="text-sm text-[#5E7A86] leading-relaxed">Helping municipal and state facilities meet energy reduction targets via mechanical efficiency recovery.</p>
            </div>
            <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm">
               <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Asset Lifespan Extension</h4>
               <p className="text-sm text-[#5E7A86] leading-relaxed">Providing a restoration alternative to the high costs and logistical complexity of full equipment replacement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-2xl font-bold text-[#265A4A] mb-12 border-b border-[#D7DDDA] pb-6">Public Sector Relevant Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {[{ title: "Cooling Tower Restoration", page: 'cooling-tower' },
              { title: "AHU & Coil Restoration", page: 'services' },
              { title: "NADCA-Aligned Duct Cleaning", page: 'services' },
              { title: "IAQ Monitoring & Reporting", page: 'services' },
              { title: "Fire Damper Compliance", page: 'services' },
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

      <section className="py-24 bg-[#0B1110] text-center">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Request a Government Facility Assessment</h2>
           <p className="text-[#D7DDDA] text-lg mb-12 font-light">Contact our technical teams for site audits and project scoping within secure municipal or federal facilities.</p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button size="lg" className="px-12" onClick={() => onNavigate('contact')}>Request Site Visit</Button>
              <div className="text-left"><span className="text-[10px] text-[#A7D7C5] uppercase font-bold mb-1 block tracking-widest">Public Sector Line</span><span className="text-xl font-bold text-white">(570) 900-5827</span></div>
           </div>
        </div>
      </section>
    </div>
  );
};