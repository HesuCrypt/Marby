import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function HeritageSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden lg:mr-12 border border-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=1000&auto=format&fit=crop"
                  alt="Historic Bakery"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 lg:right-0 bg-[#FCFAF8] p-8 shadow-2xl max-w-xs border border-stone-100 hidden sm:block">
                <p className="text-4xl font-serif text-slate-800 mb-2">Since 1980</p>
                <p className="text-[10px] text-red-600 font-bold uppercase tracking-[0.2em]">A Family Tradition</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">Our Heritage</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-slate-800 mb-8 leading-tight">
                Baking memories, <br className="hidden sm:block" />
                <span className="italic text-slate-500">one loaf at a time.</span>
              </h2>
              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <p>
                  What started as a humble neighborhood bakery four decades ago has blossomed into a cherished household name. At Marby Food Ventures, we believe that bread is more than just sustenance; it's a centerpiece of connection.
                </p>
                <p>
                  From our classic soft rolls to our signature artisanal loaves, every product is crafted with uncompromising quality, honoring traditional Filipino flavors while embracing modern techniques.
                </p>
              </div>
              <div className="mt-10">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-700 hover:text-red-600 transition group"
                >
                  <span>Read the full story</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
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
              className="relative w-full max-w-2xl bg-[#FCFAF8] shadow-2xl overflow-hidden flex flex-col max-h-[85vh] border border-stone-200"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-red-600 transition-colors z-10 bg-white shadow-sm rounded-full p-2"
              >
                <X size={20} />
              </button>
              
              <div data-lenis-prevent className="overflow-y-auto p-8 sm:p-12 hide-scrollbar">
                <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">The Full Story</span>
                <h3 className="font-serif text-3xl sm:text-4xl text-slate-800 mb-8 border-b border-stone-200 pb-6">
                  Four Decades of Baking Excellence.
                </h3>
                
                <div className="space-y-6 text-slate-600 font-light leading-relaxed text-sm sm:text-base">
                  <p>
                    <strong>1980: The Humble Beginnings</strong><br />
                    It all started in a small kitchen in the heart of Manila. Armed with a single oven and a family recipe passed down through generations, our founder began baking small batches of pandesal and soft rolls for the neighborhood. Word of the exceptional quality and warmth of the bread spread quickly.
                  </p>
                  <p>
                    <strong>1994: The First Expansion</strong><br />
                    As demand grew, so did we. Moving to our first commercial facility allowed us to introduce new lines, including our now-famous Heritage Hopia and enriched sandwich breads. Despite the larger scale, we remained stubbornly committed to the long fermentation processes that gave our bread its distinct character.
                  </p>
                  <p>
                    <strong>2010: Embracing Artisan Techniques</strong><br />
                    Recognizing a shift in culinary appreciation, Marby introduced its Artisan Line. We traveled to Europe to master the art of Viennoiserie and authentic sourdough, bringing those techniques back and marrying them with local sensibilities to create something uniquely ours.
                  </p>
                  <p>
                    <strong>Today: A Legacy Continued</strong><br />
                    Forty years later, Marby Food Ventures operates state-of-the-art facilities while maintaining the soul of a neighborhood bakery. Our 40-year-old sourdough starter is still fed daily, and our commitment to feeding families with joy remains our guiding principle.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
