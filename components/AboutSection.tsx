import React, { useState } from 'react';
import { 
  ShieldCheck, HardHat, ClipboardList, Target, 
  MapPin, Users, Award, Briefcase, ChevronRight,
  FileText, CheckCircle2, Building2, Scale, Microscope,
  Zap, Globe, Activity, Search
} from 'lucide-react';
import { Button } from './Button';

type AboutTab = 'hub' | 'company' | 'leadership' | 'method' | 'standards' | 'safety' | 'coverage' | 'careers';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AboutTab>('hub');

  const tabs = [
    { id: 'hub', label: 'About BAM', icon: Building2 },
    { id: 'company', label: 'Our Company', icon: Target },
    { id: 'leadership', label: 'Leadership', icon: Users },
    { id: 'method', label: 'Our Method', icon: ClipboardList },
    { id: 'standards', label: 'Standards', icon: Award },
    { id: 'safety', label: 'Safety', icon: HardHat },
    { id: 'coverage', label: 'Coverage', icon: MapPin },
    { id: 'careers', label: 'Careers', icon: Briefcase },
  ];

  return (
    <div className="bg-[#F7F9F8] min-h-screen pt-32 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-[#265A4A] tracking-tighter mb-6">
            Institutional <span className="text-[#A7D7C5]">Stewardship</span>
          </h1>
          <p className="text-[#5E7A86] text-xl font-light max-w-3xl leading-relaxed">
            Building & Air Maintenance (BAM) provides specialized mechanical restoration and indoor air quality services for facilities where system failure or contamination is not an option.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3">
            <nav className="flex flex-col space-y-1 sticky top-32">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as AboutTab)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-widest transition-all text-left rounded-sm ${
                    activeTab === tab.id 
                      ? 'bg-[#265A4A] text-white shadow-lg' 
                      : 'text-[#5E7A86] hover:bg-[#F2F6F5] hover:text-[#265A4A]'
                  }`}
                >
                  <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-[#A7D7C5]' : 'opacity-60'}`} />
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-9 bg-white border border-[#D7DDDA] p-10 md:p-16 shadow-sm rounded-sm min-h-[600px]">
            
            {/* Page 1: About BAM (Hub) */}
            {activeTab === 'hub' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-[#265A4A] mb-8">About Building & Air Maintenance</h2>
                <div className="prose prose-slate max-w-none text-[#5E7A86] space-y-6">
                  <p className="text-lg leading-relaxed font-light">
                    Building & Air Maintenance (BAM) is an institutional mechanical services firm specializing in the restoration of HVAC systems and the protection of indoor air quality. We operate primarily in the Mid-Atlantic region, serving healthcare, education, government, and industrial facilities.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                    <div className="p-6 bg-[#F7F9F8] border-l-4 border-[#265A4A]">
                      <h4 className="font-bold text-[#265A4A] mb-3 uppercase tracking-widest text-xs">Primary Focus</h4>
                      <p className="text-sm">Restoring existing mechanical assets to original performance standards while maintaining strict compliance documentation.</p>
                    </div>
                    <div className="p-6 bg-[#F7F9F8] border-l-4 border-[#A7D7C5]">
                      <h4 className="font-bold text-[#265A4A] mb-3 uppercase tracking-widest text-xs">Target Environments</h4>
                      <p className="text-sm">Mission-critical sites with zero downtime tolerance and high regulatory oversight (Hospitals, Labs, Secure Sites).</p>
                    </div>
                  </div>

                  <div className="pt-12">
                    <h3 className="text-xl font-bold text-[#265A4A] mb-6">Navigating This Documentation</h3>
                    <p className="text-sm mb-8">Select a section from the sidebar to review our technical standards, safety protocols, and geographic capabilities. This information is provided to assist in procurement, audit preparation, and vendor qualification.</p>
                    <Button onClick={() => setActiveTab('company')}>Begin Company Review</Button>
                  </div>
                </div>
              </div>
            )}

            {/* Page 2: Our Company */}
            {activeTab === 'company' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-[#265A4A] mb-8">Our Company</h2>
                <div className="space-y-8 text-[#5E7A86]">
                  <p className="text-lg leading-relaxed font-light">
                    BAM was founded to fill the gap between commodity mechanical contractors and large-scale engineering firms. We are an operating company focused on high-stakes execution.
                  </p>

                  <section>
                    <h3 className="text-xl font-bold text-[#265A4A] mb-4">A Restoration-First Philosophy</h3>
                    <p className="leading-relaxed">
                      Replacement is often unnecessary and highly disruptive. We prioritize the restoration of existing assets—chillers, AHUs, cooling towers, and duct systems. This approach recovers thermal capacity and extends asset lifecycles without the capital burden or operational downtime associated with full replacement.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-[#265A4A] mb-4">Institutional Contrast</h3>
                    <p className="leading-relaxed">
                      Large firms often lack field-level accountability, while low-price contractors frequently fail on documentation and safety. BAM operates as a middle-tier specialist: we are small enough to ensure ownership-level oversight on every site, but large enough to meet the insurance and bonding requirements of major institutions.
                    </p>
                  </section>

                  <div className="pt-8 border-t border-[#D7DDDA]">
                    <p className="text-sm font-bold text-[#265A4A] uppercase tracking-widest mb-4">Key Operating Differentiators</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'Performance-verified results',
                        'Restoration-focused capital protection',
                        'Institutional-grade reporting',
                        'Specialized critical-site crews'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#A7D7C5]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Page 3: Leadership & Ownership */}
            {activeTab === 'leadership' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-[#265A4A] mb-8">Leadership & Ownership</h2>
                <div className="space-y-8 text-[#5E7A86]">
                  <p className="text-lg leading-relaxed font-light italic border-l-4 border-[#265A4A] pl-6">
                    "In institutional environments, the distance between the decision-maker and the person performing the work must be as short as possible."
                  </p>

                  <section>
                    <h3 className="text-xl font-bold text-[#265A4A] mb-4">Accountability and Stewardship</h3>
                    <p className="leading-relaxed">
                      BAM is ownership-led. Our leadership team maintains a presence on projects involving mission-critical assets. We view our role not just as a service provider, but as a steward of your facility’s mechanical health. When a project is defined, our ownership stands behind the scope, the safety plan, and the final verification report.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-[#265A4A] mb-4">Field Experience</h3>
                    <p className="leading-relaxed">
                      Our leadership team comes from the field. This background informs our understanding of operational reality—knowing that a project in a surgical suite requires different containment than one in a warehouse, and ensuring those standards are never compromised for speed.
                    </p>
                  </section>

                  <div className="p-8 bg-[#F7F9F8] border border-[#D7DDDA]">
                    <h4 className="font-bold text-[#265A4A] mb-2 uppercase tracking-widest text-xs">Direct Access</h4>
                    <p className="text-sm leading-relaxed">
                      Facility directors have direct access to BAM ownership. This ensures that technical discrepancies or scheduling adjustments are resolved with institutional authority and zero layers of bureaucracy.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Page 4: Our Method */}
            {activeTab === 'method' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-[#265A4A] mb-8">Our Method</h2>
                <div className="space-y-10 text-[#5E7A86]">
                  <p className="text-lg leading-relaxed font-light">
                    We follow a structured 5-step engagement process to ensure that work is predictable and documentation is audit-ready.
                  </p>

                  <div className="space-y-8">
                    {[
                      { step: '01', title: 'Intake', detail: 'We gather facility-specific data, access constraints, and known performance issues to define the initial engagement.' },
                      { step: '02', title: 'Assessment', icon: Search, detail: 'Technicians evaluate equipment condition, airflow, thermal capacity, and contamination risk.' },
                      { step: '03', title: 'Scope Definition', detail: 'A technical scope is produced, outlining exact deliverables, exclusions, and containment strategies.' },
                      { step: '04', title: 'Execution', icon: HardHat, detail: 'Work is performed during planned windows using specialized tools and containment protocols.' },
                      { step: '05', title: 'Verification', icon: FileText, detail: 'A closeout package is provided, including before/after documentation and technical performance recovery metrics.' }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start">
                        <div className="w-12 h-12 bg-[#265A4A] text-white flex items-center justify-center shrink-0 font-bold text-lg">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#265A4A] text-lg mb-2">{item.title}</h4>
                          <p className="text-sm leading-relaxed">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-[#A7D7C5]/10 border border-[#A7D7C5]/30">
                    <p className="text-xs font-bold text-[#265A4A] uppercase tracking-[0.2em] mb-2">Documentation Standards</p>
                    <p className="text-sm leading-relaxed">Every verification package is structured to be suitable for presentation to internal stakeholders and external regulatory bodies (e.g., JCAHO, State Health Boards).</p>
                  </div>
                </div>
              </div>
            )}

            {/* Page 5: Standards, Certifications & Compliance */}
            {activeTab === 'standards' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-[#265A4A] mb-8">Standards & Compliance</h2>
                <div className="space-y-8 text-[#5E7A86]">
                  <p className="text-lg leading-relaxed font-light">
                    Compliance is not an afterthought at BAM; it is the framework within which all work is performed.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <section className="p-8 border border-[#D7DDDA]">
                      <div className="flex items-center gap-3 mb-6">
                        <ShieldCheck className="w-8 h-8 text-[#265A4A]" />
                        <h3 className="text-xl font-bold text-[#265A4A]">NADCA Aligned</h3>
                      </div>
                      <p className="text-sm leading-relaxed">
                        We perform air system cleaning and restoration in strict alignment with NADCA standards (ACR). This ensures that contaminants are removed—not just moved—using verified source-removal methods.
                      </p>
                    </section>

                    <section className="p-8 border border-[#D7DDDA]">
                      <div className="flex items-center gap-3 mb-6">
                        <Activity className="w-8 h-8 text-[#265A4A]" />
                        <h3 className="text-xl font-bold text-[#265A4A]">ASHRAE Support</h3>
                      </div>
                      <p className="text-sm leading-relaxed">
                        Our restoration protocols support ASHRAE 62.1 (Ventilation for Acceptable Indoor Air Quality) and ASHRAE 188 (Legionellosis Risk Management) objectives.
                      </p>
                    </section>
                  </div>

                  <section>
                    <h3 className="text-xl font-bold text-[#265A4A] mb-4">Inspection Readiness</h3>
                    <p className="leading-relaxed">
                      We understand the pressure of external inspections. Our reports are built to answer the questions inspectors ask: What was the condition? How was it corrected? How was cleanliness verified? We provide the technical proof required to satisfy oversight demands.
                    </p>
                  </section>

                  <div className="flex flex-wrap gap-4 opacity-70 grayscale">
                    {['EPA Universal', 'OSHA 30', 'Costars Vendor', 'Chamber Member'].map((cert) => (
                      <span key={cert} className="px-4 py-2 bg-[#F7F9F8] border border-[#D7DDDA] text-[10px] font-bold uppercase tracking-widest">{cert}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Page 6: Safety & Risk Management */}
            {activeTab === 'safety' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-[#265A4A] mb-8">Safety & Risk Management</h2>
                <div className="space-y-8 text-[#5E7A86]">
                  <p className="text-lg leading-relaxed font-light">
                    For a facility manager, the greatest risk is an incident in a live, occupied environment. BAM is designed to protect both the facility and the manager’s career.
                  </p>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="mt-1"><Scale className="w-5 h-5 text-[#A7D7C5]" /></div>
                      <div>
                        <h4 className="font-bold text-[#265A4A]">ICRA and PCRA Compliance</h4>
                        <p className="text-sm leading-relaxed">In healthcare settings, we follow strict Infection Control Risk Assessment (ICRA) protocols, including HEPA-filtered containment and negative air pressure monitoring.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="mt-1"><HardHat className="w-5 h-5 text-[#A7D7C5]" /></div>
                      <div>
                        <h4 className="font-bold text-[#265A4A]">OSHA 30 Leadership</h4>
                        <p className="text-sm leading-relaxed">Our field leads are OSHA 30-trained. We do not use untrained temporary labor. Every team member on your site understands fall protection, LOTO, and hazard communication.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="mt-1"><Microscope className="w-5 h-5 text-[#A7D7C5]" /></div>
                      <div>
                        <h4 className="font-bold text-[#265A4A]">Incident Prevention</h4>
                        <p className="text-sm leading-relaxed">We utilize specialized, non-corrosive chemicals and low-disruption mechanical tools designed for use in sensitive areas like schools and hospitals.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 bg-[#0B1110] text-white rounded-sm">
                    <h4 className="text-[#A7D7C5] font-bold uppercase tracking-widest text-xs mb-4">Risk Profile</h4>
                    <ul className="space-y-3 text-sm opacity-90">
                      <li>• [Placeholder for EMR Rating, e.g., 0.82]</li>
                      <li>• Full liability and workers' compensation coverage for commercial/institutional sites</li>
                      <li>• Clean incident record in occupied clinical environments</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Page 7: Service Area & Coverage */}
            {activeTab === 'coverage' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-[#265A4A] mb-8">Service Area & Coverage</h2>
                <div className="space-y-8 text-[#5E7A86]">
                  <p className="text-lg leading-relaxed font-light">
                    BAM is a regional specialist. We focus our resources in the Mid-Atlantic to ensure rapid response and consistent quality control.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <section>
                      <h3 className="text-xl font-bold text-[#265A4A] mb-4">Core Operating States</h3>
                      <ul className="space-y-3">
                        {['Pennsylvania', 'New Jersey', 'Maryland', 'Delaware', 'Southern New York'].map((state) => (
                          <li key={state} className="flex items-center gap-3 font-medium">
                            <Globe className="w-4 h-4 text-[#A7D7C5]" />
                            {state}
                          </li>
                        ))}
                      </ul>
                    </section>
                    
                    <section className="bg-[#F7F9F8] p-8 border border-[#D7DDDA]">
                      <h3 className="text-xl font-bold text-[#265A4A] mb-4">Regional Logistics</h3>
                      <p className="text-sm leading-relaxed">
                        Headquartered in Pine Grove, PA, we are strategically positioned to support multi-site portfolios across the Northeast Corridor. Our teams are equipped for self-sustained operations on large campuses and industrial complexes.
                      </p>
                    </section>
                  </div>

                  <div className="pt-12 border-t border-[#D7DDDA] text-center">
                    <p className="text-sm italic mb-6">Need support for a multi-state facility portfolio?</p>
                    <Button>Speak with our Regional Coordinator</Button>
                  </div>
                </div>
              </div>
            )}

            {/* Page 8: Careers */}
            {activeTab === 'careers' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-[#265A4A] mb-8">Careers at BAM</h2>
                <div className="space-y-8 text-[#5E7A86]">
                  <p className="text-lg leading-relaxed font-light">
                    We do not hire "laborers." We develop specialists.
                  </p>

                  <section>
                    <h3 className="text-xl font-bold text-[#265A4A] mb-4">The Craftsmanship Standard</h3>
                    <p className="leading-relaxed">
                      Restoration work is precise. It requires an eye for detail and an understanding of mechanical theory. We look for individuals who take pride in the documentation and the technical recovery of a machine.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-[#265A4A] mb-4">Ongoing Training</h3>
                    <p className="leading-relaxed">
                      Every BAM technician goes through a rigorous onboarding process that includes OSHA 10/30 certification, IAQ fundamentals, and specialized equipment restoration training. We invest in our people because they are the frontline of your facility's safety.
                    </p>
                  </section>

                  <div className="p-8 border-2 border-dashed border-[#D7DDDA] text-center">
                    <p className="font-bold text-[#265A4A] mb-4 uppercase tracking-widest text-xs">Current Opportunities</p>
                    <p className="text-sm mb-6">We are always looking for disciplined mechanical specialists and project leads.</p>
                    <a href="mailto:info@buildingandair.com" className="text-[#265A4A] font-bold text-sm hover:underline flex items-center justify-center gap-2">
                      Inquire via Email <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
};