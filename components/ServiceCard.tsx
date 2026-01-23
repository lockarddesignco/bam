import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string; // Kept for interface compatibility, but unused in new design
  category: 'core' | 'specialty';
  categoryLabel?: string;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, categoryLabel = "Service Module", index }) => {
  const formattedIndex = index < 10 ? `0${index}` : `${index}`;

  return (
    <div className="group relative bg-white border border-[#D7DDDA] p-8 md:p-10 flex flex-col h-full transition-all duration-300 hover:border-[#265A4A] hover:shadow-[0_20px_40px_-15px_rgba(38,90,74,0.1)] min-h-[420px]">
      
      {/* Header: Icon Box & Number */}
      <div className="flex justify-between items-start mb-10">
        <div className="w-16 h-16 border border-[#D7DDDA] flex items-center justify-center text-[#265A4A] group-hover:bg-[#265A4A] group-hover:text-white transition-colors duration-300">
           <Icon className="w-8 h-8" strokeWidth={1.5} />
        </div>
        <span className="text-[#A7D7C5] font-bold text-lg tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
          {formattedIndex}
        </span>
      </div>

      {/* Body: Category & Title */}
      <div className="mb-6">
         <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#5E7A86] mb-3">
           {categoryLabel}
         </span>
         <h3 className="text-3xl font-black text-[#265A4A] uppercase leading-[0.9] tracking-tighter group-hover:text-[#1e483b] transition-colors">
           {title}
         </h3>
      </div>

      {/* Description */}
      <p className="text-[#5E7A86] text-sm leading-relaxed mb-10 flex-grow font-medium opacity-90">
        {description}
      </p>

      {/* Footer: Action Link */}
      <div className="mt-auto pt-6 border-t border-[#D7DDDA]/50">
         <span className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#265A4A] group-hover:gap-5 transition-all">
           Request Service Assessment <ArrowRight className="w-4 h-4" />
         </span>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#265A4A] group-hover:w-full transition-all duration-500 ease-out"></div>
    </div>
  );
};