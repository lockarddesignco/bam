import React, { useMemo, useState } from 'react';
import { 
  Activity, AlertTriangle, Clipboard, ClipboardCheck, ClipboardList, Droplets, Info, RefreshCw, ShieldCheck, Wind 
} from 'lucide-react';
import { Button } from '../Button';

type FormState = {
  facilityType: 'Healthcare' | 'Senior care' | 'Education' | 'Office' | 'Industrial' | 'Retail' | 'Cold storage' | 'Other';
  occupancyLevel: 'Low' | 'Moderate' | 'High';
  sensitivePopulations: 'Yes' | 'No';
  operatingHours: 'Standard' | 'Extended' | '24/7';
  hvacAge: '<10' | '10-20' | '20+';
  filterLevel: 'MERV 8 or lower' | 'MERV 11-13' | 'HEPA or equivalent';
  outdoorAir: 'Unknown' | 'Minimal' | 'Code typical' | 'Enhanced';
  maintenanceCadence: 'Quarterly' | 'Semiannual' | 'Annual or reactive';
  waterIntrusion12mo: 'None' | 'Minor' | 'Major';
  persistentDampness: 'Yes' | 'No';
  moldHistory: 'None' | 'Suspected' | 'Confirmed';
  humidityTypical: 'Typically <60%' | 'Often >60%' | 'Unknown';
  odorComplaints: 'None' | 'Occasional' | 'Frequent';
  comfortComplaints: 'None' | 'Occasional' | 'Frequent';
  symptomReports: 'None' | 'Occasional' | 'Frequent';
  absenteeismConcern: 'No' | 'Yes' | 'Unknown';
  complianceExposure: 'None' | 'Moderate' | 'High';
  constructionActivity: 'None' | 'Minor' | 'Active';
  ductCleaningHistory: '<3 years' | '3-5 years' | '5+ years or Unknown';
  recentIAQTesting: '<12 months' | '12-24 months' | '24+ months or Never';
};

type OptionConfig = { label: string; value: number };
type FieldConfig = { label: string; options: Record<string, OptionConfig> };
type CategoryConfig = { weight: number; label: string; fields: Partial<Record<keyof FormState, FieldConfig>> };
type CategoryKey = 'facility' | 'ventilation' | 'moisture' | 'complaints' | 'compliance';

const defaultState: FormState = {
  facilityType: 'Healthcare',
  occupancyLevel: 'Moderate',
  sensitivePopulations: 'Yes',
  operatingHours: 'Standard',
  hvacAge: '10-20',
  filterLevel: 'MERV 11-13',
  outdoorAir: 'Code typical',
  maintenanceCadence: 'Quarterly',
  waterIntrusion12mo: 'None',
  persistentDampness: 'No',
  moldHistory: 'None',
  humidityTypical: 'Typically <60%',
  odorComplaints: 'Occasional',
  comfortComplaints: 'Occasional',
  symptomReports: 'None',
  absenteeismConcern: 'No',
  complianceExposure: 'Moderate',
  constructionActivity: 'Minor',
  ductCleaningHistory: '3-5 years',
  recentIAQTesting: '12-24 months'
};

