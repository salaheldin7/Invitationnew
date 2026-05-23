import { useState, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

interface EnvelopeIntroProps {
  onOpen: () => void;
  onStartAudio: () => void;
}

export default function EnvelopeIntro({
  onOpen,
  onStartAudio,
}: EnvelopeIntroProps) {
  const [phase, setPhase] = useState<'idle' | 'exiting' | 'done'>('idle');
  const started = useRef(false);

  // Smooth Elegant Parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-400, 400], [4, -4]);
  const rotateY = useTransform(x, [-400, 400], [-4, 4]);

  const handlePointerMove = (e: MouseEvent<HTMLDivElement>) => {
    if (phase !== 'idle') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    if (started.current) return;
    started.current = true;

    try {
      onStartAudio();
    } catch (e) {
      console.warn("Audio context skipped or deferred:", e);
    }

    setPhase('exiting');

    setTimeout(() => {
      setPhase('done');
      onOpen();
    }, 850);
  };

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer overflow-hidden select-none perspective-[1500px]"
          style={{ 
            background: 'radial-gradient(circle at center, #2d040a 0%, #120103 75%, #050001 100%)' 
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          onClick={handleClick}
          onMouseMove={handlePointerMove}
          onMouseLeave={handlePointerLeave}
        >
          {/* Subtle Outer Vignette (Pushed to the edges to keep the envelope clean and clear) */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-black/60 pointer-events-none" />
          <div className="absolute inset-0 z-20 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle, transparent 40%, rgba(5,0,1,0.85) 95%)' }} />

          {/* Under-Glow Backlight behind the envelope */}
          <motion.div
            className="absolute pointer-events-none w-[85vw] h-[85vw] max-w-[700px] max-h-[700px] rounded-full z-10"
            animate={{ 
              opacity: phase === 'exiting' ? 0 : [0.3, 0.45, 0.3],
              scale: phase === 'exiting' ? 0.95 : [1, 1.03, 1]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background: 'radial-gradient(circle, rgba(245,222,179,0.18) 0%, rgba(186,24,48,0.1) 50%, transparent 75%)',
              filter: 'blur(60px)',
            }}
          />

          {/* 3D Parallax Canvas */}
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            transition={{ type: 'spring', stiffness: 80, damping: 25 }}
            className="relative w-full h-full flex flex-col items-center justify-center"
          >
            {/* The Envelope Artwork - Restored to full high-visibility clarity */}
            <motion.img
              src="/logo/introred.JPG"
              alt="Invitation envelope"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ translateZ: '-30px' }}
              initial={{ opacity: 0, scaleX: 1, scaleY: 1.08 }}
              animate={{
                opacity: phase === 'exiting' ? 0 : 0.95, // Highly visible, rich presence
                scaleX: 1,
                scaleY: phase === 'exiting' ? 1.12 : 1.08,
                filter: phase === 'exiting' 
                  ? 'brightness(0) blur(20px)' 
                  : 'brightness(0.9) contrast(1.15) saturate(1.1)' // Optimized crisp illumination
              }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
            />

            {/* Premium Champagne Foil Shimmer Line across the envelope */}
            <motion.div
              className="absolute inset-0 pointer-events-none mix-blend-color-dodge opacity-25 z-10"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              style={{
                background: 'linear-gradient(115deg, transparent 40%, rgba(245,222,179,0.4) 50%, transparent 60%)',
              }}
            />

            {/* Text UI - Shifted slightly downward to showcase the centerpiece envelope artwork */}
            <motion.div
              className="absolute bottom-[14%] text-center flex flex-col items-center gap-2.5 z-30"
              style={{ 
                translateZ: '90px', // Intense depth separation
              }} 
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: phase === 'exiting' ? 0 : 1,
                y: phase === 'idle' ? [0, -4, 0] : 0,
              }}
              transition={{
                opacity: { delay: 0.2, duration: 0.6 },
                y: { duration: 3, ease: 'easeInOut', repeat: Infinity },
              }}
            >
              
              <div className="relative py-1.5 px-5">
                <span
                  className="tracking-[0.5em] uppercase text-xs sm:text-sm font-bold text-[#f5deb3]"
                  style={{
                    fontFamily: 'Cinzel, Georgia, serif',
                    textShadow: '0 0 25px rgba(245,222,179,0.4), 0 2px 10px rgba(0,0,0,0.95)'
                  }}
                >
                  Begin Experience
                </span>
                
                {/* Clean Horizontal Accent Flare */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#f5deb3]/60 to-transparent"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}