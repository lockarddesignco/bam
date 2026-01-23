import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Facebook } from 'lucide-react';
import NadcaLogoWhite from '../assets/nadca-logo-white.png';
import { Button } from './Button';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const nadcaVerificationDate = '21 Jan 2026';

  return (
    <footer className="relative bg-[#265A4A] text-[#F7F9F8] border-t border-[#A7D7C5]/20 overflow-hidden font-sans">
      {/* Background Pattern: Subtle institutional grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#A7D7C5 1px, transparent 1px), linear-gradient(90deg, #A7D7C5 1px, transparent 1px)`, 
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 lg:py-24">
        {/* Responsive Layout: 1 col mobile, 6 cols tablet (custom structure), 5 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-10 lg:gap-6">
          
          {/* Column 1: Company & Authority */}
          {/* Tablet: Top Left (span 3/6) | Desktop: Col 1 */}
          <div className="flex flex-col items-start space-y-6 md:col-span-3 md:order-1 lg:col-span-1 lg:order-none">
            {/* Logo Lockup */}
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-10 h-10 transition-transform duration-500 group-hover:rotate-180">
                 <svg viewBox="0 0 100 100" className="w-full h-full" aria-labelledby="footerLogo">
                   <title id="footerLogo">BAM Logo</title>
                   <circle cx="50" cy="50" r="48" fill="#F7F9F8" />
                   <circle cx="50" cy="50" r="43" fill="none" stroke="#265A4A" strokeWidth="5" strokeDasharray="4 3" />
                   <circle cx="50" cy="50" r="38" fill="#F7F9F8" />
                   <text x="50" y="63" fontSize="34" fontWeight="800" fill="#265A4A" textAnchor="middle" fontFamily="sans-serif" style={{ letterSpacing: '-1px' }}>BAM</text>
                 </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-widest text-white leading-none">BAM</span>
                <span className="text-[10px] text-[#A7D7C5] uppercase tracking-wider font-bold mt-1">Building & Air Maintenance</span>
              </div>
            </div>

            <p className="text-[#D7DDDA] text-xs leading-relaxed max-w-xs opacity-90">
              Serving all of Pennsylvania with emphasis on commercial, healthcare, and government facilities in Central and Eastern PA.
            </p>

            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1e483b] rounded-full border border-[#A7D7C5]/20 w-fit">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A7D7C5]" />
                <span className="text-[10px] font-semibold text-[#D7DDDA] tracking-wide">NADCA & ASHRAE Member</span>
             </div>

             {/* NADCA Verification Block (Inline) */}
             <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#A7D7C5]/10 w-full">
                <img
                  src={NadcaLogoWhite}
                  alt="NADCA membership logo"
                  className="h-8 w-auto object-contain opacity-90 self-start"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-[#D7DDDA] text-[10px] leading-tight max-w-[200px]">
                    The HVAC Inspection, Cleaning and Restoration Association
                  </span>
                  <span className="text-[#A7D7C5] text-[10px] font-semibold uppercase tracking-wider">
                    Verified Member — {nadcaVerificationDate}
                  </span>
                  <a
                    href="https://nadca.com/find-a-professional" 
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-medium text-[#D7DDDA] hover:text-white transition-colors mt-1 inline-flex items-center gap-1 w-fit"
                  >
                    Verify NADCA Membership →
                  </a>
                </div>
             </div>
          </div>

          {/* Column 2: Capabilities */}
          {/* Tablet: Row 2, Left (span 2/6) | Desktop: Col 2 */}
          <div className="md:col-span-2 md:order-3 lg:col-span-1 lg:order-none">
            <h4 className="text-[#A7D7C5] font-bold text-xs uppercase tracking-[0.15em] mb-6">Capabilities</h4>
            <ul className="space-y-3">
              {[
                { label: 'Mechanical Restoration', page: 'ahu' },
                { label: 'Air Hygiene & IAQ', page: 'iaq' },
                { label: 'Compliance & Verification', page: 'about-compliance' },
                { label: 'Full Services →', page: 'services' },
              ].map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={() => item.page && onNavigate(item.page as Page)}
                    className="text-[#D7DDDA] text-sm hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center group text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          {/* Tablet: Row 2, Middle (span 2/6) | Desktop: Col 3 */}
          <div className="md:col-span-2 md:order-4 lg:col-span-1 lg:order-none">
            <h4 className="text-[#A7D7C5] font-bold text-xs uppercase tracking-[0.15em] mb-6">Industries</h4>
            <ul className="space-y-3">
              {[
                { label: 'Healthcare', page: 'healthcare' },
                { label: 'Education', page: 'k12' },
                { label: 'Government & Secure', page: 'government' },
                { label: 'Industrial & Commercial →', page: 'industrial' },
              ].map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={() => item.page && onNavigate(item.page as Page)}
                    className="text-[#D7DDDA] text-sm hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center group text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Locations */}
          {/* Tablet: Row 2, Right (span 2/6) | Desktop: Col 4 */}
          <div className="md:col-span-2 md:order-5 lg:col-span-1 lg:order-none">
            <h4 className="text-[#A7D7C5] font-bold text-xs uppercase tracking-[0.15em] mb-6">Locations</h4>
            <ul className="space-y-3">
              {[
                { label: 'Pennsylvania', page: 'pennsylvania' },
                { label: 'New Jersey', page: 'new-jersey' },
                { label: 'Maryland', page: 'maryland' },
                { label: 'Delaware', page: 'delaware' },
                { label: 'Southern New York →', page: 'new-york' },
              ].map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={() => item.page && onNavigate(item.page as Page)}
                    className="text-[#D7DDDA] text-sm hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center group text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact & Operations */}
          {/* Tablet: Top Right (span 3/6) | Desktop: Col 5 */}
          <div className="flex flex-col items-start md:col-span-3 md:order-2 lg:col-span-1 lg:order-none">
             <h4 className="text-[#A7D7C5] font-bold text-xs uppercase tracking-[0.15em] mb-6">Contact & Operations</h4>
             <ul className="space-y-5 mb-8 w-full">
                <li className="flex items-start gap-4 text-[#D7DDDA]">
                  <div className="p-1.5 bg-[#1e483b] rounded-sm text-[#A7D7C5] shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm leading-relaxed">
                    <strong>Headquarters</strong><br/>
                    196 Dadburnhams Road<br/>
                    Pine Grove, PA 17963
                  </span>
                </li>
                <li className="flex items-center gap-4 text-[#D7DDDA]">
                  <div className="p-1.5 bg-[#1e483b] rounded-sm text-[#A7D7C5] shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <a href="tel:570-900-5827" className="text-sm hover:text-white transition-colors font-medium tracking-wide">(570) 900-5827</a>
                </li>
                <li className="flex items-center gap-4 text-[#D7DDDA]">
                  <div className="p-1.5 bg-[#1e483b] rounded-sm text-[#A7D7C5] shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <a href="mailto:info@buildingandair.com" className="text-sm hover:text-white transition-colors">info@buildingandair.com</a>
                </li>
             </ul>

             <Button 
                variant="primary" 
                size="md" 
                className="font-bold w-full shadow-[0_10px_30px_-10px_rgba(167,215,197,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(167,215,197,0.6)] border-none transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => onNavigate('contact')}
             >
                <span className="text-sm tracking-wide">Request a Site Visit</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
             </Button>

             <button 
                onClick={() => onNavigate('tools')}
                className="text-[#A7D7C5] text-xs font-medium mt-8 hover:text-white transition-colors inline-flex items-center gap-1"
             >
                Calculators & Technical Documentation →
             </button>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-[#A7D7C5]/10 bg-[#1e483b]/30 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-[#D7DDDA]/60">
          <p>© {new Date().getFullYear()} Building & Air Maintenance, LLC. All rights reserved.</p>
          <div className="flex items-center gap-6 md:gap-8">
            <button onClick={() => onNavigate('contact')} className="hover:text-[#A7D7C5] transition-colors">Contact Support</button>
            <a href="#" className="hover:text-[#A7D7C5] transition-colors">Privacy Policy</a>
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span>Systems Operational</span>
            </div>
            <a href="#" className="text-[#A7D7C5]/50 hover:text-[#A7D7C5] transition-colors">
              <Facebook className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
