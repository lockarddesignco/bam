import React, { useState, useEffect, useMemo } from 'react';
import { Calculator, CheckCircle2, TrendingUp, DollarSign, Clock, ArrowRight, Info, ShieldCheck, Send, Phone } from 'lucide-react';
import { Button } from '../Button';

// Calculator Data Models & Multipliers
const ageMultipliers: Record<string, number> = {
  '0-5': 0.02,
  '5-10': 0.05,
  '10-15': 0.10,
  '15-20+': 0.15
};

const baseEnergySpend: Record<string, number> = {
  'under-50k': 35000,
  '50k-150k': 100000,
  '150k-500k': 325000,
  '500k-1m': 750000,
  '1m+': 1200000
};

const assetCounts: Record<string, number> = {
  '1': 1,
  '2-3': 2.5,
  '4-6': 5,
  '7+': 8
};

const unitReplacementCosts: Record<string, number> = {
  'cooling-tower': 125000,
  'chiller': 200000,
  'both': 325000
};

const knownIssuesList = [
  "Visible scale or corrosion",
  "High head pressure / Approach temp issues",
  "Visible biological growth / biofilm",
  "Airflow restrictions / Static pressure alarms",
  "Recent audit deficiencies"
];

// Formatter
const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(val);
};

export const RestorationValueEstimatorPage: React.FC = () => {
  // --- State ---
  const [facilityType, setFacilityType] = useState('healthcare');
  const [sqFt, setSqFt] = useState('50k-150k');
  const [assetFocus, setAssetFocus] = useState<'cooling-tower' | 'chiller' | 'both'>('cooling-tower');
  const [assetCount, setAssetCount] = useState<'1' | '2-3' | '4-6' | '7+'>('1');
  const [equipmentAge, setEquipmentAge] = useState<'0-5' | '5-10' | '10-15' | '15-20+'>('10-15');
  const [energySpend, setEnergySpend] = useState<'under-50k' | '50k-150k' | '150k-500k' | '500k-1m' | '1m+'>('150k-500k');
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  
  // --- Calculation Logic ---
  const results = useMemo(() => {
    // 1. Annual Energy Efficiency Recovery
    const baseSpend = baseEnergySpend[energySpend];
    const ageMult = ageMultipliers[equipmentAge];
    
    // Each issue adds 1.5%, capped at 8% total issue penalty
    const issuePenalty = Math.min(selectedIssues.length * 0.015, 0.08);
    
    const lowEnergySavings = baseSpend * ageMult * 0.8;
    const highEnergySavings = baseSpend * (ageMult + issuePenalty) * 1.0;
    const avgEnergySavings = (lowEnergySavings + highEnergySavings) / 2;

    // 2. Capital Cost Avoidance (Deferred Replacement)
    const unitCost = unitReplacementCosts[assetFocus];
    const count = assetCounts[assetCount];
    const totalReplacementLiability = count * unitCost;

    const lowCapexAvoidance = totalReplacementLiability * 0.85;
    const highCapexAvoidance = totalReplacementLiability * 0.90;

    // 3. Payback Period
    // Estimating restoration cost as ~15% of replacement value
    const estRestorationCost = totalReplacementLiability * 0.15;
    const monthlySavings = avgEnergySavings / 12;
    
    let paybackMonths = 0;
    if (monthlySavings > 0) {
      paybackMonths = estRestorationCost / monthlySavings;
    }

    // Clamp payback for realism text
    let paybackText = "";
    if (paybackMonths < 6) paybackText = "Immediate (< 6 Months)";
    else if (paybackMonths > 24) paybackText = "18 – 24+ Months";
    else paybackText = `${Math.floor(paybackMonths)} – ${Math.ceil(paybackMonths + 2)} Months`;

    return {
      energy: {
        low: lowEnergySavings,
        high: highEnergySavings,
        formatted: `${formatCurrency(lowEnergySavings)} – ${formatCurrency(highEnergySavings)} / yr`
      },
      capex: {
        low: lowCapexAvoidance,
        high: highCapexAvoidance,
        formatted: `${formatCurrency(lowCapexAvoidance)} – ${formatCurrency(highCapexAvoidance)}`
      },
      payback: paybackText
    };
  }, [equipmentAge, energySpend, selectedIssues, assetFocus, assetCount]);

  const toggleIssue = (issue: string) => {
    if (selectedIssues.includes(issue)) {
      setSelectedIssues(selectedIssues.filter(i => i !== issue));
    } else {
      setSelectedIssues([...selectedIssues, issue]);
    }
  };

  return (
    <div className="bg-[#F7F9F8] font-sans selection:bg-[#A7D7C5] selection:text-[#265A4A]">
      
      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-20 bg-[#0B1110] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1110] via-[#0B1110]/95 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 text-[#A7D7C5] mb-6">
                <Calculator className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Institutional Tool</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-tight">
                Restoration Value <br/>
                <span className="text-[#A7D7C5]">Estimator Model</span>
             </h1>
             <p className="text-[#D7DDDA] text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#265A4A] pl-8 opacity-90 max-w-2xl mb-10">
                Model the potential operational savings and capital cost avoidance for your specific facility profile. 
                This tool uses ASHRAE degradation curves to estimate the financial impact of mechanical restoration.
             </p>
          </div>
        </div>
      </section>

      {/* 2. The Calculator */}
      <section className="py-12 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           
           <div className="bg-white shadow-2xl rounded-sm border border-[#D7DDDA] overflow-hidden flex flex-col lg:flex-row">
              
              {/* Left Column: Inputs */}
              <div className="w-full lg:w-7/12 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[#D7DDDA]">
                <h3 className="text-2xl font-bold text-[#265A4A] mb-8 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-[#265A4A] text-white flex items-center justify-center text-sm">1</div>
                   Facility Parameters
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#5E7A86] uppercase tracking-widest">Facility Type</label>
                    <select value={facilityType} onChange={(e) => setFacilityType(e.target.value)} className="w-full bg-[#F7F9F8] border border-[#D7DDDA] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] rounded-sm text-[#265A4A] font-medium appearance-none cursor-pointer">
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education (K-12 & Higher Ed)</option>
                      <option value="government">Government & Secure</option>
                      <option value="industrial">Industrial & Manufacturing</option>
                      <option value="commercial">Commercial Properties</option>
                      <option value="senior-care">Senior Care / Assisted Living</option>
                      <option value="retail">Retail Chains</option>
                      <option value="cold-storage">Cold Storage</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#5E7A86] uppercase tracking-widest">Approx Square Footage</label>
                    <select value={sqFt} onChange={(e) => setSqFt(e.target.value)} className="w-full bg-[#F7F9F8] border border-[#D7DDDA] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] rounded-sm text-[#265A4A] font-medium appearance-none cursor-pointer">
                      <option value="under-50k">Under 50,000 sq ft</option>
                      <option value="50k-150k">50,000 – 150,000 sq ft</option>
                      <option value="150k-500k">150,000 – 500,000 sq ft</option>
                      <option value="500k+">500,000+ sq ft</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#5E7A86] uppercase tracking-widest">Asset Focus</label>
                    <select value={assetFocus} onChange={(e) => setAssetFocus(e.target.value as any)} className="w-full bg-[#F7F9F8] border border-[#D7DDDA] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] rounded-sm text-[#265A4A] font-medium appearance-none cursor-pointer">
                      <option value="cooling-tower">Cooling Tower</option>
                      <option value="chiller">Chiller</option>
                      <option value="both">Both (System-wide)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#5E7A86] uppercase tracking-widest">Number of Major Assets</label>
                    <select value={assetCount} onChange={(e) => setAssetCount(e.target.value as any)} className="w-full bg-[#F7F9F8] border border-[#D7DDDA] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] rounded-sm text-[#265A4A] font-medium appearance-none cursor-pointer">
                      <option value="1">1</option>
                      <option value="2-3">2 – 3</option>
                      <option value="4-6">4 – 6</option>
                      <option value="7+">7+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#5E7A86] uppercase tracking-widest">Equipment Age</label>
                    <select value={equipmentAge} onChange={(e) => setEquipmentAge(e.target.value as any)} className="w-full bg-[#F7F9F8] border border-[#D7DDDA] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] rounded-sm text-[#265A4A] font-medium appearance-none cursor-pointer">
                      <option value="0-5">0 – 5 Years (Maintenance Phase)</option>
                      <option value="5-10">5 – 10 Years (Performance Drift)</option>
                      <option value="10-15">10 – 15 Years (Restoration Critical)</option>
                      <option value="15-20+">15 – 20+ Years (Life Extension)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#5E7A86] uppercase tracking-widest">Annual HVAC Energy Spend</label>
                    <select value={energySpend} onChange={(e) => setEnergySpend(e.target.value as any)} className="w-full bg-[#F7F9F8] border border-[#D7DDDA] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] rounded-sm text-[#265A4A] font-medium appearance-none cursor-pointer">
                      <option value="under-50k">Under $50k</option>
                      <option value="50k-150k">$50k – $150k</option>
                      <option value="150k-500k">$150k – $500k</option>
                      <option value="500k-1m">$500k – $1M</option>
                      <option value="1m+">$1M+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[11px] font-bold text-[#5E7A86] uppercase tracking-widest block mb-2">Known Issues (Select all that apply)</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {knownIssuesList.map((issue) => (
                      <div 
                        key={issue} 
                        onClick={() => toggleIssue(issue)}
                        className={`p-3 border rounded-sm cursor-pointer flex items-center gap-3 transition-all ${selectedIssues.includes(issue) ? 'bg-[#265A4A]/5 border-[#265A4A]' : 'bg-white border-[#D7DDDA] hover:border-[#A7D7C5]'}`}
                      >
                         <div className={`w-4 h-4 rounded-sm border flex items-center justify-center ${selectedIssues.includes(issue) ? 'bg-[#265A4A] border-[#265A4A]' : 'border-[#D7DDDA]'}`}>
                           {selectedIssues.includes(issue) && <CheckCircle2 className="w-3 h-3 text-white" />}
                         </div>
                         <span className="text-xs text-[#5E7A86] font-medium">{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              
              {/* Right Column: Outputs */}
              <div className="w-full lg:w-5/12 bg-[#F2F6F5] p-8 md:p-12 flex flex-col justify-center relative">
                 <div className="sticky top-24">
                   <h3 className="text-2xl font-bold text-[#265A4A] mb-8 flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-[#A7D7C5] text-[#265A4A] flex items-center justify-center text-sm">2</div>
                     Restoration Model
                   </h3>

                   <div className="space-y-6">
                      
                      {/* Card 1 */}
                      <div className="bg-white p-6 rounded-sm border border-[#D7DDDA] shadow-sm relative overflow-hidden">
                         <div className="absolute top-0 left-0 w-1 h-full bg-[#A7D7C5]"></div>
                         <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xs font-bold text-[#5E7A86] uppercase tracking-widest">Potential Utility Savings</h4>
                            <TrendingUp className="w-5 h-5 text-[#265A4A]" />
                         </div>
                         <div className="text-2xl font-bold text-[#265A4A] tracking-tight">{results.energy.formatted}</div>
                         <p className="text-[10px] text-[#5E7A86] mt-2 opacity-80">Estimated annual recovery via improved heat transfer.</p>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-white p-6 rounded-sm border border-[#D7DDDA] shadow-sm relative overflow-hidden">
                         <div className="absolute top-0 left-0 w-1 h-full bg-[#265A4A]"></div>
                         <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xs font-bold text-[#5E7A86] uppercase tracking-widest">Deferred Replacement Value</h4>
                            <DollarSign className="w-5 h-5 text-[#265A4A]" />
                         </div>
                         <div className="text-2xl font-bold text-[#265A4A] tracking-tight">{results.capex.formatted}</div>
                         <p className="text-[10px] text-[#5E7A86] mt-2 opacity-80">Capital cost avoidance by extending asset life.</p>
                      </div>

                      {/* Card 3 */}
                      <div className="bg-white p-6 rounded-sm border border-[#D7DDDA] shadow-sm relative overflow-hidden">
                         <div className="absolute top-0 left-0 w-1 h-full bg-[#A7D7C5]"></div>
                         <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xs font-bold text-[#5E7A86] uppercase tracking-widest">Simple ROI Horizon</h4>
                            <Clock className="w-5 h-5 text-[#265A4A]" />
                         </div>
                         <div className="text-2xl font-bold text-[#265A4A] tracking-tight">{results.payback}</div>
                         <p className="text-[10px] text-[#5E7A86] mt-2 opacity-80">Projected payback period based on efficiency gains.</p>
                      </div>

                   </div>

                   {/* Context & Disclaimer */}
                   <div className="mt-8 pt-8 border-t border-[#D7DDDA]/50 space-y-4">
                     <div className="flex gap-3">
                        <Info className="w-5 h-5 text-[#A7D7C5] shrink-0" />
                        <p className="text-xs text-[#5E7A86] leading-relaxed italic">
                           "These figures represent the estimated financial impact of restoring heat transfer efficiency and extending asset life, deferring the need for full capital replacement."
                        </p>
                     </div>
                     <p className="text-[9px] text-[#5E7A86]/60 leading-relaxed pl-8">
                       Disclaimer: Estimates based on ASHRAE degradation curves and BAM historical project data. Actual results depend on onsite conditions. This tool does not constitute a guaranteed scope of work.
                     </p>
                   </div>

                 </div>
              </div>

           </div>

        </div>
      </section>

      {/* 3. Methodology & Context */}
      <section className="py-24 bg-[#0B1110] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-3xl font-bold mb-8">Why Restoration Yields <br/> <span className="text-[#A7D7C5]">Defensible ROI</span></h2>
                 <p className="text-[#D7DDDA] text-lg font-light leading-relaxed mb-8 opacity-90">
                    Mechanical systems do not need to be replaced just because they are dirty or inefficient. By recovering heat transfer surfaces and correcting airflow restrictions, facilities can reclaim up to 95% of original design performance at a fraction of the replacement cost.
                 </p>
                 <ul className="space-y-4">
                    {[
                      "Recovering heat transfer efficiency in fouled coils",
                      "Reducing static pressure penalties on fan motors",
                      "Eliminating biological insulation on exchange surfaces",
                      "Extending the physical lifespan of the cabinet and structure"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-[#D7DDDA]">
                        <CheckCircle2 className="w-4 h-4 text-[#A7D7C5]" />
                        {item}
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="bg-[#265A4A]/20 p-10 border border-[#A7D7C5]/20 rounded-sm">
                 <h4 className="text-[#A7D7C5] font-bold text-xs uppercase tracking-widest mb-6">Capital Planning Impact</h4>
                 <div className="space-y-6">
                    <div>
                       <div className="flex justify-between text-sm font-bold text-white mb-2">
                          <span>Restoration Cost</span>
                          <span>~15%</span>
                       </div>
                       <div className="h-2 bg-[#0B1110] rounded-full overflow-hidden border border-[#265A4A]">
                          <div className="h-full w-[15%] bg-[#A7D7C5]"></div>
                       </div>
                    </div>
                    <div>
                       <div className="flex justify-between text-sm font-bold text-white mb-2">
                          <span>Replacement Cost</span>
                          <span>100%</span>
                       </div>
                       <div className="h-2 bg-[#0B1110] rounded-full overflow-hidden border border-[#265A4A]">
                          <div className="h-full w-full bg-[#5E7A86]"></div>
                       </div>
                    </div>
                    <p className="text-xs text-[#D7DDDA] mt-4 leading-relaxed italic">
                       Restoration projects typically fit within operating budgets (OpEx), avoiding the complex approval processes of large capital expenditures (CapEx).
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Validation & Next Steps (Lead Capture) */}
      <section className="py-24 bg-white border-b border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
           <div className="max-w-4xl mx-auto">
              
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-bold text-[#265A4A] mb-6">Validate These Numbers On-Site</h2>
                 <p className="text-[#5E7A86] text-lg font-light leading-relaxed max-w-2xl mx-auto">
                    Online models are approximations. Request a certified engineer to audit your equipment condition, verify these projections, and provide a firm-fixed price proposal.
                 </p>
              </div>

              <div className="bg-[#F7F9F8] border border-[#D7DDDA] p-10 md:p-16 rounded-sm shadow-xl">
                 <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Request Submitted'); }}>
                    
                    {/* Hidden Fields for Calculator Context */}
                    <input type="hidden" name="calc_facility_type" value={facilityType} />
                    <input type="hidden" name="calc_sq_ft" value={sqFt} />
                    <input type="hidden" name="calc_asset_focus" value={assetFocus} />
                    <input type="hidden" name="calc_output_savings" value={results.energy.formatted} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[11px] font-bold text-[#5E7A86] uppercase tracking-widest">Full Name *</label>
                          <input type="text" required className="w-full bg-white border border-[#D7DDDA] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] transition-colors" placeholder="First Last" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[11px] font-bold text-[#5E7A86] uppercase tracking-widest">Work Email *</label>
                          <input type="email" required className="w-full bg-white border border-[#D7DDDA] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] transition-colors" placeholder="name@organization.com" />
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[11px] font-bold text-[#5E7A86] uppercase tracking-widest">Phone Number *</label>
                          <input type="tel" required className="w-full bg-white border border-[#D7DDDA] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] transition-colors" placeholder="(555) 000-0000" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[11px] font-bold text-[#5E7A86] uppercase tracking-widest">Job Title *</label>
                          <input type="text" required className="w-full bg-white border border-[#D7DDDA] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] transition-colors" placeholder="Facility Director / Manager" />
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[11px] font-bold text-[#5E7A86] uppercase tracking-widest">Facility / Company Name *</label>
                          <input type="text" required className="w-full bg-white border border-[#D7DDDA] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] transition-colors" placeholder="Organization Name" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[11px] font-bold text-[#5E7A86] uppercase tracking-widest">Facility Location (City, State) *</label>
                          <input type="text" required className="w-full bg-white border border-[#D7DDDA] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] transition-colors" placeholder="e.g. Harrisburg, PA" />
                       </div>
                    </div>

                    <div className="pt-6">
                       <Button size="lg" fullWidth className="font-bold tracking-wide">
                          Request Engineering Validation
                          <ArrowRight className="w-5 h-5 ml-2" />
                       </Button>
                    </div>
                    
                    <p className="text-[10px] text-center text-[#5E7A86] opacity-70">
                       By submitting this request, you agree to be contacted by a BAM engineering representative to schedule a site audit.
                    </p>

                 </form>
              </div>

           </div>
        </div>
      </section>

      {/* 5. Footer Notes */}
      <section className="py-8 bg-[#0B1110] border-t border-white/5 opacity-30 text-[10px] font-mono text-white text-center">
         TOOL: RESTORATION_ROI_V1 | MODEL: ASHRAE_DEGRADATION | STATUS: LIVE
      </section>

    </div>
  );
};