const riskModel: Record<CategoryKey, CategoryConfig> = {
  facility: {
    weight: 25,
    label: 'Facility sensitivity and occupancy',
    fields: {
      facilityType: {
        label: 'Facility type',
        options: {
          'Healthcare': { label: 'Healthcare', value: 4 },
          'Senior care': { label: 'Senior care', value: 4 },
          'Education': { label: 'Education', value: 3 },
          'Office': { label: 'Office', value: 2 },
          'Industrial': { label: 'Industrial', value: 3 },
          'Retail': { label: 'Retail', value: 2 },
          'Cold storage': { label: 'Cold storage', value: 3 },
          'Other': { label: 'Other', value: 2 }
        }
      },
      occupancyLevel: {
        label: 'Occupancy level',
        options: {
          'Low': { label: 'Low', value: 1 },
          'Moderate': { label: 'Moderate', value: 2 },
          'High': { label: 'High', value: 3 }
        }
      },
      sensitivePopulations: {
        label: 'Sensitive populations',
        options: {
          'Yes': { label: 'Yes', value: 3 },
          'No': { label: 'No', value: 0 }
        }
      },
      operatingHours: {
        label: 'Operating hours',
        options: {
          'Standard': { label: 'Standard', value: 1 },
          'Extended': { label: 'Extended', value: 2 },
          '24/7': { label: '24/7', value: 3 }
        }
      }
    }
  },
  ventilation: {
    weight: 25,
    label: 'Ventilation and filtration',
    fields: {
      hvacAge: {
        label: 'HVAC age',
        options: {
          '<10': { label: '<10 years', value: 1 },
          '10-20': { label: '10-20 years', value: 2 },
          '20+': { label: '20+ years', value: 3 }
        }
      },
      filterLevel: {
        label: 'Filter level',
        options: {
          'MERV 8 or lower': { label: 'MERV 8 or lower', value: 3 },
          'MERV 11-13': { label: 'MERV 11-13', value: 1.5 },
          'HEPA or equivalent': { label: 'HEPA or equivalent', value: 0.5 }
        }
      },
      outdoorAir: {
        label: 'Outdoor air',
        options: {
          'Unknown': { label: 'Unknown', value: 2 },
          'Minimal': { label: 'Minimal', value: 3 },
          'Code typical': { label: 'Code typical', value: 1.5 },
          'Enhanced': { label: 'Enhanced', value: 0.5 }
        }
      },
      maintenanceCadence: {
        label: 'Maintenance cadence',
        options: {
          'Quarterly': { label: 'Quarterly', value: 0.5 },
          'Semiannual': { label: 'Semiannual', value: 1.5 },
          'Annual or reactive': { label: 'Annual or reactive', value: 3 }
        }
      }
    }
  },
  moisture: {
    weight: 25,
    label: 'Moisture and building conditions',
    fields: {
      waterIntrusion12mo: {
        label: 'Water intrusion last 12 months',
        options: {
          'None': { label: 'None', value: 0 },
          'Minor': { label: 'Minor', value: 2.5 },
          'Major': { label: 'Major', value: 4 }
        }
      },
      persistentDampness: {
        label: 'Persistent dampness',
        options: {
          'Yes': { label: 'Yes', value: 3 },
          'No': { label: 'No', value: 0 }
        }
      },
      moldHistory: {
        label: 'Mold history',
        options: {
          'None': { label: 'None', value: 0 },
          'Suspected': { label: 'Suspected', value: 3 },
          'Confirmed': { label: 'Confirmed', value: 4 }
        }
      },
      humidityTypical: {
        label: 'Typical humidity',
        options: {
          'Typically <60%': { label: 'Typically <60%', value: 0.5 },
          'Often >60%': { label: 'Often >60%', value: 3 },
          'Unknown': { label: 'Unknown', value: 1.5 }
        }
      }
    }
  },
  complaints: {
    weight: 15,
    label: 'Complaints and symptoms',
    fields: {
      odorComplaints: {
        label: 'Odor complaints',
        options: {
          'None': { label: 'None', value: 0 },
          'Occasional': { label: 'Occasional', value: 2 },
          'Frequent': { label: 'Frequent', value: 3 }
        }
      },
      comfortComplaints: {
        label: 'Comfort complaints',
        options: {
          'None': { label: 'None', value: 0 },
          'Occasional': { label: 'Occasional', value: 2 },
          'Frequent': { label: 'Frequent', value: 3 }
        }
      },
      symptomReports: {
        label: 'Symptom reports',
        options: {
          'None': { label: 'None', value: 0 },
          'Occasional': { label: 'Occasional', value: 2.25 },
          'Frequent': { label: 'Frequent', value: 3.5 }
        }
      },
      absenteeismConcern: {
        label: 'Absenteeism concern',
        options: {
          'No': { label: 'No', value: 0 },
          'Yes': { label: 'Yes', value: 3 },
          'Unknown': { label: 'Unknown', value: 1.5 }
        }
      }
    }
  },
  compliance: {
    weight: 10,
    label: 'Compliance exposure and disruption',
    fields: {
      complianceExposure: {
        label: 'Compliance exposure',
        options: {
          'None': { label: 'None', value: 0 },
          'Moderate': { label: 'Moderate', value: 2.5 },
          'High': { label: 'High', value: 4 }
        }
      },
      constructionActivity: {
        label: 'Construction or renovation',
        options: {
          'None': { label: 'None', value: 0 },
          'Minor': { label: 'Minor', value: 1.5 },
          'Active': { label: 'Active', value: 3 }
        }
      },
      ductCleaningHistory: {
        label: 'Duct cleaning history',
        options: {
          '<3 years': { label: '<3 years', value: 0 },
          '3-5 years': { label: '3-5 years', value: 2 },
          '5+ years or Unknown': { label: '5+ years or Unknown', value: 3 }
        }
      },
      recentIAQTesting: {
        label: 'Recent IAQ testing',
        options: {
          '<12 months': { label: '<12 months', value: 0 },
          '12-24 months': { label: '12-24 months', value: 1 },
          '24+ months or Never': { label: '24+ months or Never', value: 3 }
        }
      }
    }
  }
};

