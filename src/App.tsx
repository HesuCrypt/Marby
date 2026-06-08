import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './components/Navbar';
import FloatingImages from './components/FloatingImages';
import HeroSection from './components/HeroSection';
import HeritageSection from './components/HeritageSection';
import ProductShowcase from './components/ProductShowcase';
import B2BSection from './components/B2BSection';
import NewsSection from './components/NewsSection';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        const id = anchor.hash.replace('#', '');
        const elem = document.getElementById(id);
        if (elem) {
          e.preventDefault();
          lenis.scrollTo(elem);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFAF8] font-sans text-slate-800 selection:bg-red-600/20">
      <ScrollProgress />
      <AnimatePresence>
        {loading && (
          <motion.div 
            key="loading" 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="fixed inset-0 z-[100]"
          >
            <LoadingScreen onComplete={() => setLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      
      <main className="relative w-full overflow-x-hidden">
        {/* The floating framing images for desktop parallax */}
        <FloatingImages />

        <div id="home"><HeroSection /></div>
        <div id="about" className="scroll-mt-40"><HeritageSection /></div>
        <div id="products" className="scroll-mt-40"><ProductShowcase /></div>
        <div id="where-to-buy" className="scroll-mt-40"><B2BSection /></div>
        <div id="news" className="scroll-mt-40"><NewsSection /></div>
        <div id="faq" className="scroll-mt-40"><FAQSection /></div>
        <div id="testimonials" className="scroll-mt-40"><TestimonialsSection /></div>
      </main>

      <div id="contact" className="scroll-mt-40"><Footer /></div>
    </div>
  );
}
