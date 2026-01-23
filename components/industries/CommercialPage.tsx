import React from 'react';
import { Building, AlertTriangle, ShieldCheck, Activity, Search, Crosshair, ClipboardCheck, HardHat, FileText, Phone, ChevronRight, TrendingUp } from 'lucide-react';
import { Button } from '../Button';
import { Page } from '../../App';

interface CommercialPageProps {
  onNavigate: (page: Page) => void;
}

export const CommercialPage: React.FC<CommercialPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F9F8] font-sans selection:bg-[#A7D7C5] selection:text-[#265A4A]">
      <section className="relative pt-40 pb-24 bg-[#0B1110] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1110] via-[#0B1110]/95 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 text-[#A7D7C5] mb-6">
                <Building className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Industry Solutions</span>
             </div>
             <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
                Commercial Property <br/>
                <span className="text-[#A7D7C5]">HVAC & IAQ Solutions</span>
             </h1>
             <p className="text-[#D7DDDA] text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#265A4A] pl-8 opacity-90 max-w-2xl">
                Technical mechanical restoration for office portfolios and retail environments focused on energy recovery, tenant air hygiene, and operational efficiency.
             </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold text-[#265A4A] mb-8">Commercial Portfolio Realities</h2>
              <div className="space-y-6 text-[#5E7A86] text-lg leading-relaxed font-light">
                <p>Commercial property managers must balance rising energy costs with tenant comfort and air quality expectations. HVAC restoration provides a high-ROI alternative to equipment replacement by recovering lost efficiency.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <TrendingUp className="w-4 h-4 text-[#A7D7C5]" />
                       Energy Overhead
                    </h4>
                    <p className="text-sm">Recovering thermal efficiency in AHUs and chillers to lower month-over-month utility spend.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <Activity className="w-4 h-4 text-[#A7D7C5]" />
                       IAQ Accountability
                    </h4>
                    <p className="text-sm">Proactive air system hygiene to reduce tenant complaints and support building wellness initiatives.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <AlertTriangle className="w-4 h-4 text-[#A7D7C5]" />
                       Asset Preservation
                    </h4>
                    <p className="text-sm">Extending the life of high-value mechanical infrastructure through documented technical restoration.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <FileText className="w-4 h-4 text-[#A7D7C5]" />
                       Documentation
                    </h4>
                    <p className="text-sm">Providing property owners with technical verification of system improvements and compliance readiness.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F7F9F8] p-10 border border-[#D7DDDA] rounded-sm">
               <h4 className="text-[#265A4A] font-bold text-xs uppercase tracking-[0.2em] mb-8">Commercial Stewardship</h4>
               <ul className="space-y-6">
                 {[{ title: "Silent Implementation", desc: "Work coordinated to avoid disruption to daytime tenant activities." },
                   { title: "Portfolio Wide Reporting", desc: "Consistent technical documentation across multiple properties." },
                   { title: "ROI Verification", desc: "Focus on thermal and airflow recovery to justify project spend." }
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
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Request a Commercial Property Assessment</h2>
           <p className="text-[#D7DDDA] text-lg mb-12 font-light">Audit your portfolio’s HVAC infrastructure for performance recovery and IAQ improvements.</p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button size="lg" className="px-12" onClick={() => onNavigate('contact')}>Request Site Visit</Button>
              <div className="text-left"><span className="text-[10px] text-[#A7D7C5] uppercase font-bold mb-1 block tracking-widest">Commercial Desk</span><span className="text-xl font-bold text-white">(570) 900-5827</span></div>
           </div>
        </div>
      </section>
    </div>
  );
};