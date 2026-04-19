'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, SkipForward, SkipBack, Music, X } from 'lucide-react';

const playlist = [
  { id: 1, title: 'Kisah Kita 💖', artist: 'Penyanyi Pilihanmu', src: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-110098.mp3' },
  { id: 2, title: 'Selalu Bersama', artist: 'Melodi Cinta', src: 'https://cdn.pixabay.com/download/audio/2022/04/27/audio_2443a6c507.mp3?filename=acoustic-vibe-109015.mp3' }
];

export function MusicPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false)); // Catch autoplay or interaction errors
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsPlaying(!isPlaying);
  };
  
  const nextSong = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentSong((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const prevSong = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentSong((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  const handleEnded = () => {
    setCurrentSong((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src={playlist[currentSong].src} 
        onEnded={handleEnded}
      />
      
      <div className="fixed bottom-6 right-6 z-50 flex items-end justify-end">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.button
              key="closed"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsOpen(true)}
              className="bg-white shadow-sleek border border-rose-200 text-rose-500 rounded-full p-4 flex items-center justify-center gap-2 hover:bg-rose-50 transition-colors"
            >
              <Music className={`w-6 h-6 ${isPlaying ? 'animate-pulse text-rose-600' : ''}`} />
            </motion.button>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              className="bg-white shadow-[0_20px_60px_-15px_rgba(225,29,72,0.15)] border border-rose-200/60 rounded-3xl p-5 w-72 md:w-80"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] tracking-[2px] uppercase text-rose-500 font-semibold">Our Playlist</span>
                <button onClick={() => setIsOpen(false)} className="text-rose-300 hover:text-rose-500 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center border border-rose-200 relative overflow-hidden flex-shrink-0">
                  <Music className="w-5 h-5 text-rose-400 absolute z-0" />
                  {isPlaying && (
                    <div className="absolute inset-0 bg-rose-500/10 animate-pulse z-10" />
                  )}
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-serif text-lg text-rose-900 leading-tight truncate">{playlist[currentSong].title}</h4>
                  <p className="text-xs text-rose-900/60 font-light truncate">{playlist[currentSong].artist}</p>
                </div>
              </div>

              {/* Fake Progress Bar for UI */}
              <div className="song-bar h-1 bg-rose-100 rounded-full mb-5 relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 bottom-0 bg-rose-500"
                  initial={{ width: "0%" }}
                  animate={{ width: isPlaying ? "100%" : "0%" }}
                  transition={{ duration: 180, ease: "linear" }} // Mock 3 minutes
                />
              </div>

              <div className="flex items-center justify-center gap-6">
                <button onClick={prevSong} className="text-rose-400 hover:text-rose-600 transition-colors">
                  <SkipBack className="w-5 h-5" />
                </button>
                <button 
                  onClick={togglePlay} 
                  className="bg-rose-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-rose-600 transition-colors hover:scale-105"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" fill="currentColor" />
                  ) : (
                    <Play className="w-5 h-5 ml-1" fill="currentColor" />
                  )}
                </button>
                <button onClick={nextSong} className="text-rose-400 hover:text-rose-600 transition-colors">
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