type Driver = { label: string; contribution: number };

const tierForScore = (score: number) => {
  if (score >= 75) return { label: 'Critical', tone: 'text-red-700', bg: 'bg-red-50', badge: 'bg-red-700 text-white', copy: 'Immediate mitigation and escalation advised.' };
  if (score >= 50) return { label: 'High', tone: 'text-orange-700', bg: 'bg-orange-50', badge: 'bg-orange-600 text-white', copy: 'Prioritize corrective actions in the near term.' };
  if (score >= 25) return { label: 'Moderate', tone: 'text-amber-700', bg: 'bg-amber-50', badge: 'bg-amber-500 text-white', copy: 'Track issues and plan improvements.' };
  return { label: 'Low', tone: 'text-emerald-700', bg: 'bg-emerald-50', badge: 'bg-emerald-600 text-white', copy: 'Maintain controls and monitor.' };
};

const calculateRisk = (state: FormState) => {
  let total = 0;
  const drivers: Driver[] = [];
  const breakdown: { category: string; contribution: number }[] = [];

  (Object.keys(riskModel) as CategoryKey[]).forEach((categoryKey) => {
    const category = riskModel[categoryKey];
    let categoryValue = 0;
    let categoryMax = 0;
    const fieldSnapshots: { fieldKey: keyof FormState; score: number; max: number; optionLabel: string; fieldLabel: string }[] = [];

    Object.entries(category.fields).forEach(([fieldKey, fieldConfig]) => {
      if (!fieldConfig) return;
      const selectedKey = state[fieldKey as keyof FormState] as string;
      const option = fieldConfig.options[selectedKey] || { value: 0, label: String(selectedKey) };
      const fieldMax = Math.max(...Object.values(fieldConfig.options).map((opt) => opt.value));
      categoryMax += fieldMax;
      categoryValue += option.value;
      fieldSnapshots.push({
        fieldKey: fieldKey as keyof FormState,
        score: option.value,
        max: fieldMax,
        optionLabel: option.label,
        fieldLabel: fieldConfig.label
      });
    });

    const normalized = categoryMax > 0 ? categoryValue / categoryMax : 0;
    const categoryContribution = category.weight * normalized;
    total += categoryContribution;
    breakdown.push({ category: category.label, contribution: parseFloat(categoryContribution.toFixed(1)) });

    fieldSnapshots.forEach((field) => {
      if (categoryMax === 0) return;
      const contribution = category.weight * (field.score / categoryMax);
      drivers.push({
        label: `${field.fieldLabel}: ${field.optionLabel}`,
        contribution: parseFloat(contribution.toFixed(2))
      });
    });
  });

  const score = Math.min(100, Math.max(0, parseFloat(total.toFixed(1))));
  const tier = tierForScore(score);
  const topDrivers = drivers.sort((a, b) => b.contribution - a.contribution).slice(0, 5);

  return { score, tier, topDrivers, breakdown };
};

