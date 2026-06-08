import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data';
import Breadcrumbs from './Breadcrumbs';
import SiteSearch from './SiteSearch';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm pt-4' : 'bg-white border-b border-stone-100 pt-8 pb-6'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between lg:flex-col lg:justify-center relative w-full">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center">
            <a href="#" className="flex items-center justify-center bg-red-600 px-8 py-2 rounded-[50%_40%_50%_40%] mb-1">
              <span className="text-white font-bold text-3xl tracking-tighter lowercase">marby</span>
            </a>
            <div className="hidden lg:block text-stone-400 text-[10px] tracking-[0.45em] font-light uppercase">
              Quality Baking Traditions
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 mt-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 hover:text-red-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 lg:absolute lg:right-0 lg:top-4 z-50">
            <SiteSearch />
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-slate-800 relative p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <Breadcrumbs scrolled={scrolled} />
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[55] lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full sm:w-80 bg-[#FCFAF8] shadow-2xl z-[55] flex flex-col px-8 pt-24 pb-8 border-l border-stone-200 lg:hidden"
              data-lenis-prevent
            >
              <div className="flex justify-end mb-8 relative z-10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-stone-100 transition-colors"
                >
                  <X size={28} className="text-slate-800" />
                </button>
              </div>
              <nav className="flex flex-col space-y-6 w-full flex-grow overflow-y-auto hide-scrollbar">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    key={link.name}
                    href={link.href}
                    className="text-slate-800 hover:text-red-600 font-serif text-3xl transition-colors w-full border-b border-stone-100 pb-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
              
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-red-600 text-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.25em] w-full text-center hover:bg-slate-900 transition-colors mt-8"
              >
                Distributor Inquiry
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
