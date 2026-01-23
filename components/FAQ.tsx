import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Do you operate during active facility hours?",
    answer: "Yes. Our teams are specialized in 'Silent Implementation.' We coordinate around clinical schedules, industrial shifts, and school hours to ensure zero disruption to patient care or operational workflows."
  },
  {
    question: "How do you handle HEPA containment in hospitals?",
    answer: "We utilize mobile HEPA-filtered containment units and negative air machines. All workflows align with ICRA (Infection Control Risk Assessment) standards for healthcare and lab environments."
  },
  {
    question: "Is your work suitable for regulatory audits (JCAHO/AAAHC)?",
    answer: "Absolutely. Documentation is a core part of our service. Every project includes detailed before/after photo reports and technical findings suitable for internal review and external inspections."
  },
  {
    question: "What is the ROI on restoration versus full replacement?",
    answer: "Restoration typically costs less than 20% of full capital replacement and can extend equipment life by 10 to 15 years while recovering immediate energy efficiency."
  },
  {
    question: "Does BAM provide emergency mechanical support?",
    answer: "We offer priority support for mission-critical failures. Our emergency line is monitored 24/7 to address issues that impact facility uptime or life-safety compliance."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white border-t border-[#D7DDDA]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#A7D7C5] mb-4">
             <HelpCircle className="w-5 h-5" />
             <span className="text-xs font-bold uppercase tracking-[0.2em]">Institutional Support</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#265A4A]">Technical Inquiries</h2>
          <p className="text-[#5E7A86] mt-4">Addressing documentation, compliance, and operational concerns.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-[#D7DDDA] rounded-sm transition-all duration-300 ${openIndex === idx ? 'bg-[#F7F9F8] border-[#265A4A]' : 'bg-white'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === idx ? 'text-[#265A4A]' : 'text-[#5E7A86]'}`}>
                  {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-[#265A4A]' : 'text-[#A7D7C5]'}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-[#5E7A86] leading-relaxed border-t border-[#D7DDDA]/50 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
