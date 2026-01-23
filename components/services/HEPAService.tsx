import React from 'react';
import { ServicePageLayout } from '../ServicePageLayout';
import { Microscope, Wind, ShieldCheck, Activity } from 'lucide-react';
import { Page } from '../../App';

export const HEPAService: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => (
  <ServicePageLayout
    onNavigate={onNavigate}
    hero={{
      title: <>HEPA & Filter <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7D7C5] to-white">Management</span></>,
      description: "Critical filtration services for healthcare and labs. Installation, certification, and DOP testing of HEPA systems.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      status: "Filter Audit"
    }}
    diagnostics={{
      title: "Filtration Integrity",
      description: "In critical environments, the filter is the primary defense against airborne pathogens. Integrity is non-negotiable.",
      items: [
        { title: "Bypass", desc: "Air leaking around the filter frame defeats the HEPA rating.", icon: Wind },
        { title: "Loading", desc: "Packed filters reduce airflow and strain fan motors.", icon: Activity },
        { title: "Compliance", desc: "Meeting USP 797/800 or hospital isolation room standards.", icon: ShieldCheck },
        { title: "Verification", desc: "Proof that the filter is performing to specification.", icon: Microscope }
      ]
    }}
    protocol={{
      title: "Filter Certification Process",
      description: "We don't just change filters; we verify the seal and performance of the housing.",
      steps: [
        { step: "01", title: "Housing Inspection", desc: "Checking gaskets and locking mechanisms.", points: ["Frame integrity", "Gasket check", "Clip tension"] },
        { step: "02", title: "Installation", desc: "Careful handling of delicate HEPA media.", points: ["Media protection", "Proper orientation", "Seating check"] },
        { step: "03", title: "DOP/PAO Testing", desc: "Challenging the filter with aerosol to detect leaks.", points: ["Upstream challenge", "Downstream scan", "Leak isolation"] },
        { step: "04", title: "Certification", desc: "Issuing a certification sticker and report.", points: ["Pass/Fail log", "cfm reading", "dP reading"] }
      ]
    }}
    roi={{
      description: "Properly managed filtration ensures regulatory compliance and protects downstream processes/patients from contamination.",
      stat1: { value: "99.97%", label: "Efficiency Target" },
      stat2: { value: "Certified", label: "Documentation", subLabel: "Audit Ready" }
    }}
    faq={{
      items: [
        { q: "Do you perform Bag-In/Bag-Out changes?", a: "Yes. We are trained in safe-change procedures for hazardous exhaust systems." },
        { q: "Can you upgrade standard units to HEPA?", a: "It depends on the fan capacity. HEPA filters have high resistance; we can perform a static pressure profile to determine feasibility." }
      ]
    }}
  />
);