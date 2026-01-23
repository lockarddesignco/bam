import React from 'react';
import { ServicePageLayout } from '../ServicePageLayout';
import { Thermometer, Activity, AlertTriangle, Layers } from 'lucide-react';
import { Page } from '../../App';

export const ChillerRestoration: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => (
  <ServicePageLayout
    onNavigate={onNavigate}
    hero={{
      title: <>Chiller <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7D7C5] to-white">Performance Restoration</span></>,
      description: "Recover lost tonnage and reduce head pressure through tube cleaning, tube sheet refurbishment, and epoxy resurfacing of water boxes.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=1200&q=80",
      status: "Descaling Protocol Active"
    }}
    diagnostics={{
      title: "Heat Transfer Efficiency",
      description: "Even microscopic scale on chiller tubes can increase energy consumption by 15-20%. We target the fouling that standard maintenance misses.",
      items: [
        { title: "Approach Temperature", desc: "Rising approach temperatures indicate fouled tubes and reduced efficiency.", icon: Thermometer },
        { title: "Head Pressure", desc: "High head pressure forces compressors to work harder, shortening lifespan.", icon: Activity },
        { title: "Corrosion & Pitting", desc: "Tube sheet degradation leads to leaks and catastrophic cross-contamination.", icon: AlertTriangle },
        { title: "Epoxy Failure", desc: "Existing coatings on water boxes failing, leading to substrate corrosion.", icon: Layers }
      ]
    }}
    protocol={{
      title: "Chiller Refurbishment SOP",
      description: "Our process restores the entire heat exchange loop, from physical tube cleaning to protective coating application.",
      steps: [
        { step: "01", title: "Rotary Brush & Descaling", desc: "Mechanical cleaning of copper tubes to remove mineral scale and biological fouling.", points: ["Nylon/Brass brushing", "Chemical descaling circulation", "Borescope inspection"] },
        { step: "02", title: "Tube Sheet Resurfacing", desc: "Abrasive blasting of tube sheets to expose white metal and remove corrosion.", points: ["Grit blasting", "Surface profile verification", "Chloride testing"] },
        { step: "03", title: "Epoxy Cladding", desc: "Application of 100% solids epoxy to tube sheets and water boxes.", points: ["Ceramic-filled epoxy", "Edge-retention coating", "Holiday testing (Spark test)"] },
        { step: "04", title: "Final Return to Service", desc: "Reassembly and pressure testing to ensure leak-free operation.", points: ["Hydrostatic testing", "Flow rate verification", "Baseline performance log"] }
      ]
    }}
    roi={{
      description: "Restoring a chiller's tubes and water boxes costs a fraction of a re-tube or replacement and immediately lowers electrical demand.",
      stat1: { value: "15-25%", label: "Energy Efficiency Gain" },
      stat2: { value: "< 12 Mos", label: "Typical Payback", subLabel: "Based on Energy Savings" }
    }}
    faq={{
      items: [
        { q: "Can you coat tube sheets without blocking tubes?", a: "Yes. We use specialized corks or plugs to mask the tube openings during the epoxy application process, ensuring zero flow restriction." },
        { q: "Do you handle both centrifugal and screw chillers?", a: "Yes. Our protocols cover water-cooled condensers on all major OEM equipment including Trane, York, Carrier, and Daikin." }
      ]
    }}
  />
);