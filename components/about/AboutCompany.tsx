import React from 'react';

export const AboutCompany: React.FC = () => {
  return (
    <div className="p-10 md:p-16 animate-in fade-in duration-500">
      <h1 className="text-3xl md:text-4xl font-bold text-[#265A4A] mb-8 tracking-tight">Our Company</h1>
      
      <div className="prose prose-slate max-w-none text-[#5E7A86] space-y-10 font-light leading-relaxed">
        <p className="text-lg">
          Building & Air Maintenance (BAM) is an operating company, not a generalist contractor. We specialize in the precise restoration of HVAC infrastructure where performance degradation creates operational or compliance risk.
        </p>

        <section>
          <h3 className="text-xl font-bold text-[#265A4A] mb-4">The Restoration-First Model</h3>
          <p>
            Traditional mechanical contracting often defaults to equipment replacement as the primary solution for aging systems. At BAM, we operate on a restoration-first model. Our technical protocols are designed to recover the thermal capacity and airflow of existing assets—chillers, cooling towers, and AHUs—to original performance standards. 
          </p>
          <p className="mt-4">
            This model protects capital planning, avoids the logistics of full-scale replacement, and minimizes disruption in live facility environments.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-[#265A4A] mb-4">Institutional Contrast</h3>
          <p>
            BAM differentiates itself from low-price commodity cleaners through rigorous standards alignment and from large-scale national firms through direct owner-level accountability. We focus on mid-to-large-scale facilities that require specialized documentation and a controlled site presence.
          </p>
        </section>

        <div className="bg-[#F7F9F8] p-8 border-l-4 border-[#265A4A]">
           <h4 className="font-bold text-[#265A4A] text-xs uppercase tracking-widest mb-4">Operating Principles</h4>
           <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#A7D7C5] rounded-full mt-2 shrink-0"></span>
                <p className="text-sm"><span className="font-bold text-[#265A4A]">Technical Accountability:</span> We do not perform work that cannot be verified through technical metrics.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#A7D7C5] rounded-full mt-2 shrink-0"></span>
                <p className="text-sm"><span className="font-bold text-[#265A4A]">Long-Term Stewardship:</span> We advise on the total lifecycle of the mechanical asset, not the immediate service event.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#A7D7C5] rounded-full mt-2 shrink-0"></span>
                <p className="text-sm"><span className="font-bold text-[#265A4A]">Zero Improvisation:</span> Work is performed according to predefined, standards-aligned SOPs.</p>
              </li>
           </ul>
        </div>
      </div>
    </div>
  );
};