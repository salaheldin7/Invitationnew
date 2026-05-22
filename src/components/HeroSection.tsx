import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: '#f5ede0',
        backgroundImage: 'url(/logo/backgroundsection2.PNG)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      }}
    >
      {/* Background art handled by the section image */}

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-8 py-16 max-w-lg mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src="/logo/Basmala.png"
          alt="Basmala"
          className="absolute inset-x-0 top-0 -translate-y-[140px] w-64 sm:w-80 mx-auto opacity-90 pointer-events-none"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        />

        {/* Gold divider */}
        <motion.div
          className="golden-divider w-48 mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />

          {/* Center logo */}
        <motion.div
          className="mb-8 mt-9"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.9, type: 'spring', damping: 14 }}
        >
          <SectionLogo />
        </motion.div>

          {/* Save the Date */}
          <motion.p
            className="font-script text-4xl text-stone-600 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Save the Date
          </motion.p>
          <motion.p
            className="font-arabic text-lg text-stone-500 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            dir="rtl"
          >
            احفظوا التاريخ
          </motion.p>

          {/* Names */}
          <motion.div
            className="my-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <h1 className="font-script text-5xl sm:text-6xl shimmer-text leading-tight px-2">
              Karim & Nada
            </h1>
          </motion.div>

          {/* Gold divider */}
          <motion.div
            className="golden-divider w-64 my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          />

          {/* Date row */}
          <motion.div
            className="flex w-full items-center justify-center gap-6 mt-1 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <span className="font-script text-3xl text-stone-600">August</span>
            <div className="text-center px-5 border-l border-r border-stone-300">
              <span className="font-cinzel text-4xl text-stone-800 font-light">21</span>
            </div>
            <span className="font-script text-3xl text-stone-600">2026</span>
          </motion.div>

          <motion.p
            className="font-cinzel text-xs tracking-[0.3em] text-stone-500 uppercase"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            7:00 PM
          </motion.p>

          {/* Location */}
          <motion.p
            className="font-serif-elegant text-sm tracking-widest uppercase text-stone-500 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <span className="block">The Westin Cairo Golf Resort and Spa</span>
            <span className="block font-arabic" dir="rtl">القاهرة · فندق ويستن كايرو</span>
          </motion.p>

          {/* Scroll cue */}
        <motion.div
          className="mt-4 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <span className="font-serif-elegant text-xs tracking-widest text-stone-400 uppercase">
            scroll to explore
          </span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-stone-400 to-transparent"
            animate={{ scaleY: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom floral border */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none">
        <BottomFloralBorder />
      </div>
    </section>
  );
}

function SectionLogo() {
  return (
    <img
      src="/logo/logo2.PNG"
      alt="Karim and Nada monogram"
      className="w-24 sm:w-28 opacity-70 mx-auto"
    />
  );
}

function FloralCornerTL() {
  return (
    <div className="absolute top-0 left-0 w-40 h-40 pointer-events-none opacity-30">
      <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
        <path d="M10 10 Q40 10 60 30 Q80 50 80 80" stroke="#c9a96e" strokeWidth="1" fill="none" />
        <path d="M10 10 Q10 40 30 60 Q50 80 80 80" stroke="#c9a96e" strokeWidth="1" fill="none" />
        <circle cx="10" cy="10" r="3" fill="#c9a96e" />
        <circle cx="80" cy="80" r="2" fill="#c9a96e" opacity="0.5" />
        {/* Leaf shapes */}
        <ellipse cx="35" cy="35" rx="8" ry="4" transform="rotate(-45 35 35)" fill="#c9a96e" opacity="0.4" />
        <ellipse cx="55" cy="55" rx="6" ry="3" transform="rotate(-45 55 55)" fill="#c9a96e" opacity="0.3" />
        <circle cx="25" cy="25" r="2" fill="#c9a96e" opacity="0.3" />
        <circle cx="45" cy="45" r="1.5" fill="#c9a96e" opacity="0.3" />
        <circle cx="65" cy="65" r="1.5" fill="#c9a96e" opacity="0.3" />
        {/* Flower */}
        <circle cx="80" cy="80" r="4" fill="none" stroke="#c9a96e" strokeWidth="0.8" opacity="0.4" />
        <circle cx="80" cy="73" r="3" fill="#c9a96e" opacity="0.2" />
        <circle cx="87" cy="80" r="3" fill="#c9a96e" opacity="0.2" />
        <circle cx="80" cy="87" r="3" fill="#c9a96e" opacity="0.2" />
        <circle cx="73" cy="80" r="3" fill="#c9a96e" opacity="0.2" />
      </svg>
    </div>
  );
}

