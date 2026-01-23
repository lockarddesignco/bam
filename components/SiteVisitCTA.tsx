import React from 'react';
import { CheckCircle2, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

interface SiteVisitCTAProps {
  onNavigate: () => void;
}

export const SiteVisitCTA: React.FC<SiteVisitCTAProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full bg-[#0B1110] pt-24 pb-20 border-t border-[#A7D7C5]/10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#A7D7C5 1px, transparent 1px), linear-gradient(90deg, #A7D7C5 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Copy & Value Props */}
          <div className="flex flex-col space-y-8">
            <div>
              <span className="text-[#A7D7C5] font-bold text-xs tracking-[0.22em] uppercase mb-4 block">
                Final Step to Restoration
              </span>
              <h2 className="text-white text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.05] tracking-tight mb-6 max-w-xl">
                Request an On-Site Assessment.
              </h2>
              <p className="text-[#5E7A86] text-base md:text-lg font-medium leading-relaxed max-w-xl">
                Our technicians deploy to critical care environments across the Mid-Atlantic. Use this form to schedule a formal evaluation of your mechanical systems.
              </p>
            </div>

            <ul className="space-y-5 mt-2">
              {[
                {
                  title: 'Direct technical access',
                  description: 'Form submissions route directly to our restoration engineering team.'
                },
                {
                  title: 'Compliance-ready reporting',
                  description: 'All site visits result in a documented assessment of HVAC hygiene and performance.'
                },
                {
                  title: 'Facility-scale expertise',
                  description: 'Specialized in hospitals, universities, and high-load industrial sites.'
                }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full border border-[#265A4A]/60 flex items-center justify-center text-[#A7D7C5] bg-[#0F1816] mt-1">
                    <CheckCircle2 className="w-4 h-4" strokeWidth={1.4} />
                  </div>
                  <div>
                    <p className="text-[#D7DDDA] text-sm font-semibold uppercase tracking-[0.16em]">
                      {item.title}
                    </p>
                    <p className="text-[#5E7A86] text-sm leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 mt-2 text-[#D7DDDA]">
              <div className="p-2.5 bg-[#0F1816] rounded-full border border-[#265A4A]/40 text-[#A7D7C5]">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-[0.28em] text-[#5E7A86] font-semibold">Direct Restoration Line</span>
                <a href="tel:570-900-5827" className="text-sm font-bold hover:text-white transition-colors">(570) 900-5827</a>
              </div>
            </div>
          </div>

          {/* Right Column: CTA Action Block */}
          <div className="w-full lg:max-w-xl lg:ml-auto">
            <div className="bg-[#F7F9F8] border border-[#D7DDDA] rounded-lg p-6 md:p-8 shadow-2xl">
              <div className="h-1 w-16 bg-[#265A4A] rounded-full mb-4"></div>
              <div className="mb-6">
                <h3 className="text-[#265A4A] font-bold text-base uppercase tracking-[0.12em]">
                  Technical Intake & Facility Assessment Request
                </h3>
                <p className="text-[#5E7A86] text-xs md:text-sm mt-2 leading-relaxed">
                  Submissions are routed to the restoration engineering team for verification. Professional
                  evaluation is restricted to institutional and industrial mechanical systems.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="official-name" className="text-[#5E7A86] text-[10px] font-semibold uppercase tracking-widest">Authorizing Official Name</label>
                  <input
                    type="text"
                    id="official-name"
                    placeholder="Full legal name"
                    className="w-full bg-white border border-[#D7DDDA] rounded text-[#0B1110] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] transition-colors placeholder-[#8BA1AA]"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="official-title" className="text-[#5E7A86] text-[10px] font-semibold uppercase tracking-widest">Institutional Title / Role</label>
                  <input
                    type="text"
                    id="official-title"
                    placeholder="e.g. Director of Facilities"
                    className="w-full bg-white border border-[#D7DDDA] rounded text-[#0B1110] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] transition-colors placeholder-[#8BA1AA]"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="facility-name" className="text-[#5E7A86] text-[10px] font-semibold uppercase tracking-widest">Facility / Organization Name</label>
                  <input
                    type="text"
                    id="facility-name"
                    placeholder="Legal entity name"
                    className="w-full bg-white border border-[#D7DDDA] rounded text-[#0B1110] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] transition-colors placeholder-[#8BA1AA]"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="facility-class" className="text-[#5E7A86] text-[10px] font-semibold uppercase tracking-widest">Facility Classification</label>
                  <select
                    id="facility-class"
                    className="w-full bg-white border border-[#D7DDDA] rounded text-[#0B1110] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>Select sector...</option>
                    <option>Healthcare</option>
                    <option>Senior Care</option>
                    <option>Education</option>
                    <option>Government</option>
                    <option>Industrial</option>
                    <option>Commercial</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="work-email" className="text-[#5E7A86] text-[10px] font-semibold uppercase tracking-widest">Institutional Email Address</label>
                  <input
                    type="email"
                    id="work-email"
                    placeholder="name@facility-domain.gov"
                    className="w-full bg-white border border-[#D7DDDA] rounded text-[#0B1110] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] transition-colors placeholder-[#8BA1AA]"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="service-address" className="text-[#5E7A86] text-[10px] font-semibold uppercase tracking-widest">Primary Service Address</label>
                  <input
                    type="text"
                    id="service-address"
                    placeholder="Street, City, State"
                    className="w-full bg-white border border-[#D7DDDA] rounded text-[#0B1110] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] transition-colors placeholder-[#8BA1AA]"
                  />
                </div>
              </div>

              <div className="mt-5 space-y-1">
                <label htmlFor="summary" className="text-[#5E7A86] text-[10px] font-semibold uppercase tracking-widest">
                  Summary of Mechanical Deficiencies or Compliance Requirements
                </label>
                <textarea
                  id="summary"
                  rows={4}
                  placeholder="Specify equipment type (AHU, chiller, tower) and nature of hygiene or performance deficiency..."
                  className="w-full bg-white border border-[#D7DDDA] rounded text-[#0B1110] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] transition-colors placeholder-[#8BA1AA] resize-none"
                />
              </div>

              <div className="mt-6">
                <Button
                  fullWidth
                  size="lg"
                  onClick={onNavigate}
                  className="font-bold tracking-[0.22em] uppercase shadow-lg shadow-[#265A4A]/10"
                >
                  Request Facility Assessment
                </Button>
              </div>

              <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#5E7A86] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#A7D7C5]" />
                Restricted Data Transmission Protocol Active
              </div>
              <p className="text-[10px] text-[#8BA1AA] mt-3 leading-relaxed">
                All submissions are reviewed under institutional confidentiality guidelines. Professional evaluation
                may require onsite verification and safety coordination.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};