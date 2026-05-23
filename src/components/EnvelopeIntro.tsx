import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnvelopeIntroProps {
  onOpen: () => void;
  onStartAudio: () => void;
}

export default function EnvelopeIntro({ onOpen, onStartAudio }: EnvelopeIntroProps) {
  const [phase, setPhase] = useState<'idle' | 'playing' | 'done'>('idle');
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStart = async () => {
    if (phase !== 'idle') return;
    setPhase('playing');
    onStartAudio();
    try {
      await videoRef.current?.play();
    } catch {
      // Ignore autoplay blocks; user can tap again.
    }
  };

  const handleEnded = () => {
    if (phase === 'done') return;
    setPhase('done');
    onOpen();
  };

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-50 cursor-pointer"
          style={{ background: '#000' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          onClick={handleStart}
        >
          <motion.video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/intro.mov"
            poster="/logo/INTRO.png"
            playsInline
            muted
            preload="auto"
            onEnded={handleEnded}
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.04, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          {phase === 'idle' && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