function FloralCornerTR() {
  return (
    <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none opacity-30" style={{ transform: 'scaleX(-1)' }}>
      <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
        <path d="M10 10 Q40 10 60 30 Q80 50 80 80" stroke="#c9a96e" strokeWidth="1" fill="none" />
        <path d="M10 10 Q10 40 30 60 Q50 80 80 80" stroke="#c9a96e" strokeWidth="1" fill="none" />
        <circle cx="10" cy="10" r="3" fill="#c9a96e" />
        <ellipse cx="35" cy="35" rx="8" ry="4" transform="rotate(-45 35 35)" fill="#c9a96e" opacity="0.4" />
        <ellipse cx="55" cy="55" rx="6" ry="3" transform="rotate(-45 55 55)" fill="#c9a96e" opacity="0.3" />
        <circle cx="25" cy="25" r="2" fill="#c9a96e" opacity="0.3" />
        <circle cx="45" cy="45" r="1.5" fill="#c9a96e" opacity="0.3" />
      </svg>
    </div>
  );
}

function FloralCornerBL() {
  return (
    <div className="absolute bottom-0 left-0 w-40 h-40 pointer-events-none opacity-30" style={{ transform: 'scaleY(-1)' }}>
      <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
        <path d="M10 10 Q40 10 60 30 Q80 50 80 80" stroke="#c9a96e" strokeWidth="1" fill="none" />
        <path d="M10 10 Q10 40 30 60 Q50 80 80 80" stroke="#c9a96e" strokeWidth="1" fill="none" />
        <circle cx="10" cy="10" r="3" fill="#c9a96e" />
        <ellipse cx="35" cy="35" rx="8" ry="4" transform="rotate(-45 35 35)" fill="#c9a96e" opacity="0.4" />
      </svg>
    </div>
  );
}

function FloralCornerBR() {
  return (
    <div className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none opacity-30" style={{ transform: 'scale(-1, -1)' }}>
      <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
        <path d="M10 10 Q40 10 60 30 Q80 50 80 80" stroke="#c9a96e" strokeWidth="1" fill="none" />
        <path d="M10 10 Q10 40 30 60 Q50 80 80 80" stroke="#c9a96e" strokeWidth="1" fill="none" />
        <circle cx="10" cy="10" r="3" fill="#c9a96e" />
        <ellipse cx="35" cy="35" rx="8" ry="4" transform="rotate(-45 35 35)" fill="#c9a96e" opacity="0.4" />
      </svg>
    </div>
  );
}

function LargeFloralWatermark() {
  return (
    <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
      <circle cx="200" cy="200" r="120" stroke="#c9a96e" strokeWidth="1" />
      <circle cx="200" cy="200" r="100" stroke="#c9a96e" strokeWidth="0.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <ellipse
          key={angle}
          cx={200 + 120 * Math.cos((angle * Math.PI) / 180)}
          cy={200 + 120 * Math.sin((angle * Math.PI) / 180)}
          rx="20"
          ry="10"
          transform={`rotate(${angle} ${200 + 120 * Math.cos((angle * Math.PI) / 180)} ${200 + 120 * Math.sin((angle * Math.PI) / 180)})`}
          fill="#c9a96e"
        />
      ))}
      <text x="200" y="210" textAnchor="middle" fontFamily="'Great Vibes', cursive" fontSize="60" fill="#c9a96e">
        K & N
      </text>
    </svg>
  );
}

function BottomFloralBorder() {
  return (
    <svg className="w-full h-full" viewBox="0 0 800 96" preserveAspectRatio="xMidYMid slice" fill="none">
      <path
        d="M0 96 Q100 60 200 80 Q300 96 400 70 Q500 44 600 70 Q700 96 800 80 L800 96 Z"
        fill="url(#bottomGrad)"
        opacity="0.15"
      />
      {/* Floral silhouettes */}
      {[80, 200, 320, 480, 600, 720].map((x, i) => (
        <g key={i} transform={`translate(${x}, 50)`}>
          <circle cx="0" cy="-10" r="8" fill="#c9a96e" opacity="0.2" />
          <circle cx="-8" cy="0" r="6" fill="#c9a96e" opacity="0.15" />
          <circle cx="8" cy="0" r="6" fill="#c9a96e" opacity="0.15" />
          <rect x="-1" y="0" width="2" height="20" fill="#c9a96e" opacity="0.2" />
          <ellipse cx="-6" cy="12" rx="6" ry="3" transform="rotate(-30 -6 12)" fill="#c9a96e" opacity="0.15" />
          <ellipse cx="6" cy="12" rx="6" ry="3" transform="rotate(30 6 12)" fill="#c9a96e" opacity="0.15" />
        </g>
      ))}
      <defs>
        <linearGradient id="bottomGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c9a96e" stopOpacity="0" />
          <stop offset="100%" stopColor="#c9a96e" stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
