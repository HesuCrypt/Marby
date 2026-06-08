import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "Marby has been our exclusive supplier for over a decade. Their consistency and ability to scale during peak seasons is unmatched in the industry.",
    author: "Maria Gonzalez",
    role: "Procurement Director, Manila Hospitality Group"
  },
  {
    quote: "The artisan sourdough line completely transformed our morning cafe menu. Customers specifically ask for it by name.",
    author: "David Chen",
    role: "Owner, The Morning Brew"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-stone-900 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">Client Success</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white">Partner Stories</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
          {testimonials.map((brand, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-stone-800/50 p-8 sm:p-12 border border-stone-700/50 relative"
            >
              <div className="text-7xl text-red-600/20 font-serif absolute -top-4 -left-2 leading-none font-bold">"</div>
              <p className="text-slate-300 font-light text-lg sm:text-xl leading-relaxed mb-8 relative z-10">
                {brand.quote}
              </p>
              <div>
                <p className="text-white font-serif tracking-wide text-lg">{brand.author}</p>
                <p className="text-red-400 text-[10px] uppercase font-bold tracking-[0.2em] mt-1">{brand.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
