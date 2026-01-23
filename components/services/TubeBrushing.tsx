import React from 'react';
import { ServicePageLayout } from '../ServicePageLayout';
import { Gauge, Zap, Activity, Thermometer } from 'lucide-react';
import { Page } from '../../App';

export const TubeBrushing: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => (
  <ServicePageLayout
    onNavigate={onNavigate}
    hero={{
      title: <>Tube Brushing <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7D7C5] to-white">& Descaling</span></>,
      description: "Mechanical cleaning of heat exchanger tubes to remove mud, algae, and scale. Essential for chiller efficiency.",
      image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80",
      status: "Rotary Cleaning"
    }}
    diagnostics={{
      title: "Heat Exchange Recovery",
      description: "Fouled tubes insulate the heat transfer process. Annual brushing is the single most effective maintenance task for chillers.",
      items: [
        { title: "Approach Temp", desc: "Lowering approach temperatures to design specifications.", icon: Thermometer },
        { title: "Head Pressure", desc: "Reducing compressor lift and electrical demand.", icon: Gauge },
        { title: "Energy Cost", desc: "Clean tubes significantly reduce kW/Ton consumption.", icon: Zap },
        { title: "Reliability", desc: "Preventing nuisance trips on high-pressure days.", icon: Activity }
      ]
    }}
    protocol={{
      title: "Rotary Cleaning Process",
      description: "We use variable-speed rotary shaft machines with water flush to clean every inch of the tube.",
      steps: [
        { step: "01", title: "Head Removal", desc: "Draining the vessel and removing water box heads.", points: ["Rigging & lifting", "Gasket removal", "Safety lockout"] },
        { step: "02", title: "Rotary Brushing", desc: "Running a rotating nylon or brass brush through each tube.", points: ["Full length pass", "Water flush", "Debris extraction"] },
        { step: "03", title: "Inspection", desc: "Visual check of tube condition and rifling.", points: ["Light test", "Scale check", "Sample collection"] },
        { step: "04", title: "Closure", desc: "Reinstalling heads with new gaskets.", points: ["Torque specs", "Leak check", "Return to service"] }
      ]
    }}
    roi={{
      description: "The energy savings from a single tube brushing often pay for the service within the first month of operation.",
      stat1: { value: "10-20%", label: "Efficiency Gain" },
      stat2: { value: "Required", label: "Annual Service", subLabel: "Best Practice" }
    }}
    faq={{
      items: [
        { q: "What if brushing isn't enough?", a: "If scale is hardened, we can implement a chemical descaling circulation prior to brushing." },
        { q: "Do you clean condenser and evaporator tubes?", a: "Yes. While condensers foul more frequently, we service both bundles." }
      ]
    }}
  />
);