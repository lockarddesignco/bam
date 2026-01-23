import React from 'react';
import { ServicePageLayout } from '../ServicePageLayout';
import { Wind, ShieldCheck, Microscope, FileText } from 'lucide-react';
import { Page } from '../../App';

export const DuctCleaning: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => (
  <ServicePageLayout
    onNavigate={onNavigate}
    hero={{
      title: <>NADCA-Aligned <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7D7C5] to-white">Duct Cleaning</span></>,
      description: "Commercial air conveyance cleaning compliant with NADCA ACR standards. Source removal for hospitals, schools, and offices.",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
      status: "Negative Air Established"
    }}
    diagnostics={{
      title: "Supply Air Hygiene",
      description: "Ductwork accumulates dust, construction debris, and microbial growth over time. Our process removes the source, not just the symptoms.",
      items: [
        { title: "Particulate Load", desc: "Dust buildup reduces airflow and impacts sensitive equipment.", icon: Wind },
        { title: "Mold Spores", desc: "Moisture in ducts can support fungal growth that spreads via supply air.", icon: Microscope },
        { title: "Airflow Balance", desc: "Debris blockage can cause uneven heating and cooling in zones.", icon: FileText },
        { title: "Compliance", desc: "Meeting healthcare and educational standards for air cleanliness.", icon: ShieldCheck }
      ]
    }}
    protocol={{
      title: "Source Removal Methodology",
      description: "We do not just encapsulate dirt. We remove it using high-velocity negative air and mechanical agitation.",
      steps: [
        { step: "01", title: "Negative Air Connection", desc: "Connecting high-volume vacuum trucks or portable collectors to the main trunk.", points: ["Zone isolation", "Static pressure maintenance", "Contaminant capture"] },
        { step: "02", title: "Mechanical Agitation", desc: "Using air whips, brushes, and skipper balls to dislodge debris.", points: ["Compressed air whips", "Rotary brushing", "Robotic inspection"] },
        { step: "03", title: "Component Cleaning", desc: "Cleaning registers, diffusers, VAV boxes, and reheat coils.", points: ["Grille washing", "Turning vane cleaning", "Damper vacuuming"] },
        { step: "04", title: "Verification", desc: "Post-cleaning visual inspection and optional surface testing.", points: ["Before/After photos", "NADCA vacuum test", "Closeout report"] }
      ]
    }}
    roi={{
      description: "Clean ducts extend filter life, reduce dusting frequency in occupied spaces, and improve overall HVAC system hygiene.",
      stat1: { value: "NADCA", label: "Standard of Care" },
      stat2: { value: "Verified", label: "Cleanliness Level", subLabel: "Photo Documented" }
    }}
    faq={{
      items: [
        { q: "Do you use chemical sealants?", a: "We prioritize source removal. Sealants/sanitizers are only applied if specifically requested or if remediation of non-porous surfaces is required." },
        { q: "Can you clean lined ductwork?", a: "Yes. We use specialized soft-bristle brushes and air-washing tools to clean fiber-lined ducts without damaging the insulation surface." }
      ]
    }}
  />
);