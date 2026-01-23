import React from 'react';
import { FileText, BarChart3, Droplets, Wind, Camera, Snowflake, ArrowRight } from 'lucide-react';

export const AboutDocumentation: React.FC = () => {
  return (
    <div className="p-10 md:p-16 animate-in fade-in duration-500">
      <h1 className="text-3xl md:text-4xl font-bold text-[#265A4A] mb-8 tracking-tight">Technical Documentation & Reference</h1>
      
      <div className="prose prose-slate max-w-none text-[#5E7A86] space-y-12 font-light leading-relaxed">
        <p className="text-lg">
          The following reference materials are provided to support facility directors, compliance officers, and procurement teams during operational planning and vendor evaluation. These documents outline the technical frameworks, standards alignment, and execution methodologies utilized by BAM in institutional environments.
        </p>

        {/* Section 1: Pilot Program */}
        <section className="border-t border-[#D7DDDA] pt-10">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-[#265A4A]" />
            <h3 className="text-xl font-bold text-[#265A4A]">Pilot Program Overview</h3>
          </div>
          <div className="pl-9">
            <p className="mb-4">
              For large-scale portfolios or complex campuses, BAM offers a structured Pilot Program. This engagement model allows institutions to validate our technical execution and reporting standards on a single asset or limited scope before committing to a master service agreement.
            </p>
            <p className="mb-6">
              The pilot includes a full condition assessment, execution of the restoration scope, and a comprehensive closeout package containing before/after performance metrics. This process serves as a low-risk mechanism for validating vendor capability and establishing baseline expectations for future capital projects.
            </p>
            <button className="flex items-center gap-2 text-sm font-bold text-[#265A4A] uppercase tracking-widest hover:underline decoration-[#A7D7C5] underline-offset-4">
              Request Pilot Details <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Section 2: Energy Savings Guide */}
        <section className="border-t border-[#D7DDDA] pt-10">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-6 h-6 text-[#265A4A]" />
            <h3 className="text-xl font-bold text-[#265A4A]">Energy Savings Methodology</h3>
          </div>
          <div className="pl-9">
            <p className="mb-4">
              Mechanical restoration directly impacts energy consumption by recovering heat transfer efficiency. Our savings projections are based on ASHRAE degradation curves and manufacturer design specifications. We analyze the delta between current operating conditions (approach temperature, head pressure, static pressure) and original design parameters.
            </p>
            <p className="mb-6">
              This guide outlines the formulas used to calculate potential kWh reductions resulting from coil cleaning, tower fill restoration, and chiller tube brushing. It is intended to support facilities teams in building financial justifications for maintenance budgets (OpEx) versus capital replacement (CapEx).
            </p>
            <button className="flex items-center gap-2 text-sm font-bold text-[#265A4A] uppercase tracking-widest hover:underline decoration-[#A7D7C5] underline-offset-4">
              Discuss Calculation Model <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Section 3: Legionella Prevention */}
        <section className="border-t border-[#D7DDDA] pt-10">
          <div className="flex items-center gap-3 mb-4">
            <Droplets className="w-6 h-6 text-[#265A4A]" />
            <h3 className="text-xl font-bold text-[#265A4A]">Legionella Prevention Brief</h3>
          </div>
          <div className="pl-9">
            <p className="mb-4">
              Alignment with ASHRAE 188 (Legionellosis: Risk Management for Building Water Systems) is a critical component of our cooling tower protocols. This brief details the specific mechanical hygiene steps BAM performs to support a facility's broader Water Management Program (WMP).
            </p>
            <p className="mb-6">
              Key topics include physical biofilm removal, basin disinfection procedures, and the elimination of stagnant water zones within the tower structure. Note that BAM acts as the execution partner for mechanical hygiene; we work in concert with your water treatment provider and infection control leadership.
            </p>
          </div>
        </section>

        {/* Section 4: IAQ Technical Brief */}
        <section className="border-t border-[#D7DDDA] pt-10">
          <div className="flex items-center gap-3 mb-4">
            <Wind className="w-6 h-6 text-[#265A4A]" />
            <h3 className="text-xl font-bold text-[#265A4A]">IAQ Technical Standards</h3>
          </div>
          <div className="pl-9">
            <p className="mb-4">
              This document defines the parameters utilized during Indoor Air Quality assessments. We reference ASHRAE Standard 62.1 for ventilation rates and EPA guidelines for particulate matter. Testing protocols typically include monitoring for CO2, Temperature, Relative Humidity, VOCs, and PM2.5/PM10.
            </p>
            <p className="mb-6">
              The brief also covers our methodology for visual inspection of air handling units and ductwork, focusing on identifying microbial growth amplification sites and pathways for contaminant distribution.
            </p>
            <button className="flex items-center gap-2 text-sm font-bold text-[#265A4A] uppercase tracking-widest hover:underline decoration-[#A7D7C5] underline-offset-4">
              Review IAQ Parameters <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Section 5: Thermal Imaging */}
        <section className="border-t border-[#D7DDDA] pt-10">
          <div className="flex items-center gap-3 mb-4">
            <Camera className="w-6 h-6 text-[#265A4A]" />
            <h3 className="text-xl font-bold text-[#265A4A]">Thermal Imaging Applications</h3>
          </div>
          <div className="pl-9">
            <p className="mb-4">
              Thermography is a non-destructive testing method used to verify mechanical performance and identify anomalies. This reference gallery illustrates typical findings, such as uneven coil heat transfer, bearing hotspots, and insulation failures in building envelopes or ductwork.
            </p>
            <p className="mb-6">
              We utilize thermal imaging both as a diagnostic tool during the assessment phase and as a verification method during project closeout to visually demonstrate the restoration of uniform heat transfer across coil faces.
            </p>
          </div>
        </section>

        {/* Section 6: Chiller Case Example */}
        <section className="border-t border-[#D7DDDA] pt-10">
          <div className="flex items-center gap-3 mb-4">
            <Snowflake className="w-6 h-6 text-[#265A4A]" />
            <h3 className="text-xl font-bold text-[#265A4A]">Chiller Refurbishment Case</h3>
          </div>
          <div className="pl-9">
            <p className="mb-4">
              This case example outlines a typical water-cooled chiller restoration project. It details the process of eddy current testing (performed by partners), mechanical tube brushing, and the application of epoxy coatings to corroded tube sheets and water boxes.
            </p>
            <p className="mb-6">
              The document highlights the operational outcomes, specifically the reduction in approach temperatures and head pressure, translating to immediate electrical savings. It serves as a template for what facilities can expect during a turnaround or winter shutdown project.
            </p>
            <button className="flex items-center gap-2 text-sm font-bold text-[#265A4A] uppercase tracking-widest hover:underline decoration-[#A7D7C5] underline-offset-4">
              Discuss Applicability <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};