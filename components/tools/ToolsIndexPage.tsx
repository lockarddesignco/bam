import React from 'react';
import { Calculator, Activity, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../Button';
import type { Page } from '../../App';

interface ToolsIndexPageProps {
  onNavigate: (page: Page) => void;
}

export const ToolsIndexPage: React.FC<ToolsIndexPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F9F8] text-slate-800 font-sans">
      <section className="relative pt-32 pb-16 bg-[#0B1110] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1110] via-[#0B1110]/90 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#A7D7C5] bg-white/5 px-3 py-2 rounded-sm border border-[#265A4A]/40">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em]">Tools & Calculators</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Decision Support <span className="text-[#A7D7C5]">Library</span>
          </h1>
          <p className="text-lg text-[#D7DDDA] max-w-3xl leading-relaxed border-l-2 border-[#265A4A] pl-6">
            Use these calculators to frame risk, quantify value, and brief stakeholders before onsite assessments. Results are triage-only and meant to accelerate conversations, not replace diagnostics.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ToolCard
            title="IAQ Risk Score Tool"
            description="Weighted 0–100 risk score with tiering, top drivers, and next-step guidance for ventilation, filtration, and moisture controls."
            icon={<Activity className="w-10 h-10 text-[#265A4A]" />}
            onClick={() => onNavigate('iaq-risk-tool')}
            actionLabel="Open IAQ Risk Tool"
            badge="New"
          />
          <ToolCard
            title="Restoration ROI Estimator"
            description="Estimate energy recovery, deferred replacement value, and payback horizon for restoration versus replacement scenarios."
            icon={<Calculator className="w-10 h-10 text-[#265A4A]" />}
            onClick={() => onNavigate('estimator')}
            actionLabel="Open ROI Estimator"
          />
        </div>
      </section>
    </div>
  );
};

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  actionLabel: string;
  onClick: () => void;
  badge?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ title, description, icon, actionLabel, onClick, badge }) => {
  return (
    <div className="bg-white border border-[#D7DDDA] rounded-sm shadow-lg p-6 flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-sm bg-[#F7F9F8] border border-[#D7DDDA] flex items-center justify-center">
          {icon}
        </div>
        {badge && (
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wide bg-[#A7D7C5] text-[#265A4A] rounded-sm border border-[#265A4A]/30">
            {badge}
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold text-[#265A4A] mb-2">{title}</h3>
      <p className="text-sm text-[#5E7A86] leading-relaxed flex-1">{description}</p>
      <div className="pt-4">
        <Button fullWidth onClick={onClick} className="font-semibold">
          {actionLabel}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};
