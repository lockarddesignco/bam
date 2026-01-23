import React from 'react';
import { ShieldCheck, ChevronRight, Globe, Info, Phone, ArrowRight } from 'lucide-react';
import { Button } from '../Button';
import { Page } from '../../App';

interface LocationsHubProps {
  onNavigate: (page: Page) => void;
}

export const LocationsHub: React.FC<LocationsHubProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F9F8] font-sans selection:bg-[#A7D7C5] selection:text-[#265A4A]">
      
      {/* 2. Hero Section */}
      <section className="relative pt-40 pb-24 bg-[#0B1110] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1449156003053-c30c7b702c0b?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1110] via-[#0B1110]/95 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 text-[#A7D7C5] mb-6">
                <Globe className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Regional Territory Validation</span>
             </div>
             <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase">
                Institutional HVAC <br/>
                <span className="text-[#A7D7C5]">Service Coverage</span>
             </h1>
             <p className="text-[#D7DDDA] text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#265A4A] pl-8 opacity-90 max-w-2xl mb-6">
                Providing regional mechanical restoration and indoor air quality services for multi-site portfolios and mission-critical facilities across the Mid-Atlantic.
             </p>
             <p className="text-[#A7D7C5] text-sm font-bold uppercase tracking-widest opacity-80">
                This page serves as a pre-engagement validation step for institutional facilities and procurement teams.
             </p>
          </div>
        </div>
      </section>

      {/* 3. Who This Page Is For */}
      <section className="py-24 bg-white border-b border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
               <h2 className="text-xs font-bold text-[#A7D7C5] uppercase tracking-[0.3em] mb-4">Service Eligibility</h2>
               <h3 className="text-4xl font-black text-[#265A4A] leading-[0.9] uppercase tracking-tight">Validation for <br/>Facility Leadership</h3>
            </div>
            <div className="lg:col-span-8">
               <p className="text-[#5E7A86] text-lg leading-relaxed font-light mb-8">
                  This hub assists leadership in confirming regional eligibility prior to procurement review, internal budget approval, or site-specific engagement. It is designed to ensure that specialized mechanical resources are correctly aligned with your facility’s location and management structure.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 bg-[#F7F9F8] border border-[#D7DDDA]">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-2">Facility Scope</h4>
                    <p className="text-xs text-[#5E7A86] leading-relaxed">Decision-makers overseeing hospitals, university campuses, government complexes, and industrial manufacturing sites.</p>
                  </div>
                  <div className="p-6 bg-[#F7F9F8] border border-[#D7DDDA]">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-2">Decision Support</h4>
                    <p className="text-xs text-[#5E7A86] leading-relaxed">Use this section to verify that your specific site or regional portfolio falls within our specialized field service territory before initiating technical intake.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How Service Coverage Is Structured */}
      <section className="py-24 bg-[#F2F6F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl">
             <h2 className="text-3xl md:text-4xl font-black text-[#265A4A] mb-6 uppercase tracking-tight">Service Coverage Infrastructure</h2>
             <p className="text-[#5E7A86] text-lg font-light leading-relaxed mb-10">
                BAM maintains a dual-layered coverage model to reduce operational risk by aligning regional technical teams with specific facility constraints. Buyers should select a path based on their organizational reporting structure and site density.
             </p>
             <div className="space-y-6">
                <div className="flex gap-4">
                   <div className="mt-1"><Info className="w-5 h-5 text-[#A7D7C5]" /></div>
                   <div>
                      <p className="text-sm font-bold text-[#265A4A] uppercase tracking-widest">State-Level Coverage Path</p>
                      <p className="text-sm text-[#5E7A86]">Select this path for administrative decision-making involving statewide portfolios, multi-county agreements, or facilities located outside major metropolitan hubs.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="mt-1"><Info className="w-5 h-5 text-[#A7D7C5]" /></div>
                   <div>
                      <p className="text-sm font-bold text-[#265A4A] uppercase tracking-widest">Metro-Level Coverage Path</p>
                      <p className="text-sm text-[#5E7A86]">Select this path for operational planning at single, region-specific facilities requiring specialized coordination within high-density urban environments.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Service Regions (Navigation) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          
          {/* State Level */}
          <div className="mb-20">
            <h3 className="text-xs font-bold text-[#A7D7C5] uppercase tracking-[0.3em] mb-8 border-b border-[#D7DDDA] pb-4">Statewide & Multi-Site Portfolios</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 { name: "Pennsylvania", desc: "Statewide Institutional Service", detail: "Best for multi-site portfolios and statewide mechanical restoration agreements across PA." },
                 { name: "New Jersey", desc: "NJ Compliance Support", detail: "Review state-level HVAC restoration eligibility for facility portfolios across all NJ counties." },
                 { name: "Maryland", desc: "MD Territory Capabilities", detail: "Regional support and documentation for Maryland-based institutional site networks." },
                 { name: "Delaware", desc: "Statewide Coverage Area", detail: "Full-state coverage verification for multi-site Delaware medical and educational campuses." },
                 { name: "Southern New York", desc: "NY Regional Eligibility", detail: "Coverage validation for southern counties and regional New York facility portfolios." }
               ].map((state) => (
                 <div key={state.name} className="p-8 border border-[#D7DDDA] hover:border-[#265A4A] transition-all group cursor-pointer bg-white">
                    <h4 className="text-xl font-bold text-[#265A4A] mb-2">{state.name}</h4>
                    <p className="text-[10px] font-bold text-[#A7D7C5] uppercase tracking-widest mb-4">{state.desc}</p>
                    <p className="text-sm text-[#5E7A86] mb-6 leading-relaxed">{state.detail}</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#265A4A] uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                       View Statewide Details <ChevronRight className="w-3 h-3" />
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Metro & Regional Level */}
          <div>
            <h3 className="text-xs font-bold text-[#A7D7C5] uppercase tracking-[0.3em] mb-8 border-b border-[#D7DDDA] pb-4">Metro-Specific & Single-Area Facilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 { name: "Philadelphia", desc: "Urban Operational Planning", detail: "Best for single-area or region-specific facilities in Center City and Greater Philadelphia." },
                 { name: "Baltimore", desc: "Baltimore Metro Restoration", detail: "Area-specific restoration details for Baltimore municipal, industrial, and single-site facilities." },
                 { name: "Wilmington", desc: "Wilmington Service Specs", detail: "Single-area coverage details for Wilmington-based labs and managed office complexes." },
                 { name: "South Jersey", desc: "Regional Industrial Zones", detail: "Operational planning and coverage validation for specific South Jersey regional sites." },
                 { name: "Harrisburg / York", desc: "Capital Region Services", detail: "Metro-specific support for single-area Central PA government and industrial corridors." }
               ].map((metro) => (
                 <div key={metro.name} className="p-8 border border-[#D7DDDA] hover:border-[#265A4A] transition-all group cursor-pointer bg-white">
                    <h4 className="text-lg font-bold text-[#265A4A] mb-2">{metro.name}</h4>
                    <p className="text-[10px] font-bold text-[#A7D7C5] uppercase tracking-widest mb-4">{metro.desc}</p>
                    <p className="text-sm text-[#5E7A86] mb-6 leading-relaxed">{metro.detail}</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#265A4A] uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                       View Metro Details <ChevronRight className="w-3 h-3" />
                    </div>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. Facilities We Commonly Support */}
      <section className="py-24 bg-[#F7F9F8] border-y border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <h3 className="text-xs font-bold text-[#A7D7C5] uppercase tracking-[0.3em] mb-12 text-center">Institutional Facility Support</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
             {[
               "Acute Care Hospitals",
               "K-12 School Districts",
               "University Campuses",
               "Secure Govt Facilities",
               "Process Industrial Sites",
               "Managed Office Portfolios"
             ].map((facility) => (
               <div key={facility} className="p-4 bg-white border border-[#D7DDDA] text-center">
                  <span className="text-[10px] font-bold text-[#5E7A86] uppercase tracking-widest">{facility}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. Compliance & Operational Context */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <div className="bg-[#0B1110] text-white p-12 lg:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <ShieldCheck className="w-48 h-48" />
              </div>
              <div className="relative z-10 max-w-3xl">
                 <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">Clinical & Regulated <br/>Environment Compliance</h2>
                 <p className="text-[#D7DDDA] text-lg font-light leading-relaxed mb-8">
                    BAM work is primarily performed inside active, occupied, and regulated environments. We understand that mechanical restoration must be executed with a precision that protects facility uptime and air hygiene.
                 </p>
                 <p className="text-[#D7DDDA] text-lg font-light leading-relaxed">
                    This hub serves as a critical navigation tool to reduce risk before engagement begins. By ensuring you are connected with the correct specialized regional team, we can maintain the documentation and shift-coordination standards required by the Joint Commission and state health departments.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 8. Guidance Section */}
      <section className="py-24 bg-[#F2F6F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                 <h3 className="text-2xl font-bold text-[#265A4A] mb-6 uppercase tracking-tight">Determining Correct Pathing</h3>
                 <p className="text-[#5E7A86] leading-relaxed mb-6">If you are unsure which coverage page applies, prioritize the path that aligns with your management structure. For regional portfolios covering multiple counties, the State-Level pages are the recommended starting point for pre-engagement validation.</p>
                 <p className="text-[#5E7A86] leading-relaxed">After selecting a location, you will be presented with regional contact information and technician availability specifics for that specific zone.</p>
              </div>
              <div className="space-y-4">
                 <div className="p-6 bg-white border border-[#D7DDDA] flex items-center justify-between group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <span className="text-xs font-bold text-[#265A4A] uppercase tracking-widest">Return to Coverage Grid</span>
                    <ArrowRight className="w-4 h-4 text-[#A7D7C5] group-hover:translate-x-1 transition-transform" />
                 </div>
                 <div className="p-6 bg-white border border-[#D7DDDA] flex items-center justify-between group cursor-pointer" onClick={() => onNavigate('contact')}>
                    <span className="text-xs font-bold text-[#265A4A] uppercase tracking-widest">Validate Coverage for Specific Site</span>
                    <ArrowRight className="w-4 h-4 text-[#A7D7C5] group-hover:translate-x-1 transition-transform" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 9. Call to Action */}
      <section className="py-24 bg-[#0B1110] text-center border-t border-[#265A4A]/20">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase">Submit a Technical <br/>Coverage Inquiry</h2>
           <p className="text-[#D7DDDA] text-lg mb-12 font-light max-w-2xl mx-auto opacity-90">
             Confirm coverage eligibility and regional routing to ensure alignment with your facility standards before beginning the assessment process. Submitting this inquiry validates your site’s eligibility for specialized mechanical restoration and IAQ services.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button size="lg" className="px-12" onClick={() => onNavigate('contact')}>
                 Request Service Verification
              </Button>
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] text-[#A7D7C5] uppercase font-bold tracking-widest mb-1 flex items-center gap-2">
                  <Phone className="w-3 h-3" />
                  Regional Coordinator
                </span>
                <span className="text-xl font-bold text-white">(570) 900-5827</span>
              </div>
           </div>
        </div>
      </section>

      {/* 10. Notes for Developer */}
      <section className="py-8 bg-[#0B1110] border-t border-white/5 opacity-30 text-[10px] font-mono text-white text-center">
         HUB PARENT: /locations/ | NAV: PRIMARY | TYPE: HUB_NAVIGATION | STATUS: CANONICAL | PURPOSE: ELIGIBILITY_VALIDATION
      </section>

    </div>
  );
};