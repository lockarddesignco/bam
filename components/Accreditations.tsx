import React from 'react';
import SchuylkillLogo from '../assets/Generated_Image_December_09__2025_-_10_10PM-f45fb185-fc12-4632-8bb5-215a429658a4.png';
import BbbLogo from '../assets/Generated_Image_December_09__2025_-_10_46PM-f0c02aaa-4cd9-45df-97ac-da74635d7e02.png';
import NadcaLogo from '../assets/nadca.png';
import OshaLogo from '../assets/OSHA_LOGO__BAM__-ffa3d3fd-4cd9-4099-b99d-8a5ce3a93330.png';
import CostarsLogo from '../assets/Costars_Logo__BAM_-0ce9a955-b98e-48b7-9295-56c05583e8e8.png';
import BempLogo from '../assets/ASHRAE_BEMP__BAM_-78ffd63b-965d-4a5c-9c09-bacb561c4600.png';
import EpaLogo from '../assets/ASHRAE_BEMP__BAM___1_-f5143cfa-83db-4b0a-9513-3f67cfb72cbe.png';

const logos = [
  { name: 'Schuylkill County Chamber', image: SchuylkillLogo },
  { name: 'BBB Accredited Business', image: BbbLogo },
  { name: 'NADCA Certified', image: NadcaLogo },
  { name: 'OSHA Compliant', image: OshaLogo },
  { name: 'PA COSTARS Vendor', image: CostarsLogo },
  { name: 'ASHRAE BEMP Certified', image: BempLogo },
  { name: 'EPA Certified', image: EpaLogo },
];

// Repeat to ensure smooth marquee on wide screens
const displayBadges = [...logos, ...logos, ...logos, ...logos, ...logos];

export const Accreditations: React.FC = () => {
  return (
    <section className="w-full pt-10 pb-6 md:pt-12 md:pb-7 bg-[#F2F6F5] border-b border-[#D7DDDA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-4">
        {/* Section Title */}
        <h3 className="text-center text-sm font-bold tracking-[1.2px] text-[#5E7A86] uppercase">
          Accreditations & Certifications
        </h3>
      </div>
      
      {/* Marquee Container with Fade Mask */}
      <div 
        className="relative w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        {/* Scrolling Track */}
        <div 
          className="flex gap-8 w-max animate-scroll hover:[animation-play-state:paused] pr-10 py-4 items-center"
        >
          {displayBadges.map((badge, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center flex-shrink-0 h-36 px-6 transition-all duration-300 transform origin-center cursor-default hover:scale-[1.05]"
            >
              <img
                src={badge.image}
                alt={badge.name}
                className="max-h-28 max-w-[350px] object-contain"
              />
              <span className="sr-only">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Subtext - Tagline */}
      <div className="max-w-5xl mx-auto px-6 mt-6 text-center">
        <p className="text-[#5E7A86] text-lg md:text-[20px] font-semibold leading-relaxed">
          Trusted by hospitals · labs · government agencies · industrial facilities across the Mid-Atlantic
        </p>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); } /* Move exactly one set's width */
        }
        .animate-scroll {
          animation: scroll 48s linear infinite;
        }
      `}</style>
    </section>
  );
};