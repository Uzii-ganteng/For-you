'use client';
import Image from 'next/image';
import { motion } from 'motion/react';

interface PolaroidProps {
  src: string;
  alt: string;
  caption: string;
  rotation?: number;
}

export function Polaroid({ src, alt, caption, rotation = 0 }: PolaroidProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
      initial={{ rotate: rotation, opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="relative bg-white p-3 pb-12 shadow-sleek rounded-2xl w-64 md:w-72 flex-shrink-0 cursor-pointer origin-center border border-rose-200/50"
      style={{ rotate: `${rotation}deg` }}
    >
      <div className="relative w-full h-64 bg-rose-50 overflow-hidden shadow-inner">
        <Image src={src} alt={alt} fill className="object-cover" referrerPolicy="no-referrer" />
      </div>
      <p className="absolute bottom-4 justify-center flex left-0 w-full text-center font-serif text-rose-800 text-lg px-2">
        {caption}
      </p>
    </motion.div>
  );
}
