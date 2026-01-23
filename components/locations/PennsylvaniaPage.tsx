import React from 'react';
import { 
  ShieldCheck, Globe, Phone, ArrowRight, CheckCircle2, 
  MapPin, Building2, HardHat, ClipboardList, Factory, 
  Landmark, Stethoscope, GraduationCap 
} from 'lucide-react';
import { Button } from '../Button';
import { Page } from '../../App';

interface PennsylvaniaPageProps {
  onNavigate: (page: Page) => void;
}

export const PennsylvaniaPage: React.FC<PennsylvaniaPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F9F8] font-sans selection:bg-[#A7D7C5] selection:text-[#265A4A]">
      
      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-24 bg-[#0B1110] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1110] via-[#0B1110]/95 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 text-[#A7D7C5] mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Territorial Stewardship</span>
             </div>
             <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
                Institutional HVAC <br/>
                <span className="text-[#A7D7C5]">Operational Responsibility: PA</span>
             </h1>
             <p className="text-[#D7DDDA] text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#265A4A] pl-8 opacity-90 max-w-2xl mb-10">
                Coordinated mechanical restoration and technical oversight for mission-critical facilities and multi-site portfolios across the Commonwealth of Pennsylvania.
             </p>
             <div className="flex flex-col sm:flex-row items-center gap-6">
               <Button size="lg" className="px-12" onClick={() => onNavigate('contact')}>
                  Validate Portfolio Alignment
               </Button>
               <div className="text-xs font-bold text-[#A7D7C5] uppercase tracking-widest opacity-80 max-w-[200px]">
                 Statewide governance and routing for PA facilities.
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Who This Page Is For (Governance Verification) */}
      <section className="py-24 bg-white border-b border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
               <h2 className="text-xs font-bold text-[#A7D7C5] uppercase tracking-[0.3em] mb-4">Governance Verification</h2>
               <h3 className="text-3xl font-bold text-[#265A4A] leading-tight">Statewide Portfolio Management</h3>
            </div>
            <div className="lg:col-span-8">
               <p className="text-[#5E7A86] text-lg leading-relaxed font-light mb-8">
                  This documentation is provided for facility governance roles managing multi-site campus environments or institutional portfolios with statewide compliance exposure. It serves as the primary coordination layer to ensure unified technical standards across disparate PA regional zones.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-[#F7F9F8] border border-[#D7DDDA] rounded-sm">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Commonwealth Facility Governance</h4>
                    <p className="text-xs text-[#5E7A86] leading-relaxed">Centralized management of government complexes, state university systems, and healthcare networks requiring cross-regional consistency.</p>
                  </div>
                  <div className="p-8 bg-[#F7F9F8] border border-[#D7DDDA] rounded-sm">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Risk & Procurement Alignment</h4>
                    <p className="text-xs text-[#5E7A86] leading-relaxed">Decision-makers qualifying a single technical partner for high-stakes mechanical restoration across the Commonwealth’s industrial and clinical corridors.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Operational Scope in This State (NEW SECTION) */}
      <section className="py-24 bg-[#F2F6F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl mb-16">
             <h2 className="text-3xl font-bold text-[#265A4A] mb-6">Operational Scope in Pennsylvania</h2>
             <p className="text-[#5E7A86] text-lg font-light leading-relaxed">
                We coordinate specialized mechanical restoration and air hygiene services statewide. This scope focuses on the preservation of existing capital assets and the verification of indoor environmental quality across the Commonwealth.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm shadow-sm">
                <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Mechanical Restoration</h4>
                <p className="text-sm text-[#5E7A86] leading-relaxed mb-4">
                   Refurbishment of chillers, cooling towers, and air handling units to recover thermal capacity and extend useful life.
                </p>
                <div className="text-xs text-[#265A4A] font-bold uppercase tracking-wider">Asset Preservation</div>
             </div>
             <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm shadow-sm">
                <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Hygiene & IAQ</h4>
                <p className="text-sm text-[#5E7A86] leading-relaxed mb-4">
                   NADCA-aligned duct cleaning and ASHRAE-compliant ventilation assessments for regulated environments.
                </p>
                <div className="text-xs text-[#265A4A] font-bold uppercase tracking-wider">Environmental Safety</div>
             </div>
             <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm shadow-sm">
                <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Compliance Testing</h4>
                <p className="text-sm text-[#5E7A86] leading-relaxed mb-4">
                   Fire damper inspections, specialized healthcare airflow verification, and audit-ready documentation.
                </p>
                <div className="text-xs text-[#265A4A] font-bold uppercase tracking-wider">Regulatory Risk</div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Facility Types Supported Across the State (NEW SECTION) */}
      <section className="py-24 bg-white border-y border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <h3 className="text-xs font-bold text-[#A7D7C5] uppercase tracking-[0.3em] mb-12 text-center">Institutional Facility Alignment</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Healthcare Systems", desc: "Hospitals, ASCs, and medical office portfolios requiring ICRA protocols.", icon: Stethoscope },
                { title: "Education Campuses", desc: "State university systems and K-12 districts managing seasonal maintenance windows.", icon: GraduationCap },
                { title: "Government Complexes", desc: "State and municipal buildings requiring secure access and COSTARS alignment.", icon: Landmark },
                { title: "Industrial Parks", desc: "Manufacturing and cold storage facilities focused on process continuity.", icon: Factory }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-[#D7DDDA] bg-[#F7F9F8]">
                   <item.icon className="w-8 h-8 text-[#265A4A] mb-4 opacity-80" strokeWidth={1.5} />
                   <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-3">{item.title}</h4>
                   <p className="text-xs text-[#5E7A86] leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. Geographic Coverage Clarification (NEW SECTION) */}
      <section className="py-24 bg-[#F2F6F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl font-bold text-[#265A4A] mb-6">Geographic Coverage & Regional Alignment</h2>
                 <p className="text-[#5E7A86] text-lg font-light leading-relaxed mb-6">
                    BAM maintains active field operations across all 67 counties of Pennsylvania. While we provide centralized governance for the entire Commonwealth, execution is anchored by regional technical teams to ensure rapid response and localized supply chain logistics.
                 </p>
                 <ul className="space-y-3">
                    {[
                      "Eastern PA (Philadelphia Metro & Lehigh Valley)",
                      "Central PA (Harrisburg, York, Lancaster)",
                      "Western PA (Pittsburgh & Surrounding Industrial Zones)",
                      "Northern Tier & Rural Institutional Sites"
                    ].map((region, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-[#5E7A86] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#A7D7C5]" />
                        {region}
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="relative h-[400px] bg-[#D7DDDA] rounded-sm overflow-hidden border border-[#A7D7C5]/30">
                 {/* Abstract Map Placeholder */}
                 <div className="absolute inset-0 flex items-center justify-center bg-[#265A4A]">
                    <div className="text-center">
                       <MapPin className="w-12 h-12 text-[#A7D7C5] mx-auto mb-4" />
                       <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">Commonwealth Territory</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Governance vs Local Execution Routing (FORMALIZED) */}
      <section className="py-24 bg-white border-y border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <div className="text-center mb-16">
              <h2 className="text-2xl font-bold text-[#265A4A] mb-4">Governance vs. Execution Routing</h2>
              <p className="text-[#5E7A86] max-w-2xl mx-auto">
                 Select the engagement path that matches your operational role. Governance ensures standardization, while execution focuses on site-specific logistics.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Path A: Governance */}
              <div className="p-10 border-2 border-[#265A4A] bg-[#F7F9F8] relative">
                 <div className="absolute top-0 right-0 bg-[#265A4A] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">You Are Here</div>
                 <h3 className="text-xl font-bold text-[#265A4A] mb-4">Statewide Program Governance</h3>
                 <p className="text-sm text-[#5E7A86] mb-6 leading-relaxed">
                    For Directors of Facilities, Asset Managers, and Procurement Officers managing multi-site portfolios or establishing statewide vendor contracts.
                 </p>
                 <ul className="space-y-2 mb-8 text-xs text-[#5E7A86]">
                    <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-[#265A4A]" /> Master Service Agreements (MSA)</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-[#265A4A]" /> Unified Compliance Reporting</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-[#265A4A]" /> Capital Planning & Audits</li>
                 </ul>
                 <Button fullWidth onClick={() => onNavigate('contact')}>Connect with State Coordinator</Button>
              </div>

              {/* Path B: Execution */}
              <div className="p-10 border border-[#D7DDDA] bg-white hover:border-[#A7D7C5] transition-colors">
                 <h3 className="text-xl font-bold text-[#5E7A86] mb-4">Regional Execution</h3>
                 <p className="text-sm text-[#5E7A86] mb-6 leading-relaxed">
                    For Site Managers and Plant Engineers requiring immediate project scoping, site visits, or emergency response at a specific location.
                 </p>
                 <ul className="space-y-2 mb-8 text-xs text-[#5E7A86]">
                    <li className="flex gap-2"><ArrowRight className="w-3 h-3 text-[#A7D7C5]" /> Site-Specific Logistics</li>
                    <li className="flex gap-2"><ArrowRight className="w-3 h-3 text-[#A7D7C5]" /> Local Crew Deployment</li>
                    <li className="flex gap-2"><ArrowRight className="w-3 h-3 text-[#A7D7C5]" /> Shift & Access Coordination</li>
                 </ul>
                 <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-[#D7DDDA] rounded-sm cursor-pointer hover:bg-[#F7F9F8] transition-colors">
                       <span className="text-xs font-bold text-[#265A4A] uppercase tracking-widest">Philadelphia Metro</span>
                       <ArrowRight className="w-3 h-3 text-[#A7D7C5]" />
                    </div>
                    <div className="flex items-center justify-between p-3 border border-[#D7DDDA] rounded-sm cursor-pointer hover:bg-[#F7F9F8] transition-colors">
                       <span className="text-xs font-bold text-[#265A4A] uppercase tracking-widest">Harrisburg / York</span>
                       <ArrowRight className="w-3 h-3 text-[#A7D7C5]" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. Authority-Level Proof Markers (CONTEXTUALIZED) */}
      <section className="py-24 bg-[#0B1110] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-3xl font-bold mb-8">Procurement & Compliance Enablement</h2>
                 <p className="text-[#D7DDDA] text-lg font-light leading-relaxed mb-6">
                    We reduce the administrative friction of vendor qualification. Our certifications are maintained not just for technical competence, but to streamline procurement validation for state and institutional buyers.
                 </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="p-6 bg-[#265A4A]/20 border border-[#A7D7C5]/20">
                    <div className="flex items-center gap-3 mb-3">
                       <Building2 className="w-5 h-5 text-[#A7D7C5]" />
                       <h4 className="font-bold text-white text-xs uppercase tracking-widest">PA COSTARS</h4>
                    </div>
                    <p className="text-xs text-[#D7DDDA] leading-relaxed">
                       Registered vendor status to simplify purchasing for municipal and school district buyers.
                    </p>
                 </div>
                 <div className="p-6 bg-[#265A4A]/20 border border-[#A7D7C5]/20">
                    <div className="flex items-center gap-3 mb-3">
                       <ShieldCheck className="w-5 h-5 text-[#A7D7C5]" />
                       <h4 className="font-bold text-white text-xs uppercase tracking-widest">NADCA & ASHRAE</h4>
                    </div>
                    <p className="text-xs text-[#D7DDDA] leading-relaxed">
                       Technical alignment with national air hygiene and ventilation standards.
                    </p>
                 </div>
                 <div className="p-6 bg-[#265A4A]/20 border border-[#A7D7C5]/20">
                    <div className="flex items-center gap-3 mb-3">
                       <HardHat className="w-5 h-5 text-[#A7D7C5]" />
                       <h4 className="font-bold text-white text-xs uppercase tracking-widest">OSHA 30 Leads</h4>
                    </div>
                    <p className="text-xs text-[#D7DDDA] leading-relaxed">
                       Site safety leadership for occupied and high-risk institutional environments.
                    </p>
                 </div>
                 <div className="p-6 bg-[#265A4A]/20 border border-[#A7D7C5]/20">
                    <div className="flex items-center gap-3 mb-3">
                       <ClipboardList className="w-5 h-5 text-[#A7D7C5]" />
                       <h4 className="font-bold text-white text-xs uppercase tracking-widest">Vendor Vetted</h4>
                    </div>
                    <p className="text-xs text-[#D7DDDA] leading-relaxed">
                       Pre-qualified with major healthcare and property management networks.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="py-24 bg-white border-t border-[#D7DDDA]">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-5xl font-bold text-[#265A4A] mb-8 tracking-tight">Confirm PA Portfolio Alignment</h2>
           <p className="text-[#5E7A86] text-lg mb-12 font-light max-w-2xl mx-auto opacity-90">
             Initiate the confirmation process to verify eligibility and coordinate routing for your Pennsylvania-based facility or regional portfolio.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button size="lg" className="px-12" onClick={() => onNavigate('contact')}>
                 Request Alignment Review
              </Button>
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] text-[#A7D7C5] uppercase font-bold tracking-widest mb-1 flex items-center gap-2">
                  <Phone className="w-3 h-3" />
                  Statewide Coordinator
                </span>
                <span className="text-xl font-bold text-[#265A4A]">(570) 900-5827</span>
              </div>
           </div>
        </div>
      </section>

      {/* 9. Footer Notes */}
      <section className="py-8 bg-[#F7F9F8] border-t border-[#D7DDDA] text-[10px] font-mono text-[#5E7A86] text-center opacity-60">
         URL: /locations/pennsylvania/ | PARENT: /locations/ | TYPE: STATE_AUTHORITY | PURPOSE: GOVERNANCE_COORDINATION
      </section>

    </div>
  );
};