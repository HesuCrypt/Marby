import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';

export default function B2BSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    "Nationwide Distribution Network",
    "Stringent Quality Control (ISO Certified)",
    "Custom B2B Purchasing Portals",
    "Dedicated Account Management",
  ];

  return (
    <>
      <section className="relative py-20 md:py-32 bg-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1505253716362-af193562a34b?q=80&w=2000&auto=format&fit=crop"
            alt="Bakery Production"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-red-500 tracking-[0.25em] uppercase text-[10px] font-bold mb-4 block">B2B Opportunity</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.1]">
                Partner With a <span className="text-red-600 italic">Legacy</span>
              </h2>
              <p className="text-lg text-slate-300 font-light mb-10 leading-relaxed max-w-xl">
                Elevate your retail or foodservice offerings. Join hundreds of successful partners who trust Marby Food Ventures for consistent quality, exceptional scale, and unmatched reliability.
              </p>

              <ul className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center text-slate-200 text-sm tracking-wide"
                  >
                    <CheckCircle2 className="text-red-600 mr-3 w-5 h-5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white shadow-xl shadow-red-900/30 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-red-700 transition"
              >
                Inquire About Distribution
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-xl bg-white shadow-2xl overflow-hidden flex flex-col border border-stone-200"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-red-600 transition-colors z-10 bg-white/80 backdrop-blur rounded-full p-2"
              >
                <X size={20} />
              </button>
              
              <div data-lenis-prevent className="p-8 sm:p-12 overflow-y-auto max-h-[85vh] hide-scrollbar">
                <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-2 block">Distribution Inquiry</span>
                <h3 className="font-serif text-3xl text-slate-800 mb-6">
                  Become a Partner
                </h3>
                <p className="text-slate-500 font-light text-sm mb-8">
                  Fill out the form below to receive our wholesale catalog and distribution requirements. (Mockup Form)
                </p>

                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Mock form submitted!"); setIsModalOpen(false); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500">First Name</label>
                      <input type="text" className="w-full border-b-2 border-stone-200 focus:border-red-600 bg-transparent py-2 outline-none transition-colors text-sm" placeholder="Juan" required />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Last Name</label>
                      <input type="text" className="w-full border-b-2 border-stone-200 focus:border-red-600 bg-transparent py-2 outline-none transition-colors text-sm" placeholder="Dela Cruz" required />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Company Name</label>
                    <input type="text" className="w-full border-b-2 border-stone-200 focus:border-red-600 bg-transparent py-2 outline-none transition-colors text-sm" placeholder="Retail Store Corp." required />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Email Address</label>
                    <input type="email" className="w-full border-b-2 border-stone-200 focus:border-red-600 bg-transparent py-2 outline-none transition-colors text-sm" placeholder="partner@company.com" required />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Message</label>
                    <textarea rows={3} className="w-full border-b-2 border-stone-200 focus:border-red-600 bg-transparent py-2 outline-none transition-colors text-sm resize-none" placeholder="Tell us about your distribution reach..." required></textarea>
                  </div>

                  <button type="submit" className="w-full bg-slate-900 text-white font-bold uppercase tracking-widest text-[10px] py-4 hover:bg-red-600 transition-colors mt-6">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
