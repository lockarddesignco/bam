import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, MapPin, ShieldCheck, Wind, HardHat, ChevronDown, ChevronRight, 
  FileText, Download, Activity, Zap, Thermometer, Stethoscope, GraduationCap, 
  Landmark, Factory, Building, HeartHandshake, ShoppingBag, Box, Globe, Calculator,
  Droplets, Snowflake, Fan, Layers, Gauge, Waves, Microscope, Sun, Flame, 
  ClipboardList, Target, Award, Users, Briefcase, Map, Building2, Anchor
} from 'lucide-react';
import BamLogo from '../assets/bam-logo-v3.svg';
import { Button } from './Button';
import { Page } from '../App';

// --- Custom Icons ---

const IconPA = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 6H20V20H2V6H6Z" />
    <path d="M2 6V4H6" />
  </svg>
);

const IconNJ = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 2C16 2 13 4 13 7C13 10 11 10 11 13C11 16 14 15 14 17C14 19 15 19 16 21L19 18C19 18 18 10 18 8C18 6 16 2 16 2Z" />
  </svg>
);

const IconMD = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
     <path d="M2 8L6 6L10 8L16 6L22 8V14L18 16L12 14L8 16L2 14V8Z" />
  </svg>
);

const IconDE = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 4H18L16 20H8L6 4Z" />
  </svg>
);

const IconNY = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 18L8 4L20 8L16 20L4 18Z" />
  </svg>
);

const IconLibertyBell = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 5C6 5 6 3 12 3C18 3 18 5 18 5V15H6V5Z" />
    <path d="M4 15H20" />
    <path d="M5 15L6 19H18L19 15" />
    <path d="M12 15V19" />
    <path d="M10 8L12 12" />
  </svg>
);

// --- Navigation Data Structure ---

type NavItem = {
  label: string;
  href: string;
  type: 'mega' | 'dropdown' | 'link';
  page?: Page;
  columns?: {
    title?: string;
    items: { label: string; href: string; icon?: React.ElementType; page?: Page }[];
  }[];
};

