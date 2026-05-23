import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Petal {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const initial: Petal[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 12 + 6,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 6,
      rotate: Math.random() * 360,
    }));
    setPetals(initial);

    const interval = setInterval(() => {
      setPetals(prev => [
        ...prev.slice(-15),
        {
          id: Date.now(),
          x: Math.random() * 100,
          size: Math.random() * 12 + 6,
          duration: Math.random() * 8 + 8,
          delay: 0,
          rotate: Math.random() * 360,
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatePresence>
        {petals.map(petal => (
          <motion.div
            key={petal.id}
            className="absolute"
            style={{
              left: `${petal.x}%`,
              top: '-20px',
              width: petal.size,
              height: petal.size * 1.4,
            }}
            initial={{ y: -20, opacity: 0.8, rotate: petal.rotate }}
            animate={{
              y: '110vh',
              opacity: [0.8, 0.6, 0.4, 0],
              rotate: petal.rotate + 180,
              x: [0, 15, -10, 20, -5, 0],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              ease: 'linear',
              x: { duration: petal.duration, ease: 'easeInOut', times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
            }}
            exit={{ opacity: 0 }}
          >
            <PetalShape size={petal.size} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function PetalShape({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 20 28" fill="none">
      <path
        d="M10 2 C14 2 18 7 18 13 C18 19 14 26 10 26 C6 26 2 19 2 13 C2 7 6 2 10 2Z"
        fill="rgba(201, 169, 110, 0.45)"
        stroke="rgba(201, 169, 110, 0.25)"
        strokeWidth="0.5"
      />
      <path
        d="M10 4 C10 4 10 24 10 24"
        stroke="rgba(201, 169, 110, 0.25)"
        strokeWidth="0.5"
      />
    </svg>
  );
}
