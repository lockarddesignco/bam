import React from 'react';
import { ServicePageLayout } from '../ServicePageLayout';
import { Sun, Activity, Zap, ShieldCheck } from 'lucide-react';
import { Page } from '../../App';

export const UVCPurification: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => (
  <ServicePageLayout
    onNavigate={onNavigate}
    hero={{
      title: <>UV-C & Air <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7D7C5] to-white">Purification</span></>,
      description: "Germicidal UV solutions for HVAC coils and airstreams. Neutralizing pathogens and keeping coils clean automatically.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
      status: "Array Active"
    }}
    diagnostics={{
      title: "Active Disinfection",
      description: "UV-C light attacks the DNA of microorganisms, preventing them from reproducing on damp coil surfaces.",
      items: [
        { title: "Coil Mold", desc: "Eliminating the slime and mold that grows on cooling coils.", icon: ShieldCheck },
        { title: "Pressure Drop", desc: "Clean coils have lower air resistance, saving fan energy.", icon: Zap },
        { title: "Pathogens", desc: "Inactivating airborne viruses and bacteria in the airstream.", icon: Activity },
        { title: "Maintenance", desc: "Reducing the need for manual coil cleaning.", icon: Sun }
      ]
    }}
    protocol={{
      title: "UV-C Installation",
      description: "We engineer the intensity and placement for maximum kill rate without damaging materials.",
      steps: [
        { step: "01", title: "Sizing & Modeling", desc: "Determining the necessary microwatt output for the plenum.", points: ["Air velocity calc", "Dosage modeling", "Lamp selection"] },
        { step: "02", title: "Mounting System", desc: "Installing rigid racks for downstream coil irradiation.", points: ["Aluminum racking", "Safety switches", "Viewports"] },
        { step: "03", title: "Electrical", desc: "Connecting power and interlocks.", points: ["Ballast mounting", "Door safety interlock", "Control tie-in"] },
        { step: "04", title: "Commissioning", desc: "Verifying lamp operation and safety.", points: ["Intensity check", "Safety label application", "Staff training"] }
      ]
    }}
    roi={{
      description: "UV-C systems often pay for themselves through energy savings alone by keeping coils continuously clean and efficient.",
      stat1: { value: "15-20%", label: "Energy Savings" },
      stat2: { value: "99.9%", label: "Surface Kill Rate", subLabel: "Biologicals" }
    }}
    faq={{
      items: [
        { q: "Is UV-C safe for occupants?", a: "Yes. The lights are inside the AHU. Safety switches turn them off instantly if a door is opened." },
        { q: "How often do bulbs need changing?", a: "Typically once a year (approx 9,000 hours) to maintain effective germicidal output." }
      ]
    }}
  />
);