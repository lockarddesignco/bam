import React from 'react';
import { ServicePageLayout } from '../ServicePageLayout';
import { ShieldCheck, AlertTriangle, Construction, Microscope } from 'lucide-react';
import { Page } from '../../App';

export const MoldRemediation: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => (
  <ServicePageLayout
    onNavigate={onNavigate}
    hero={{
      title: <>Commercial <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7D7C5] to-white">Mold Remediation</span></>,
      description: "Institutional-grade remediation for HVAC systems and structural surfaces. Safe, contained, and documented removal.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      status: "Containment Sealed"
    }}
    diagnostics={{
      title: "Fungal Contamination",
      description: "Mold in commercial environments requires a precise, engineering-led approach to prevent cross-contamination.",
      items: [
        { title: "HVAC Amplification", desc: "Growth inside ducts or AHUs spreads spores throughout the building.", icon: AlertTriangle },
        { title: "Containment", desc: "Preventing migration of spores during the removal process.", icon: ShieldCheck },
        { title: "Root Cause", desc: "Identifying the moisture source that allowed growth to occur.", icon: Construction },
        { title: "Clearance", desc: "Verifying safe occupancy levels after work is complete.", icon: Microscope }
      ]
    }}
    protocol={{
      title: "Remediation Standard (S520)",
      description: "We follow the IICRC S520 Standard for Professional Mold Remediation.",
      steps: [
        { step: "01", title: "Engineering Controls", desc: "Erecting critical barriers and establishing negative air pressure.", points: ["6-mil poly barriers", "Negative air machines", "Pressure monitoring"] },
        { step: "02", title: "Source Removal", desc: "Physical removal of microbial growth from surfaces.", points: ["HEPA vacuuming", "Damp wiping", "Abrasive cleaning"] },
        { step: "03", title: "HVAC Cleaning", desc: "Remediating associated ductwork and air handling components.", points: ["Coil disinfection", "Liner encapsulation", "Diffuser cleaning"] },
        { step: "04", title: "Clearance Testing", desc: "Final verification by third-party industrial hygienist (optional).", points: ["Visual inspection", "Air sampling", "Turnover to owner"] }
      ]
    }}
    roi={{
      description: "Professional remediation mitigates legal liability and restores the asset to a safe, insurable condition.",
      stat1: { value: "S520", label: "IICRC Standard" },
      stat2: { value: "100%", label: "Source Removal", subLabel: "No Cover-ups" }
    }}
    faq={{
      items: [
        { q: "Do you just spray chemicals?", a: "No. The industry standard is physical removal. Chemicals are used for surface sanitization, but they are not a substitute for removing the biomass." },
        { q: "Can we stay in the building?", a: "In most cases, yes. We design our containment strategies to isolate the work area so normal operations can continue elsewhere." }
      ]
    }}
  />
);