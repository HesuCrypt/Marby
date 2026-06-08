import { motion } from 'motion/react';
import { useState } from 'react';

const faqs = [
  {
    question: "Do you offer wholesale pricing for restaurants and cafes?",
    answer: "Yes, we have a dedicated B2B portal and tier-based wholesale pricing. Minimum order quantities apply for our daily fresh delivery service."
  },
  {
    question: "Where can I find Marby products in retail?",
    answer: "Our core lines are available in major supermarkets nationwide. Use our 'Where to Buy' locator for specific product availability."
  },
  {
    question: "Are your products Halal certified or vegan?",
    answer: "We offer specific product lines that are vegan-friendly. Please refer to individual product packaging for definitive allergen and dietary certifications."
  },
  {
    question: "How long is the shelf life of the artisanal sourdough?",
    answer: "Our sourdough contains no artificial preservatives. It is best enjoyed within 3 days at room temperature, or up to a month if properly frozen."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-white border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">Help Center</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-slate-800">Frequently Asked</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index} 
              className="border border-stone-200 overflow-hidden bg-[#FCFAF8]"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-serif text-lg text-slate-800 pr-8">{faq.question}</span>
                <span className={`text-red-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>
              <motion.div 
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-sm text-slate-500 font-light leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
