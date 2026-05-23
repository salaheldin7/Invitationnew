import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      className="min-h-[68svh] sm:min-h-[110vh] flex flex-col items-center justify-start relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1b0509 0%, #2a0a12 55%, #140507 100%)',
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/logo/backgroundsection2.PNG)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          backgroundSize: 'contain',
          opacity: 0.22,
          filter: 'brightness(0.85) saturate(0.8)',
        }}
      />

      {/* Main Content */}
      <motion.div
        className="
          relative z-10 flex flex-col items-center text-center
          px-6 w-full max-w-lg mx-auto
        "
        style={{
          paddingTop: '0px',
          paddingBottom: '32px',
        }}
        initial={{ opacity: 0, y: -220 }}
        animate={{ opacity: 1, y: -35 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Basmala */}
        <motion.img
          src="/logo/Basmala.png"
          alt="Basmala"
          className="w-52 sm:w-72 mx-auto opacity-90 pointer-events-none"
          style={{
            marginTop: '12px',
            marginBottom: '-28px',
          }}
          initial={{ opacity: 0, y: -28 }}
          animate={{ opacity: 1, y: -6 }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
        />

        {/* Gold divider */}
        <motion.div
          className="golden-divider w-40 sm:w-48"
          style={{
            marginTop: '-22px',
            marginBottom: '-8px',
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
        />

        {/* Center logo */}
        <motion.div
          style={{
            marginBottom: '-6px',
          }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.9,
            type: 'spring',
            damping: 14,
          }}
        >
          <img
            src="/logo/logo2.PNG"
            alt="Karim and Nada monogram"
            style={{
              width: 'clamp(52px, 14vw, 96px)',
            }}
            className="opacity-70 mx-auto"
          />
        </motion.div>

        {/* Save the Date */}
        <motion.p
          className="font-script lux-text-muted"
          style={{
            fontSize: 'clamp(26px, 8vw, 40px)',
            marginBottom: '-2px',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
          }}
        >
          Save the Date
        </motion.p>

        {/* Arabic */}
        <motion.p
          className="font-arabic lux-text-soft"
          style={{
            fontSize: 'clamp(13px, 4vw, 18px)',
            marginBottom: '8px',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
          dir="rtl"
        >
          احفظوا التاريخ
        </motion.p>

        {/* Names */}
        <motion.div
          style={{
            marginBottom: '6px',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
          }}
        >
          <h1
            className="font-script gold-text leading-tight px-2"
            style={{
              fontSize: 'clamp(34px, 10vw, 60px)',
            }}
          >
            Karim & Nada
          </h1>
          <p
        className="font-basmala arabic-gold"
            style={{
              fontSize: 'clamp(22px, 6.6vw, 34px)',
              marginTop: '-4px',
              animationDuration: '6s',
            }}
            dir="rtl"
          >
            كريم يوسف و ندى هشام
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="golden-divider w-52 sm:w-64"
          style={{
            marginBottom: '12px',
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 1.0,
            duration: 0.8,
          }}
        />

        {/* Date row */}
        <motion.div
          className="flex w-full items-center justify-center gap-4 sm:gap-6"
          style={{
            marginBottom: '4px',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.1,
            duration: 0.8,
          }}
        >
          <span
            className="font-script lux-text-muted"
            style={{
              fontSize: 'clamp(20px, 6vw, 30px)',
            }}
          >
            August
          </span>

          <div className="text-center px-4 border-l border-r border-[rgba(201,169,110,0.35)]">
            <span
              className="font-cinzel lux-text font-light"
              style={{
                fontSize: 'clamp(26px, 8vw, 40px)',
              }}
            >
              21
            </span>
          </div>

          <span
            className="font-script lux-text-muted"
            style={{
              fontSize: 'clamp(20px, 6vw, 30px)',
            }}
          >
            2026
          </span>
        </motion.div>

        {/* Time */}
        <motion.p
          className="font-cinzel text-xs tracking-[0.3em] lux-text-faint uppercase"
          style={{
            marginBottom: '12px',
          }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
        >
          7:00 PM
        </motion.p>

        {/* Location */}
        <motion.div
          style={{
            marginBottom: '18px',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.3,
            duration: 0.8,
          }}
        >
          <p
            className="font-serif-elegant tracking-widest uppercase lux-text-soft"
            style={{
              fontSize: 'clamp(9px, 2.5vw, 13px)',
            }}
          >
            The Westin Cairo Golf Resort and Spa
          </p>

          <p
            className="font-arabic normal-case lux-text-soft mt-1"
            style={{
              fontSize: 'clamp(12px, 3.5vw, 16px)',
            }}
            dir="rtl"
          >
            القاهرة · فندق ويستن كايرو
          </p>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.6,
            duration: 0.8,
          }}
        >
          <span className="font-serif-elegant text-xs tracking-widest lux-text-faint uppercase">
            scroll to explore
          </span>

          <motion.div
            className="w-px h-8 bg-gradient-to-b from-[#c9a96e]/70 to-transparent"
            animate={{
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom floral border */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 pointer-events-none z-0">
        <BottomFloralBorder />
      </div>
    </section>
  );
}

function BottomFloralBorder() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 800 96"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <path
        d="M0 96 Q100 60 200 80 Q300 96 400 70 Q500 44 600 70 Q700 96 800 80 L800 96 Z"
        fill="url(#bottomGrad)"
        opacity="0.15"
      />

      {[80, 200, 320, 480, 600, 720].map((x, i) => (
        <g key={i} transform={`translate(${x}, 50)`}>
          <circle cx="0" cy="-10" r="8" fill="#c9a96e" opacity="0.2" />
          <circle cx="-8" cy="0" r="6" fill="#c9a96e" opacity="0.15" />
          <circle cx="8" cy="0" r="6" fill="#c9a96e" opacity="0.15" />

          <rect
            x="-1"
            y="0"
            width="2"
            height="20"
            fill="#c9a96e"
            opacity="0.2"
          />

          <ellipse
            cx="-6"
            cy="12"
            rx="6"
            ry="3"
            transform="rotate(-30 -6 12)"
            fill="#c9a96e"
            opacity="0.15"
          />

          <ellipse
            cx="6"
            cy="12"
            rx="6"
            ry="3"
            transform="rotate(30 6 12)"
            fill="#c9a96e"
            opacity="0.15"
          />
        </g>
      ))}

      <defs>
        <linearGradient
          id="bottomGrad"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#c9a96e" stopOpacity="0" />
          <stop offset="100%" stopColor="#c9a96e" stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}