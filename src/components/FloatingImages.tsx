import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function FloatingImages() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none hidden xl:block z-0">
      <motion.img
        style={{ y: y1 }}
        src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=600&auto=format&fit=crop"
        alt="Decorative bread"
        className="absolute -left-32 top-32 w-80 h-auto rounded-full mix-blend-multiply opacity-20 rotate-12 blur-[1px]"
      />
      <motion.img
        style={{ y: y2 }}
        src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=600&auto=format&fit=crop"
        alt="Decorative pastry"
        className="absolute -right-24 top-96 w-72 h-auto rounded-full mix-blend-multiply opacity-20 -rotate-12 blur-[1px]"
      />
      <motion.img
        style={{ y: y3 }}
        src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop"
        alt="Decorative bun"
        className="absolute left-10 top-[800px] w-64 h-auto rounded-full mix-blend-multiply opacity-15 rotate-45 blur-[2px]"
      />
    </div>
  );
}
