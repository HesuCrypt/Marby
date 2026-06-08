import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { newsItems } from '../data';

export default function NewsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 md:py-24 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6"
          >
            <div>
              <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">Digital Footprint</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-slate-800">Latest from Marby</h2>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-red-600 transition"
            >
              View All Updates
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>

          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0 snap-x snap-mandatory hide-scrollbar">
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onClick={() => setIsModalOpen(true)}
                className="flex-none w-[85vw] sm:w-[60vw] lg:w-auto snap-center mr-6 lg:mr-0 bg-[#FCFAF8] border border-stone-100 hover:shadow-xl hover:shadow-stone-200 transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-700 z-10 shadow-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 mb-4">{item.date}</div>
                    <h3 className="text-xl font-serif text-slate-800 group-hover:text-red-600 transition-colors leading-snug mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-light leading-relaxed mb-6 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center text-[10px] font-bold text-slate-400 group-hover:text-red-600 uppercase tracking-[0.25em] transition-colors relative lg:w-max">
                    Read Article 
                    <span className="absolute -right-6 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
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
              className="relative w-full max-w-4xl bg-[#FCFAF8] shadow-2xl overflow-hidden flex flex-col max-h-[85vh] border border-stone-200"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-red-600 transition-colors z-10 bg-white shadow-sm rounded-full p-2"
              >
                <X size={20} />
              </button>
              
              <div data-lenis-prevent className="overflow-y-auto p-8 sm:p-12 hide-scrollbar">
                <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">Archives</span>
                <h3 className="font-serif text-3xl sm:text-4xl text-slate-800 mb-8 border-b border-stone-200 pb-6">
                  All Updates & Announcements
                </h3>
                
                <div className="space-y-8">
                  {newsItems.map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row gap-6 items-start group cursor-pointer pb-8 border-b border-stone-100 last:border-0 last:pb-0">
                      <div className="w-full sm:w-1/3 aspect-[4/3] overflow-hidden shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-red-50 text-red-600 px-2 py-1 text-[9px] font-bold uppercase tracking-widest">{item.category}</span>
                          <span className="text-[10px] font-mono text-slate-400">{item.date}</span>
                        </div>
                        <h4 className="text-2xl font-serif text-slate-800 group-hover:text-red-600 transition-colors mb-3">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-500 font-light leading-relaxed">
                          {item.description}
                          <br /><br />
                          <span className="italic opacity-60">(Mockup article content. This represents the full article view where users can read in-depth details about company initiatives, product launches, and community events.)</span>
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="text-center pt-8">
                    <button className="px-6 py-3 border border-stone-200 text-[10px] uppercase font-bold tracking-widest text-slate-500 hover:border-red-600 hover:text-red-600 transition-colors">
                      Load More Posts
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
