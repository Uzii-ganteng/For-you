'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Mail } from 'lucide-react';

export function Letter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-xl mx-auto flex flex-col items-center justify-center py-4">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0, filter: 'blur(10px)' }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setIsOpen(true)}
            className="cursor-pointer group relative bg-gradient-to-br from-rose-200 to-rose-300 w-80 sm:w-96 h-56 rounded-xl shadow-sleek flex items-center justify-center overflow-hidden transition-all border border-rose-300/50"
          >
            {/* Envelope Flap Decoration */}
            <div 
              className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-rose-300 to-rose-200 origin-top overflow-hidden z-10 shadow-sm border-b border-rose-300/50" 
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            ></div>
            
            <div className="z-20 p-4 bg-rose-50 rounded-full shadow-lg group-hover:shadow-rose-400/50 transition-all duration-500">
              <Mail className="w-10 h-10 text-rose-500 " />
            </div>
            
            <div className="absolute bottom-6 font-serif text-rose-900 text-xs tracking-[0.2em] shadow-sm uppercase px-5 py-2 bg-white/60 backdrop-blur-md rounded-full font-semibold">
              Buka Hatiku
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ y: 50, opacity: 0, rotateX: 20 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{ type: 'spring', damping: 20 }}
            className="bg-white p-8 sm:p-12 rounded-3xl shadow-sleek relative w-full border border-rose-200/50"
          >
            {/* Stamp / Seal */}
            <div className="absolute -top-6 left-1/2 -ml-6 bg-rose-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md border-4 border-white">
              <Heart className="w-5 h-5" fill="currentColor" />
            </div>
            
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-serif text-3xl text-rose-950 mb-8 mt-2 text-center"
            >
              Halo Sayang,
            </motion.h3>
            
            <div className="space-y-5 text-rose-900/80 font-light leading-relaxed text-base sm:text-lg">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1.5 }}
              >
                Aku mencintaimu dengan cara yang mungkin tak selalu bisa aku jelaskan dengan kata-kata, tapi selalu bisa aku rasakan dengan seluruh hatiku. Kehadiranmu bukan sekadar melengkapi hidupku, tapi mengubahnya menjadi sesuatu yang jauh lebih berarti dari yang pernah aku bayangkan. Sejak kamu datang, dunia terasa lebih hangat, lebih hidup, dan setiap detik yang aku jalani terasa punya tujuan—yaitu kamu.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 6.5, duration: 1.5 }}
              >
                Ada hal-hal sederhana yang dulu terasa biasa saja, tapi sekarang menjadi istimewa karena ada kamu di dalamnya. Senyummu, tawamu, bahkan caramu diam—semuanya punya tempat tersendiri di hatiku. Setiap langkah yang aku ambil, tanpa sadar selalu mengarah kembali padamu, seolah kamu adalah rumah tempat aku ingin pulang, apa pun yang terjadi.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 11, duration: 1.5 }}
              >
                Cintaku ke kamu bukan sesuatu yang bisa diukur dengan waktu atau jarak, karena ia terus tumbuh tanpa batas, tanpa syarat, dan tanpa alasan yang rumit. Kamu adalah alasan di balik setiap rasa bahagia yang aku rasakan, dan juga kekuatan di balik setiap hal yang ingin aku perjuangkan. Bahkan ketika dunia terasa berat, memikirkanmu saja sudah cukup membuatku bertahan.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 15.5, duration: 1.5 }}
              >
                Aku mungkin tidak selalu sempurna, tidak selalu tahu cara terbaik untuk menunjukkan perasaanku, tapi satu hal yang pasti—aku selalu tulus mencintaimu. Aku memilih kamu, bukan hanya untuk hari ini, tapi untuk setiap hari yang akan datang. Aku ingin tetap di sampingmu, melewati segala cerita, baik yang indah maupun yang sulit, dan tetap menggenggam tanganmu tanpa ragu.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 20, duration: 2 }}
                className="font-serif italic text-rose-800 text-xl text-right mt-12 block pr-4"
              >
                Karena bagiku, mencintaimu bukan hanya tentang perasaan, tapi tentang keputusan yang akan selalu aku ambil, lagi dan lagi. 💛
              </motion.p>
            </div>
            
            <motion.hr 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 22, duration: 1 }} 
              className="my-8 border-rose-100" 
            />
            
            <motion.button 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 23, duration: 1 }}
              onClick={() => setIsOpen(false)}
              className="mx-auto flex items-center justify-center text-xs font-semibold text-rose-400 hover:text-rose-600 uppercase tracking-widest transition-colors bg-rose-50 px-6 py-2 rounded-full"
            >
              Simpan Lagi
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
