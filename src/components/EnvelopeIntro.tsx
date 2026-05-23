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
              'linear-gradient(180deg, #ffffff 0%, #fdfdfd 100%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          onClick={handleClick}
        >
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
              perspective: '2000px',
            }}
          >
            {/* Envelope body */}
            <div
              className="absolute inset-0 rounded-sm overflow-hidden"
              style={{
                background:
                  'linear-gradient(180deg, #ffffff 0%, #fdfdfd 100%)',
                boxShadow:
                  '0 30px 80px rgba(0,0,0,0.12), 0 8px 20px rgba(0,0,0,0.08)',
              }}
            >
              {/* Inner envelope lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 360 240"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="180"
                  y2="120"
                  stroke="#d9d9d9"
                  strokeWidth="0.8"
                  opacity="0.6"
                />

                <line
                  x1="360"
                  y1="0"
                  x2="180"
                  y2="120"
                  stroke="#d9d9d9"
                  strokeWidth="0.8"
                  opacity="0.6"
                />
              </svg>
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
                  stroke="#d9d9d9"
                  strokeWidth="0.6"
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
                    <stop offset="100%" stopColor="#f4f4f4" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Premium Circular Seal */}
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
                     'drop-shadow(0 10px 24px rgba(0,0,0,0.12))',
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
                    duration: 2,
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
                      cy="64"
                      r="42"
                      fill="rgba(0,0,0,0.14)"
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
                      stroke="rgba(255,255,255,0.7)"
                      strokeWidth="2.2"
                    />

                    {/* Inner ring */}
                    <circle
                      cx="60"
                      cy="56"
                      r="31"
                      fill="none"
                      stroke="rgba(200,200,200,0.45)"
                      strokeWidth="1"
                    />

                    {/* Gloss */}
                    <ellipse
                      cx="48"
                      cy="42"
                      rx="18"
                      ry="10"
                      fill="rgba(255,255,255,0.16)"
                      transform="rotate(-18 48 42)"
                    />

                    {/* Initials */}
                    <text
                      x="60"
                      y="64"
                      textAnchor="middle"
                      fontFamily="'Great Vibes', cursive"
                      fontSize="26"
                     fill="url(#silverTextGrad)"
                      fontWeight="400"
                    >
                      K N
                    </text>

                    {/* Gold gradient */}
                    <defs>
               <radialGradient
  id="introSealGrad"
  cx="35%"
  cy="30%"
  r="65%"
>
  <stop offset="0%" stopColor="#ffffff" />
  <stop offset="25%" stopColor="#f8f8f8" />
  <stop offset="55%" stopColor="#ececec" />
  <stop offset="100%" stopColor="#d9d9d9" />
</radialGradient>
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