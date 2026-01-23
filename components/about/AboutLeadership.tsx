import React from 'react';

export const AboutLeadership: React.FC = () => {
  return (
    <div className="p-10 md:p-16 animate-in fade-in duration-500">
      <h1 className="text-3xl md:text-4xl font-bold text-[#265A4A] mb-8 tracking-tight">Leadership & Ownership</h1>
      
      <div className="prose prose-slate max-w-none text-[#5E7A86] space-y-10 font-light leading-relaxed">
        <p className="text-lg">
          Institutional mechanical work requires high-level accountability. BAM is ownership-led, ensuring that technical discrepancies or site challenges are resolved with ultimate authority.
        </p>

        <section>
          <h3 className="text-xl font-bold text-[#265A4A] mb-4">Direct Stewardship</h3>
          <p>
            The ownership of BAM maintains a direct presence in our site assessments and project planning. This ensures that the distance between the facility director’s requirements and the field team’s execution is as short as possible. We do not use layers of corporate management that dilute accountability.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-[#265A4A] mb-4">Field Experience</h3>
          <p>
            Our leadership team possesses extensive field experience in mechanical restoration and indoor air quality. This background informs our understanding of operational reality—knowing that a restoration project in a cleanroom requires a different mindset than one in a commercial office.
          </p>
        </section>

        <div className="bg-[#F7F9F8] p-8 border border-[#D7DDDA] italic text-sm leading-relaxed">
          "Our responsibility as owners is to ensure that your mechanical systems perform as engineered, your air is compliant, and your facility uptime is never compromised by our presence."
          <div className="mt-4 font-bold text-[#265A4A] not-italic">— Kyle [Lastname], Owner, BAM</div>
        </div>
      </div>
    </div>
  );
};