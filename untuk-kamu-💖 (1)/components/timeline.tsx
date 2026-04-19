'use client';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const events = [
  { date: 'Bulan / Tahun', title: 'Pertama Kali Bertemu', desc: 'Awal dari segalanya, saat mata kita pertama kali saling menatap.' },
  { date: 'Bulan / Tahun', title: 'Kencan Pertama', desc: 'Momen canggung tapi manis yang selalu bikin senyum-senyum sendiri kalau diingat.' },
  { date: 'Bulan / Tahun', title: 'Hari Jadian', desc: 'Hari di mana kita akhirnya memutuskan untuk jalan bareng dan memulai petualangan ini.' },
  { date: 'Hari Ini', title: 'Makin Sayang', desc: 'Dan perasaan itu nggak pernah berhenti, malah makin besar setiap harinya.' },
];

export function Timeline() {
  return (
    <div className="relative max-w-2xl mx-auto py-12">
      {/* Central Line */}
      <div className="absolute left-[20px] top-4 bottom-4 w-0.5 bg-rose-200 md:left-1/2 md:-ml-[1px] rounded-full" />

      <div className="space-y-16">
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Timeline Ring inside Line */}
            <div className="absolute left-[4px] md:left-1/2 md:-ml-[16px] w-8 h-8 rounded-full bg-rose-400 text-white flex items-center justify-center shadow-lg z-10 box-border border-4 border-rose-50">
              <Heart className="w-3 h-3" fill="currentColor" />
            </div>

            {/* Content box */}
            <div className={`ml-12 md:ml-0 md:w-1/2 w-full ${idx % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}>
              <div className="bg-white pb-6 p-6 md:p-8 rounded-3xl shadow-sleek border border-rose-200/60 hover:border-rose-300 transition-colors">
                <span className="text-rose-500 font-semibold text-[10px] tracking-wider uppercase mb-2 block">{event.date}</span>
                <h3 className="font-serif text-2xl mb-3 text-rose-900 leading-tight">{event.title}</h3>
                <p className="text-rose-900 opacity-80 leading-relaxed font-light text-sm">{event.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
