import React from 'react';
import { ServicePageLayout } from '../ServicePageLayout';
import { Wind, Fan, ShieldCheck, Zap } from 'lucide-react';
import { Page } from '../../App';

export const AHURestoration: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => (
  <ServicePageLayout
    onNavigate={onNavigate}
    hero={{
      title: <>AHU & Coil <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7D7C5] to-white">Restoration Services</span></>,
      description: "Deep steam cleaning and restoration of air handling units to improve static pressure, indoor air quality, and thermal transfer.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
      status: "Steam Cleaning Active"
    }}
    diagnostics={{
      title: "Airflow & Hygiene",
      description: "Biofilm on coils acts as an insulator and restricts airflow. We remove the burden from your fans and the contaminants from your airstream.",
      items: [
        { title: "Static Pressure", desc: "High pressure drop across the coil bank indicates deep fouling.", icon: Wind },
        { title: "Biological Growth", desc: "Mold and biofilm on coils release spores into the supply air.", icon: ShieldCheck },
        { title: "Corroded Drain Pans", desc: "Standing water and rust create a breeding ground for Legionella.", icon: Fan },
        { title: "Fan Energy", desc: "Fans run at higher RPMs to overcome resistance, wasting energy.", icon: Zap }
      ]
    }}
    protocol={{
      title: "AHU Hygiene Protocol",
      description: "We use high-temperature steam and enzyme-based cleaners to penetrate deep into coil fins without damaging them.",
      steps: [
        { step: "01", title: "Containment Setup", desc: "Isolating the AHU to prevent contaminant migration during cleaning.", points: ["Negative air pressure", "Supply duct sealing", "HEPA filtration"] },
        { step: "02", title: "Coil Steam Cleaning", desc: "Low-pressure, high-temperature steam cleaning of coil faces.", points: ["Fin-safe pressure", "Enzyme foaming", "Deep penetration"] },
        { step: "03", title: "Surface Sanitzation", desc: "Cleaning and disinfecting blower housings, plenums, and dampers.", points: ["EPA-registered biocides", "Rust remediation", "Drain pan clearing"] },
        { step: "04", title: "Pan Refurbishment", desc: "Coating rusted drain pans with a flexible, waterproof membrane.", points: ["Pan-crete / Epoxy", "Self-leveling application", "Leak proofing"] }
      ]
    }}
    roi={{
      description: "Clean coils transfer heat more effectively and allow fans to run at lower speeds, directly reducing HVAC energy spend.",
      stat1: { value: "10-15%", label: "Fan Energy Reduction" },
      stat2: { value: "Immediate", label: "IAQ Improvement", subLabel: "Reduced Airborne Spores" }
    }}
    faq={{
      items: [
        { q: "Will steam damage the aluminum fins?", a: "No. We use specific pressures and spray angles designed to clean without bending or flattening delicate aluminum fins." },
        { q: "Can you restore the condensate pan?", a: "Yes. If the pan is leaking or rusted, we can resurface it with a self-leveling epoxy that creates a new, permanent basin liner." }
      ]
    }}
  />
);