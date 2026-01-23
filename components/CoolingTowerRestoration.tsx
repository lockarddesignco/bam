import React from 'react';
import { Button } from './Button';
import { 
  Droplets, ShieldCheck, Zap, Clock, Construction, 
  Microscope, CheckCircle2, FileText, ArrowRight,
  ChevronRight, Thermometer, Waves, HardHat, AlertTriangle
} from 'lucide-react';

export const CoolingTowerRestoration: React.FC = () => {
  return (
    <div className="bg-[#F7F9F8] font-sans">
      
      {/* --- Service Hero --- */}
      <section className="relative pt-40 pb-32 bg-[#0B1110] overflow-hidden">
        {/* Engineering Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#A7D7C5_1px,transparent_1px)] [background-size:32px_32px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <nav className="flex items-center gap-2 mb-8 text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-[#5E7A86]">Services</span>
                  <ChevronRight className="w-3 h-3 text-[#265A4A]" />
                  <span className="text-[#A7D7C5]">Mechanical Restoration</span>
                </nav>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
                  Cooling Tower <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7D7C5] to-white">Restoration SOP</span>
                </h1>
                
                <p className="text-[#D7DDDA] text-lg md:text-xl leading-relaxed mb-10 font-light max-w-xl border-l-2 border-[#265A4A] pl-6">
                  Recover thermal capacity, eliminate bio-fouling, and extend equipment life by 15+ years. Our engineered protocols represent the pinnacle of institutional HVAC hygiene.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="px-10">Request Site Audit</Button>
                <Button variant="outline" size="lg" className="!text-white !border-white/20 hover:!bg-white/10">
                  <FileText className="w-5 h-5 mr-2" />
                  Download Spec Sheet
                </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-[#265A4A]/20 rounded-lg border border-[#A7D7C5]/10 overflow-hidden shadow-2xl relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" 
                    alt="Cooling Tower Restoration" 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1110] to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="bg-[#265A4A] p-2 rounded-sm">
                      <HardHat className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white text-xs font-bold uppercase tracking-widest">Live Site Status</div>
                      <div className="text-[#A7D7C5] text-[10px] font-medium">Restoration Module 04-A In Progress</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Metric */}
                <div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-xl border border-[#D7DDDA] hidden md:block">
                  <div className="text-[#265A4A] text-3xl font-bold">22%</div>
                  <div className="text-[#5E7A86] text-[10px] uppercase font-bold tracking-widest">Efficiency Recovery</div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- Critical Issues (The Pain Points) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-xs font-bold text-[#A7D7C5] uppercase tracking-[0.3em] mb-4">Diagnostics</h2>
              <h3 className="text-3xl font-bold text-[#265A4A] leading-tight">Identifying the <br/>Performance Gap</h3>
              <p className="text-[#5E7A86] mt-6 leading-relaxed">
                Untreated cooling towers lose 1.5% thermal efficiency annually due to biofilm and scale. For high-output facilities, this translates to thousands in wasted utility spend.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Biological Growth", desc: "Legionella risk and biofilm insulate surfaces, drastically reducing heat transfer.", icon: Microscope },
                { title: "Scale & Corrosion", desc: "Mineral buildup in fill and basin structural degradation lead to premature failure.", icon: AlertTriangle },
                { title: "Thermal Loss", desc: "Fouled fill packs increase static pressure and force fans to run at higher RPMs.", icon: Thermometer },
                { title: "Structural Decay", desc: "Mechanical vibration and moisture lead to basin leaks and support frame fatigue.", icon: Construction }
              ].map((item, i) => (
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

      {/* --- The BAM Restoration Protocol (Technical Steps) --- */}
      <section className="py-24 bg-[#0B1110] relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-20">
             <h2 className="text-[#A7D7C5] font-bold text-xs uppercase tracking-[0.3em] mb-4">The BAM Method</h2>
             <h3 className="text-4xl font-bold text-white">System Restoration Roadmap</h3>
          </div>

          <div className="space-y-12">
            {[
              { 
                step: "01", 
                title: "Basin Decontamination & Descaling", 
                desc: "Mechanical removal of sludge, scale, and sediment using HEPA-filtered vacuum extraction and non-corrosive chemical descalers.",
                points: ["Full sludge extraction", "Manual descaling of hotspots", "Biofilm neutralization"]
              },
              { 
                step: "02", 
                title: "Structural Frame & Mechanical Audit", 
                desc: "Inspection of fan pitch, gearboxes, and structural integrity. Replacing fatigued hot-dip galvanized components with stainless steel where required.",
                points: ["Fan balancing check", "Motor amp-draw baseline", "Bearing lubrication analysis"]
              },
              { 
                step: "03", 
                title: "Fill Pack Media Restoration", 
                desc: "Deep chemical cleaning of existing PVC fill or full replacement with high-performance CTI-standard media to maximize surface area.",
                points: ["Counter-flow optimization", "Fill pack pressure wash", "Drift eliminator alignment"]
              },
              { 
                step: "04", 
                title: "Epoxy Lining & Sealant Implementation", 
                desc: "Application of high-build industrial epoxy coatings to basins and cold-water sections, creating a monolithic, leak-proof barrier.",
                points: ["Basin floor encapsulation", "Joint & seam welding", "Corrosion protection layer"]
              }
            ].map((item, i) => (
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

      {/* --- Performance ROI --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="bg-[#F7F9F8] border border-[#D7DDDA] p-12 rounded-lg flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
               <h3 className="text-3xl font-bold text-[#265A4A] mb-6 tracking-tight">Financial Case for Restoration</h3>
               <p className="text-[#5E7A86] text-lg leading-relaxed mb-8">
                  A full cooling tower replacement can cost 5-10x more than an engineered restoration. BAM restoration provides a documented performance recovery with a fraction of the capital investment.
               </p>
               <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[#265A4A]">
                    <Zap className="w-6 h-6" />
                    <span className="font-bold">Avoids high crane & logistical costs of replacement</span>
                  </div>
                  <div className="flex items-center gap-4 text-[#265A4A]">
                    <Waves className="w-6 h-6" />
                    <span className="font-bold">Protects downstream chillers and heat exchangers</span>
                  </div>
                  <div className="flex items-center gap-4 text-[#265A4A]">
                    <ShieldCheck className="w-6 h-6" />
                    <span className="font-bold">Supports ASHRAE 188 Compliance (Legionella Management)</span>
                  </div>
               </div>
            </div>
            
            <div className="w-full lg:w-96 space-y-4">
               <div className="p-6 bg-[#265A4A] text-white rounded-sm text-center">
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] mb-2 opacity-70">Estimated Life Extension</div>
                  <div className="text-4xl font-bold">+15 Years</div>
               </div>
               <div className="p-6 bg-white border border-[#D7DDDA] text-center">
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] mb-2 text-[#A7D7C5]">Average ROI</div>
                  <div className="text-4xl font-bold text-[#265A4A]">14 Months</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ Specific to Cooling Towers --- */}
      <section className="py-24 border-t border-[#D7DDDA]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-[#265A4A] mb-12">Technical Inquiries</h2>
          <div className="space-y-6">
             {[
               { q: "How do you handle Legionella risk during restoration?", a: "We implement specialized decontamination using EPA-approved biocides before and after the physical cleaning process, ensuring the basin is biological-neutral before we start structural work." },
               { q: "Can restoration fix leaking basins?", a: "Yes. Our high-build epoxy lining systems are designed to bridge small cracks and seal seams, creating a monolithic, water-tight barrier that is chemical resistant." },
               { q: "What downtime is required for a tower restoration?", a: "Downtime depends on the module size, but we often utilize bypass systems or work during low-load seasons to ensure your facility maintains its cooling capacity." }
             ].map((faq, i) => (
               <div key={i} className="p-6 bg-white border border-[#D7DDDA] rounded-sm">
                 <h4 className="font-bold text-[#265A4A] mb-2">{faq.q}</h4>
                 <p className="text-sm text-[#5E7A86] leading-relaxed">{faq.a}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- Service CTA --- */}
      <section className="py-24 bg-[#265A4A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Secure your thermal capacity.</h2>
           <p className="text-[#D7DDDA] text-lg mb-12 font-light">
             Contact our engineering team today to schedule an on-site thermal audit and structural inspection of your cooling assets.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="!bg-white !text-[#265A4A] px-12">Request Audit</Button>
              <button className="flex items-center gap-2 text-[#A7D7C5] font-bold text-sm tracking-widest uppercase hover:text-white transition-colors">
                <span>View Industries</span>
                <ArrowRight className="w-4 h-4" />
              </button>
           </div>
        </div>
      </section>

    </div>
  );
};