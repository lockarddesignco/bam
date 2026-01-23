import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck, FileText, Building2, Lock } from 'lucide-react';
import { Button } from './Button';

interface ExitIntentModalProps {
  open: boolean;
  onClose: () => void;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ open, onClose }) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Request submitted. A specialist will reach out.');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 md:px-0">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-3xl bg-white shadow-2xl border border-[#e6e9e7] rounded-sm overflow-hidden animate-in fade-in duration-200"
      >
        <div className="absolute top-3 right-3">
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-sm text-[#5E7A86] hover:text-[#265A4A] hover:bg-[#F7F9F8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8 md:p-10 space-y-6">
          <div className="space-y-2 text-center">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#5E7A86]">Facility Assessment Intake</p>
            <h2 className="text-3xl font-bold text-[#2e5343] leading-tight uppercase">Facility Assessment Intake</h2>
            <p className="text-sm text-[#5E7A86] max-w-2xl mx-auto">
              Direct technical queue for institutional HVAC restoration and air hygiene evaluation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LabeledInput label="Authorizing official name" placeholder="Full legal name" name="official_name" required />
              <LabeledInput label="Institutional title / role" placeholder="e.g. Director of Facilities" name="title" required />
              <LabeledInput label="Facility / organization name" placeholder="Legal entity name" name="org_name" required />
              <LabeledSelect
                label="Facility classification"
                name="classification"
                required
                options={[
                  'Healthcare',
                  'Senior care',
                  'Education',
                  'Industrial',
                  'Government',
                  'Commercial',
                  'Retail',
                  'Cold storage',
                  'Other'
                ]}
              />
              <LabeledInput label="Institutional email address" type="email" placeholder="name@facility-domain.gov" name="email" required />
              <LabeledInput label="Primary service address" placeholder="Street, City, State" name="address" required />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5E7A86]">Summary of mechanical deficiencies or compliance requirements</label>
              <textarea
                name="summary"
                required
                rows={3}
                placeholder="Specify equipment type (AHU, Chiller, Tower) and nature of hygiene or performance deficiency..."
                className="w-full bg-[#F7F9F8] border border-[#D7DDDA] rounded-sm px-4 py-3 text-sm text-[#1f3730] focus:outline-none focus:border-[#265A4A] resize-none"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#5E7A86]">
                <ShieldCheck className="w-4 h-4 text-[#265A4A]" />
                <span>Restricted data handling. Technical queue only.</span>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto !bg-[#2f5947] !text-white !border-transparent shadow-lg hover:!bg-[#27463a]"
              >
                Request Facility Assessment
              </Button>
            </div>
          </form>
        </div>

        <div className="bg-white border-t border-[#e6e9e7] px-8 py-4 text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5E7A86]">
            <Lock className="w-4 h-4 text-[#5E7A86]" />
            <span>Restricted Data Transmission Protocol Active</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-[11px] text-[#9aa7a1]">
            <Building2 className="w-4 h-4" />
            <span>
              All submissions are handled under strict institutional confidentiality protocols. Professional evaluation is provided based on operational scope and facility classification.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

type LabeledInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon?: React.ReactNode;
};

const LabeledInput: React.FC<LabeledInputProps> = ({ label, icon, ...props }) => (
  <label className="flex flex-col gap-2 text-sm font-medium text-[#265A4A]">
    <span className="text-[11px] font-bold text-[#5E7A86] uppercase tracking-[0.16em]">{label}</span>
    <div className="relative">
      <input
        {...props}
        className="w-full bg-[#F7F9F8] border border-[#D7DDDA] rounded-sm px-4 py-3 text-sm text-[#1f3730] focus:outline-none focus:border-[#265A4A]"
      />
    </div>
  </label>
);

type LabeledSelectProps = {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
};

const LabeledSelect: React.FC<LabeledSelectProps> = ({ label, name, options, required }) => (
  <label className="flex flex-col gap-2 text-sm font-medium text-[#265A4A]">
    <span className="text-[11px] font-bold text-[#5E7A86] uppercase tracking-[0.16em]">{label}</span>
    <select
      name={name}
      required={required}
      className="w-full bg-[#F7F9F8] border border-[#D7DDDA] rounded-sm px-4 py-3 text-sm text-[#1f3730] focus:outline-none focus:border-[#265A4A] appearance-none"
      defaultValue=""
    >
      <option value="" disabled>Select sector…</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </label>
);
