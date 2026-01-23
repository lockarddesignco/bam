import React from 'react';
import { ArrowRight, ShieldCheck, Activity, HardHat } from 'lucide-react';
import { Page } from '../../App';

export const AboutHub: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="p-10 md:p-16 animate-in fade-in duration-500">
      <h1 className="text-3xl md:text-4xl font-bold text-[#265A4A] mb-8 tracking-tight">About Building & Air Maintenance</h1>
      
      <div className="prose prose-slate max-w-none text-[#5E7A86] space-y-8 font-light leading-relaxed">
        <p className="text-xl">
          Building & Air Maintenance (BAM) is a specialized mechanical contractor focused on the restoration and long-term care of HVAC infrastructure in mission-critical facilities.
        </p>
        
        <p>
          We operate across the Mid-Atlantic region, providing technical services to hospitals, universities, government agencies, and industrial manufacturing sites. Our work is defined by a restoration-first approach designed to protect existing mechanical assets and ensure compliance with institutional air quality standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <div className="p-6 bg-[#F7F9F8] border border-[#D7DDDA]">
            <ShieldCheck className="w-8 h-8 text-[#265A4A] mb-4" />
            <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-2">Compliance</h4>
            <p className="text-xs">Standards-aligned execution for regulated environments.</p>
          </div>
          <div className="p-6 bg-[#F7F9F8] border border-[#D7DDDA]">
            <Activity className="w-8 h-8 text-[#265A4A] mb-4" />
            <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-2">Performance</h4>
            <p className="text-xs">Documented thermal and airflow recovery metrics.</p>
          </div>
          <div className="p-6 bg-[#F7F9F8] border border-[#D7DDDA]">
            <HardHat className="w-8 h-8 text-[#265A4A] mb-4" />
            <h4 className="font-bold text-[#265A4A] text-sm uppercase tracking-widest mb-2">Safety</h4>
            <p className="text-xs">OSHA-30 leadership in occupied facilities.</p>
          </div>
        </div>

        <section className="pt-12 border-t border-[#D7DDDA]">
          <h3 className="text-xl font-bold text-[#265A4A] mb-4">Institutional Orientation</h3>
          <p>
            The following documentation is provided to assist facility directors, compliance officers, and procurement teams in qualifying BAM for high-stakes mechanical projects. 
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <button onClick={() => onNavigate('about-company')} className="flex items-center justify-between p-4 border border-[#D7DDDA] hover:border-[#265A4A] hover:bg-[#F2F6F5] transition-all group">
              <span className="text-sm font-bold text-[#265A4A] uppercase tracking-widest">Review Our Company Philosophy</span>
              <ArrowRight className="w-4 h-4 text-[#A7D7C5] group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => onNavigate('about-method')} className="flex items-center justify-between p-4 border border-[#D7DDDA] hover:border-[#265A4A] hover:bg-[#F2F6F5] transition-all group">
              <span className="text-sm font-bold text-[#265A4A] uppercase tracking-widest">Examine Our Delivery Method</span>
              <ArrowRight className="w-4 h-4 text-[#A7D7C5] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};