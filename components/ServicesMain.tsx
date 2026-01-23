import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Button } from './Button';
import { FAQ } from './FAQ';
import { 
  Droplets, Fan, Wind, Activity, ShieldCheck, ClipboardList, 
  Layers, Sun, Flame, Thermometer, Zap, Microscope, HardHat,
  ChevronRight, ArrowDown, BarChart3, Clock, Gauge, Scale,
  CheckCircle2, FileText, AlertCircle, TrendingUp, Search,
  Phone, Waves, Crosshair, ClipboardCheck, Cog
} from 'lucide-react';
import { Page } from '../App';

interface ServicesMainProps {
  onServiceClick?: (serviceTitle: string) => void;
  onNavigate?: (page: Page) => void;
}

const coreServices = [
  {
    title: "Cooling Tower Restoration",
    categoryLabel: "Energy & Efficiency",
    description: "Mechanical and structural restoration services to recover heat rejection capacity, stabilize operation, and extend service life.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    page: 'cooling-tower' as Page
  },
  {
    title: "Chiller Restoration",
    categoryLabel: "Heat Transfer Recovery",
    description: "Targeted cleaning and refurbishment to address scale, fouling, and heat transfer loss impacting efficiency and reliability.",
    icon: Thermometer,
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80",
    page: 'chiller' as Page
  },
  {
    title: "AHU & Coil Restoration",
    categoryLabel: "Asset Life Extension",
    description: "Restoration of air handling units and coils to improve airflow, thermal performance, and hygiene across occupied spaces.",
    icon: Fan,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    page: 'ahu' as Page
  },
  {
    title: "NADCA-Aligned Duct Cleaning",
    categoryLabel: "Compliance & Hygiene",
    description: "Commercial duct cleaning performed in alignment with NADCA standards, with containment suitable for regulated environments.",
    icon: Wind,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    page: 'ducts' as Page
  },
  {
    title: "Commercial Indoor Air Quality",
    categoryLabel: "Environmental Health",
    description: "Assessment and corrective services focused on reducing airborne contaminants and improving ventilation performance.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=400&q=80",
    page: 'iaq' as Page
  },
  {
    title: "Commercial Mold Remediation",
    categoryLabel: "Source Removal",
    description: "Controlled mold remediation with containment, removal, and verification steps appropriate for sensitive facilities.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80",
    page: 'mold' as Page
  },
  {
    title: "Preventive Maintenance",
    categoryLabel: "Programmatic Care",
    description: "Planned maintenance programs designed to protect restored systems, reduce emergency events, and support predictable budgeting.",
    icon: ClipboardList,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400&q=80",
    page: 'pm' as Page
  }
];

const specialtyServices = [
  {
    title: "Epoxy Coating & Lining",
    categoryLabel: "Structural Protection",
    description: "Protective coating systems for cooling towers, basins, and mechanical surfaces exposed to corrosion and chemical stress.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=400&q=80",
    page: 'epoxy' as Page
  },
  {
    title: "Tube Brushing & Descaling",
    categoryLabel: "Mechanical Cleaning",
    description: "Mechanical tube cleaning and descaling to remove buildup that restricts heat transfer and increases operational cost.",
    icon: Gauge,
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=400&q=80",
    page: 'tubes' as Page
  },
  {
    title: "Cooling Tower Basin Restoration",
    categoryLabel: "Leak Prevention",
    description: "Structural and surface restoration to address leaks, corrosion, and material degradation in tower basins.",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80",
    page: 'basin' as Page
  },
  {
    title: "HEPA & Filter Management",
    categoryLabel: "Filtration Integrity",
    description: "Filter strategy and management supporting infection control, clean environments, and regulatory requirements.",
    icon: Microscope,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
    page: 'hepa' as Page
  },
  {
    title: "UV-C & Air Purification",
    categoryLabel: "Active Disinfection",
    description: "Supplemental purification solutions applied where appropriate to support air hygiene and exposure control.",
    icon: Sun,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=400&q=80",
    page: 'uvc' as Page
  },
  {
    title: "Fire Damper Compliance",
    categoryLabel: "Life Safety",
    description: "Inspection and compliance support for fire and smoke dampers to reduce safety and audit exposure.",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1599708145804-037402633005?auto=format&fit=crop&w=400&q=80",
    page: 'dampers' as Page
  },
  {
    title: "IAQ Monitoring & Reporting",
    categoryLabel: "Data & Analytics",
    description: "Ongoing monitoring and reporting to support compliance, trend tracking, and operational decision-making.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    page: 'iaq' as Page
  }
];

