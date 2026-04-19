'use client';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full max-w-5xl mx-auto min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 mt-8 md:mt-16 mb-8 z-10 bg-rose-100 rounded-[32px] border border-rose-200 shadow-sleek overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="w-full flex flex-col lg:flex-row items-center justify-between text-left gap-10 lg:gap-20 z-20"
      >
        <div className="flex-1 w-full flex flex-col justify-center">
          <span className="text-[11px] uppercase tracking-[2px] text-rose-500 mb-6 font-semibold block">Khusus Untukmu</span>
          <h1 className="font-serif text-5xl md:text-7xl text-rose-900 mb-6 leading-tight italic font-normal">
            Hanya<br/>Kita Berdua.
          </h1>
          <p className="text-base md:text-lg text-rose-900 max-w-sm font-light leading-relaxed opacity-80">
            Sebuah ruang di internet, didedikasikan sepenuhnya untuk kamu dan cerita manis kita.
          </p>
        </div>
        
        {/* Placeholder / decorative element like the sleek HTML */}
        <div className="flex-1 w-full bg-gradient-to-br from-rose-300 to-rose-400 rounded-2xl min-h-[300px] flex items-center justify-center relative overflow-hidden shadow-sm">
           <Heart fill="currentColor" className="w-24 h-24 text-white opacity-60 animate-pulse" />
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-6 md:bottom-12 text-rose-500 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p className="text-[10px] tracking-widest uppercase mb-4 animate-bounce opacity-70">Scroll ke bawah</p>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-rose-500 to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
}
