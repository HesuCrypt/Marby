import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const heroSlides = [
  {
    title: "Taste the",
    highlight: "Heritage",
    subtitle: "of Good Bread.",
    description: "For generations, we have been crafting the finest baked goods, blending time-honored recipes with modern culinary excellence to bring warmth to every table.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Artisan",
    highlight: "Crafted",
    subtitle: "Every Morning.",
    description: "Our master bakers rise before dawn to ensure every loaf, pastry, and biscuit meets our uncompromising standards of quality and freshness.",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Filipino",
    highlight: "Classics",
    subtitle: "Re-imagined.",
    description: "From our signature Hopia to our fluffy Ensaymada, experience traditional local flavors elevated with premium ingredients.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-32 lg:pt-48 pb-20 px-4 sm:px-8 z-10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center items-center lg:items-start min-h-[300px]">
          <div className="w-12 h-[2px] bg-red-600 mb-6"></div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center lg:items-start"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-slate-900 mb-6">
                {heroSlides[currentSlide].title} <br className="hidden lg:block" /> <span className="text-red-600 italic">{heroSlides[currentSlide].highlight}</span> {heroSlides[currentSlide].subtitle.startsWith('of') ? 'of' : ''}<br className="hidden lg:block"/> {heroSlides[currentSlide].subtitle.replace(/^of\s/, '')}
              </h1>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-8">
                {heroSlides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 w-full lg:w-auto">
            <a href="#" className="bg-red-600 text-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.25em] shadow-xl shadow-red-100 hover:bg-red-700 transition w-full sm:w-auto text-center">
              Explore Our Products
            </a>
            <a href="#" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-700 hover:text-red-600 w-full sm:w-auto justify-center py-4">
              <span>Our Story</span>
              <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-red-600 border-b-[4px] border-b-transparent ml-1"></div>
              </div>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: 'spring', stiffness: 50 }}
          className="order-1 lg:order-2 relative bg-stone-100"
        >
          <div className="relative overflow-hidden aspect-[4/5] lg:aspect-square group">
            <div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-0"></div>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                src={heroSlides[currentSlide].image}
                alt="Bakery Showcase"
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Nav Arrows */}
            <div className="absolute bottom-10 right-10 flex gap-2 z-20 hidden lg:flex">
                <div onClick={prevSlide} className="w-10 h-10 bg-white/90 backdrop-blur-sm border border-stone-100 flex items-center justify-center cursor-pointer hover:bg-white transition-colors group/arrow">
                  <span className="transform group-hover/arrow:-translate-x-1 transition-transform">←</span>
                </div>
                <div onClick={nextSlide} className="w-10 h-10 bg-red-600 text-white flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors group/arrow">
                  <span className="transform group-hover/arrow:translate-x-1 transition-transform">→</span>
                </div>
            </div>

            {/* Mobile Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 z-20 lg:hidden">
              {heroSlides.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className="p-3 cursor-pointer"
                >
                  <div
                    className={`h-1.5 rounded-full transition-all ${
                      currentSlide === idx ? 'w-8 bg-red-600' : 'w-2 bg-white/70'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
