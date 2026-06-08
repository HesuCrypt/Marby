import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { products, newsItems } from '../data';

export default function SiteSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredNews = newsItems.filter(n => 
    n.title.toLowerCase().includes(query.toLowerCase()) || 
    n.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Command+K or Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleResultClick = (id: string) => {
    setIsOpen(false);
    setQuery('');
    const element = document.getElementById(id);
    if (element) {
      // Small delay to allow the modal to close first
      setTimeout(() => {
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="text-slate-800 p-2 rounded-full hover:bg-stone-100 transition-colors flex items-center justify-center gap-2 group"
        aria-label="Search"
      >
        <Search size={20} className="group-hover:text-red-600 transition-colors" />
        <span className="hidden md:inline text-[10px] uppercase font-bold tracking-widest text-slate-400 group-hover:text-red-600 transition-colors">Search</span>
      </button>

      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-white/80 backdrop-blur-md flex flex-col pt-24 px-4 sm:px-6 lg:px-8"
            >
            <div className="absolute top-6 right-6">
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-red-600 p-2 rounded-full hover:bg-stone-100 transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            <div className="w-full max-w-4xl mx-auto flex flex-col h-[80vh]">
              <div className="relative mb-8 flex-shrink-0">
                <Search size={28} className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-300" />
                <input 
                  ref={inputRef}
                  type="text" 
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search products, articles..."
                  className="w-full bg-transparent text-3xl sm:text-5xl font-serif text-slate-800 placeholder-stone-300 border-b-2 border-stone-200 focus:border-red-600 pb-4 pl-12 outline-none transition-colors"
                />
              </div>

              <div data-lenis-prevent className="flex-1 overflow-y-auto hide-scrollbar space-y-12 pb-12">
                {query.length > 0 && filteredProducts.length === 0 && filteredNews.length === 0 && (
                  <div className="text-center text-stone-400 font-light mt-12">
                    No results found for "{query}"
                  </div>
                )}

                {query.length > 0 && filteredProducts.length > 0 && (
                  <div>
                    <h3 className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-6 border-b border-stone-100 pb-2">Products</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {filteredProducts.map(p => (
                        <button
                          key={p.name}
                          onClick={() => handleResultClick('products')}
                          className="flex items-center gap-4 p-4 bg-white border border-stone-100 hover:border-red-200 hover:shadow-lg transition-all text-left group"
                        >
                          <div className="w-16 h-16 bg-stone-100 rounded-full overflow-hidden flex-shrink-0">
                            <img src={p.image} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt={p.name} />
                          </div>
                          <div>
                            <div className="text-[9px] uppercase tracking-widest font-bold text-red-600 mb-1">{p.subtitle}</div>
                            <h4 className="font-serif text-lg text-slate-800 group-hover:text-red-600 transition-colors">{p.name}</h4>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {query.length > 0 && filteredNews.length > 0 && (
                  <div>
                    <h3 className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-6 border-b border-stone-100 pb-2">Articles & News</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {filteredNews.map(n => (
                        <button
                          key={n.title}
                          onClick={() => handleResultClick('news')}
                          className="flex items-center gap-4 p-4 bg-white border border-stone-100 hover:border-red-200 hover:shadow-lg transition-all text-left group"
                        >
                          <div className="w-16 h-16 bg-stone-100 rounded-full overflow-hidden flex-shrink-0">
                            <img src={n.image} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt={n.title} />
                          </div>
                          <div className="flex-1">
                            <div className="text-[9px] uppercase tracking-widest font-bold text-red-600 mb-1">{n.category} • {n.date}</div>
                            <h4 className="font-serif text-sm text-slate-800 group-hover:text-red-600 transition-colors line-clamp-2">{n.title}</h4>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