export const ServicesMain: React.FC<ServicesMainProps> = ({ onServiceClick, onNavigate }) => {
  return (
    <div className="bg-[#F7F9F8] font-sans selection:bg-[#A7D7C5] selection:text-[#265A4A]">
      
      {/* --- Section 1: Hero --- */}
      <section className="relative pt-40 pb-32 bg-[#0B1110] overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1110] via-[#0B1110]/90 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
             <div className="flex flex-wrap gap-4 mb-8">
                {['NADCA Certified', 'ASHRAE Member', 'OSHA 30 Trained'].map((badge) => (
                  <span key={badge} className="px-3 py-1 bg-[#265A4A]/40 border border-[#A7D7C5]/30 rounded-full text-[#A7D7C5] text-[10px] font-bold uppercase tracking-widest">
                    {badge}
                  </span>
                ))}
             </div>
             
             <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase">
                Commercial HVAC <br/>
                <span className="text-[#A7D7C5]">Restoration</span>
             </h1>
             
             <p className="text-[#D7DDDA] text-lg md:text-xl leading-relaxed mb-10 font-light max-w-2xl border-l-2 border-[#265A4A] pl-8">
                BAM delivers specialized HVAC restoration, indoor air quality, and compliance-focused mechanical services for facilities where system failure, contamination, or downtime is not acceptable.
             </p>
             
             <div className="flex flex-col sm:flex-row items-center gap-6">
               <Button size="lg" className="px-12 shadow-2xl">Request Facility Assessment</Button>
               <a href="tel:5709005827" className="flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase hover:text-[#A7D7C5] transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>Call (570) 900-5827</span>
               </a>
             </div>

             <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-[#A7D7C5] text-xs font-bold uppercase tracking-[0.2em]">
                  Serving PA, NJ, MD, DE, and Southern NY
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Navigation Bar */}
      <div className="bg-[#265A4A] py-4 text-center border-b border-[#1e483b]">
        <button 
          onClick={() => onNavigate?.('industries')}
          className="text-[#A7D7C5] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
        >
          [ Explore Industries ]
        </button>
      </div>

      {/* --- Section 2: Narrative / Problem Statement --- */}
      <section className="py-24 bg-white border-b border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#265A4A] tracking-tighter uppercase leading-[0.9] mb-8">
                Built for Facilities That <br className="hidden md:block"/> Cannot Afford <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#265A4A] to-[#A7D7C5]">Mistakes</span>.
              </h2>
              <div className="space-y-6 text-[#5E7A86] text-lg leading-relaxed font-light">
                <p className="font-medium text-[#265A4A]">Most mechanical systems don’t fail suddenly. They drift.</p>
                <p>
                  Airflow degrades. Heat transfer drops. Fouling builds. Energy use increases. Documentation falls behind. The system still runs, but margins get thinner every month.
                </p>
                <p>
                  Then a complaint, an inspection, or a failure forces the issue. BAM services are designed to address those conditions early, using restoration and corrective work that improves performance while protecting operations and compliance posture.
                </p>
              </div>
            </div>
            <div className="bg-[#F7F9F8] p-10 border border-[#D7DDDA] rounded-sm">
               <h4 className="text-[#265A4A] font-bold text-sm uppercase tracking-[0.2em] mb-8">Facilities work with us when:</h4>
               <ul className="space-y-6">
                 {[
                   { title: "Capital Planning", desc: "Replacement is too disruptive or too expensive." },
                   { title: "Compliance Load", desc: "Compliance pressure is increasing." },
                   { title: "Operational Continuity", desc: "IAQ concerns need to be addressed without shutting down operations." },
                   { title: "Performance Gap", desc: "Mechanical systems are underperforming but still serviceable." }
                 ].map((item, i) => (
                   <li key={i} className="flex gap-4">
                     <CheckCircle2 className="w-5 h-5 text-[#A7D7C5] shrink-0" />
                     <p className="text-[#5E7A86] text-sm"><span className="font-bold text-[#265A4A]">{item.title}:</span> {item.desc}</p>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Deliverables / Outcomes --- */}
      <section className="py-24 bg-[#0B1110]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">Engineered Outcomes</h2>
          <p className="text-[#A7D7C5] font-bold text-xs uppercase tracking-widest opacity-60">Results for Mission-Critical Sites</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
           {[
             "Restored HVAC and mechanical performance",
             "Cleaner, safer air handling systems",
             "Reduced exposure to IAQ and compliance risk",
             "Documentation suitable for audits and inspections",
             "A clear plan to prevent performance regression"
           ].map((outcome, i) => (
             <div key={i} className="p-8 border border-white/10 flex flex-col items-center text-center group hover:bg-white/5 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#265A4A]/40 flex items-center justify-center mb-6 text-[#A7D7C5]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <p className="text-white text-sm font-medium leading-relaxed">{outcome}</p>
             </div>
           ))}
        </div>
      </section>

      {/* --- Section 4: Core HVAC Services Grid --- */}
      <section className="py-32" id="core-services">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-[#D7DDDA] pb-12">
            <div className="max-w-3xl">
               <h2 className="text-[#A7D7C5] font-bold text-xs uppercase tracking-[0.3em] mb-4">Primary Solutions</h2>
               <h3 className="text-5xl md:text-7xl font-black text-[#265A4A] tracking-tighter leading-[0.9] uppercase">
                 Core HVAC & <br/>Mechanical Services
               </h3>
            </div>
            <div className="flex items-center gap-3 pb-2">
               <HardHat className="w-6 h-6 text-[#265A4A]" />
               <div className="flex flex-col">
                 <span className="text-[10px] font-bold text-[#265A4A] uppercase tracking-widest">Standards Aligned</span>
                 <span className="text-xs text-[#5E7A86]">No Improvisation</span>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => (
              <div key={idx} onClick={() => onNavigate?.(service.page)} className="cursor-pointer h-full">
                <ServiceCard {...service} category="core" index={idx + 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 5: Specialty Services --- */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-24">
             <h2 className="text-[#A7D7C5] font-bold text-xs uppercase tracking-[0.3em] mb-4">Compliance & Protection</h2>
             <h3 className="text-5xl md:text-7xl font-black text-[#265A4A] tracking-tighter uppercase leading-[0.9]">
               Specialty & <br/>Compliance Services
             </h3>
             <div className="w-24 h-1.5 bg-[#265A4A] mx-auto mt-8 opacity-20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {specialtyServices.map((service, idx) => (
              <div key={idx} onClick={() => onNavigate?.(service.page)} className="cursor-pointer h-full">
                 <ServiceCard {...service} category="specialty" index={coreServices.length + idx + 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 6: Engagement Structure --- */}
      <section className="py-32 bg-[#F2F6F5] border-y border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <div className="max-w-3xl mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-[#265A4A] mb-6 uppercase tracking-tighter">Engagement Structure</h2>
              <p className="text-[#5E7A86] text-lg font-light leading-relaxed">
                We gather the information that matters—facility type, equipment, known issues, access constraints, and timelines—to provide a plan that holds up under review.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              {[
                { step: "1", label: "Initial Intake", icon: Search, detail: "We gather essential data: facility type, known issues, and access constraints." },
                { step: "2", label: "Site Visit & Assessment", icon: Crosshair, detail: "Systems evaluated for condition, performance loss, and compliance exposure." },
                { step: "3", label: "Scope Definition", icon: ClipboardCheck, detail: "Clear scope outlining what is included, what is excluded, and how work is performed." },
                { step: "4", label: "Planned Execution", icon: HardHat, detail: "Scheduled to minimize disruption. Protection and containment aligned with environment." },
                { step: "5", label: "Verification & Documentation", icon: FileText, detail: "Documentation suitable for internal review and external inspections." }
              ].map((item, i) => (
                <div key={i} className="relative group">
                   <div className="mb-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-white border border-[#D7DDDA] flex items-center justify-center rounded-sm text-[#265A4A] font-bold group-hover:bg-[#265A4A] group-hover:text-white transition-all">
                        {item.step}
                      </div>
                      {i < 4 && <div className="hidden md:block h-px flex-grow bg-[#D7DDDA]"></div>}
                   </div>
                   <h4 className="font-bold text-[#265A4A] uppercase tracking-widest text-xs mb-3">{item.label}</h4>
                   <p className="text-[11px] text-[#5E7A86] leading-relaxed font-medium">{item.detail}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- Section 7: Environments & Support --- */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-3xl font-black text-[#265A4A] mb-8 uppercase tracking-tight">Environments We Support</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Hospitals and healthcare systems',
                  'K-12 schools and higher education',
                  'Government and secure facilities',
                  'Industrial and manufacturing',
                  'Commercial real estate portfolios',
                  'Regulated / controlled environments'
                ].map((sector) => (
                  <div key={sector} className="flex items-center gap-3 p-4 bg-[#F7F9F8] border border-[#D7DDDA] rounded-sm text-sm font-bold text-[#5E7A86] uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A7D7C5]"></div>
                    {sector}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black text-[#265A4A] mb-8 uppercase tracking-tight">The BAM Difference</h2>
              <div className="space-y-4">
                {[
                  { title: "Regulated Expertise", detail: "Experience working inside occupied, regulated environments." },
                  { title: "Restoration-First", detail: "Approach that protects capital planning and avoids waste." },
                  { title: "Zero Improvisation", detail: "Standards-aligned execution with no deviations." },
                  { title: "Field Safety", detail: "Field teams trained in OSHA and facility safety protocols." },
                  { title: "Scope Control", detail: "Predictable outcomes through clear, controlled planning." },
                  { title: "Audit-Ready", detail: "Documentation built for audits, not marketing." },
                  { title: "Performance Mindset", detail: "A long-term focus on preventing system regression." }
                ].map((reason, i) => (
                  <div key={i} className="flex gap-4 p-4 border-l-2 border-[#A7D7C5] bg-[#F7F9F8]/50">
                    <div className="flex flex-col">
                      <span className="font-bold text-[#265A4A] text-sm uppercase tracking-widest">{reason.title}</span>
                      <span className="text-sm text-[#5E7A86]">{reason.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 8: Final CTA --- */}
      <section className="py-32 bg-[#0B1110] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
           <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none">Request a Facility Assessment</h2>
           <p className="text-[#D7DDDA] text-xl font-light mb-16 opacity-90 leading-relaxed">
              If your systems are underperforming, approaching inspection, or creating operational risk, start with a site visit and a scoped plan.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button size="lg" className="px-12 text-lg font-bold">
                 Request Assessment
              </Button>
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] text-[#A7D7C5] uppercase font-bold tracking-widest mb-1">Emergency Line</span>
                <span className="text-xl font-bold">(570) 900-5827</span>
              </div>
           </div>
           <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-12 text-[#A7D7C5] text-[10px] font-bold uppercase tracking-[0.3em]">
             <span>Clear Scope</span>
             <span>Controlled Execution</span>
             <span>Audit-Ready Documentation</span>
           </div>
        </div>
      </section>

    </div>
  );
};