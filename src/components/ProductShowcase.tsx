import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Search, ArrowRightLeft } from "lucide-react";
import { ProductInfo, products } from "../data";

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<ProductInfo | null>(
    null,
  );
  const [compareProduct, setCompareProduct] = useState<ProductInfo | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (compareProduct) {
          setCompareProduct(null);
        } else {
          setSelectedProduct(null);
        }
      }
    };
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      setCompareProduct(null);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct, compareProduct]);

  const renderProductDetails = (product: ProductInfo, isCompare = false) => (
    <div data-lenis-prevent className={`p-6 sm:p-10 md:p-14 relative flex flex-col hide-scrollbar shrink-0 ${isCompare ? 'w-full md:w-1/2' : 'w-full md:w-1/2 overflow-y-auto'}`}>
      {!isCompare && (
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-400 hover:text-red-600 transition-colors z-10 bg-white/80 backdrop-blur rounded-full p-2"
        >
          <X size={20} />
        </button>
      )}
      {isCompare && product === compareProduct && (
        <button
          onClick={() => setCompareProduct(null)}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-400 hover:text-red-600 transition-colors z-10 bg-white/80 backdrop-blur rounded-full p-2"
        >
          <X size={20} />
        </button>
      )}

      {isCompare && (
        <div className="w-24 h-24 sm:w-32 sm:h-32 mb-6 rounded-full overflow-hidden border border-stone-200">
          <img src={product.image} className="w-full h-full object-cover grayscale opacity-80" alt={product.name} />
        </div>
      )}

      <span className="text-red-600 tracking-[0.2em] uppercase text-[10px] font-bold mb-2 block">
        {product.subtitle}
      </span>
      <h3 className={`font-serif text-slate-800 mb-6 ${isCompare ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'}`}>
        {product.name}
      </h3>

      <div className="mb-8">
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-stone-200 pb-2">
          Heritage & History
        </h4>
        <p className="text-sm text-slate-600 font-light leading-relaxed">
          {product.history}
        </p>
      </div>

      <div className="mt-auto">
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-stone-200 pb-2">
          Nutritional Information{" "}
          <span className="lowercase font-normal tracking-normal text-stone-300">
            (per 100g)
          </span>
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white border border-stone-100 p-4 items-center sm:items-start text-center sm:text-left">
            <div className="text-[9px] uppercase tracking-widest text-stone-400 mb-1">Calories</div>
            <div className="font-serif text-lg text-slate-800">{product.nutrition.calories}</div>
          </div>
          <div className="bg-white border border-stone-100 p-4 items-center sm:items-start text-center sm:text-left">
            <div className="text-[9px] uppercase tracking-widest text-stone-400 mb-1">Carbs</div>
            <div className="font-serif text-lg text-slate-800">{product.nutrition.carbs}</div>
          </div>
          <div className="bg-white border border-stone-100 p-4 items-center sm:items-start text-center sm:text-left">
            <div className="text-[9px] uppercase tracking-widest text-stone-400 mb-1">Protein</div>
            <div className="font-serif text-lg text-slate-800">{product.nutrition.protein}</div>
          </div>
          <div className="bg-white border border-stone-100 p-4 items-center sm:items-start text-center sm:text-left">
            <div className="text-[9px] uppercase tracking-widest text-stone-400 mb-1">Fat</div>
            <div className="font-serif text-lg text-slate-800">{product.nutrition.fat}</div>
          </div>
        </div>
      </div>

      {!isCompare && (
        <div className="mt-10 pt-8 border-t border-stone-200">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
            <ArrowRightLeft size={12} />
            Quick Compare
          </h4>
          <div className="flex flex-wrap gap-2">
            {products.filter(p => p.name !== product.name).map(p => (
              <button
                key={p.name}
                onClick={() => setCompareProduct(p)}
                className="px-4 py-2 text-xs border border-stone-200 text-slate-600 hover:border-red-600 hover:text-red-600 transition-colors bg-white"
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-[#FCFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 tracking-widest uppercase text-[10px] font-bold mb-4 block">
            Our Offerings
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-800">
            The Core Lines
          </h2>
          <div className="mt-8 mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-stone-200 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors shadow-sm"
              />
            </div>
            {/* View Full Collection Button Added */}
            <button 
              onClick={() => setSelectedProduct(products[0])}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 space-x-2 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-600 hover:text-red-600 transition border border-stone-200 bg-white py-4 hover:border-red-600 shadow-sm whitespace-nowrap"
            >
              <span>View Collection</span>
              <ArrowRightLeft size={14} className="ml-2" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:auto-rows-[300px] border border-stone-100 divide-y md:divide-y-0 md:divide-x divide-stone-100">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProduct(product)}
              className={`relative overflow-hidden group cursor-pointer ${product.colSpan} ${product.rowSpan} min-h-[300px] bg-stone-900`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent transition-opacity duration-300"></div>
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 will-change-transform">
                  <span className="text-white font-serif text-2xl lg:text-3xl mb-1 block">
                    {product.name}
                  </span>
                  <span className="text-red-400 text-[9px] uppercase tracking-[0.2em] font-bold mb-4 block">
                    {product.subtitle}
                  </span>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                    <p className="text-white/80 text-sm font-light leading-relaxed mb-6 max-w-xs">
                      {product.description}
                    </p>
                    <button className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-red-400 transition-colors">
                      View Collection <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex flex-col justify-center items-center p-4 sm:p-6"
          >
            <div
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer"
              onClick={() => setSelectedProduct(null)}
            ></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`relative w-full ${compareProduct ? 'max-w-6xl' : 'max-w-5xl'} bg-[#FCFAF8] flex flex-col md:flex-row shadow-2xl border border-stone-200 overflow-hidden max-h-[90vh] md:max-h-[85vh] transition-all duration-500`}
            >
              {compareProduct ? (
                <div data-lenis-prevent className="w-full flex flex-col md:flex-row overflow-y-auto hide-scrollbar relative">
                  <button
                    onClick={() => {
                      setSelectedProduct(null);
                      setCompareProduct(null);
                    }}
                    className="absolute top-4 left-4 sm:top-6 sm:left-6 text-slate-400 hover:text-red-600 transition-colors z-20 bg-white/80 backdrop-blur rounded-full p-2 md:hidden"
                  >
                    <X size={20} />
                  </button>
                  {renderProductDetails(selectedProduct, true)}
                  <div className="w-px bg-stone-200 hidden md:block flex-shrink-0 relative">
                    <button
                      onClick={() => {
                        setSelectedProduct(null);
                        setCompareProduct(null);
                      }}
                      className="absolute top-6 -left-[14px] text-slate-400 hover:text-red-600 transition-colors z-20 bg-white shadow backdrop-blur rounded-full p-1 border border-stone-200 hidden md:block"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <div className="h-px w-full bg-stone-200 md:hidden flex-shrink-0"></div>
                  {renderProductDetails(compareProduct, true)}
                </div>
              ) : (
                <>
                  <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-auto relative bg-stone-100 flex-shrink-0">
                    <img
                      src={selectedProduct.image}
                      className="w-full h-full object-cover grayscale opacity-80"
                      alt={selectedProduct.name}
                    />
                    <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply" />
                  </div>
                  {renderProductDetails(selectedProduct)}
                </>
              )}
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
    </section>
  );
}
