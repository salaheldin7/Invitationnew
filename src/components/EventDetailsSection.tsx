import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';

export default function EventDetailsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const events = [
    {
      title: 'Nikah Ceremony',
      subtitle: 'The Sacred Union',
      date: 'April 22, 2026',
      time: '4:00 PM',
      venue: 'Al-Nour Mosque',
      address: 'Nasr City, Cairo',
      arabicTitle: 'عقد القران',
    },
    {
      title: 'Wedding Reception',
      subtitle: 'Celebration & Dinner',
      date: 'April 22, 2026',
      time: '7:00 PM',
      venue: 'Al Raya Grand Ballroom',
      address: 'Fifth Settlement, Cairo',
      arabicTitle: 'حفل الزفاف',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #f5ede0 0%, #ede3d4 100%)' }}
    >
      <div className="max-w-md mx-auto relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-5xl text-stone-700 mb-2">The Details</h2>
          <p className="font-arabic text-sm text-stone-500" dir="rtl">
            تفاصيل الحفل
          </p>
          <div className="golden-divider w-40 mx-auto mt-4" />
        </motion.div>

        <div className="space-y-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 + 0.3, duration: 0.8 }}
            >
              <div
                className="rounded-sm px-8 py-8 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #faf8f3 0%, #f5ede0 100%)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(201, 169, 110, 0.25)',
                }}
              >
                {/* Corner decoration */}
                <div className="absolute top-3 left-3 opacity-25">
                  <SmallFloral />
                </div>
                <div className="absolute top-3 right-3 opacity-25" style={{ transform: 'scaleX(-1)' }}>
                  <SmallFloral />
                </div>

                {/* Arabic title */}
                <p className="font-arabic text-xl text-stone-500 text-center mb-1" dir="rtl">
                  {event.arabicTitle}
                </p>

                {/* Event title */}
                <h3 className="font-cinzel text-lg text-stone-700 text-center tracking-wider mb-1">
                  {event.title}
                </h3>
                <p className="font-serif-elegant italic text-stone-400 text-sm text-center mb-5">
                  {event.subtitle}
                </p>

                <div className="golden-divider w-32 mx-auto mb-5" />

                {/* Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar size={14} className="text-stone-400 flex-shrink-0" />
                    <span className="font-serif-elegant text-stone-600 text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={14} className="text-stone-400 flex-shrink-0" />
                    <span className="font-serif-elegant text-stone-600 text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={14} className="text-stone-400 flex-shrink-0" />
                    <div>
                      <p className="font-serif-elegant text-stone-600 text-sm">{event.venue}</p>
                      <p className="font-serif-elegant text-stone-400 text-xs">{event.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SmallFloral() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M5 5 Q15 5 20 15 Q15 5 5 20" stroke="#c9a96e" strokeWidth="0.8" fill="none" />
      <circle cx="5" cy="5" r="2" fill="#c9a96e" />
      <circle cx="15" cy="12" r="1" fill="#c9a96e" opacity="0.6" />
    </svg>
  );
}
