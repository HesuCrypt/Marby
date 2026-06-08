import { useEffect, useState } from 'react';
import { navLinks } from '../data';

export default function Breadcrumbs({ scrolled }: { scrolled: boolean }) {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let current = 'Home';
      for (const link of navLinks) {
        const id = link.href.replace('#', '');
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          current = link.name;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`w-full overflow-hidden transition-all duration-300 ${
        scrolled 
          ? 'h-12 border-t border-stone-200/60 opacity-100 flex items-center bg-white/50 backdrop-blur-sm mt-4' 
          : 'h-0 opacity-0 mt-0 flex items-center pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center text-[10px] uppercase tracking-[0.2em] font-bold space-x-3">
          <a href="#home" className="text-slate-400 hover:text-red-600 transition-colors">Home</a>
          {activeSection !== 'Home' && (
            <>
              <span className="text-stone-300">/</span>
              <span className="text-red-600 truncate">{activeSection}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
