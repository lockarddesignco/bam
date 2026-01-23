import React from 'react';
import { ServicePageLayout } from '../ServicePageLayout';
import { Flame, ShieldCheck, FileText, Construction, Search } from 'lucide-react';
import { Page } from '../../App';

export const FireDamperService: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => (
  <ServicePageLayout
    onNavigate={onNavigate}
    hero={{
      title: <>Fire Damper <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7D7C5] to-white">Compliance</span></>,
      description: "Inspection, testing, and repair of fire and smoke dampers in accordance with NFPA 80 and NFPA 105.",
      image: "https://images.unsplash.com/photo-1599708145804-037402633005?auto=format&fit=crop&w=1200&q=80",
      status: "Inspection Ready"
    }}
    diagnostics={{
      title: "Life Safety Compliance",
      description: "Dampers are passive fire protection. If they fail to close during an alarm, smoke and fire spread unchecked.",
      items: [
        { title: "Code Mandate", desc: "NFPA requires inspection 1 year after install, then every 4 years (6 for hospitals).", icon: FileText },
        { title: "Mechanical Failure", desc: "Rust, dirt, or racking prevents dampers from closing.", icon: Construction },
        { title: "Access", desc: "Locating and verifying accessibility for every damper.", icon: Search },
        { title: "Liability", desc: "Documented proof of function is required for insurance and AHJ audits.", icon: ShieldCheck }
      ]
    }}
    protocol={{
      title: "Testing & Verification",
      description: "We physically locate, operate, and document every damper in the scope.",
      steps: [
        { step: "01", title: "Inventory & Locate", desc: "Mapping dampers against mechanical prints.", points: ["Asset tagging", "Location mapping", "Access check"] },
        { step: "02", title: "Drop Test", desc: "Removing the link or activating the actuator to ensure full closure.", points: ["Full closure verify", "Latch check", "Track cleaning"] },
        { step: "03", title: "Reset & Repair", desc: "Re-opening the damper and replacing fusible links if needed.", points: ["Link replacement", "Actuator cycle", "Obstruction removal"] },
        { step: "04", title: "Reporting", desc: "Generating a pass/fail report with photos of every unit.", points: ["Photo log (Open/Closed)", "Deficiency list", "Digital report"] }
      ]
    }}
    roi={{
      description: "Compliance is mandatory, but proactive repair avoids costly emergency fixes during Fire Marshal inspections.",
      stat1: { value: "NFPA 80", label: "Compliance Standard" },
      stat2: { value: "100%", label: "Digital Records", subLabel: "Photo Verification" }
    }}
    faq={{
      items: [
        { q: "Do you repair failed dampers?", a: "Yes. We can perform immediate repairs or replacements for accessible dampers that fail testing." },
        { q: "What about dampers above hard ceilings?", a: "We can install access doors where necessary to allow for testing and future maintenance." }
      ]
    }}
  />
);