import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnvelopeIntroProps {
  onOpen: () => void;
  onStartAudio: () => void;
}

export default function EnvelopeIntro({
  onOpen,
  onStartAudio,
}: EnvelopeIntroProps) {
  const [phase, setPhase] = useState<
    'idle' | 'opening' | 'opened' | 'done'
  >('idle');

  const started = useRef(false);

  const handleClick = () => {
    if (started.current) return;

    started.current = true;

    onStartAudio();

    setTimeout(() => setPhase('opening'), 300);

    setTimeout(() => setPhase('opened'), 1800);

    setTimeout(() => {
      setPhase('done');
      onOpen();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer overflow-hidden"
          style={{
            background:
              'radial-gradient(circle at top, #ffffff 0%, #f7f4ef 45%, #efe9df 100%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          onClick={handleClick}
        >
          {/* Ambient glow */}
          <motion.div
            className="absolute"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.18, 0.28, 0.18],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              width: 700,
              height: 700,
              borderRadius: '999px',
              background:
                'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 70%)',
              filter: 'blur(40px)',
            }}
          />

          {/* Cinematic zoom */}
          <motion.div
            className="relative"
            initial={{
              scale: 2.1,
              opacity: 0,
            }}
            animate={{
              scale:
                phase === 'opening'
                  ? 2.7
                  : phase === 'opened'
                  ? 3.0
                  : 2.1,
              opacity: 1,
              y: phase === 'opening' ? 40 : 20,
              rotateX: phase === 'opening' ? 6 : 2,
              rotateZ: phase === 'opening' ? -1.5 : 0,
            }}
            exit={{
              scale: 3.4,
              opacity: 0,
            }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              width: 360,
              height: 240,
              perspective: '2400px',
            }}
          >
            {/* Envelope body */}
            <div
              className="absolute inset-0 rounded-[6px] overflow-hidden"
              style={{
                background:
                  'linear-gradient(180deg, #ffffff 0%, #faf8f4 35%, #f3eee6 100%)',
                boxShadow:
                  '0 40px 100px rgba(0,0,0,0.16), 0 12px 28px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
                border: '1px solid rgba(220,215,205,0.7)',
              }}
            >
              {/* Silk texture */}
              <div
                className="absolute inset-0"
                style={{
                  opacity: 0.12,
                  backgroundImage:
                    'linear-gradient(135deg, rgba(255,255,255,0.6) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.6) 75%, transparent 75%, transparent)',
                  backgroundSize: '14px 14px',
                  mixBlendMode: 'soft-light',
                }}
              />

              {/* Envelope folds */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 360 240"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="180"
                  y2="120"
                  stroke="rgba(198,188,172,0.55)"
                  strokeWidth="1"
                />

                <line
                  x1="360"
                  y1="0"
                  x2="180"
                  y2="120"
                  stroke="rgba(198,188,172,0.55)"
                  strokeWidth="1"
                />

                <line
                  x1="0"
                  y1="240"
                  x2="180"
                  y2="120"
                  stroke="rgba(210,202,188,0.28)"
                  strokeWidth="0.8"
                />

                <line
                  x1="360"
                  y1="240"
                  x2="180"
                  y2="120"
                  stroke="rgba(210,202,188,0.28)"
                  strokeWidth="0.8"
                />
              </svg>

              {/* Realistic inner shadow */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  opacity:
                    phase === 'opening'
                      ? 0.45
                      : phase === 'opened'
                      ? 0.15
                      : 0,
                }}
                transition={{ duration: 1.4 }}
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.08) 40%, transparent 75%)',
                }}
              />
            </div>

            {/* Flap */}
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{
                height: '55%',
                transformOrigin: 'top center',
                transformStyle: 'preserve-3d',
                zIndex: 10,
              }}
              initial={{ rotateX: 0 }}
              animate={{
                rotateX:
                  phase === 'opening' || phase === 'opened'
                    ? -180
                    : 0,
              }}
              transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Light reaction */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  opacity:
                    phase === 'opening'
                      ? [0.15, 0.35, 0.12]
                      : 0.1,
                }}
                transition={{
                  duration: 1.8,
                }}
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.45) 0%, transparent 60%)',
                  mixBlendMode: 'screen',
                }}
              />

              <svg
                viewBox="0 0 360 140"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              >
                <polygon
                  points="0,0 360,0 180,130"
                  fill="url(#introFlapGrad)"
                  stroke="rgba(210,205,196,0.7)"
                  strokeWidth="0.7"
                />

                <defs>
                  <linearGradient
                    id="introFlapGrad"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="45%" stopColor="#faf7f2" />
                    <stop offset="100%" stopColor="#eee7dc" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Paper thickness */}
              <div
                className="absolute top-full left-0 w-full"
                style={{
                  height: 4,
                  background:
                    'linear-gradient(90deg, #ddd6ca 0%, #f8f6f2 50%, #ddd6ca 100%)',
                  opacity: 0.9,
                }}
              />

              {/* Dynamic shadow */}
              <motion.div
                className="absolute top-[95%] left-1/2 -translate-x-1/2"
                animate={{
                  opacity:
                    phase === 'opening'
                      ? [0.28, 0.42, 0.18]
                      : 0.18,
                  scaleX:
                    phase === 'opening'
                      ? [1, 1.18, 0.9]
                      : 1,
                }}
                transition={{
                  duration: 1.8,
                }}
                style={{
                  width: 220,
                  height: 28,
                  borderRadius: '999px',
                  background:
                    'radial-gradient(circle, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0) 75%)',
                  filter: 'blur(12px)',
                }}
              />

              {/* Luxury Seal */}
              <div
                style={{
                  position: 'absolute',
                  bottom: -52,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 120,
                  height: 120,
                  zIndex: 15,
                  filter:
                    'drop-shadow(0 24px 34px rgba(0,0,0,0.22))',
                }}
              >
                <motion.div
                  animate={{
                    scale:
                      phase === 'opening'
                        ? [1, 1.05, 1]
                        : 1,
                  }}
                  transition={{
                    duration: 2.2,
                    repeat:
                      phase === 'opening' ? Infinity : 0,
                  }}
                >
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                  >
                    {/* Shadow */}
                    <circle
                      cx="60"
                      cy="66"
                      r="42"
                      fill="rgba(0,0,0,0.12)"
                    />

                    {/* Main seal */}
                    <circle
                      cx="60"
                      cy="56"
                      r="42"
                      fill="url(#introSealGrad)"
                    />

                    {/* Outer ring */}
                    <circle
                      cx="60"
                      cy="56"
                      r="39"
                      fill="none"
                      stroke="rgba(255,255,255,0.85)"
                      strokeWidth="2.2"
                    />

                    {/* Inner ring */}
                    <circle
                      cx="60"
                      cy="56"
                      r="31"
                      fill="none"
                      stroke="rgba(180,180,180,0.4)"
                      strokeWidth="1"
                    />

                    {/* Pearl gloss */}
                    <ellipse
                      cx="48"
                      cy="42"
                      rx="18"
                      ry="10"
                      fill="rgba(255,255,255,0.28)"
                      transform="rotate(-18 48 42)"
                    />

                    {/* Initials */}
                    <text
                      x="60"
                      y="65"
                      textAnchor="middle"
                      fontFamily="'Great Vibes', cursive"
                      fontSize="28"
                      fill="url(#silverTextGrad)"
                      fontWeight="400"
                      style={{
                        filter:
                          'drop-shadow(0 1px 2px rgba(255,255,255,0.5))',
                      }}
                    >
                      K N
                    </text>

                    <defs>
                      {/* Pearl seal gradient */}
                      <radialGradient
                        id="introSealGrad"
                        cx="35%"
                        cy="30%"
                        r="65%"
                      >
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="25%" stopColor="#fafafa" />
                        <stop offset="55%" stopColor="#ece8e1" />
                        <stop offset="100%" stopColor="#d8d2c8" />
                      </radialGradient>

                      {/* Silver initials */}
                      <linearGradient
                        id="silverTextGrad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="20%" stopColor="#f4f4f4" />
                        <stop offset="45%" stopColor="#d6d6d6" />
                        <stop offset="70%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#bcbcbc" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}