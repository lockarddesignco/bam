import React from 'react';
import { ServicePageLayout } from '../ServicePageLayout';
import { Layers, ShieldCheck, Droplets, Construction } from 'lucide-react';
import { Page } from '../../App';

export const EpoxyCoating: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => (
  <ServicePageLayout
    onNavigate={onNavigate}
    hero={{
      title: <>Epoxy Coating <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7D7C5] to-white">& Lining Systems</span></>,
      description: "High-performance protective coatings for cooling tower basins, chiller tube sheets, and mechanical substrates.",
      image: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=1200&q=80",
      status: "Curing Phase"
    }}
    diagnostics={{
      title: "Corrosion Control",
      description: "Corrosion is the enemy of mechanical longevity. Our coating systems arrest rust and create a monolithic barrier against leaks.",
      items: [
        { title: "Basin Leaks", desc: "Pitting and seam failure in cooling towers lead to water loss.", icon: Droplets },
        { title: "Tube Sheet Decay", desc: "Galvanic corrosion between tubes and sheets causes bypass.", icon: Layers },
        { title: "Structural Rust", desc: "Oxidation compromises the integrity of support frames.", icon: Construction },
        { title: "Life Extension", desc: "Adding 10-15 years to the life of a metal asset.", icon: ShieldCheck }
      ]
    }}
    protocol={{
      title: "Surface Preparation & Application",
      description: "Success is 90% preparation. We adhere to strict SSPC surface prep standards.",
      steps: [
        { step: "01", title: "Surface Profiling", desc: "Abrasive blasting to remove rust and create an anchor profile.", points: ["Grit blasting", "Power tooling", "White metal standard"] },
        { step: "02", title: "Patch & Repair", desc: "Filling pits and bridging seams with structural epoxy paste.", points: ["Thick-build filler", "Fiberglass reinforcement", "Seam sealing"] },
        { step: "03", title: "Coating Application", desc: "Applying the primary protective barrier coating.", points: ["Ceramic epoxy", "Flexible urethane", "Multi-coat system"] },
        { step: "04", title: "Inspection", desc: "Verifying thickness and continuity.", points: ["Dry film thickness", "Holiday testing", "Adhesion check"] }
      ]
    }}
    roi={{
      description: "Re-lining a cooling tower basin costs approximately 15-20% of the price of a new tower, with similar longevity benefits.",
      stat1: { value: "10+ Yrs", label: "Design Life" },
      stat2: { value: "100%", label: "Leak Prevention", subLabel: "Monolithic Seal" }
    }}
    faq={{
      items: [
        { q: "How long does it take to cure?", a: "Modern epoxies can cure for immersion in as little as 24-48 hours, minimizing system downtime." },
        { q: "Can you coat over old coatings?", a: "Generally, no. We recommend removing old, failing coatings to ensure a bond to the substrate itself." }
      ]
    }}
  />
);