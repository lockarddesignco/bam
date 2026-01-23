import React from 'react';

export const AboutMethod: React.FC = () => {
  return (
    <div className="p-10 md:p-16 animate-in fade-in duration-500">
      <h1 className="text-3xl md:text-4xl font-bold text-[#265A4A] mb-8 tracking-tight">Our Method</h1>
      
      <div className="prose prose-slate max-w-none text-[#5E7A86] space-y-10 font-light leading-relaxed">
        <p className="text-lg">
          Our technical delivery method is designed for facilities where execution must be predictable, containment must be absolute, and documentation must be audit-ready.
        </p>

        <div className="space-y-12">
          <div className="flex gap-8">
            <div className="w-16 h-16 bg-[#265A4A] text-white flex items-center justify-center shrink-0 font-bold text-xl rounded-sm shadow-md">01</div>
            <div>
              <h4 className="font-bold text-[#265A4A] text-lg mb-2">Technical Intake & Assessment</h4>
              <p className="text-sm">We begin by gathering equipment-level data: system type, known performance issues, airflow constraints, and environmental sensitivities. On-site assessments are performed to establish technical baselines.</p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="w-16 h-16 bg-[#265A4A] text-white flex items-center justify-center shrink-0 font-bold text-xl rounded-sm shadow-md">02</div>
            <div>
              <h4 className="font-bold text-[#265A4A] text-lg mb-2">Compliance-Driven Scoping</h4>
              <p className="text-sm">A defined scope of work is produced, detailing exact technical steps, required containment protocols (ICRA/PCRA), and expected performance outcomes. This scope becomes the governance document for the project.</p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="w-16 h-16 bg-[#265A4A] text-white flex items-center justify-center shrink-0 font-bold text-xl rounded-sm shadow-md">03</div>
            <div>
              <h4 className="font-bold text-[#265A4A] text-lg mb-2">Planned Execution</h4>
              <p className="text-sm">Work is performed during scheduled windows to minimize operational impact. Technicians utilize specialized mechanical tools and non-corrosive chemical agents specific to the restoration task.</p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="w-16 h-16 bg-[#265A4A] text-white flex items-center justify-center shrink-0 font-bold text-xl rounded-sm shadow-md">04</div>
            <div>
              <h4 className="font-bold text-[#265A4A] text-lg mb-2">Verification & Reporting</h4>
              <p className="text-sm">Deliverables are verified through post-project performance testing and photo-documentation. A full closeout package is provided to facility leadership for their records.</p>
            </div>
          </div>
        </div>

        <section className="pt-8 border-t border-[#D7DDDA]">
          <h3 className="text-xl font-bold text-[#265A4A] mb-4">Occupied Facility Logistics</h3>
          <p>
            Working in live hospitals, schools, and industrial sites requires specialized logistics. We coordinate closely with facility managers on access control, debris management, and airflow containment to ensure that the surrounding environment remains unaffected by mechanical work.
          </p>
        </section>
      </div>
    </div>
  );
};