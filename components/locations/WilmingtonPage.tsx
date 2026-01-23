import React from 'react';
import { 
  MapPin, Truck, Clock, Calendar, Users, 
  Building2, ArrowUpRight, ShieldCheck, 
  HardHat, Navigation, Phone, ArrowRight, Factory,
  ClipboardList, AlertTriangle, CheckCircle2, FileText
} from 'lucide-react';
import { Button } from '../Button';
import { Page } from '../../App';

interface WilmingtonPageProps {
  onNavigate: (page: Page) => void;
}

export const WilmingtonPage: React.FC<WilmingtonPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F9F8] font-sans selection:bg-[#A7D7C5] selection:text-[#265A4A]">
      
      {/* 1. Metro Hero */}
      <section className="relative pt-40 pb-24 bg-[#1A1F1E] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F1E] via-[#1A1F1E]/95 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl">
             <div className="inline-flex items-center gap-2 text-[#A7D7C5] mb-6">
                <Navigation className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Metro Execution Zone</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-tight">
                Wilmington <br/>
                <span className="text-[#A7D7C5]">Regional Operations</span>
             </h1>
             <p className="text-[#D7DDDA] text-lg font-light leading-relaxed border-l-2 border-[#A7D7C5] pl-6 opacity-90 max-w-xl mb-8">
                Execution-focused mechanical restoration for Wilmington's corporate headquarters, chemical industry, and financial centers.
             </p>
             <div className="flex flex-col sm:flex-row items-center gap-6">
               <Button size="lg" className="px-8" onClick={() => onNavigate('contact')}>
                  Schedule Site Scout
               </Button>
               <div className="flex items-center gap-2 text-xs font-bold text-[#D7DDDA] uppercase tracking-widest">
                 <Truck className="w-4 h-4 text-[#A7D7C5]" />
                 <span>Local Crew Deployment</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Who This Execution Zone Serves (NEW) */}
      <section className="py-20 bg-white border-b border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                 <h2 className="text-3xl font-bold text-[#265A4A] mb-6">Who This Zone Serves</h2>
                 <p className="text-[#5E7A86] text-lg font-light leading-relaxed mb-8">
                    This operational hub is strictly for <strong>Site Managers, Plant Engineers, and Local Facility Operators</strong> requiring physical execution at a specific address within the Wilmington Metro area.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-[#F7F9F8] border border-[#D7DDDA]">
                       <h4 className="font-bold text-[#265A4A] text-xs uppercase tracking-widest mb-2">Operational Scenarios</h4>
                       <ul className="text-xs text-[#5E7A86] space-y-2">
                          <li>• Financial Center Critical Cooling</li>
                          <li>• Chemical Plant Turnarounds</li>
                          <li>• University Campus Maintenance</li>
                          <li>• Audit Compliance Repairs</li>
                       </ul>
                    </div>
                    <div className="p-4 bg-[#F7F9F8] border border-[#D7DDDA]">
                       <h4 className="font-bold text-[#265A4A] text-xs uppercase tracking-widest mb-2">Facility Types</h4>
                       <ul className="text-xs text-[#5E7A86] space-y-2">
                          <li>• Corporate HQ Complexes</li>
                          <li>• Industrial / Chemical Sites</li>
                          <li>• Legal & Financial Bldgs</li>
                          <li>• Higher Ed Institutions</li>
                       </ul>
                    </div>
                 </div>
              </div>
              
              {/* Governance Link (NEW) */}
              <div className="bg-[#265A4A] p-10 text-white rounded-sm flex flex-col justify-center relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-6 opacity-10">
                    <ArrowUpRight className="w-24 h-24" />
                 </div>
                 <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-4">Not a Site Manager?</h3>
                    <p className="text-[#D7DDDA] text-sm leading-relaxed mb-6">
                       If you are a <strong>Director of Facilities</strong> or <strong>Procurement Officer</strong> managing a statewide portfolio or negotiating a Delaware-wide contract, please proceed to the State Authority page.
                    </p>
                    <Button variant="outline" className="!text-white !border-white/30 hover:!bg-white/10" onClick={() => onNavigate('delaware')}>
                       Go to Delaware State Governance
                    </Button>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Execution Coordination Process (NEW) */}
      <section className="py-20 bg-[#F2F6F5] border-b border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#265A4A] mb-4">Metro Coordination Workflow</h2>
              <p className="text-[#5E7A86]">Standard operating procedure for local site engagements.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-[#D7DDDA] -z-10"></div>
              
              {[
                { step: "01", title: "Intake & Dispatch", desc: "Digital or phone request routes to the Wilmington field desk." },
                { step: "02", title: "Site Scout", desc: "Lead technician deploys (24-48 hrs) for access & scope verification." },
                { step: "03", title: "Mobilization", desc: "Crew arrival. Safety induction and site containment setup." },
                { step: "04", title: "Closeout", desc: "Work completed. Verification report generated for local files." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 border border-[#D7DDDA] rounded-sm relative">
                   <div className="w-10 h-10 bg-[#265A4A] text-white flex items-center justify-center font-bold text-sm mb-4 rounded-sm mx-auto md:mx-0">
                      {item.step}
                   </div>
                   <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-3">{item.title}</h4>
                   <p className="text-xs text-[#5E7A86] leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. Regional Execution Scope (EXPANDED) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#265A4A] mb-6">Wilmington Execution Capabilities</h2>
              <p className="text-[#5E7A86] max-w-3xl leading-relaxed">
                 Field crews in this zone specialize in high-uptime support for corporate campuses and critical industrial infrastructure.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-[#D7DDDA] p-8 hover:border-[#265A4A] transition-colors">
                 <Building2 className="w-8 h-8 text-[#265A4A] mb-6" />
                 <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Corporate Mechanical</h4>
                 <ul className="space-y-3 text-sm text-[#5E7A86]">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#A7D7C5]" /> HQ cooling tower restoration</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#A7D7C5]" /> Data center HVAC hygiene</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#A7D7C5]" /> Tenant comfort improvements</li>
                 </ul>
              </div>
              <div className="border border-[#D7DDDA] p-8 hover:border-[#265A4A] transition-colors">
                 <Factory className="w-8 h-8 text-[#265A4A] mb-6" />
                 <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Industrial Support</h4>
                 <ul className="space-y-3 text-sm text-[#5E7A86]">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#A7D7C5]" /> Chemical plant safety protocols</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#A7D7C5]" /> Process cooling efficiency</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#A7D7C5]" /> Confined space entry</li>
                 </ul>
              </div>
              <div className="border border-[#D7DDDA] p-8 hover:border-[#265A4A] transition-colors">
                 <FileText className="w-8 h-8 text-[#265A4A] mb-6" />
                 <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-4">Local Compliance</h4>
                 <ul className="space-y-3 text-sm text-[#5E7A86]">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#A7D7C5]" /> State environmental regs</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#A7D7C5]" /> Fire damper testing</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#A7D7C5]" /> Audit-ready documentation</li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* 5. Site Access & Safety Framework (NEW) */}
      <section className="py-20 bg-[#F7F9F8] border-t border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl font-bold text-[#265A4A] mb-6">Site Access & Safety Protocols</h2>
                 <p className="text-[#5E7A86] leading-relaxed mb-6">
                    Wilmington crews are familiar with the rigorous safety standards of the chemical and financial sectors. We prioritize safe, compliant access.
                 </p>
                 <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-white border border-[#D7DDDA] rounded-sm">
                       <Clock className="w-5 h-5 text-[#265A4A] shrink-0" />
                       <div>
                          <h4 className="font-bold text-[#265A4A] text-xs uppercase tracking-widest">Flexible Scheduling</h4>
                          <p className="text-sm text-[#5E7A86]">Work coordination around corporate hours and industrial shifts.</p>
                       </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-white border border-[#D7DDDA] rounded-sm">
                       <ShieldCheck className="w-5 h-5 text-[#265A4A] shrink-0" />
                       <div>
                          <h4 className="font-bold text-[#265A4A] text-xs uppercase tracking-widest">Industrial Safety</h4>
                          <p className="text-sm text-[#5E7A86]">Adherence to site-specific safety protocols, including PPE and permitting.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="bg-white p-8 border border-[#D7DDDA] shadow-sm">
                 <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-6">Service Area Map Notes</h4>
                 <ul className="space-y-4 text-sm text-[#5E7A86]">
                    <li className="flex items-start gap-3">
                       <MapPin className="w-4 h-4 text-[#A7D7C5] mt-1" />
                       <span><strong>Primary Zone:</strong> Wilmington, Newark, New Castle.</span>
                    </li>
                    <li className="flex items-start gap-3">
                       <MapPin className="w-4 h-4 text-[#A7D7C5] mt-1" />
                       <span><strong>Extended Zone:</strong> I-95 Industrial Corridor.</span>
                    </li>
                    <li className="flex items-start gap-3">
                       <Clock className="w-4 h-4 text-[#A7D7C5] mt-1" />
                       <span><strong>Lead Time:</strong> Site Scouts: 3-5 days. Emergency response: &lt; 4 hours (contract only).</span>
                    </li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Local CTA */}
      <section className="py-20 bg-[#1A1F1E] border-t border-[#A7D7C5]/10">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Initiate Wilmington Site Support</h2>
            <p className="text-[#D7DDDA] mb-10 max-w-lg mx-auto">Connect with our local team for immediate scheduling and mechanical logistics.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Button onClick={() => onNavigate('contact')}>Request Site Scout</Button>
               <a href="tel:5709005827" className="flex items-center justify-center gap-2 text-white font-bold border border-white/20 px-8 py-3 rounded-sm hover:bg-white/10 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>(570) 900-5827</span>
               </a>
            </div>
         </div>
      </section>

    </div>
  );
};