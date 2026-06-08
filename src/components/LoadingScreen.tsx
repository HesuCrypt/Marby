import { motion } from 'motion/react';
import { useEffect } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Hold the loading screen for 2 seconds to showcase the animation
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className="absolute inset-0 flex flex-col justify-center items-center bg-[#FCFAF8] overflow-hidden"
    >
      <div className="flex flex-col items-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-red-600 px-8 py-2 rounded-[50%_40%_50%_40%] mb-4 shadow-xl shadow-red-600/20"
        >
          <span className="text-white font-bold text-4xl tracking-tighter lowercase">marby</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-stone-400 text-[10px] tracking-[0.45em] font-light uppercase text-center ml-[0.45em]"
        >
          Quality Baking Traditions
        </motion.div>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
          className="h-[2px] bg-red-600 mt-8"
        />
      </div>
    </div>
  );
}
