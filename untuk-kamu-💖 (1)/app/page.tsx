import { FloatingHearts } from '@/components/floating-hearts';
import { Timeline } from '@/components/timeline';
import { Polaroid } from '@/components/polaroid';
import { Coupons } from '@/components/coupons';
import { Letter } from '@/components/letter';
import { Hero } from '@/components/hero';
import { MusicPlayer } from '@/components/music-player';
import { WhatsAppForm } from '@/components/whatsapp-form';
import { Heart } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden flex flex-col items-center bg-rose-50 selection:bg-rose-200 selection:text-rose-900">
      <FloatingHearts />
      <MusicPlayer />
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Photo Gallery Section */}
      <section className="w-full py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4 relative z-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-rose-900 mb-4">Galeri Kenangan</h2>
            <p className="text-rose-900 opacity-70 font-light">Momen-momen yang paling kusuka pas bareng kamu.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-14 px-4 py-8 overflow-visible">
            <Polaroid 
              src="https://picsum.photos/seed/lovegirl/400/500" 
              alt="Momen 1" 
              caption="Senyum manismu" 
              rotation={-4} 
            />
            <Polaroid 
              src="https://picsum.photos/seed/lovecouple/400/500" 
              alt="Momen 2" 
              caption="Pas kita jalan" 
              rotation={3} 
            />
            <Polaroid 
              src="https://picsum.photos/seed/lovehappy/500/400" 
              alt="Momen 3" 
              caption="Selalu barengan" 
              rotation={-2} 
            />
          </div>
        </div>
      </section>

      {/* 3. Timeline / Story Section */}
      <section className="w-full py-20 z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-rose-900 mb-4">Perjalanan Kita</h2>
            <p className="text-rose-900 opacity-70 font-light">Mengingat kembali gimana awalnya semua ini terjadi.</p>
          </div>
          <Timeline />
        </div>
      </section>

      {/* 4. Love Letter Section */}
      <section className="w-full py-20 z-10 px-4 relative">
        <div className="max-w-4xl mx-auto relative z-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-rose-900 mb-4">Pesan Rahasia</h2>
            <p className="text-rose-900 opacity-70 font-light">Ada sesuatu yang pengen aku omongin.</p>
          </div>
          <Letter />
        </div>
      </section>

      {/* 5. Love Coupons Section */}
      <section className="w-full pt-20 pb-20 z-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-rose-900 mb-4">Kupon Cinta</h2>
            <p className="text-rose-900 opacity-70 font-light max-w-lg mx-auto">
              Ini hadiah kecil buat kamu. Pilih aja mau pake yang mana, 
              kapanpun kamu butuh sesuatu, langsung request ya!
            </p>
          </div>
          <Coupons />
        </div>
      </section>

      {/* 6. WhatsApp Form Section */}
      <section className="w-full pt-10 pb-28 z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-rose-900 mb-3">Balas Pesanku?</h2>
            <p className="text-rose-900 opacity-70 font-light max-w-lg mx-auto">
              Kalau ada yang mau disampein, ketik di bawah aja. Pesannya bakal langsung masuk ke WhatsApp aku.
            </p>
          </div>
          <WhatsAppForm />
        </div>
      </section>
      
      {/* 7. Footer */}
      <footer className="w-full py-12 bg-rose-950 text-rose-200/80 text-center z-10">
        <p className="flex items-center justify-center uppercase tracking-widest text-xs font-semibold mb-2">
          DIBUAT DENGAN <Heart fill="currentColor" className="w-4 h-4 mx-3 text-rose-500 animate-pulse" /> OLEH Rifky Fauzi Syafutra
        </p>
        <p className="text-xs opacity-50 font-serif">Khusus untuk orang paling berharga di hidupku.</p>
      </footer>
    </main>
  );
}
