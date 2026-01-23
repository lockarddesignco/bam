import React from 'react';

export const AboutSafety: React.FC = () => {
  return (
    <div className="p-10 md:p-16 animate-in fade-in duration-500">
      <h1 className="text-3xl md:text-4xl font-bold text-[#265A4A] mb-8 tracking-tight">Safety & Risk Management</h1>
      
      <div className="prose prose-slate max-w-none text-[#5E7A86] space-y-10 font-light leading-relaxed">
        <p className="text-lg">
          For a facility manager, safety is a career-level accountability. BAM’s safety protocols are designed to prevent incidents in live environments and protect the facility’s uptime and staff safety.
        </p>

        <section>
          <h3 className="text-xl font-bold text-[#265A4A] mb-4">Infection Control (ICRA)</h3>
          <p>
            In healthcare and laboratory environments, we implement rigorous Infection Control Risk Assessment (ICRA) protocols. This includes the use of HEPA-filtered negative air machines, physical containment barriers, and continuous pressure monitoring to prevent the migration of mechanical particulates into occupied spaces.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-[#265A4A] mb-4">Field Leadership Standards</h3>
          <p>
            All BAM field leads are OSHA 30-trained. We do not utilize temporary or untrained labor on institutional sites. Our technicians are trained in Lockout/Tagout (LOTO), fall protection, and the handling of specialized mechanical cleaning agents within sensitive facilities.
          </p>
        </section>

        <div className="p-8 border-l-4 border-[#A7D7C5] bg-[#F7F9F8]">
           <h4 className="font-bold text-[#265A4A] text-xs uppercase tracking-widest mb-4">Risk Mitigation Metrics</h4>
           <ul className="space-y-3 text-sm">
              <li><strong>Insurance:</strong> Full commercial general liability and workers' compensation coverage tailored for institutional sites.</li>
              <li><strong>EMR Rating:</strong> [0.85 - Placeholder for Actual Rating]</li>
              <li><strong>Incidents:</strong> Zero lost-time incidents in occupied clinical environments in the last [5] years.</li>
           </ul>
        </div>
      </div>
    </div>
  );
};