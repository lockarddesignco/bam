import React from 'react';
import { ShieldCheck, Activity, HardHat, FileText, ChevronRight, Stethoscope, AlertTriangle, Scale, Search, Microscope, Crosshair, ClipboardCheck, Phone } from 'lucide-react';
import { Button } from '../Button';
import { Page } from '../../App';

interface HealthcarePageProps {
  onNavigate: (page: Page) => void;
}

export const HealthcarePage: React.FC<HealthcarePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F9F8] font-sans selection:bg-[#A7D7C5] selection:text-[#265A4A]">
      
      {/* --- Page Hero --- */}
      <section className="relative pt-40 pb-24 bg-[#0B1110] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1110] via-[#0B1110]/95 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 text-[#A7D7C5] mb-6">
                <Stethoscope className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Industry Solutions</span>
             </div>
             <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
                Healthcare HVAC <br/>
                <span className="text-[#A7D7C5]">Restoration & IAQ Services</span>
             </h1>
             <p className="text-[#D7DDDA] text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#265A4A] pl-8 opacity-90 max-w-2xl">
                Technical mechanical services for hospitals and medical facilities where indoor air quality, infection control, and system uptime are critical to patient care and regulatory compliance.
             </p>
          </div>
        </div>
      </section>

      {/* --- Section: Healthcare-Specific Challenges --- */}
      <section className="py-24 bg-white border-b border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold text-[#265A4A] mb-8">Clinical Operating Realities</h2>
              <div className="space-y-6 text-[#5E7A86] text-lg leading-relaxed font-light">
                <p>
                  Healthcare mechanical systems are subject to constant operational demand and intense regulatory oversight. For a facility director, the challenge is maintaining system hygiene without introducing risk into sterile or occupied clinical environments.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <AlertTriangle className="w-4 h-4 text-[#A7D7C5]" />
                       Infection Control
                    </h4>
                    <p className="text-sm">Active mechanical work must not compromise IAQ in patient rooms or surgical suites. ICRA protocols are mandatory.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <Scale className="w-4 h-4 text-[#A7D7C5]" />
                       Audit Exposure
                    </h4>
                    <p className="text-sm">Mechanical systems must remain 'inspection-ready' for state health boards and accreditation bodies at all times.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <Microscope className="w-4 h-4 text-[#A7D7C5]" />
                       IAQ Sensitivity
                    </h4>
                    <p className="text-sm">Managing particulate counts and biological growth within the AHU and ductwork is essential for patient safety.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest flex items-center gap-2">
                       <Activity className="w-4 h-4 text-[#A7D7C5]" />
                       Aging Assets
                    </h4>
                    <p className="text-sm">Restoring existing mechanical systems often proves more operationally viable than disruptive capital replacement.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F7F9F8] p-10 border border-[#D7DDDA] rounded-sm">
               <h4 className="text-[#265A4A] font-bold text-xs uppercase tracking-[0.2em] mb-8">Healthcare Compliance Context</h4>
               <p className="text-[#5E7A86] text-sm leading-relaxed mb-8 italic border-l-2 border-[#A7D7C5] pl-6">
                 "Our work is designed to address system hygiene while supporting the facility's infection prevention objectives."
               </p>
               <ul className="space-y-6">
                 {[
                   { title: "Containment First", desc: "Every project starts with a containment and air-management plan." },
                   { title: "Verification-Ready", desc: "Photo and technical reporting designed for hospital leadership review." },
                   { title: "Schedule Control", desc: "Coordination around clinical shifts and low-census periods." }
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

      {/* --- Section: How BAM Supports Healthcare Facilities --- */}
      <section className="py-24 bg-[#F2F6F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#265A4A] mb-4">Adapting Services for Clinical Environments</h2>
            <p className="text-[#5E7A86] max-w-2xl mx-auto">We operate as an extension of the facility's engineering and infection control teams.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm">
               <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Operational Planning</h4>
               <p className="text-sm text-[#5E7A86] leading-relaxed">Work is coordinated to align with clinical operations. We utilize 'silent implementation' strategies to minimize sound and vibration in patient-care zones.</p>
            </div>
            <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm">
               <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Advanced Containment</h4>
               <p className="text-sm text-[#5E7A86] leading-relaxed">Utilization of mobile HEPA containment units and negative air machines with real-time pressure monitoring as required by the facility's ICRA plan.</p>
            </div>
            <div className="p-8 bg-white border border-[#D7DDDA] rounded-sm">
               <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Technical Reporting</h4>
               <p className="text-sm text-[#5E7A86] leading-relaxed">We provide documentation that bridges the gap between mechanical execution and clinical safety—ready for presentation to internal committees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section: Relevant Services for Healthcare --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-2xl font-bold text-[#265A4A] mb-12 border-b border-[#D7DDDA] pb-6">Healthcare-Relevant Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {[
              { title: "Cooling Tower Restoration", page: 'cooling-tower' },
              { title: "AHU & Coil Restoration", page: 'services' },
              { title: "NADCA-Aligned Duct Cleaning", page: 'services' },
              { title: "IAQ Monitoring & Reporting", page: 'services' },
              { title: "Mold Remediation (Institutional)", page: 'services' },
              { title: "Preventive Maintenance Programs", page: 'services' }
            ].map((service, i) => (
              <button 
                key={i} 
                onClick={() => onNavigate(service.page as Page)}
                className="flex items-center justify-between p-4 group border-b border-[#D7DDDA] hover:border-[#265A4A] transition-all text-left"
              >
                <span className="font-bold text-[#265A4A] text-sm uppercase tracking-widest group-hover:text-[#1e483b]">{service.title}</span>
                <ChevronRight className="w-4 h-4 text-[#A7D7C5] group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section: Compliance & Risk Considerations --- */}
      <section className="py-24 bg-[#0B1110] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-3xl font-bold mb-8">Compliance & Audit Preparedness</h2>
                 <div className="space-y-6 text-[#D7DDDA] font-light leading-relaxed">
                    <p>
                       We recognize that mechanical hygiene is an essential component of the Environment of Care (EOC). Our services are structured to help hospitals satisfy the documentation requirements of accreditation bodies such as the Joint Commission and state health departments.
                    </p>
                    <p>
                       Work protocols are developed with reference to ASHRAE 188 (Legionellosis Risk Management) and ASHRAE 170 (Ventilation of Healthcare Facilities), providing the technical support required for the facility’s risk management plan.
                    </p>
                 </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="p-6 bg-[#265A4A]/20 border border-[#A7D7C5]/20">
                    <h4 className="font-bold text-[#A7D7C5] text-xs uppercase tracking-widest mb-2">Audit-Ready</h4>
                    <p className="text-xs text-[#D7DDDA]">Detailed photo documentation and reporting suitable for surveyors.</p>
                 </div>
                 <div className="p-6 bg-[#265A4A]/20 border border-[#A7D7C5]/20">
                    <h4 className="font-bold text-[#A7D7C5] text-xs uppercase tracking-widest mb-2">Risk Mindset</h4>
                    <p className="text-xs text-[#D7DDDA]">Emphasis on IAQ and infection control throughout the project lifecycle.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- Section: How Engagements Typically Work in Healthcare --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <h2 className="text-3xl font-bold text-[#265A4A] mb-12">Engagement Process for Healthcare</h2>
           <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "01", label: "Intake", icon: Search, detail: "Identifying sensitive zones and clinical constraints." },
                { step: "02", label: "Assessment", icon: Crosshair, detail: "On-site condition audit with IP coordination." },
                { step: "03", label: "Protocol Plan", icon: ClipboardCheck, detail: "Developing the ICRA and containment strategy." },
                { step: "04", label: "Execution", icon: HardHat, detail: "Controlled work with constant site monitoring." },
                { step: "05", label: "Handoff", icon: FileText, detail: "Final verification and technical documentation." }
              ].map((item, i) => (
                <div key={i} className="relative">
                   <div className="w-10 h-10 bg-[#265A4A] text-white flex items-center justify-center font-bold text-sm mb-6 rounded-sm">
                      {item.step}
                   </div>
                   <h4 className="font-bold text-[#265A4A] uppercase tracking-widest text-[11px] mb-3">{item.label}</h4>
                   <p className="text-xs text-[#5E7A86] leading-relaxed">{item.detail}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- Section: Who This Is a Fit For --- */}
      <section className="py-24 bg-[#F7F9F8] border-y border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                'Acute Care Hospitals',
                'Academic Medical Centers',
                'Ambulatory Surgery Centers',
                'Clinical Laboratories',
                'Specialized Outpatient Clinics',
                'Medical Office Portfolios'
              ].map((item) => (
                <div key={item} className="p-4 bg-white border border-[#D7DDDA] text-center font-bold text-[#265A4A] text-[10px] uppercase tracking-widest">
                  {item}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-24 bg-[#0B1110] text-center">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Request a Healthcare Facility Assessment</h2>
           <p className="text-[#D7DDDA] text-lg mb-12 font-light max-w-2xl mx-auto">
             Contact our technical field teams to schedule a condition audit of your facility’s mechanical systems.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button size="lg" className="px-12" onClick={() => onNavigate('contact')}>
                 Request Site Visit
              </Button>
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] text-[#A7D7C5] uppercase font-bold tracking-widest mb-1 flex items-center gap-2">
                  <Phone className="w-3 h-3" />
                  Direct Technical Line
                </span>
                <span className="text-xl font-bold text-white">(570) 900-5827</span>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};