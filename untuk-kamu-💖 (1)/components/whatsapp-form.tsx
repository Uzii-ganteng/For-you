'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export function WhatsAppForm() {
  const [message, setMessage] = useState('');
  const phoneNumber = '6289646428429';

  const handleSend = () => {
    if (!message.trim()) return;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setMessage(''); // Clear after sending
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sleek border border-rose-200/50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col gap-6">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tulis pesan kamu di sini ya sayang..."
          rows={4}
          className="w-full p-5 rounded-2xl border border-rose-200/80 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 resize-none bg-rose-50/50 text-rose-900 placeholder:text-rose-900/40 text-base md:text-lg transition-all"
        />
        
        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSend}
            disabled={!message.trim()}
            className="bg-rose-500 disabled:bg-rose-300 hover:bg-rose-600 text-white rounded-full px-8 py-3.5 flex items-center justify-center gap-3 transition-colors shadow-md font-medium tracking-wide"
          >
            Kirim ke WhatsApp <Send className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
