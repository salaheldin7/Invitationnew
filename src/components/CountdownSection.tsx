import { useEffect, useState, useRef } from 'react';
import type { CSSProperties } from 'react';
import { motion, useInView } from 'framer-motion';

const WEDDING_DATE = new Date('2026-08-21T19:00:00');

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft());
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const orbitItems = [
    {
      label: 'Days',
      value: time.days,
      style: {
        transform: 'translate(-50%, -50%) translate(calc(var(--orbit) * -1), calc(var(--orbit) * -1.4))',
      },
    },
    {
      label: 'Hours',
      value: time.hours,
      style: {
        transform: 'translate(-50%, -50%) translate(var(--orbit), calc(var(--orbit) * -1.4))',
      },
    },
    {
      label: 'Minutes',
      value: time.minutes,
      style: {
        transform: 'translate(-50%, -50%) translate(calc(var(--orbit) * -1), calc(var(--orbit) * 0.1))',
      },
    },
    {
      label: 'Seconds',
      value: time.seconds,
      style: {
        transform: 'translate(-50%, -50%) translate(var(--orbit), calc(var(--orbit) * 0.1))',
      },
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-3 sm:py-5 px-4 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #ede3d4 0%, #faf8f3 100%)' }}
    >
      {/* Subtle background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 400">
          {[0, 1, 2, 3, 4].map(i => (
            <line key={i} x1="0" y1={80 * i + 40} x2="800" y2={80 * i + 40} stroke="#c9a96e" strokeWidth="0.5" />
          ))}
        </svg>
      </div>

      <div className="max-w-lg mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-5xl sm:text-6xl text-stone-700 mb-1">Countdown</h2>
          <p className="font-arabic text-sm text-stone-500" dir="rtl">
            العد التنازلي
          </p>
          <p className="font-serif-elegant text-sm text-stone-400 tracking-widest uppercase">
            Until the most special day
          </p>
          <p className="font-arabic text-xs text-stone-400 mb-6" dir="rtl">
            حتى يومنا المميز
          </p>
        </motion.div>

        <div className="relative mx-auto mt-0 w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] [--orbit:6rem] sm:[--orbit:7.5rem]">
          <div className="absolute inset-0 z-10">
            {orbitItems.map((item, i) => (
              <CountdownOrbitItem
                key={item.label}
                label={item.label}
                value={item.value}
                style={item.style}
                inView={inView}
                delay={0.25 + i * 0.1}
              />
            ))}

            <motion.div
              className="col-start-2 row-start-2 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <img src="/logo/logo.png" alt="Monogram" className="w-[10rem] sm:w-[12rem] opacity-90" />
            </motion.div>
          </div>
        </div>

        {/* Bottom divider */}
        <motion.div
          className="golden-divider w-48 mx-auto mt-2"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        />
      </div>
    </section>
  );
}

function CountdownOrbitItem({
  label,
  value,
  style,
  inView,
  delay,
}: {
  label: string;
  value: number;
  style: CSSProperties;
  inView: boolean;
  delay: number;
}) {
  return (
    <div className="absolute left-1/2 top-1/2" style={style}>
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay, duration: 0.6 }}
      >
        <CountdownDigit value={pad(value)} className="text-2xl sm:text-3xl text-stone-600" />
        <span className="mt-2 font-cinzel text-[10px] sm:text-xs tracking-widest text-stone-400 uppercase">
          {label}
        </span>
      </motion.div>
    </div>
  );
}

function CountdownDigit({ value, className }: { value: string; className?: string }) {
  return (
    <motion.span
      key={value}
      className={`font-cinzel font-light block text-center ${className ?? 'text-4xl text-stone-800'}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {value}
    </motion.span>
  );
}