const navData: NavItem[] = [
  {
    label: 'Services',
    href: '#services',
    type: 'mega',
    page: 'services',
    columns: [
      {
        title: "Core Services",
        items: [
          { label: "Cooling Tower Restoration", href: "#", page: 'cooling-tower', icon: Droplets },
          { label: "Chiller Restoration", href: "#", page: 'chiller', icon: Snowflake },
          { label: "AHU & Coil Restoration", href: "#", page: 'ahu', icon: Fan },
          { label: "NADCA-Aligned Duct Cleaning", href: "#", page: 'ducts', icon: Wind },
          { label: "Commercial Indoor Air Quality", href: "#", page: 'iaq', icon: Activity },
          { label: "Mold Remediation (Commercial)", href: "#", page: 'mold', icon: ShieldCheck },
          { label: "Preventive Maintenance Programs", href: "#", page: 'pm', icon: ClipboardList },
        ]
      },
      {
        title: "Specialty Services",
        items: [
          { label: "Epoxy Coating & Lining", href: "#", page: 'epoxy', icon: Layers },
          { label: "Tube Brushing & Descaling", href: "#", page: 'tubes', icon: Gauge },
          { label: "Cooling Tower Basin Restoration", href: "#", page: 'basin', icon: Waves },
          { label: "HEPA & Filter Management", href: "#", page: 'hepa', icon: Microscope },
          { label: "UV-C & Air Purification", href: "#", page: 'uvc', icon: Sun },
          { label: "Fire Damper Compliance", href: "#", page: 'dampers', icon: Flame },
        ]
      }
    ]
  },
  {
    label: 'Industries',
    href: '#industries',
    type: 'mega',
    page: 'industries',
    columns: [
      {
        items: [
          { label: "Healthcare", href: "#", icon: Stethoscope, page: 'healthcare' },
          { label: "Education (K-12)", href: "#", icon: GraduationCap, page: 'k12' },
          { label: "Higher Education", href: "#", icon: Building2, page: 'higher-ed' },
          { label: "Government & Municipal", href: "#", icon: Landmark, page: 'government' },
          { label: "Industrial & Manufacturing", href: "#", icon: Factory, page: 'industrial' },
        ]
      },
      {
        items: [
          { label: "Commercial Properties", href: "#", icon: Building, page: 'commercial' },
          { label: "Retail & Chain Stores", href: "#", icon: ShoppingBag, page: 'retail' },
          { label: "Senior Care / Assisted Living", href: "#", icon: HeartHandshake, page: 'senior-care' },
          { label: "Cold Storage", href: "#", icon: Box, page: 'cold-storage' },
        ]
      }
    ]
  },
  {
    label: 'Locations',
    href: '#locations',
    type: 'mega',
    page: 'locations',
    columns: [
      {
        title: "State Coverage",
        items: [
          { label: "Pennsylvania", href: "#", page: 'pennsylvania', icon: IconPA },
          { label: "New Jersey", href: "#", page: 'new-jersey', icon: IconNJ },
          { label: "Maryland", href: "#", page: 'maryland', icon: IconMD },
          { label: "Delaware", href: "#", page: 'delaware', icon: IconDE },
          { label: "Southern New York", href: "#", page: 'new-york', icon: IconNY },
        ]
      },
      {
        title: "Regional Coverage",
        items: [
          { label: "Philadelphia", href: "#", icon: IconLibertyBell, page: 'philadelphia' },
          { label: "Baltimore", href: "#", icon: Anchor, page: 'baltimore' },
          { label: "Wilmington", href: "#", icon: Building2, page: 'wilmington' },
          { label: "South Jersey", href: "#", icon: Waves, page: 'south-jersey' },
          { label: "Harrisburg / York", href: "#", icon: Landmark, page: 'harrisburg-york' },
        ]
      }
    ]
  },
  {
    label: 'About',
    href: '#about',
    type: 'dropdown',
    page: 'about-hub',
    columns: [
      {
        items: [
          { label: "About BAM (Hub)", href: "#", page: 'about-hub', icon: Globe },
          { label: "Restoration ROI Estimator", href: "#", icon: Calculator, page: 'estimator' },
          { label: "Tools & Resources", href: "#", icon: ClipboardList, page: 'tools' },
          { label: "Our Company", href: "#", page: 'about-company', icon: Target },
          { label: "Our Method", href: "#", page: 'about-method', icon: ClipboardList },
          { label: "Compliance & Standards", href: "#", page: 'about-compliance', icon: Award },
          { label: "Safety & Risk", href: "#", page: 'about-safety', icon: HardHat },
          { label: "Leadership", href: "#", page: 'about-leadership', icon: Users },
          { label: "Careers", href: "#", page: 'careers', icon: Briefcase },
        ]
      }
    ]
  },
  {
    label: 'Contact',
    href: '#contact',
    type: 'link',
    page: 'contact'
  }
];

interface HeaderProps {
  onNavigate: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileItem = (label: string) => {
    if (mobileExpandedItem === label) {
      setMobileExpandedItem(null);
    } else {
      setMobileExpandedItem(label);
    }
  };

