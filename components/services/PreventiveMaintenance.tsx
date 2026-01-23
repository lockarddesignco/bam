import React from 'react';
import { ServicePageLayout } from '../ServicePageLayout';
import { ClipboardList, Clock, Zap, ShieldCheck } from 'lucide-react';
import { Page } from '../../App';

export const PreventiveMaintenance: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => (
  <ServicePageLayout
    onNavigate={onNavigate}
    hero={{
      title: <>Preventive <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7D7C5] to-white">Maintenance Programs</span></>,
      description: "Customized PM agreements for critical cooling assets. We move beyond filter changes to deep technical inspection and hygiene.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
      status: "Schedule Aligned"
    }}
    diagnostics={{
      title: "Proactive Care",
      description: "Deferring maintenance accelerates depreciation. Our PM programs are designed to hold the line on asset performance.",
      items: [
        { title: "Uptime", desc: "Preventing emergency failures during peak load seasons.", icon: Clock },
        { title: "Efficiency", desc: "Keeping heat transfer surfaces clean to minimize energy use.", icon: Zap },
        { title: "Hygiene", desc: "Regular disinfection of towers and coils for safety.", icon: ShieldCheck },
        { title: "Documentation", desc: "Building a service history for audits and capital planning.", icon: ClipboardList }
      ]
    }}
    protocol={{
      title: "Institutional PM Scope",
      description: "A typical BAM maintenance visit is thorough and technically focused.",
      steps: [
        { step: "01", title: "Seasonal Start-Up/Shut-Down", desc: "Proper winterization and spring commissioning of cooling towers.", points: ["Sump cleaning", "Fill inspection", "Motor amp checks"] },
        { step: "02", title: "Mid-Season Hygiene", desc: "Active-season cleaning to control biological loading.", points: ["Online basin cleaning", "Drift eliminator check", "Nozzle inspection"] },
        { step: "03", title: "Coil Maintenance", desc: "Annual deep cleaning of evaporator and condenser coils.", points: ["Enzyme cleaning", "Comb straightening", "Drain line clearing"] },
        { step: "04", title: "Belt & Drive Service", desc: "Inspection and adjustment of power transmission components.", points: ["Belt tensioning", "Sheave alignment", "Bearing lubrication"] }
      ]
    }}
    roi={{
      description: "A comprehensive PM program pays for itself through energy savings and extended equipment life.",
      stat1: { value: "30%", label: "Life Extension" },
      stat2: { value: "Predictable", label: "Budgeting", subLabel: "Fixed Annual Cost" }
    }}
    faq={{
      items: [
        { q: "Is this a full service contract?", a: "We customize the scope. It can be a hygiene-only supplement to your in-house team, or a full mechanical service agreement." },
        { q: "Do you offer emergency response?", a: "Yes. Contract clients receive priority dispatch for emergency mechanical failures." }
      ]
    }}
  />
);