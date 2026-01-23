import React from 'react';
import { ShoppingBag, AlertTriangle, ShieldCheck, Activity, Search, Crosshair, ClipboardCheck, HardHat, FileText, Phone, ChevronRight, Globe } from 'lucide-react';
import { Button } from '../Button';
import { Page } from '../../App';

interface RetailPageProps {
  onNavigate: (page: Page) => void;
}

export const RetailPage: React.FC<RetailPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F9F8] font-sans selection:bg-[#A7D7C5] selection:text-[#265A4A]">
      <section className="relative pt-40 pb-24 bg-[#0B1110] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1110] via-[#0B1110]/95 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 text-[#A7D7C5] mb-6">
                <ShoppingBag className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Industry Solutions</span>
             </div>
             <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
                Retail & Chain <br/>
                <span className="text-[#A7D7C5]">HVAC Restoration Services</span>
             </h1>
             <p className="text-[#D7DDDA] text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#265A4A] pl-8 opacity-90 max-w-2xl">
                Regional mechanical restoration and preventive care for retail portfolios focused on customer experience, air hygiene, and cross-site energy consistency.
             </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold text-[#265A4A] mb-8">Retail Portfolio Realities</h2>
              <div className="space-y-6 text-[#5E7A86] text-lg leading-relaxed font-light">
                <p>Retail operations require reliable climate control and high air hygiene to protect brand reputation and customer comfort. For multi-site chains, consistent technical service and reporting are essential for centralized management.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <Globe className="w-4 h-4 text-[#A7D7C5]" />
                       Regional Scale
                    </h4>
                    <p className="text-sm">BAM supports portfolios across PA, NJ, MD, DE, and NY with consistent technical standards.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <Activity className="w-4 h-4 text-[#A7D7C5]" />
                       IAQ Consistency
                    </h4>
                    <p className="text-sm">Ensuring every location meets brand standards for air quality and HVAC cleanliness.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <AlertTriangle className="w-4 h-4 text-[#A7D7C5]" />
                       Night Coordination
                    </h4>
                    <p className="text-sm">Mechanical work performed after store hours to ensure zero impact on customer traffic.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <FileText className="w-4 h-4 text-[#A7D7C5]" />
                       Standard Reporting
                    </h4>
                    <p className="text-sm">Unified documentation for facility directors managing multiple retail sites.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F7F9F8] p-10 border border-[#D7DDDA] rounded-sm">
               <h4 className="text-[#265A4A] font-bold text-xs uppercase tracking-[0.2em] mb-8">Retail Stewardship</h4>
               <ul className="space-y-6">
                 {[{ title: "Brand Alignment", desc: "Technical hygiene that reflects corporate facility standards." },
                   { title: "Energy Recovery", desc: "Lowering operating overhead across multi-site portfolios." },
                   { title: "Asset Documentation", desc: "Mapping and auditing mechanical health across all locations." }
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
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Request a Retail Portfolio Audit</h2>
           <p className="text-[#D7DDDA] text-lg mb-12 font-light">Contact our regional technical team to baseline your portfolio’s HVAC health and energy efficiency.</p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button size="lg" className="px-12" onClick={() => onNavigate('contact')}>Request Site Visit</Button>
              <div className="text-left"><span className="text-[10px] text-[#A7D7C5] uppercase font-bold mb-1 block tracking-widest">Retail Field Line</span><span className="text-xl font-bold text-white">(570) 900-5827</span></div>
           </div>
        </div>
      </section>
    </div>
  );
};