export const IaqRiskScoreTool: React.FC = () => {
  const [form, setForm] = useState<FormState>(defaultState);
  const [calculatedAt, setCalculatedAt] = useState<number>(Date.now());
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');

  const results = useMemo(() => calculateRisk(form), [form]);

  const setField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setForm({ ...defaultState });
    setCopyState('idle');
    setCalculatedAt(Date.now());
  };

  const handleCalculate = () => {
    setCalculatedAt(Date.now());
  };

  const recommendations = useMemo(() => {
    const recs: string[] = [];
    const moistureFlags = form.waterIntrusion12mo !== 'None' || form.persistentDampness === 'Yes' || form.moldHistory !== 'None' || form.humidityTypical === 'Often >60%';
    const filtrationLow = form.filterLevel === 'MERV 8 or lower';
    const frequentComplaints = form.odorComplaints === 'Frequent' || form.comfortComplaints === 'Frequent' || form.symptomReports === 'Frequent';
    const complianceHigh = form.complianceExposure === 'High';
    const testingStale = form.recentIAQTesting === '24+ months or Never';
    const outdoorAirLow = form.outdoorAir === 'Minimal' || form.outdoorAir === 'Unknown';
    const maintenanceGaps = form.maintenanceCadence === 'Annual or reactive';

    if (moistureFlags) {
      recs.push('Schedule moisture investigation and verify remediation if suspected or confirmed mold is present.');
    }
    if (filtrationLow && frequentComplaints) {
      recs.push('Review ventilation balance and upgrade filtration; confirm pressure drops and fan capacity before changes.');
    }
    if (outdoorAirLow) {
      recs.push('Check outdoor air intake, economizer settings, and CO2/pressure balancing to meet design targets.');
    }
    if (maintenanceGaps) {
      recs.push('Move to a preventive maintenance cadence with coil cleaning, filter checks, and drain pan inspections.');
    }
    if (complianceHigh) {
      recs.push('Tighten documentation, chain-of-custody for sampling, and audit-ready reporting for regulated spaces.');
    }
    if (testingStale) {
      recs.push('Schedule independent IAQ testing to establish a current baseline and compare against prior results.');
    }

    if (recs.length < 3) {
      recs.push('Maintain clear complaint logs, respond within defined SLAs, and trend findings against HVAC events.');
    }

    if (results.tier.label === 'High' || results.tier.label === 'Critical') {
      recs.unshift('Prioritize immediate containment of known wet or mold-impacted areas and communicate interim controls.');
    } else if (results.tier.label === 'Moderate') {
      recs.unshift('Plan a targeted IAQ assessment focusing on ventilation, filtration, and moisture control hotspots.');
    } else {
      recs.unshift('Continue routine monitoring and keep a preventive task list visible to operations and safety teams.');
    }

    return recs.slice(0, 6);
  }, [form, results.tier.label]);

  const summaryText = useMemo(() => {
    const driversText = results.topDrivers.map((d) => `${d.label} (+${d.contribution.toFixed(1)})`).join('; ');
    const recText = recommendations.join(' | ');
    return [
      'IAQ Risk Score Summary',
      `Score: ${results.score}/100 (${results.tier.label})`,
      `Facility: ${form.facilityType}, occupancy ${form.occupancyLevel}, sensitive populations ${form.sensitivePopulations}, hours ${form.operatingHours}`,
      `Ventilation/Filtration: HVAC age ${form.hvacAge}, filter ${form.filterLevel}, outdoor air ${form.outdoorAir}, maintenance ${form.maintenanceCadence}`,
      `Moisture: intrusion ${form.waterIntrusion12mo}, dampness ${form.persistentDampness}, mold ${form.moldHistory}, humidity ${form.humidityTypical}`,
      `Complaints: odors ${form.odorComplaints}, comfort ${form.comfortComplaints}, symptoms ${form.symptomReports}, absenteeism ${form.absenteeismConcern}`,
      `Compliance: exposure ${form.complianceExposure}, construction ${form.constructionActivity}, duct cleaning ${form.ductCleaningHistory}, testing ${form.recentIAQTesting}`,
      `Top drivers: ${driversText}`,
      `Next steps: ${recText}`,
      'Disclaimer: Planning and triage only; escalate acute symptoms or confirmed contamination to qualified professionals and follow site protocols.'
    ].join('\n');
  }, [form, recommendations, results.score, results.tier.label, results.topDrivers]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopyState('copied');
      setTimeout(() => setCopyState('idle'), 2000);
    } catch (err) {
      console.error(err);
      setCopyState('error');
    }
  };

  return (
    <div className="bg-[#F7F9F8] text-slate-800 font-sans">
      <section className="relative pt-36 pb-16 bg-[#0B1110] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1110] via-[#0B1110]/90 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 text-[#A7D7C5] bg-white/5 px-3 py-2 rounded-sm border border-[#265A4A]/40">
              <Activity className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em]">Institutional Tool</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              IAQ Risk Score <span className="text-[#A7D7C5]">Tool</span>
            </h1>
            <p className="text-lg md:text-xl text-[#D7DDDA] max-w-3xl leading-relaxed border-l-2 border-[#265A4A] pl-6">
              Rapid triage to prioritize ventilation, filtration, and moisture controls. Calculates a defensible 0–100 score, risk tier, top drivers, and next actions without replacing onsite assessments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 bg-white border border-[#D7DDDA] shadow-xl rounded-sm overflow-hidden">
              <div className="px-6 md:px-10 py-6 border-b border-[#D7DDDA]/70 flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#5E7A86] font-bold">Inputs</p>
                  <h3 className="text-2xl font-bold text-[#265A4A]">Assessment Checklist</h3>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={handleReset} className="!text-[#265A4A] !border-[#265A4A]">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                  <Button size="sm" onClick={handleCalculate}>
                    <ClipboardList className="w-4 h-4 mr-2" />
                    Calculate
                  </Button>
                </div>
              </div>

              <div className="p-6 md:p-10 space-y-8">
                <InputGroup title="1) Facility context">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SelectField label="Facility type" value={form.facilityType} onChange={(v) => setField('facilityType', v)}>
                      {Object.keys(riskModel.facility.fields.facilityType.options).map((option) => (
                        <option key={option} value={option}>{riskModel.facility.fields.facilityType.options[option].label}</option>
                      ))}
                    </SelectField>
                    <SelectField label="Occupancy level" value={form.occupancyLevel} onChange={(v) => setField('occupancyLevel', v)}>
                      {['Low', 'Moderate', 'High'].map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </SelectField>
                    <SelectField label="Sensitive populations" value={form.sensitivePopulations} onChange={(v) => setField('sensitivePopulations', v)}>
                      {['Yes', 'No'].map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </SelectField>
                    <SelectField label="Operating hours" value={form.operatingHours} onChange={(v) => setField('operatingHours', v)}>
                      {['Standard', 'Extended', '24/7'].map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </SelectField>
                  </div>
                </InputGroup>

                <InputGroup title="2) Ventilation and filtration" icon={<Wind className="w-4 h-4 text-[#265A4A]" />}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SelectField label="HVAC age" value={form.hvacAge} onChange={(v) => setField('hvacAge', v)}>
                      {['<10', '10-20', '20+'].map((option) => (
                        <option key={option} value={option}>{option === '<10' ? '<10 years' : option === '10-20' ? '10-20 years' : '20+ years'}</option>
                      ))}
                    </SelectField>
                    <SelectField label="Filter level" value={form.filterLevel} onChange={(v) => setField('filterLevel', v)}>
                      {['MERV 8 or lower', 'MERV 11-13', 'HEPA or equivalent'].map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </SelectField>
                    <SelectField label="Outdoor air" value={form.outdoorAir} onChange={(v) => setField('outdoorAir', v)}>
                      {['Unknown', 'Minimal', 'Code typical', 'Enhanced'].map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </SelectField>
                    <SelectField label="Maintenance cadence" value={form.maintenanceCadence} onChange={(v) => setField('maintenanceCadence', v)}>
                      {['Quarterly', 'Semiannual', 'Annual or reactive'].map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </SelectField>
                  </div>
                </InputGroup>

                <InputGroup title="3) Moisture and building conditions" icon={<Droplets className="w-4 h-4 text-[#265A4A]" />}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SelectField label="Water intrusion (last 12 months)" value={form.waterIntrusion12mo} onChange={(v) => setField('waterIntrusion12mo', v)}>
                      {['None', 'Minor', 'Major'].map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </SelectField>
                    <SelectField label="Persistent dampness" value={form.persistentDampness} onChange={(v) => setField('persistentDampness', v)}>
                      {['Yes', 'No'].map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </SelectField>
                    <SelectField label="Mold history" value={form.moldHistory} onChange={(v) => setField('moldHistory', v)}>
                      {['None', 'Suspected', 'Confirmed'].map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </SelectField>
                    <SelectField label="Typical humidity" value={form.humidityTypical} onChange={(v) => setField('humidityTypical', v)}>
                      {['Typically <60%', 'Often >60%', 'Unknown'].map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </SelectField>
                  </div>
                </InputGroup>

                <InputGroup title="4) Complaints and symptoms">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SelectField label="Odor complaints" value={form.odorComplaints} onChange={(v) => setField('odorComplaints', v)}>
                      {['None', 'Occasional', 'Frequent'].map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </SelectField>
                    <SelectField label="Thermal/comfort complaints" value={form.comfortComplaints} onChange={(v) => setField('comfortComplaints', v)}>
                      {['None', 'Occasional', 'Frequent'].map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </SelectField>
                    <SelectField label="Symptom reports" value={form.symptomReports} onChange={(v) => setField('symptomReports', v)}>
                      {['None', 'Occasional', 'Frequent'].map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </SelectField>
                    <SelectField label="Absenteeism concern" value={form.absenteeismConcern} onChange={(v) => setField('absenteeismConcern', v)}>
                      {['No', 'Yes', 'Unknown'].map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </SelectField>
                  </div>
                </InputGroup>

                <InputGroup title="5) Compliance and risk environment" icon={<ShieldCheck className="w-4 h-4 text-[#265A4A]" />}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SelectField label="Compliance exposure" value={form.complianceExposure} onChange={(v) => setField('complianceExposure', v)}>
                      {['None', 'Moderate', 'High'].map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </SelectField>
                    <SelectField label="Construction activity" value={form.constructionActivity} onChange={(v) => setField('constructionActivity', v)}>
                      {['None', 'Minor', 'Active'].map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </SelectField>
                    <SelectField label="Duct cleaning history" value={form.ductCleaningHistory} onChange={(v) => setField('ductCleaningHistory', v)}>
                      {['<3 years', '3-5 years', '5+ years or Unknown'].map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </SelectField>
                    <SelectField label="Recent IAQ testing" value={form.recentIAQTesting} onChange={(v) => setField('recentIAQTesting', v)}>
                      {['<12 months', '12-24 months', '24+ months or Never'].map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </SelectField>
                  </div>
                </InputGroup>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-[#D7DDDA] shadow-lg rounded-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#5E7A86] font-bold">Results</p>
                    <h4 className="text-xl font-bold text-[#265A4A]">Risk Summary</h4>
                  </div>
                  <span className={`px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wide ${results.tier.badge}`}>
                    {results.tier.label}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm text-[#5E7A86]">IAQ Risk Score</p>
                      <div className="text-4xl font-bold text-[#265A4A]">{results.score.toFixed(1)}</div>
                      <p className={`text-sm ${results.tier.tone}`}>{results.tier.copy}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-[#5E7A86]">Last calculated</p>
                      <p className="text-sm font-semibold text-[#265A4A]">{new Date(calculatedAt).toLocaleTimeString()}</p>
                    </div>
                  </div>

                  <div className="bg-[#F7F9F8] border border-[#D7DDDA] rounded-sm p-4 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#5E7A86]">
                      <Info className="w-4 h-4 text-[#265A4A]" />
                      <span>Weighted model (Facility 25, Ventilation 25, Moisture 25, Complaints 15, Compliance 10). Clamped 0–100.</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {results.topDrivers.slice(0, 3).map((driver, idx) => (
                        <div key={driver.label} className="p-3 bg-white border border-[#D7DDDA]/80 rounded-sm">
                          <p className="text-[11px] uppercase tracking-wide text-[#5E7A86]">Top Driver {idx + 1}</p>
                          <p className="text-sm font-semibold text-[#265A4A]">{driver.label}</p>
                          <p className="text-xs text-[#5E7A86]">+{driver.contribution.toFixed(1)} pts</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`${results.tier.bg} border border-[#D7DDDA] rounded-sm p-4 space-y-2`}>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#265A4A]" />
                      <p className="text-sm font-semibold text-[#265A4A]">Recommended next steps</p>
                    </div>
                    <ul className="list-disc list-inside text-sm text-[#1f3730] space-y-1">
                      {recommendations.map((rec, idx) => (
                        <li key={idx}>{rec}</li>
                      ))}
                    </ul>
                    <p className="text-[11px] text-[#5E7A86] italic pt-1">
                      Planning and triage only; escalate acute symptoms or confirmed contamination to qualified professionals and follow site protocols.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button fullWidth variant="outline" onClick={handleCopy} className="!text-[#265A4A] !border-[#265A4A]">
                      {copyState === 'copied' ? <ClipboardCheck className="w-4 h-4 mr-2" /> : <Clipboard className="w-4 h-4 mr-2" />}
                      {copyState === 'copied' ? 'Copied' : copyState === 'error' ? 'Copy failed' : 'Copy summary'}
                    </Button>
                    <Button fullWidth onClick={handleCalculate}>
                      <Activity className="w-4 h-4 mr-2" />
                      Re-run model
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-[#0B1110] text-[#D7DDDA] border border-[#1e483b] rounded-sm p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#A7D7C5]" />
                  <p className="text-sm font-semibold text-white">How to use</p>
                </div>
                <p className="text-sm leading-relaxed">
                  Use this tool for prioritization and to brief stakeholders before commissioning detailed IAQ diagnostics. The score is weighted to emphasize moisture, ventilation, and sensitive populations. Drivers show which inputs pushed the score highest.
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#5E7A86]">Tool: IAQ_RISK_SCORE_V1</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

type SelectFieldProps<T extends string> = {
  label: string;
  value: T;
  onChange: (value: T) => void;
  children: React.ReactNode;
};

const SelectField = <T extends string>({ label, value, onChange, children }: SelectFieldProps<T>) => {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-[#265A4A]">
      <span className="text-[11px] font-bold text-[#5E7A86] uppercase tracking-[0.16em]">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="w-full bg-[#F7F9F8] border border-[#D7DDDA] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] rounded-sm text-[#1f3730] font-medium appearance-none cursor-pointer"
      >
        {children}
      </select>
    </label>
  );
};

const InputGroup: React.FC<{ title: string; icon?: React.ReactNode }> = ({ title, icon, children }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-sm bg-[#F7F9F8] border border-[#D7DDDA] flex items-center justify-center text-[#265A4A]">
          {icon ?? <ClipboardList className="w-4 h-4" />}
        </div>
        <h4 className="text-lg font-bold text-[#265A4A]">{title}</h4>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
};
