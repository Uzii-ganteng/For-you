'use client';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function FloatingHearts() {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    // Generate hearts on client side to avoid hydration mismatch
    const newHearts = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 15,
      size: 15 + Math.random() * 20,
    }));
    setHearts(newHearts);
  }, []);

  if (hearts.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-[-50px] text-rose-300/30"
          style={{ left: `${heart.left}%` }}
          animate={{
            y: ['0vh', '-120vh'],
            x: [0, Math.random() * 60 - 30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'linear',
          }}
        >
          <svg width={heart.size} height={heart.size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
