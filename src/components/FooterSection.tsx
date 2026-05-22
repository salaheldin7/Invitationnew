import { motion } from 'framer-motion';

export default function FooterSection() {
  return (
    <footer
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #e8dcc8 0%, #d4c5a9 100%)' }}
    >
      {/* Floral border top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-stone-400 to-transparent opacity-30" />

      <div className="max-w-md mx-auto text-center relative z-10">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FooterCrest />
        </motion.div>

        <motion.h2
          className="font-script text-5xl text-stone-700 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Karim & Nada
        </motion.h2>

        <motion.p
          className="font-cinzel text-xs tracking-widest text-stone-500 uppercase mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          21/8/2026 · Cairo, Egypt
        </motion.p>

        <motion.div
          className="golden-divider w-32 mx-auto mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />

        <motion.p
          className="font-arabic text-2xl text-stone-600 mb-2"
          dir="rtl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          بارك الله لهما وبارك عليهما
        </motion.p>

        <motion.p
          className="font-serif-elegant italic text-stone-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          May Allah bless them both and bestow His blessings upon them
        </motion.p>
      </div>

      {/* Bottom floral */}
      <div className="absolute bottom-0 left-0 right-0 h-12 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 48" preserveAspectRatio="xMidYMid slice">
          <path d="M0 0 Q200 48 400 24 Q600 0 800 24" stroke="#8b6914" strokeWidth="1" fill="none" />
        </svg>
      </div>
    </footer>
  );
}

function FooterCrest() {
  return (
    <svg width="80" height="80" viewBox="0 0 90 90" fill="none" className="mx-auto">
      <path
        d="M45 8 L72 20 L72 50 C72 65 58 76 45 82 C32 76 18 65 18 50 L18 20 Z"
        fill="none"
        stroke="#b8935a"
        strokeWidth="1.2"
        opacity="0.6"
      />
      <circle cx="45" cy="44" r="18" fill="none" stroke="#b8935a" strokeWidth="0.8" opacity="0.4" />
      <text
        x="45" y="51"
        textAnchor="middle"
        fontFamily="'Great Vibes', cursive"
        fontSize="22"
        fill="#8b6914"
        opacity="0.7"
      >
        K N
      </text>
      {/* Stars */}
      <circle cx="45" cy="12" r="2" fill="#b8935a" opacity="0.5" />
      <circle cx="37" cy="14" r="1.5" fill="#b8935a" opacity="0.3" />
      <circle cx="53" cy="14" r="1.5" fill="#b8935a" opacity="0.3" />
    </svg>
  );
}
