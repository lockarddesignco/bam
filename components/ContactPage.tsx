import React from 'react';
import { Button } from './Button';
import { 
  Phone, Mail, MapPin, Clock, ShieldCheck, 
  ChevronRight, Globe, AlertCircle, HardHat, 
  Send, Calendar, Building2, MessageSquare
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#F7F9F8] font-sans">
      
      {/* --- Page Hero --- */}
      <section className="relative pt-40 pb-24 bg-[#0B1110] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#A7D7C5_1px,transparent_1px)] [background-size:32px_32px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl">
             <div className="inline-flex items-center gap-2 text-[#A7D7C5] mb-6">
                <Globe className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Contact Engineering</span>
             </div>
             <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                Mechanical <br/>
                <span className="text-[#A7D7C5]">Inquiry & Support</span>
             </h1>
             <p className="text-[#D7DDDA] text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#265A4A] pl-8 opacity-90">
                Connect with our technical field teams. Whether you are planning a capital restoration or need immediate compliance support, we provide structured responses for critical environments.
             </p>
          </div>
        </div>
      </section>

      {/* --- Main Content Layout --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Information */}
            <div className="lg:col-span-5 space-y-12">
               
               {/* Emergency Support Card */}
               <div className="p-8 bg-[#265A4A] text-white rounded-sm border border-[#A7D7C5]/20 shadow-xl relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 opacity-10 transform group-hover:scale-110 transition-transform">
                    <AlertCircle className="w-32 h-32" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                       <AlertCircle className="w-6 h-6 text-[#A7D7C5]" />
                       Emergency Support
                    </h3>
                    <p className="text-[#D7DDDA] text-sm leading-relaxed mb-6 opacity-80">
                      For mission-critical mechanical failures impacting patient care, industrial output, or site safety. Priority dispatch for contract clients.
                    </p>
                    <a href="tel:5709005827" className="text-2xl font-black text-white hover:text-[#A7D7C5] transition-colors">
                      (570) 900-5827
                    </a>
                    <div className="mt-4 text-[10px] uppercase font-bold tracking-widest text-[#A7D7C5]">
                      Available 24/7/365
                    </div>
                  </div>
               </div>

               {/* Direct Channels */}
               <div className="space-y-8">
                  <div className="flex gap-6">
                     <div className="p-3 bg-white border border-[#D7DDDA] rounded-sm shrink-0">
                        <MapPin className="w-6 h-6 text-[#265A4A]" />
                     </div>
                     <div>
                        <h4 className="font-bold text-[#265A4A] uppercase tracking-widest text-xs mb-2">Regional Headquarters</h4>
                        <p className="text-[#5E7A86] text-sm leading-relaxed">
                          196 Dadburnhams Road<br/>
                          Pine Grove, PA 17963
                        </p>
                        <button className="text-[#265A4A] text-xs font-bold mt-3 hover:underline underline-offset-4 decoration-[#A7D7C5] decoration-2">Get Directions</button>
                     </div>
                  </div>

                  <div className="flex gap-6">
                     <div className="p-3 bg-white border border-[#D7DDDA] rounded-sm shrink-0">
                        <Mail className="w-6 h-6 text-[#265A4A]" />
                     </div>
                     <div>
                        <h4 className="font-bold text-[#265A4A] uppercase tracking-widest text-xs mb-2">Technical Inquiries</h4>
                        <p className="text-[#5E7A86] text-sm font-medium">info@buildingandair.com</p>
                        <p className="text-[#5E7A86] text-xs mt-1 opacity-60">Avg. Response Time: 4 Hours</p>
                     </div>
                  </div>

                  <div className="flex gap-6">
                     <div className="p-3 bg-white border border-[#D7DDDA] rounded-sm shrink-0">
                        <Clock className="w-6 h-6 text-[#265A4A]" />
                     </div>
                     <div>
                        <h4 className="font-bold text-[#265A4A] uppercase tracking-widest text-xs mb-2">Office Hours</h4>
                        <p className="text-[#5E7A86] text-sm">Mon – Fri: 7:00 AM – 5:00 PM</p>
                        <p className="text-[#5E7A86] text-xs mt-1">Weekend Support by Appointment</p>
                     </div>
                  </div>
               </div>

               {/* Service Area Footnote */}
               <div className="pt-8 border-t border-[#D7DDDA]">
                  <h4 className="font-bold text-[#265A4A] text-sm mb-4">Core Coverage Territory</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Pennsylvania', 'New Jersey', 'Maryland', 'Delaware', 'Southern New York'].map((state) => (
                      <span key={state} className="px-3 py-1 bg-[#F2F6F5] border border-[#D7DDDA] text-[#5E7A86] text-[10px] font-bold uppercase tracking-widest">
                        {state}
                      </span>
                    ))}
                  </div>
               </div>
            </div>

            {/* Right Column: Institutional Form */}
            <div className="lg:col-span-7">
               <div className="bg-white p-10 border border-[#D7DDDA] shadow-2xl relative">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#265A4A]/5 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-[#265A4A]/20" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#265A4A] mb-8 tracking-tight">Facility Support Intake</h3>
                  
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold text-[#5E7A86] uppercase tracking-widest">Contact Name</label>
                           <input type="text" className="w-full bg-[#F7F9F8] border border-[#D7DDDA] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] transition-colors" placeholder="Full Name" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold text-[#5E7A86] uppercase tracking-widest">Email Address</label>
                           <input type="email" className="w-full bg-[#F7F9F8] border border-[#D7DDDA] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] transition-colors" placeholder="work@facility.com" />
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold text-[#5E7A86] uppercase tracking-widest">Phone Number</label>
                           <input type="tel" className="w-full bg-[#F7F9F8] border border-[#D7DDDA] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] transition-colors" placeholder="(555) 000-0000" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold text-[#5E7A86] uppercase tracking-widest">Facility Type</label>
                           <select className="w-full bg-[#F7F9F8] border border-[#D7DDDA] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] transition-colors appearance-none">
                              <option>Healthcare / Hospital</option>
                              <option>Education / Campus</option>
                              <option>Industrial / Manufacturing</option>
                              <option>Government / Municipal</option>
                              <option>Commercial Portfolio</option>
                           </select>
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] font-bold text-[#5E7A86] uppercase tracking-widest">Inquiry Type</label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                           {['Restoration Project', 'IAQ Assessment', 'Service & PM'].map((type) => (
                             <label key={type} className="flex items-center gap-2 p-3 border border-[#D7DDDA] hover:border-[#265A4A] cursor-pointer transition-colors text-xs font-bold text-[#5E7A86]">
                               <input type="radio" name="inquiry_type" className="accent-[#265A4A]" />
                               {type}
                             </label>
                           ))}
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] font-bold text-[#5E7A86] uppercase tracking-widest">Technical Brief / Issue Description</label>
                        <textarea rows={4} className="w-full bg-[#F7F9F8] border border-[#D7DDDA] px-4 py-3 text-sm focus:outline-none focus:border-[#265A4A] transition-colors resize-none" placeholder="Please describe the equipment involved and known performance issues..."></textarea>
                     </div>

                     <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                        <div className="flex items-center gap-3">
                           <input type="checkbox" className="accent-[#265A4A] w-4 h-4" />
                           <span className="text-[11px] text-[#5E7A86] font-medium leading-tight">Request an on-site mechanical auditor to contact me within 24 hours.</span>
                        </div>
                        <Button size="lg" className="w-full sm:w-auto px-10">
                          Submit Inquiry
                          <Send className="w-4 h-4 ml-2" />
                        </Button>
                     </div>
                  </form>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Trust Band --- */}
      <section className="py-16 bg-[#F2F6F5] border-y border-[#D7DDDA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60">
             <div className="flex items-center gap-3">
                <HardHat className="w-8 h-8 text-[#265A4A]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#265A4A]">OSHA-30 Trained</span>
             </div>
             <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-[#265A4A]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#265A4A]">NADCA Certified</span>
             </div>
             <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 text-[#265A4A]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#265A4A]">Schedule Compliant</span>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};