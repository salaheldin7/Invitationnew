import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MAP_URL =
  'https://www.google.com/maps?q=The%20Westin%20Cairo%20Golf%20Resort%20%26%20Spa&output=embed';
const MAP_LINK =
  'https://www.google.com/maps/place/The+Westin+Cairo+Golf+Resort+%26+Spa,+Katameya+Dunes/@29.8744439,31.4281192,9.93z/data=!4m9!3m8!1s0x14582233bf32bfbf:0x31b9a8170d611f36!5m2!4m1!1i2!8m2!3d30.003339!4d31.5217992!16s%2Fg%2F12lt2kdth?entry=ttu';

export default function LocationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #1b0509 0%, #2a0a12 55%, #140507 100%)' }}
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-5xl lux-text mb-2">Location</h2>
          <p className="font-serif-elegant text-sm lux-text-soft tracking-widest uppercase">
            The Westin Cairo Golf Resort and Spa
          </p>
          <p className="font-serif-elegant text-xs lux-text-faint mt-2">
            Katameya Dunes, Cairo, Egypt
          </p>
          <p className="font-serif-elegant text-xs lux-text-soft mt-4 italic">
            Kindly note: Smoking is prohibited inside the hall.
          </p>
          <p className="font-arabic text-xs lux-text-soft mt-1" dir="rtl">
            يرجى العلم أن التدخين ممنوع داخل القاعة
          </p>
          <div className="golden-divider w-40 mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="rounded-sm overflow-hidden lux-panel">
            <iframe
              title="The Westin Cairo Golf Resort and Spa map"
              src={MAP_URL}
              className="w-full h-[22rem] sm:h-[26rem] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              className="font-serif-elegant text-xs tracking-widest uppercase text-[#e8d7c2] hover:text-[#f8f1e8]"
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
