import React from 'react';
import { Button } from './Button';
import { 
  ChevronRight, HardHat, Microscope, AlertTriangle, 
  Thermometer, Construction, CheckCircle2, Zap, 
  ShieldCheck, ArrowRight, FileText, LucideIcon 
} from 'lucide-react';
import type { Page } from '../App';

export interface ServicePageProps {
  hero: {
    title: React.ReactNode;
    description: string;
    image: string;
    status: string;
  };
  diagnostics: {
    title: string;
    description: string;
    items: { title: string; desc: string; icon: LucideIcon }[];
  };
  protocol: {
    title: string;
    description: string;
    steps: { step: string; title: string; desc: string; points: string[] }[];
  };
  roi: {
    description: string;
    stat1: { value: string; label: string };
    stat2: { value: string; label: string; subLabel: string };
  };
  faq: {
    items: { q: string; a: string }[];
  };
  onNavigate: (page: Page) => void;
}

export const ServicePageLayout: React.FC<ServicePageProps> = ({ 
  hero, diagnostics, protocol, roi, faq, onNavigate 
}) => {
  return (
    <div className="bg-[#F7F9F8] font-sans">
      
      {/* --- Service Hero --- */}
      <section className="relative pt-40 pb-32 bg-[#0B1110] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#A7D7C5_1px,transparent_1px)] [background-size:32px_32px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <nav className="flex items-center gap-2 mb-8 text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-[#5E7A86]">Services</span>
                  <ChevronRight className="w-3 h-3 text-[#265A4A]" />
                  <span className="text-[#A7D7C5]">Technical Solution</span>
                </nav>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
                  {hero.title}
                </h1>
                
                <p className="text-[#D7DDDA] text-lg md:text-xl leading-relaxed mb-10 font-light max-w-xl border-l-2 border-[#265A4A] pl-6">
                  {hero.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="px-10" onClick={() => onNavigate('contact')}>Request Site Audit</Button>
                  <Button variant="outline" size="lg" className="!text-white !border-white/20 hover:!bg-white/10">
                    <FileText className="w-5 h-5 mr-2" />
                    Download Spec Sheet
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-[#265A4A]/20 rounded-lg border border-[#A7D7C5]/10 overflow-hidden shadow-2xl relative group">
                  <img 
                    src={hero.image} 
                    alt="Service Context" 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1110] to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="bg-[#265A4A] p-2 rounded-sm">
                      <HardHat className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white text-xs font-bold uppercase tracking-widest">Live Site Status</div>
                      <div className="text-[#A7D7C5] text-[10px] font-medium">{hero.status}</div>
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- Critical Issues --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-xs font-bold text-[#A7D7C5] uppercase tracking-[0.3em] mb-4">Diagnostics</h2>
              <h3 className="text-3xl font-bold text-[#265A4A] leading-tight">{diagnostics.title}</h3>
              <p className="text-[#5E7A86] mt-6 leading-relaxed">
                {diagnostics.description}
              </p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {diagnostics.items.map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-[#F7F9F8] border border-[#D7DDDA] hover:border-[#265A4A] transition-colors rounded-sm">
                  <item.icon className="w-6 h-6 text-[#265A4A] shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#265A4A] mb-2">{item.title}</h4>
                    <p className="text-sm text-[#5E7A86] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Protocol --- */}
      <section className="py-24 bg-[#0B1110] relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-20">
             <h2 className="text-[#A7D7C5] font-bold text-xs uppercase tracking-[0.3em] mb-4">The BAM Method</h2>
             <h3 className="text-4xl font-bold text-white">{protocol.title}</h3>
             <p className="text-[#D7DDDA] mt-4 max-w-2xl mx-auto">{protocol.description}</p>
          </div>

          <div className="space-y-12">
            {protocol.steps.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-start border-l border-[#265A4A] pl-8 relative group">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-[#265A4A] border-4 border-[#0B1110] rounded-full group-hover:scale-125 transition-transform"></div>
                <div className="md:w-1/4">
                  <span className="text-5xl font-black text-[#265A4A]/40 mb-2 block">{item.step}</span>
                  <h4 className="text-white font-bold text-xl leading-tight">{item.title}</h4>
                </div>
                <div className="md:w-2/4">
                  <p className="text-[#D7DDDA] leading-relaxed mb-6 font-light">{item.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.points.map((p, pi) => (
                      <div key={pi} className="flex items-center gap-2 text-xs text-[#A7D7C5]">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-1/4 flex justify-end">
                   <div className="w-24 h-24 bg-[#265A4A]/20 border border-[#A7D7C5]/10 rounded-lg flex items-center justify-center">
                      <Construction className="w-8 h-8 text-[#A7D7C5]" />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ROI --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="bg-[#F7F9F8] border border-[#D7DDDA] p-12 rounded-lg flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
               <h3 className="text-3xl font-bold text-[#265A4A] mb-6 tracking-tight">Financial Case for Restoration</h3>
               <p className="text-[#5E7A86] text-lg leading-relaxed mb-8">
                  {roi.description}
               </p>
               <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[#265A4A]">
                    <Zap className="w-6 h-6" />
                    <span className="font-bold">Avoids capital expenditure of replacement</span>
                  </div>
                  <div className="flex items-center gap-4 text-[#265A4A]">
                    <ShieldCheck className="w-6 h-6" />
                    <span className="font-bold">Supports documented regulatory compliance</span>
                  </div>
               </div>
            </div>
            
            <div className="w-full lg:w-96 space-y-4">
               <div className="p-6 bg-[#265A4A] text-white rounded-sm text-center">
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] mb-2 opacity-70">{roi.stat1.label}</div>
                  <div className="text-4xl font-bold">{roi.stat1.value}</div>
               </div>
               <div className="p-6 bg-white border border-[#D7DDDA] text-center">
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] mb-2 text-[#A7D7C5]">{roi.stat2.label}</div>
                  <div className="text-4xl font-bold text-[#265A4A]">{roi.stat2.value}</div>
                  <div className="text-[10px] text-[#5E7A86] mt-1">{roi.stat2.subLabel}</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-24 border-t border-[#D7DDDA]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-[#265A4A] mb-12">Technical Inquiries</h2>
          <div className="space-y-6">
             {faq.items.map((item, i) => (
               <div key={i} className="p-6 bg-white border border-[#D7DDDA] rounded-sm">
                 <h4 className="font-bold text-[#265A4A] mb-2">{item.q}</h4>
                 <p className="text-sm text-[#5E7A86] leading-relaxed">{item.a}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-[#265A4A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Engineered for Performance.</h2>
           <p className="text-[#D7DDDA] text-lg mb-12 font-light">
             Contact our engineering team today to schedule an on-site audit and compliance inspection.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="!bg-white !text-[#265A4A] px-12" onClick={() => onNavigate('contact')}>Request Audit</Button>
              <button
                className="flex items-center gap-2 text-[#A7D7C5] font-bold text-sm tracking-widest uppercase hover:text-white transition-colors"
                onClick={() => onNavigate('industries')}
              >
                <span>View Industries</span>
                <ArrowRight className="w-4 h-4" />
              </button>
           </div>
        </div>
      </section>

    </div>
  );
};