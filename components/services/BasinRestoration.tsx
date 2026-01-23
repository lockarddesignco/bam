import React from 'react';
import { ServicePageLayout } from '../ServicePageLayout';
import { Waves, Droplets, Construction, ShieldCheck } from 'lucide-react';
import { Page } from '../../App';

export const BasinRestoration: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => (
  <ServicePageLayout
    onNavigate={onNavigate}
    hero={{
      title: <>Cooling Tower <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7D7C5] to-white">Basin Restoration</span></>,
      description: "Stopping leaks and extending structural life through specialized cleaning, repair, and lining of cold water basins.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      status: "Sealing Complete"
    }}
    diagnostics={{
      title: "Basin Integrity",
      description: "The basin is the foundation of the tower. Leaks and corrosion here compromise the entire system.",
      items: [
        { title: "Water Loss", desc: "Seam leaks waste thousands of gallons of makeup water.", icon: Droplets },
        { title: "Chemical Loss", desc: "Leaking water takes expensive treatment chemicals with it.", icon: Waves },
        { title: "Structural Risk", desc: "Corrosion weakens the support for the fill and fan section.", icon: Construction },
        { title: "Hygiene", desc: "Rough, pitted basins are impossible to clean effectively.", icon: ShieldCheck }
      ]
    }}
    protocol={{
      title: "Basin Relining Protocol",
      description: "Turning a corroded metal basin into a seamless, durable composite reservoir.",
      steps: [
        { step: "01", title: "Decontamination", desc: "removing all sludge, scale, and biofilm.", points: ["Pressure wash", "Sludge extraction", "Degreasing"] },
        { step: "02", title: "Prep & Prime", desc: "Creating a clean, profiled surface for adhesion.", points: ["Grinding/Blasting", "Seam caulking", "Primer coat"] },
        { step: "03", title: "Liner Application", desc: "Applying a flexible, waterproof membrane.", points: ["Urethane/Epoxy hybrid", "Self-leveling", "High build"] },
        { step: "04", title: "Cure & Fill", desc: "Allowing the system to set before refilling.", points: ["24-hr cure", "Leak check", "Water treatment check"] }
      ]
    }}
    roi={{
      description: "Restoring a basin eliminates water waste and avoids the massive crane costs associated with replacing the tower.",
      stat1: { value: "Zero", label: "Leakage Goal" },
      stat2: { value: "10 Yr", label: "Life Extension", subLabel: "Typical Outcome" }
    }}
    faq={{
      items: [
        { q: "Can you fix holes in the basin?", a: "Yes. We use metal plating and fiberglass reinforcement to patch holes before coating." },
        { q: "Is the coating chemical resistant?", a: "Yes. Our systems are designed to withstand standard cooling tower water treatment chemicals." }
      ]
    }}
  />
);