  const handleLinkClick = (e: React.MouseEvent, page?: Page) => {
    if (page) {
      e.preventDefault();
      onNavigate(page);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div className="w-full bg-[#0B1110] border-b border-[#265A4A]/30 min-h-[44px] flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 relative z-50 py-2 md:py-0 transition-all duration-300 font-sans">
        <div className="w-full md:w-auto flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2 md:mb-0">
           <MapPin className="w-3.5 h-3.5 text-[#A7D7C5]" />
           <span className="text-[11px] md:text-xs font-bold tracking-widest text-[#D7DDDA] uppercase">
             Serving PA • NJ • MD • DE • NY
           </span>
           <div className="hidden sm:block w-px h-3 bg-[#265A4A]/50"></div>
           <a
             href="#"
             onClick={(e) => handleLinkClick(e, 'estimator')}
             className="flex items-center gap-1 text-[11px] md:text-xs font-bold tracking-widest text-[#D7DDDA] uppercase hover:text-white transition-colors"
           >
             <Calculator className="w-3.5 h-3.5 text-[#A7D7C5]" />
             Refurbishment ROI Estimator
           </a>
        </div>
        <div className="w-full md:w-auto flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-6">
           <div className="flex items-center gap-1.5 opacity-90 group cursor-default">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A7D7C5] group-hover:text-white transition-colors" />
              <span className="text-[10px] md:text-xs font-semibold tracking-wider text-[#5E7A86] group-hover:text-[#A7D7C5] transition-colors uppercase">NADCA Certified</span>
           </div>
           <div className="hidden md:block w-px h-3 bg-[#265A4A]/50"></div>
           <div className="flex items-center gap-1.5 opacity-90 group cursor-default">
              <Wind className="w-3.5 h-3.5 text-[#A7D7C5] group-hover:text-white transition-colors" />
              <span className="text-[10px] md:text-xs font-semibold tracking-wider text-[#5E7A86] group-hover:text-[#A7D7C5] transition-colors uppercase">ASHRAE Member</span>
           </div>
           <div className="hidden md:block w-px h-3 bg-[#265A4A]/50"></div>
           <div className="flex items-center gap-1.5 opacity-90 group cursor-default">
              <HardHat className="w-3.5 h-3.5 text-[#A7D7C5] group-hover:text-white transition-colors" />
              <span className="text-[10px] md:text-xs font-semibold tracking-wider text-[#5E7A86] group-hover:text-[#A7D7C5] transition-colors uppercase">OSHA-30</span>
           </div>
           <div className="hidden md:block w-px h-3 bg-[#265A4A]/50"></div>
           <div className="relative group hidden md:flex items-center">
            <button className="flex items-center gap-1 text-[10px] md:text-xs font-semibold tracking-wider text-[#A7D7C5] uppercase hover:text-white transition-colors animate-pulse drop-shadow-[0_0_8px_rgba(167,215,197,0.6)]">
               Resources
               <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
             </button>
             <div className="absolute right-0 top-full mt-2 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
               <div className="bg-white border border-[#D7DDDA] shadow-lg rounded-sm py-2">
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, 'iaq-risk-tool')}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#5E7A86] hover:text-[#265A4A] transition-colors"
                >
                   <Activity className="w-3.5 h-3.5 text-[#A7D7C5]" />
                   IAQ Risk Score Tool
                 </a>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, 'estimator')}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#5E7A86] hover:text-[#265A4A] transition-colors"
                >
                   <Calculator className="w-3.5 h-3.5 text-[#A7D7C5]" />
                   Restoration ROI Estimator
                 </a>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, 'about-documentation')}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#5E7A86] hover:text-[#265A4A] transition-colors"
                >
                   <FileText className="w-3.5 h-3.5 text-[#A7D7C5]" />
                   Technical Documentation
                 </a>
               </div>
             </div>
           </div>
        </div>
      </div>

      <header className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-[#1e483b] font-sans ${isScrolled || isMobileMenuOpen ? 'bg-[#0E3B33]/95 backdrop-blur-md shadow-lg' : 'bg-[#265A4A]'}`}>
        <div className="w-full px-6 md:px-10 lg:px-12">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
              <div className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                 <img src={BamLogo} alt="BAM logo" className="w-full h-full object-contain" />
              </div>
              <div className="h-12 w-[1.5px] bg-[#A7D7C5]/50 mx-4 md:mx-6 rounded-full hidden sm:block"></div>
              <div className="flex flex-col justify-center pl-2 sm:pl-0">
                <span className="text-sm md:text-lg font-bold uppercase tracking-wide text-[#F7F9F8] leading-[1.05] drop-shadow-sm">
                  Building & Air
                </span>
                <span className="mt-0.5 text-[10px] md:text-xs font-semibold uppercase tracking-[0.45em] text-[#D7DDDA]/80">
                  Maintenance
                </span>
              </div>
            </div>

            <nav className="hidden xl:flex items-center space-x-1">
              {navData.map((item) => (
                <div key={item.label} className="relative group">
                  <a href={item.href} onClick={(e) => handleLinkClick(e, item.page)} className="flex items-center px-4 py-2 text-sm font-bold text-[#D7DDDA] hover:text-white transition-colors uppercase tracking-wide">
                    {item.label}
                    {item.type !== 'link' && <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />}
                  </a>
                  {item.type !== 'link' && item.columns && (
                    <div className="absolute top-full left-0 mt-0 w-max min-w-[200px] max-w-screen-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="h-4 w-full bg-transparent"></div>
                      <div className="bg-white border-t-4 border-[#265A4A] shadow-2xl rounded-b-sm overflow-hidden">
                         <div className={`grid ${item.columns.length > 1 ? 'grid-cols-2 gap-12 p-8' : 'grid-cols-1 p-6'} min-w-[${item.type === 'mega' ? '600px' : '260px'}]`}>
                            {item.columns.map((col, idx) => (
                              <div key={idx} className="flex flex-col space-y-4">
                                {col.title && <h4 className="text-[#265A4A] font-bold text-xs uppercase tracking-[0.15em] border-b border-[#D7DDDA] pb-2 mb-2">{col.title}</h4>}
                                <ul className="space-y-3">
                                  {col.items.map((subItem, sIdx) => (
                                    <li key={sIdx}>
                                      <a href={subItem.href} onClick={(e) => handleLinkClick(e, subItem.page)} className="group/item flex items-center text-[#5E7A86] hover:text-[#265A4A] transition-colors text-sm font-medium">
                                        {subItem.icon && <subItem.icon className="w-4 h-4 mr-2 text-[#A7D7C5] group-hover/item:text-[#265A4A] transition-colors" />}
                                        <span className="group-hover/item:translate-x-1 transition-transform duration-200">{subItem.label}</span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                         </div>
                         <div className="bg-[#F7F9F8] py-2 px-6 border-t border-[#D7DDDA] flex justify-between items-center">
                            <span className="text-[10px] uppercase font-bold text-[#A7D7C5] tracking-widest">Institutional Grade Service</span>
                            {item.label === 'Locations' && (
                              <button onClick={() => onNavigate('locations')} className="text-[10px] uppercase font-bold text-[#265A4A] hover:underline tracking-widest">View All Service Coverage</button>
                            )}
                         </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden xl:flex items-center gap-6 pl-6 ml-2 border-l border-[#A7D7C5]/20">
              <a href="tel:570-900-5827" className="flex items-center gap-2 text-[#A7D7C5] hover:text-white transition-colors font-bold text-sm">
                  <Phone className="w-4 h-4" />
                  <span>(570) 900-5827</span>
              </a>
              <Button variant="primary" size="sm" onClick={() => onNavigate('contact')} className="border-none font-bold shadow-md tracking-wide">Request a Site Visit</Button>
            </div>

            <div className="xl:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#A7D7C5] p-2 focus:outline-none hover:text-white transition-colors" aria-label="Toggle menu">
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-[96px] left-0 w-full h-[calc(100vh-96px)] bg-[#265A4A] border-t border-[#1e483b] overflow-y-auto animate-in slide-in-from-right-5 duration-300">
            <div className="flex flex-col p-6 pb-24 space-y-2">
              {navData.map((item) => (
                <div key={item.label} className="border-b border-[#1e483b]/50">
                  {item.type === 'link' ? (
                     <a href={item.href} className="flex items-center justify-between py-4 text-lg font-bold text-white uppercase tracking-wider" onClick={(e) => handleLinkClick(e, item.page)}>{item.label}</a>
                  ) : (
                    <>
                      <button onClick={() => toggleMobileItem(item.label)} className="w-full flex items-center justify-between py-4 text-lg font-bold text-white uppercase tracking-wider focus:outline-none">
                        {item.label}
                        <ChevronDown className={`w-5 h-5 text-[#A7D7C5] transition-transform duration-300 ${mobileExpandedItem === item.label ? 'rotate-180' : 'rotate-0'}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${mobileExpandedItem === item.label ? 'max-h-[1000px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                        <div className="bg-[#1e483b]/50 rounded-sm p-4 space-y-6">
                           {item.columns?.map((col, cIdx) => (
                             <div key={cIdx} className="space-y-3">
                               {col.title && <h5 className="text-[#A7D7C5] text-xs font-bold uppercase tracking-[0.15em] opacity-80 mb-2">{col.title}</h5>}
                               <ul className="space-y-3 pl-2 border-l border-[#265A4A]">
                                 {col.items.map((subItem, sIdx) => (
                                   <li key={sIdx}>
                                     <a href={subItem.href} onClick={(e) => handleLinkClick(e, subItem.page)} className="flex items-center text-[#D7DDDA] text-sm font-medium hover:text-white">
                                       {subItem.icon && <subItem.icon className="w-4 h-4 mr-3 text-[#A7D7C5] opacity-70" />}
                                       {subItem.label}
                                     </a>
                                   </li>
                                 ))}
                               </ul>
                             </div>
                           ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
              <div className="pt-8 space-y-4">
                <a href="tel:570-900-5827" className="flex items-center justify-center gap-3 text-white font-bold text-lg bg-[#1e483b] py-4 rounded-sm border border-[#A7D7C5]/20">
                    <Phone className="w-5 h-5 text-[#A7D7C5]" />
                    <span>(570) 900-5827</span>
                </a>
                <Button fullWidth variant="primary" onClick={() => { onNavigate('contact'); setIsMobileMenuOpen(false); }} className="font-bold py-4 text-lg shadow-lg">Request a Site Visit</Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};