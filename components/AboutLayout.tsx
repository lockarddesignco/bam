import React from 'react';
import { 
  Building2, Target, ClipboardList, Award, 
  HardHat, MapPin, Users, Briefcase, ChevronRight, FileText
} from 'lucide-react';
import { Page } from '../App';

interface AboutLayoutProps {
  children: React.ReactNode;
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export const AboutLayout: React.FC<AboutLayoutProps> = ({ children, activePage, onNavigate }) => {
  const navItems = [
    { id: 'about-hub', label: 'About BAM', icon: Building2 },
    { id: 'about-company', label: 'Our Company', icon: Target },
    { id: 'about-method', label: 'Our Method', icon: ClipboardList },
    { id: 'about-compliance', label: 'Compliance', icon: Award },
    { id: 'about-safety', label: 'Safety', icon: HardHat },
    { id: 'about-coverage', label: 'Service Area', icon: MapPin },
    { id: 'about-leadership', label: 'Leadership', icon: Users },
    { id: 'about-documentation', label: 'Documentation', icon: FileText },
    { id: 'careers', label: 'Careers', icon: Briefcase },
  ];

  return (
    <div className="bg-[#F7F9F8] min-h-screen pt-32 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Title (Shared context) */}
        <div className="mb-12 border-l-4 border-[#265A4A] pl-8">
          <h1 className="text-sm font-bold text-[#A7D7C5] uppercase tracking-[0.3em] mb-2">Company Documentation</h1>
          <p className="text-[#265A4A] text-3xl md:text-4xl font-bold tracking-tighter">
            Institutional Stewardship & Governance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Persistent Sidebar Navigation */}
          <aside className="lg:col-span-3">
            <nav className="flex flex-col space-y-1 sticky top-32 bg-white border border-[#D7DDDA] p-2 shadow-sm rounded-sm">
              <div className="px-4 py-3 border-b border-[#D7DDDA] mb-2">
                <span className="text-[10px] font-bold text-[#5E7A86] uppercase tracking-widest">Navigation</span>
              </div>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as Page)}
                  className={`flex items-center justify-between px-4 py-3 text-[11px] font-bold uppercase tracking-widest transition-all text-left rounded-sm ${
                    activePage === item.id 
                      ? 'bg-[#265A4A] text-white' 
                      : 'text-[#5E7A86] hover:bg-[#F2F6F5] hover:text-[#265A4A]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={`w-4 h-4 ${activePage === item.id ? 'text-[#A7D7C5]' : 'opacity-60'}`} />
                    {item.label}
                  </div>
                  {activePage === item.id && <ChevronRight className="w-3 h-3 text-[#A7D7C5]" />}
                </button>
              ))}
            </nav>
            
            <div className="mt-6 p-6 bg-[#265A4A] text-white rounded-sm text-center">
               <span className="text-[10px] font-bold uppercase tracking-widest block mb-2 opacity-70">Need a Site Visit?</span>
               <button onClick={() => onNavigate('contact')} className="text-xs font-bold underline underline-offset-4 decoration-[#A7D7C5] hover:text-[#A7D7C5] transition-colors">
                 Request Engineering Audit
               </button>
            </div>
          </aside>

          {/* Page Content Container */}
          <main className="lg:col-span-9">
            <div className="bg-white border border-[#D7DDDA] shadow-sm rounded-sm min-h-[700px]">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};