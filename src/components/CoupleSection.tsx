import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CoupleSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #faf8f3 0%, #f5ede0 100%)' }}
    >
      <FloralDividerTop />

      <div className="max-w-md mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-cinzel text-xs tracking-widest text-stone-400 uppercase mb-4">
            Together in Love
          </p>
          <p className="font-arabic text-sm text-stone-500 mb-6" dir="rtl">
            معًا بالمحبة
          </p>

          {/* Couple names */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="font-script text-5xl text-stone-700">Karim</h3>
              <p className="font-serif-elegant italic text-stone-400 text-sm mt-1">Son of Ahmed & Fatima</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
              <span className="font-script text-2xl text-stone-400">&</span>
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="font-script text-5xl text-stone-700">NADA</h3>
              <p className="font-serif-elegant italic text-stone-400 text-sm mt-1">Daughter of Omar & Sara</p>
            </motion.div>
          </div>

          <motion.div
            className="golden-divider w-56 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          {/* Verse */}
          <motion.blockquote
            className="font-serif-elegant italic text-stone-500 text-base leading-relaxed mx-auto max-w-xs"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            "And He placed between you affection and mercy."
            <br />
            <span className="font-arabic text-lg not-italic text-stone-600 mt-2 block" dir="rtl">
              — القرآن الكريم، سورة الروم ٢١
            </span>
          </motion.blockquote>
        </motion.div>
      </div>

      <FloralDividerBottom />
    </section>
  );
}

function FloralDividerTop() {
  return (
    <div className="absolute top-0 left-0 right-0 h-16 opacity-20 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 800 64" preserveAspectRatio="xMidYMid slice">
        <path d="M0 32 Q100 10 200 32 Q300 54 400 32 Q500 10 600 32 Q700 54 800 32" stroke="#c9a96e" strokeWidth="1" fill="none" />
        {[100, 200, 300, 400, 500, 600, 700].map(x => (
          <circle key={x} cx={x} cy={x % 200 === 0 ? 32 : (x % 300 === 0 ? 54 : 10)} r="3" fill="#c9a96e" opacity="0.5" />
        ))}
      </svg>
    </div>
  );
}

function FloralDividerBottom() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 opacity-20 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 800 64" preserveAspectRatio="xMidYMid slice">
        <path d="M0 32 Q100 54 200 32 Q300 10 400 32 Q500 54 600 32 Q700 10 800 32" stroke="#c9a96e" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}
