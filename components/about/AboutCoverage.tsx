import React from 'react';

export const AboutCoverage: React.FC = () => {
  return (
    <div className="p-10 md:p-16 animate-in fade-in duration-500">
      <h1 className="text-3xl md:text-4xl font-bold text-[#265A4A] mb-8 tracking-tight">Service Area & Coverage</h1>
      
      <div className="prose prose-slate max-w-none text-[#5E7A86] space-y-10 font-light leading-relaxed">
        <p className="text-lg">
          Building & Air Maintenance is a regional specialist. We concentrate our field resources in the Mid-Atlantic to ensure rapid technical response and consistent ownership oversight.
        </p>

        <section>
          <h3 className="text-xl font-bold text-[#265A4A] mb-4">Primary Geographic Reach</h3>
          <p>
            Our core operations are focused in the following states. We support both individual site engagements and regional multi-site maintenance portfolios for institutional clients.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {['Pennsylvania', 'New Jersey', 'Maryland', 'Delaware', 'Southern New York'].map((state) => (
              <div key={state} className="p-4 bg-[#F7F9F8] border border-[#D7DDDA] text-center font-bold text-[#265A4A] text-xs uppercase tracking-widest">
                {state}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-[#265A4A] mb-4">Operational Logistics</h3>
          <p>
            Headquartered in Pine Grove, PA, we maintain a fleet and equipment inventory that allows our teams to be self-sufficient on-site. We do not rely on local equipment rentals for mission-critical tasks, ensuring that the right tools are present for every engagement.
          </p>
        </section>

        <div className="bg-[#265A4A] text-white p-10 rounded-sm text-center">
           <p className="text-sm font-light leading-relaxed mb-6">For multi-state portfolios or facilities near the border of these regions, contact our regional coordinator for capacity and logistical planning.</p>
           <a href="tel:5709005827" className="text-lg font-bold text-[#A7D7C5]">(570) 900-5827</a>
        </div>
      </div>
    </div>
  );
};