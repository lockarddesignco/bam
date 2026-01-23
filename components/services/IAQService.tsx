import React from 'react';
import { ServicePageLayout } from '../ServicePageLayout';
import { Activity, Microscope, Wind, Search } from 'lucide-react';
import { Page } from '../../App';

export const IAQService: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => (
  <ServicePageLayout
    onNavigate={onNavigate}
    hero={{
      title: <>Commercial <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7D7C5] to-white">Indoor Air Quality</span></>,
      description: "Comprehensive IAQ audits, monitoring, and remediation strategies for ASHRAE 62.1 compliance and occupant wellness.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80",
      status: "Monitoring Active"
    }}
    diagnostics={{
      title: "Environmental Health",
      description: "Sick Building Syndrome (SBS) and occupant complaints often stem from verifiable ventilation or contamination issues.",
      items: [
        { title: "CO2 Levels", desc: "Elevated CO2 indicates insufficient fresh air ventilation.", icon: Wind },
        { title: "Particulates", desc: "PM2.5 and PM10 levels affecting respiratory health.", icon: Activity },
        { title: "Biologicals", desc: "Presence of mold spores, bacteria, or allergens in airstreams.", icon: Microscope },
        { title: "Source ID", desc: "Locating the root cause of odors or irritation.", icon: Search }
      ]
    }}
    protocol={{
      title: "IAQ Investigation Process",
      description: "We move beyond guesswork with data-driven testing and targeted remediation plans.",
      steps: [
        { step: "01", title: "Occupant Interview & Walkthrough", desc: "Understanding the nature and location of complaints.", points: ["Symptom mapping", "Visual inspection", "HVAC operation review"] },
        { step: "02", title: "Data Logging", desc: "Deploying meters to track Temp, RH, CO2, and VOCs over time.", points: ["24-72 hour logging", "Peak load analysis", "Ventilation rate calc"] },
        { step: "03", title: "Sample Collection", desc: "Air and surface sampling for lab analysis if biologicals are suspected.", points: ["Spore trap analysis", "Surface lifts", "Independent lab chain-of-custody"] },
        { step: "04", title: "Correction Plan", desc: "Actionable engineering report recommending filtration, ventilation, or cleaning.", points: ["ASHRAE 62.1 alignment", "Filtration upgrade", "Humidification control"] }
      ]
    }}
    roi={{
      description: "Resolving IAQ issues reduces liability, improves tenant retention, and increases employee productivity.",
      stat1: { value: "ASHRAE", label: "Standard 62.1" },
      stat2: { value: "Documented", label: "Health Compliance", subLabel: "Liability Reduction" }
    }}
    faq={{
      items: [
        { q: "What do you test for?", a: "Standard panels include Temperature, Humidity, CO2, CO, VOCs, and Particulates. Biological sampling is added based on initial findings." },
        { q: "Do you provide the remediation?", a: "Yes. Unlike consulting-only firms, BAM can execute the cleaning, duct restoration, or filtration upgrades required to solve the problem." }
      ]
    }}
  />
);