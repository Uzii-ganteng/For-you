'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Gift, Check } from 'lucide-react';

const couponsList = [
  { id: 1, title: 'Bebas Ngambek 1 Hari', desc: 'Aku janji bakal nurutin semua kemauan kamu seharian.' },
  { id: 2, title: 'Makan Dibayarin', desc: 'Kamu yang pilih tempatnya, aku yang bayar billnya!' },
  { id: 3, title: 'Nonton Netflix Bareng', desc: 'Valid buat marathon series/film favorit kamu sepuasnya.' },
  { id: 4, title: 'Pijat Bahu Gratis', desc: 'Spesial buat ngilangin pegel-pegel abis kamu seharian sibuk.' },
];

export function Coupons() {
  const [claimed, setClaimed] = useState<number[]>([]);

  const toggleClaim = (id: number) => {
    if (!claimed.includes(id)) {
      setClaimed([...claimed, id]);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {couponsList.map((coupon, idx) => {
        const isClaimed = claimed.includes(coupon.id);
        
        return (
          <motion.div
            key={coupon.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            onClick={() => toggleClaim(coupon.id)}
            className={`relative overflow-hidden p-6 rounded-3xl transition-all cursor-pointer ${
              isClaimed 
                ? 'bg-rose-100/50 border border-rose-300 text-rose-500 shadow-inner' 
                : 'bg-white border border-rose-200/60 shadow-sleek hover:border-rose-300'
            }`}
          >
            {isClaimed && (
              <div className="absolute inset-0 bg-white/40 flex items-center justify-center z-10 backdrop-blur-[2px]">
                 <motion.div 
                   initial={{ scale: 0, rotate: -20 }}
                   animate={{ scale: 1, rotate: -10 }}
                   className="bg-rose-500 text-white px-5 py-2.5 rounded-full flex items-center font-medium shadow-xl tracking-wide uppercase text-sm"
                 >
                  <Check className="w-5 h-5 mr-2" /> Udah Dipake
                </motion.div>
              </div>
            )}
            
            <div className="flex items-start mb-4">
              <div className={`p-3 rounded-full mr-4 shadow-sm ${isClaimed ? 'bg-rose-200' : 'bg-rose-50 text-rose-500'}`}>
                <Gift className="w-6 h-6" />
              </div>
              <div className="mt-1">
                <h4 className="font-serif text-xl font-medium mb-2 leading-tight text-rose-900">{coupon.title}</h4>
                <p className="text-sm text-rose-700/80 font-light leading-relaxed">{coupon.desc}</p>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-dashed border-rose-100 flex justify-between items-center text-[10px] sm:text-xs tracking-widest uppercase text-rose-400/60 font-mono">
              <span>Masa Berlaku: Selamanya</span>
              <span>Kupon Cinta</span>
            </div>
            
            {/* Cutout notches */}
            <div className="absolute -left-4 top-1/2 -mt-4 w-8 h-8 bg-rose-50 rounded-full border-r-2 border-dashed border-rose-200 hidden sm:block"></div>
            <div className="absolute -right-4 top-1/2 -mt-4 w-8 h-8 bg-rose-50 rounded-full border-l-2 border-dashed border-rose-200 hidden sm:block"></div>
          </motion.div>
        );
      })}
    </div>
  );
}
